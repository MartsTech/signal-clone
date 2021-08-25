import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { useStore } from "../../../stores/store";
import { Chat } from "../../../types/chat";
import { AppNavigationProp } from "../../../types/navigation";

interface HomeChatsItemProps {
  chat: Chat;
}

const HomeChatsItem: React.FC<HomeChatsItemProps> = ({ chat }) => {
  const { id, name, photoURL, lastMessage } = chat;
  const { selectChat } = useStore().chatStore;
  const navigation = useNavigation<AppNavigationProp>();

  const handleSelect = (id: string) => {
    selectChat(id);
    navigation.navigate("ChatDetails");
  };

  return (
    <ListItem bottomDivider onPress={() => handleSelect(id)}>
      <Avatar
        rounded
        source={photoURL ? { uri: photoURL } : require("../../../../assets/images/avatar.png")}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>{name}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {lastMessage}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default HomeChatsItem;

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
  },
});
