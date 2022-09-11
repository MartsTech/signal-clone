import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../auth/login/LoginScreen";
import RegisterScreen from "../auth/register/RegisterScreen";
import ChatCreateScreen from "../chat/create/ChatCreateScreen";
import ChatDetailsScreen from "../chat/details/ChatDetailsScreen";
import HomeScreen from "../home/HomeScreen";
import type { RootStackParamList } from "./navigation-types";

const NavigationModule = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {true ? (
          <RootStack.Group>
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen name="Register" component={RegisterScreen} />
          </RootStack.Group>
        ) : (
          <RootStack.Group>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen
              name="ChatDetails"
              component={ChatDetailsScreen}
            />
            <RootStack.Screen name="ChatCreate" component={ChatCreateScreen} />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationModule;
