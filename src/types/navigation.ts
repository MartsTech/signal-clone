import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  ChatsCreate: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>;
