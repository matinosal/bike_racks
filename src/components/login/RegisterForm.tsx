import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { emailValidation } from "../../helpers/Validator";
import { FormLoginService } from "./FormLoginService";

const RegisterForm: React.FC<loginProps> = ({ changeForm }) => {
  const service = new FormLoginService();
  const [username, setUsernameState] = useState<string>("");
  const [email, setEmailState] = useState<string>("");
  const [password, setPasswordState] = useState<string>("");
  const [confirmPassword, setConfirmPasswordState] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateInputs = async () => {
    if (!emailValidation(email)) {
      setErrorMessage("Invalid email address");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Paswords do not match");
      return;
    }

    const result = await service.register({
      username: username,
      email: email,
      password: password,
    });

    if (!result) {
      setErrorMessage(service.getErrorMessage());
    } else {
      changeForm();
    }
  };
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Text>Username</Text>
      <TextInput style={styles.input} onChangeText={setUsernameState} />
      <Text>E-mail</Text>
      <TextInput style={styles.input} onChangeText={setEmailState} />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPasswordState}
      />
      <Text>Confirm Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setConfirmPasswordState}
      />
      <Text>{errorMessage}</Text>
      <Button title="Register" onPress={() => validateInputs()} />
      <Button
        title="Have an account? Login here"
        onPress={() => changeForm()}
      />
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

export default RegisterForm;
