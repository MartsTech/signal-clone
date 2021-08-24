import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// @ts-ignore
import ToastManager from "toastify-react-native";
import AuthProvider from "./src/modules/auth/AuthProvider";
import Navigation from "./src/modules/navigation/RootNavigation";
import { store, StoreContext } from "./src/stores/store";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="light" />
          <ToastManager />
        </SafeAreaProvider>
      </AuthProvider>
    </StoreContext.Provider>
  );
};

export default App;
