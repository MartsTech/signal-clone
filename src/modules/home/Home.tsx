import React from "react";
import { View, Text } from "react-native";
import { useStore } from "../../stores/store";

const Home = () => {
  const { signOut } = useStore().userStore;

  return (
    <View>
      <Text onPress={signOut}>Home</Text>
    </View>
  );
};

export default Home;
