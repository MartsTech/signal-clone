import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import { RootStackParamList } from "../../types/navigation";

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

const Stack = createNativeStackNavigator<RootStackParamList>();

const globalScreenOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: "#288cdc" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
