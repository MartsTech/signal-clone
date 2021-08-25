import firebase from "firebase/app";
import { makeAutoObservable, runInAction } from "mobx";
// @ts-ignore
import { Toast } from "toastify-react-native";
import { db } from "../config/firebase";
import { Message } from "../types/messageStore";
import { store } from "./store";

class MessageStore {
  messagesRegistery = new Map<string, Message>();
  messagesLimit = 10;
  hasMore = false;
  lastMessageTimestamp: firebase.firestore.FieldValue | null = null;
  sending = false;
  unsubscribeMessages?: () => void;

  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.messagesRegistery.clear();
    this.messagesLimit = 10;
    this.hasMore = false;
    this.lastMessageTimestamp = null;
    this.sending = false;

    this.unsubscribeMessages && this.unsubscribeMessages();
    this.unsubscribeMessages = undefined;
  };

  get messages() {
    return Array.from(this.messagesRegistery.values())
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
      .reverse();
  }

  loadMessages = (id: string) => {
    this.messagesRegistery.clear();

    if (this.unsubscribeMessages) {
      this.unsubscribeMessages();
    }

    this.unsubscribeMessages = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .limit(this.messagesLimit)
      .onSnapshot((snapshot) => {
        this.setMessagesFromSnapshot(snapshot);
      });
  };

  loadMore = async () => {
    const { selectedChat } = store.chatStore;

    if (!selectedChat) {
      Toast.error("An error occurred. Please try again.");
      return;
    }

    const snapshot = await db
      .collection("chats")
      .doc(selectedChat.id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .startAfter(this.lastMessageTimestamp)
      .limit(this.messagesLimit)
      .get();

    this.setMessagesFromSnapshot(snapshot);
  };

  private setMessagesFromSnapshot = (
    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
  ) => {
    if (snapshot.size < this.messagesLimit) {
      this.hasMore = false;
    } else {
      this.hasMore = true;
    }

    snapshot.docs.forEach((doc) => {
      if (!this.lastMessageTimestamp) {
        this.lastMessageTimestamp = doc.data().timestamp;
      } else {
        // @ts-ignore
        const lastTimestamp = this.lastMessageTimestamp?.toDate()?.getTime();
        const currentTimestamp = doc.data().timestamp?.toDate()?.getTime();

        if (currentTimestamp < lastTimestamp) {
          this.lastMessageTimestamp = doc.data().timestamp;
        }
      }

      const message = {
        id: doc.id,
        ...doc.data(),
        timestamp: new Date(doc.data().timestamp?.toDate()),
      } as Message;

      this.messagesRegistery.set(message.id, message);
    });
  };

  sendMessage = async (message: string) => {
    const user = store.userStore.user;
    const chat = store.chatStore.selectedChat;

    if (this.sending) {
      return false;
    }

    if (!user || !chat) {
      Toast.error("An error occurred. Please try again.");
      return false;
    }

    this.sending = true;

    const chatRef = db.collection("chats").doc(chat.id);

    await chatRef.collection("messages").add({
      message,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    await chatRef.set(
      {
        photoURL: user.photoURL,
        lastMessage: message,
      },
      { merge: true },
    );

    runInAction(() => {
      this.sending = false;
    });

    return true;
  };
}

export default MessageStore;
