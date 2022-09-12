import { Link } from "@react-navigation/native";
import { Image, SocialIcon, Text } from "@rneui/themed";
import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { useAuthSignInWithGoogleProvider } from "../auth-hooks";
import LoginForm from "./LoginForm";

const LoginModule = () => {
  const [signInGoogle, loading] = useAuthSignInWithGoogleProvider();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        style={styles.image}
        source={require("../../../../assets/logo.png")}
      />
      <LoginForm />
      <Link style={styles.link} to="/Register">
        <Text style={styles.text}>New to Signal?</Text>
      </Link>
      <SocialIcon
        style={styles.provider}
        title="Sign In With Google"
        type="google"
        button
        light
        onPress={signInGoogle}
        disabled={loading}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  image: { width: 200, height: 200 },
  link: {
    textDecorationLine: "underline",
    marginTop: 10,
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  provider: {
    width: 200,
    height: 50,
    borderRadius: 0,
  },
});
