import React from "react";
import { Provider as StoreProvider } from "react-redux";
import NavigationModule from "../features/navigation/NavigationModule";
import { store } from "./store";

const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationModule />
    </StoreProvider>
  );
};

export default App;
