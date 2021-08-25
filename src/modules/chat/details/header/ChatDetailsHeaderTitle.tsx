import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { useStore } from "../../../../stores/store";

const ChatDetailsHeaderTitle = () => {
  const { selectedChat } = useStore().chatStore;

  if (!selectedChat) {
    return null;
  }

  const { name, photoURL } = selectedChat;

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={photoURL ? { uri: photoURL } : require("../../../../../assets/images/avatar.png")}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default observer(ChatDetailsHeaderTitle);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    marginLeft: 10,
    fontWeight: "700",
    fontSize: 16,
  },
});
