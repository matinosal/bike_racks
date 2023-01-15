import React, { useContext, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { emailValidation } from "../../helpers/Validator";
import Loader from "../loader/Loader";
import { FormLoginService } from "./FormLoginService";

const RegisterForm: React.FC<loginProps> = ({
  loaderActive,
  changeLoaderState,
  changeForm,
}) => {
  const service = new FormLoginService();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
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

    changeLoaderState(true);
    const result = await service.register({
      username: username,
      email: email,
      password: password,
    });
    changeLoaderState(false);

    if (!result) {
      setErrorMessage(service.getErrorMessage());
    } else {
      changeForm();
    }
  };

  if (loaderActive) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text>Register</Text>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
        />
        <Text>E-mail</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} />
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
        <Text>Confirm Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <Text>{errorMessage}</Text>
        <Button title="Register" onPress={() => validateInputs()} />
        <Button
          title="Have an account? Login here"
          onPress={() => changeForm()}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
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
