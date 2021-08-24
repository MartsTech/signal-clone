import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

interface HomeChatsItemProps {
  id: string;
  chatName: string;
  enterChat: () => void;
}

const HomeChatsItem: React.FC<HomeChatsItemProps> = () => {
  return (
    <ListItem>
      <Avatar rounded title="A" source={require("../../../../assets/images/avatar.png")} />
      <ListItem.Content>
        <ListItem.Title style={styles.title}>Demo Chat</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a demo subtitle
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
