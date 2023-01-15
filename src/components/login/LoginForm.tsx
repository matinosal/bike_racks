import React, { useContext, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Keyboard,
} from "react-native";
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
      <Text>Login</Text>
      <Text>E-mail</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <Text>{errorMessage}</Text>
      <Button title="Login" onPress={() => loginUser()} />
      <Button title="Create account" onPress={() => changeForm()} />
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

export default LoginForm;
