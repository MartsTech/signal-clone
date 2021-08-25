import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  ChatDetails: undefined;
  ChatCreate: undefined;
};

export type AppNavigationProp = NativeStackNavigationProp<AppStackParamList>;
