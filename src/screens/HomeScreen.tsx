import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import HomeHeaderLeft from "../modules/home/header/HomeHeaderLeft";
import HomeHeaderRight from "../modules/home/header/HomeHeaderRight";
import Home from "../modules/home/Home";
import { AppStackParamList } from "../types/navigation";

type HomeScreenProps = NativeStackScreenProps<AppStackParamList, "Home">;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HomeHeaderLeft />,
      headerRight: () => <HomeHeaderRight />,
    });
  }, [navigation]);

  return <Home />;
};

export default HomeScreen;
