import { useTheme } from "@rneui/themed";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingModule = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export default LoadingModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
