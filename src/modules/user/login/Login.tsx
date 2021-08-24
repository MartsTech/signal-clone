import { Link } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Image, SocialIcon, Text } from "react-native-elements";
import useSignInGoogle from "../../../hooks/useSignInGoogle";
import LoginForm from "./LoginForm";

const Login = () => {
  const [signInGoogle, loading] = useSignInGoogle();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image style={styles.image} source={require("../../../../assets/images/logo.png")} />
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

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  image: { width: 200, height: 200 },
  text: {
    color: "gray",
    fontSize: 16,
  },
  link: {
    textDecorationLine: "underline",
    marginTop: 10,
  },
  provider: {
    width: 200,
    height: 50,
    borderRadius: 0,
  },
});
