import firebase from "firebase/app";
import { makeAutoObservable, reaction } from "mobx";
// @ts-ignore
import { Toast } from "toastify-react-native";
import { db } from "../config/firebase";
import { Chat } from "../types/chat";
import { store } from "./store";

class ChatStore {
  chatsRegistery = new Map<string, Chat>();
  selectedChat: Chat | null = null;
  chatsLimit = 10;
  hasMore = false;
  lastChatTimestamp: firebase.firestore.FieldValue | null = null;
  unsubscribeChats?: () => void;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => this.selectedChat,
      (chat) => {
        if (chat) {
          store.messageStore.loadMessages(chat.id);
        }
      },
    );
  }

  reset = () => {
    this.chatsRegistery.clear();
    this.selectedChat = null;
    this.chatsLimit = 10;
    this.hasMore = false;
    this.lastChatTimestamp = null;

    this.unsubscribeChats && this.unsubscribeChats();
    this.unsubscribeChats = undefined;
  };

  get chats() {
    return Array.from(this.chatsRegistery.values()).sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
    );
  }

  loadChats = () => {
    if (this.chatsRegistery.size !== 0) {
      return;
    }

    this.unsubscribeChats = db
      .collection("chats")
      .orderBy("timestamp", "desc")
      .limit(this.chatsLimit)
      .onSnapshot((snapshot) => {
        this.setChatsFromSnapshot(snapshot);
      });
  };

  loadMore = async () => {
    if (!this.hasMore) {
      return;
    }

    const snapshot = await db
      .collection("chats")
      .orderBy("timestamp", "desc")
      .startAfter(this.lastChatTimestamp)
      .limit(this.chatsLimit)
      .get();

    this.setChatsFromSnapshot(snapshot);
  };

  private setChatsFromSnapshot = (
    snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
  ) => {
    if (snapshot.size < this.chatsLimit) {
      this.hasMore = false;
    } else {
      this.hasMore = true;
    }

    snapshot.docs.forEach((doc) => {
      if (!this.lastChatTimestamp) {
        this.lastChatTimestamp = doc.data().timestamp;
      } else {
        // @ts-ignore
        const lastTimestamp = this.lastChatTimestamp?.toDate()?.getTime();
        const currentTimestamp = doc.data().timestamp?.toDate()?.getTime();

        if (currentTimestamp < lastTimestamp) {
          this.lastChatTimestamp = doc.data().timestamp;
        }
      }

      const chat = {
        id: doc.id,
        ...doc.data(),
        timestamp: new Date(doc.data().timestamp?.toDate()),
      } as Chat;

      this.chatsRegistery.set(chat.id, chat);
    });
  };

  selectChat = (id: string) => {
    if (this.chatsRegistery.has(id)) {
      this.selectedChat = this.chatsRegistery.get(id) as Chat;
    } else {
      this.selectedChat = null;
    }
  };

  createChat = async (name: string) => {
    const chatExists = await this.chatExists(name);

    if (chatExists) {
      Toast.error("Chat already exists.");
      return false;
    }

    await db.collection("chats").add({
      name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    return true;
  };

  chatExists = async (name: string) => {
    const exists = !!this.chats.find((chat) => chat.name === name);

    if (exists) {
      return true;
    }

    const chatSnapshot = await db.collection("chats").where("name", "==", name).get();

    if (!chatSnapshot.empty) {
      return true;
    }

    return false;
  };
}

export default ChatStore;
