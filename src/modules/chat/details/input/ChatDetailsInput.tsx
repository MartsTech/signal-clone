import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useStore } from "../../../../stores/store";

const ChatDetailsInput = () => {
  const { sendMessage } = useStore().messageStore;
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    Keyboard.dismiss();

    if (input === "") {
      return;
    }
    const success = await sendMessage(input);

    if (success) {
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Signal Message"
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleSendMessage}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={handleSendMessage}>
        <Ionicons name="send" size={24} color="#288cdc" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatDetailsInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 16,
  },
  input: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 16,
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "gray",
    borderRadius: 30,
  },
});
