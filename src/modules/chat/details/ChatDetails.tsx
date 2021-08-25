import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import ChatDetailsInput from "./input/ChatDetailsInput";
import ChatDetailsMessages from "./messages/ChatDetailsMessages";

const ChatDetails = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={180}
    >
      <ChatDetailsMessages />
      <ChatDetailsInput />
    </KeyboardAvoidingView>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
