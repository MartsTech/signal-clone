import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

const ChatDetailsHeaderRight = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome name="video-camera" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="call" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatDetailsHeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
  },
});
