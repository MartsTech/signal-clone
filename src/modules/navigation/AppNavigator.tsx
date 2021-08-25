import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { globalScreenOptions } from "../../options/globalScreenOptions";
import ChatCreateScreen from "../../screens/ChatCreateScreen";
import ChatDetailsScreen from "../../screens/ChatDetailsScreen";
import HomeScreen from "../../screens/HomeScreen";
import { AppStackParamList } from "../../types/navigation";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={globalScreenOptions}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Signal",
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: { color: "black" },
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="ChatDetails"
        component={ChatDetailsScreen}
        options={{ headerTitleAlign: "left", headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="ChatCreate"
        component={ChatCreateScreen}
        options={{ title: "Add a new chat", headerBackTitle: "Chats" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
