import React, { FC, useLayoutEffect } from "react";
import type { RootStackScreenProps } from "../../navigation/navigation-types";
import RegisterModule from "./RegisterModule";

const RegisterScreen: FC<RootStackScreenProps<"Register">> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  return <RegisterModule />;
};

export default RegisterScreen;
