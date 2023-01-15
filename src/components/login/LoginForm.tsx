import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FormLoginService } from "./FormLoginService";

const LoginForm: React.FC<loginProps> = ({ changeForm }) => {
  const service = new FormLoginService();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const loginUser = async () => {
    if (email === "" || password === "") {
      setErrorMessage("Fill all the fields");
      return;
    }

    const result = await service.login({
      email: email,
      password: password,
    });

    if (!result) {
      setErrorMessage(service.getErrorMessage());
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>E-mail</Text>
      <TextInput style={styles.input} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
      />
      <Text>{errorMessage}</Text>
      <Button title="Login" onPress={() => loginUser()} />
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
