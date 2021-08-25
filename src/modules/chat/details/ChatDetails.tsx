import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import ChatDetailsInput from "./input/ChatDetailsInput";
import ChatDetailsMessages from "./messages/ChatDetailsMessages";

const ChatDetails = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={180}
      >
        <ChatDetailsMessages />
        <ChatDetailsInput />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
