import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeChats from "./chats/HomeChats";

const Home = () => {
  return (
    <SafeAreaView>
      <HomeChats />
    </SafeAreaView>
  );
};

export default Home;
