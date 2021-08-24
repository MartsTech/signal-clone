import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// @ts-ignore
import ToastManager from "toastify-react-native";
import Navigation from "./src/navigation/RootNavigation";

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="light" />
      <ToastManager />
    </SafeAreaProvider>
  );
};

export default App;
