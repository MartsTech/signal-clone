import { Link } from "@react-navigation/native";
import { SocialIcon, Text } from "@rneui/themed";
import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { useAuthSignInWithGoogleProvider } from "../auth-hooks";
import RegisterForm from "./RegisterForm";

const RegisterModule = () => {
  const [signInGoogle, loading] = useAuthSignInWithGoogleProvider();

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text h3 style={styles.title}>
        Create a Signal account
      </Text>
      <RegisterForm />
      <Link to="/Login" style={styles.link}>
        <Text style={styles.text}>Already registered?</Text>
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

export default RegisterModule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    marginBottom: 50,
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
