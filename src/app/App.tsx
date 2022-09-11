import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as StoreProvider } from "react-redux";
import AppProvider from "../features/app/AppProvider";
import AuthProvider from "../features/auth/AuthProvider";
import NavigationModule from "../features/navigation/NavigationModule";
import ThemeProvider from "../features/theme/ThemeProvider";
import { store } from "./store";

// Firebase Dependency
LogBox.ignoreLogs(["AsyncStorage has been extracted"]);

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppProvider>
        <AuthProvider>
          <ThemeProvider>
            <SafeAreaProvider>
              <NavigationModule />
            </SafeAreaProvider>
          </ThemeProvider>
        </AuthProvider>
      </AppProvider>
    </StoreProvider>
  );
};

export default App;
