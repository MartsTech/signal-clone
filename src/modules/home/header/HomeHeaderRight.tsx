import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AppNavigationProp } from "../../../types/navigation";

const HomeHeaderRight = () => {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5}>
        <AntDesign name="camerao" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ChatCreate")} activeOpacity={0.5}>
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
