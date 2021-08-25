import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const ChatDetailsHeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default ChatDetailsHeaderLeft;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});
