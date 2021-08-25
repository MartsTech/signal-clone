import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { Message } from "../../../../types/messageStore";

interface ChatDetailsMessagesItemProps {
  message: Message;
  sender: boolean;
}

const ChatDetailsMessagesItem: React.FC<ChatDetailsMessagesItemProps> = ({ message, sender }) => {
  const { photoURL, displayName } = message;

  return (
    <View style={styles.container}>
      {!sender && <Text style={styles.name}>{displayName}</Text>}
      <View style={[styles.message, sender ? styles.sender : styles.reciever]}>
        <Avatar
          containerStyle={[styles.avatar, sender ? { right: -40 } : { left: -40 }]}
          rounded
          size={36}
          source={photoURL ? { uri: photoURL } : require("../../../../../assets/images/avatar.png")}
        />
        <Text style={sender ? styles.senderText : styles.recieverText}>{message.message}</Text>
      </View>
    </View>
  );
};

export default ChatDetailsMessagesItem;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  name: {
    top: 0,
    left: 5,
    fontSize: 10,
    color: "black",
  },
  avatar: {
    position: "absolute",
    top: 8,
  },
  message: {
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  sender: {
    backgroundColor: "#288cdc",
    alignSelf: "flex-end",
    marginRight: 46,
  },
  reciever: {
    backgroundColor: "#ECECEC",
    alignSelf: "flex-start",
    marginLeft: 46,
  },
  senderText: {
    color: "white",
    fontWeight: "500",
  },
  recieverText: {
    color: "black",
    fontWeight: "500",
  },
});
