import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { globalScreenOptions } from "../../options/globalScreenOptions";
import ChatsCreateScreen from "../../screens/ChatsCreateScreen";
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
      <Stack.Screen name="ChatsCreate" component={ChatsCreateScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
