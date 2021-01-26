import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamList } from "../types";

type Props = StackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default RegisterScreen;
