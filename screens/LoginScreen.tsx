import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Image, Input, Button } from "react-native-elements";
import { auth } from "../firebase";
import { RootStackParamList } from "../types";

type Props = StackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          textContentType="emailAddress"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Register")}
        type="outline"
        title="Register"
      />

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
