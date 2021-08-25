import { Formik } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";
import * as Yup from "yup";
import { useStore } from "../../../stores/store";

const validationSchema = Yup.object({
  displayName: Yup.string().required("Full name is required"),
  email: Yup.string().required("Email is required").email("Email is not in the correct format"),
  password: Yup.string().required("Password is required"),
});

const RegisterForm = () => {
  const { signUpEmail } = useStore().userStore;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ displayName: "", email: "", password: "" }}
      onSubmit={(values) => {
        const { displayName, email, password } = values;
        signUpEmail(displayName, email, password);
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
        <>
          <View style={styles.inputContainer}>
            <Input
              label="Your Full Name"
              placeholder="Full Name"
              textContentType="name"
              leftIcon={{ type: "material", name: "person", color: "gray" }}
              value={values.displayName}
              onBlur={handleBlur("displayName")}
              onChangeText={handleChange("displayName")}
              errorMessage={
                errors.displayName && touched.displayName ? errors.displayName : undefined
              }
            />
            <Input
              label="Your Email Address"
              placeholder="email@address.com"
              textContentType="emailAddress"
              leftIcon={{ type: "material", name: "mail", color: "gray" }}
              value={values.email}
              onBlur={handleBlur("email")}
              onChangeText={handleChange("email")}
              errorMessage={errors.email && touched.email ? errors.email : undefined}
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
              errorMessage={errors.password && touched.password ? errors.password : undefined}
              onSubmitEditing={handleSubmit}
            />
          </View>
          <Button raised title="Register" onPress={handleSubmit} containerStyle={styles.button} />
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
