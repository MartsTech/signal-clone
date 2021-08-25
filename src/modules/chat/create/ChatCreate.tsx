import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useStore } from "../../../stores/store";

const ChatCreate = () => {
  const { createChat } = useStore().chatStore;
  const navigation = useNavigation();
  const [input, setInput] = useState("");

  const handleCreateChat = async () => {
    if (input === "") {
      return;
    }
    const success = await createChat(input);

    if (success) {
      setInput("");
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Chat Name"
        placeholder="Enter a chat name"
        leftIcon={<Icon name="wechat" size={24} color="black" />}
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={handleCreateChat}
      />
      <Button disabled={!input} title="Create new Chat" onPress={handleCreateChat} />
    </View>
  );
};

export default ChatCreate;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
