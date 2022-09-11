import React, { FC } from "react";
import type { RootStackScreenProps } from "../../navigation/navigation-types";
import LoginModule from "./LoginModule";

const LoginScreen: FC<RootStackScreenProps<"Login">> = () => {
  return <LoginModule />;
};

export default LoginScreen;
