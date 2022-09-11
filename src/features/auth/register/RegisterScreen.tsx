import React, { FC } from "react";
import type { RootStackScreenProps } from "../../navigation/navigation-types";
import RegisterModule from "./RegisterModule";

const RegisterScreen: FC<RootStackScreenProps<"Register">> = () => {
  return <RegisterModule />;
};

export default RegisterScreen;
