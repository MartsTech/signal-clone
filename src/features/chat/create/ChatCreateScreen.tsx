import React, { FC } from "react";
import type { RootStackScreenProps } from "../../navigation/navigation-types";
import ChatCreateModule from "./ChatCreateModule";

const ChatCreateScreen: FC<RootStackScreenProps<"ChatCreate">> = () => {
  return <ChatCreateModule />;
};

export default ChatCreateScreen;
