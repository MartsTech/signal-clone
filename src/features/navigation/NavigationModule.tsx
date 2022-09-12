import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@rneui/themed";
import React from "react";
import { useAppSelector } from "../../app/store/store-hooks";
import { selectAuthLogged } from "../auth/auth-state";
import LoginScreen from "../auth/login/LoginScreen";
import RegisterScreen from "../auth/register/RegisterScreen";
import ChatCreateScreen from "../chat/create/ChatCreateScreen";
import ChatDetailsScreen from "../chat/details/ChatDetailsScreen";
import HomeScreen from "../home/HomeScreen";
import type { RootStackParamList } from "./navigation-types";

const NavigationModule = () => {
  const authLogged = useAppSelector(selectAuthLogged);
  const { theme } = useTheme();

  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTitleStyle: { color: theme.colors.white },
          headerTintColor: theme.colors.white,
        }}
      >
        {!authLogged ? (
          <RootStack.Group
            screenOptions={{
              animationTypeForReplace: authLogged ? "pop" : "push",
            }}
          >
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
