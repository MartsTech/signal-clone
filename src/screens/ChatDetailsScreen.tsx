import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import React, { useEffect, useLayoutEffect } from "react";
import ChatDetails from "../modules/chat/details/ChatDetails";
import ChatDetailsHeaderLeft from "../modules/chat/details/header/ChatDetailsHeaderLeft";
import ChatDetailsHeaderRight from "../modules/chat/details/header/ChatDetailsHeaderRight";
import ChatDetailsHeaderTitle from "../modules/chat/details/header/ChatDetailsHeaderTitle";
import { useStore } from "../stores/store";
import { AppStackParamList } from "../types/navigation";

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, "ChatDetails">;

const ChatDetailsScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { selectedChat } = useStore().chatStore;

  useEffect(() => {
    if (!selectedChat) {
      navigation.goBack();
    }
  }, [selectedChat, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerTitle: () => <ChatDetailsHeaderTitle />,
      headerLeft: () => <ChatDetailsHeaderLeft />,
      headerRight: () => <ChatDetailsHeaderRight />,
    });
  }, [navigation]);

  return <ChatDetails />;
};

export default observer(ChatDetailsScreen);
