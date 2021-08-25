import { observer } from "mobx-react-lite";
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { useStore } from "../../../../stores/store";
import ChatDetailsMessagesItem from "./ChatDetailsMessagesItem";

const ChatDetailsMessages = () => {
  const { messages, messagesLimit, hasMore, loadMore } = useStore().messageStore;
  const { user } = useStore().userStore;

  return (
    <FlatList
      style={styles.container}
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ChatDetailsMessagesItem message={item} sender={item.email === user?.email} />
      )}
      inverted={true}
      initialNumToRender={messagesLimit}
      onEndReachedThreshold={0.5}
      onEndReached={loadMore}
      ListFooterComponent={() =>
        hasMore ? <ActivityIndicator size="large" color="#288cdc" /> : null
      }
    />
  );
};

export default observer(ChatDetailsMessages);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
