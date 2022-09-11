import React, { FC } from "react";
import type { RootStackScreenProps } from "../navigation/navigation-types";
import HomeModule from "./HomeModule";

const HomeScreen: FC<RootStackScreenProps<"Home">> = () => {
  return <HomeModule />;
};

export default HomeScreen;
