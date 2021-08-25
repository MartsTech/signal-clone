import { StatusBar } from "expo-status-bar";
import React from "react";
// @ts-ignore
import ToastManager from "toastify-react-native";
import AuthProvider from "./src/modules/auth/AuthProvider";
import Navigation from "./src/modules/navigation/RootNavigation";
import { store, StoreContext } from "./src/stores/store";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <AuthProvider>
        <Navigation />
        <StatusBar style="light" />
        <ToastManager position="bottom" />
      </AuthProvider>
    </StoreContext.Provider>
  );
};

export default App;
