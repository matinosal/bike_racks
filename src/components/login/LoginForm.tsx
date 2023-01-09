import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginForm: React.FC<loginProps> = ({ changeForm }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>E-mail</Text>
      <TextInput style={styles.input} />
      <Text>Password</Text>
      <TextInput style={styles.input} />
      <Button title="Login" />
      <Button title="Create account" onPress={() => changeForm()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;
