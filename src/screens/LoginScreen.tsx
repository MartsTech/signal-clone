import React, { useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "src/types/navigation";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Login">;

type LoginScreenProps = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          textContentType="emailAddress"
          autoFocus
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          textContentType="password"
          autoFocus
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button title="Login" onPress={signIn} containerStyle={styles.button} />
      <Button title="Register" type="outline" containerStyle={styles.button} />
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
