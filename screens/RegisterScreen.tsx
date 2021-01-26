import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { RootStackParamList } from "../types";
import { auth } from "../firebase";

type Props = StackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [photoUrl, setPhotoUrl] = useState<string>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Login",
    });
  }, [navigation]);

  const register = () => {
    if (name && email && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            user.updateProfile({
              displayName: name,
              photoURL:
                photoUrl ||
                "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
            });
          }
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Create a Signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          textContentType="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
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
        <Input
          placeholder="PhotoUrl (optional)"
          textContentType="none"
          value={photoUrl}
          onChangeText={(text) => setPhotoUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title="Register"
      />

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
