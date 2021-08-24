import { Link } from "@react-navigation/native";
import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Image, SocialIcon, Text } from "react-native-elements";
import useSignInGoogle from "../../../hooks/useSignInGoogle";
import LoginForm from "./LoginForm";

const Login = () => {
  const [signInGoogle, loading] = useSignInGoogle();

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image
        source={require("../../../../assets/images/logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <LoginForm />
      <Link to="/Register" style={styles.link}>
        <Text style={styles.text}>New to Signal?</Text>
      </Link>
      <SocialIcon
        onPress={signInGoogle}
        disabled={loading}
        button
        light
        title="Sign In With Google"
        type="google"
        style={styles.provider}
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
