import React, { FC } from "react";
import type { RootStackScreenProps } from "../../navigation/navigation-types";
import ChatDetailsModule from "./ChatDetailsModule";

const ChatDetailsScreen: FC<RootStackScreenProps<"ChatDetails">> = () => {
  return <ChatDetailsModule />;
};

export default ChatDetailsScreen;
