import { Button, Input } from "@rneui/themed";
import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { useAppDispatch } from "../../../app/store/store-hooks";
import { authSignInWithEmailAndPassword } from "../auth-thunk";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Email is not in the correct format"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        const { email, password } = values;
        dispatch(authSignInWithEmailAndPassword({ email, password }));
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <>
          <View style={styles.inputContainer}>
            <Input
              label="Your Email Address"
              placeholder="email@address.com"
              textContentType="emailAddress"
              leftIcon={{ type: "material", name: "mail", color: "gray" }}
              value={values.email}
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              errorMessage={
                errors.email && touched.email ? errors.email : undefined
              }
            />
            <Input
              label="Password"
              placeholder="password"
              textContentType="password"
              leftIcon={{ type: "material", name: "lock", color: "gray" }}
              secureTextEntry
              value={values.password}
              onBlur={handleBlur("password")}
              onChangeText={handleChange("password")}
              errorMessage={
                errors.password && touched.password
                  ? errors.password
                  : undefined
              }
              onSubmitEditing={() => handleSubmit()}
            />
          </View>
          <Button
            raised
            title="Login"
            onPress={() => handleSubmit()}
            containerStyle={styles.button}
          />
        </>
      )}
    </Formik>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    marginTop: 10,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
