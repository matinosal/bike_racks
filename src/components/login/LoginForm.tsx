import React, { useContext, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Keyboard,
  View,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../loader/Loader";
import { FormLoginService } from "./FormLoginService";

const LoginForm: React.FC<loginProps> = ({
  loaderActive,
  changeLoaderState,
  changeForm,
}) => {
  const service = new FormLoginService();
  const { loginSuccess }: any = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const loginUser = async () => {
    if (email === "" || password === "") {
      setErrorMessage("Fill all the fields");
      return;
    }
    Keyboard.dismiss();

    changeLoaderState(true);
    const result = await service.login({
      email: email,
      password: password,
    });
    changeLoaderState(false);

    if (!result) {
      setErrorMessage(service.getErrorMessage());
    } else {
      loginSuccess(service.getToken());
    }
  };

  if (loaderActive) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.formContainer}>
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
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => loginUser()}
          >
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => changeForm()}
          >
            <Text style={styles.button}>Create account</Text>
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

export default LoginForm;
