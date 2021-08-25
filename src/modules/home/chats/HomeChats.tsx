import { observer } from "mobx-react-lite";
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useStore } from "../../../stores/store";
import HomeChatsItem from "./HomeChatsItem";

const HomeChats = () => {
  const { chats, chatsLimit, hasMore, loadMore } = useStore().chatStore;

  return (
    <FlatList
      style={styles.container}
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <HomeChatsItem chat={item} />}
      initialNumToRender={chatsLimit}
      onEndReachedThreshold={0.5}
      onEndReached={loadMore}
      ListFooterComponent={() =>
        hasMore ? <ActivityIndicator size="large" color="#288cdc" /> : null
      }
    />
  );
};

export default observer(HomeChats);

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
