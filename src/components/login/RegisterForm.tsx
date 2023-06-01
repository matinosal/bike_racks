import React, { useContext, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  View,
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
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Username"
            placeholderTextColor="#000"
            style={styles.input}
            onChangeText={setUsername}
            value={username}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#000"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#000"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => validateInputs()}
          >
            <Text style={styles.button}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => changeForm()}
          >
            <Text style={styles.button}>Have an account? Login here</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#47B377",
  },
  headerText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderColor: "#47B377",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
  button: {
    width: 200,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#47B377",
    borderRadius: 4,
    textAlign: "center",
    color: "#47B377",
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default RegisterForm;
