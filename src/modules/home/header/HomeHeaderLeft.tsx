import { observer } from "mobx-react-lite";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";
import { useStore } from "../../../stores/store";

const HomeHeaderLeft = () => {
  const { user, signOut } = useStore().userStore;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signOut} activeOpacity={0.5}>
        <Avatar
          rounded
          source={
            user?.photoURL
              ? { uri: user.photoURL }
              : require("../../../../assets/images/avatar.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default observer(HomeHeaderLeft);

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});
