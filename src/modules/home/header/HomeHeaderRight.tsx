import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "src/types/navigation";

const HomeHeaderRight = () => {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5}>
        <AntDesign name="camerao" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ChatsCreate")} activeOpacity={0.5}>
        <SimpleLineIcons name="pencil" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeaderRight;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 70,
  },
});
