import { ThemeProvider as ElementsProvider } from "@rneui/themed";
import React from "react";
import { defaultTheme } from "./theme-config";

interface Props {
  children?: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <ElementsProvider theme={defaultTheme}>{children}</ElementsProvider>;
};

export default ThemeProvider;
