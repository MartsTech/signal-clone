import { useTheme } from "@rneui/themed";
import React, { FC, useLayoutEffect } from "react";
import type { RootStackScreenProps } from "../navigation/navigation-types";
import HomeHeaderLeft from "./HomeHeaderLeft";
import HomeHeaderRight from "./HomeHeaderRight";
import HomeModule from "./HomeModule";

const HomeScreen: FC<RootStackScreenProps<"Home">> = ({ navigation }) => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: theme.colors.white },
      headerTitleStyle: { color: theme.colors.black },
      headerTintColor: theme.colors.black,
      headerLeft: () => <HomeHeaderLeft />,
      headerRight: () => <HomeHeaderRight />,
    });
  }, [navigation, theme.colors.white, theme.colors.black]);

  return <HomeModule />;
};

export default HomeScreen;
