import { Avatar } from "@rneui/themed";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../app/store/store-hooks";
import { selectAuthUser } from "../auth/auth-state";
import { authSignOut } from "../auth/auth-thunk";

const HomeHeaderLeft = () => {
  const authUser = useAppSelector(selectAuthUser);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(authSignOut())}
        activeOpacity={0.5}
      >
        <Avatar
          rounded
          source={
            authUser?.photoURL
              ? { uri: authUser.photoURL }
              : require("../../../assets/avatar.png")
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeaderLeft;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
});
