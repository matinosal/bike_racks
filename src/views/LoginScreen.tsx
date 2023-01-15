import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/login/RegisterForm";

const LoginScreen: React.FC = () => {
  const [formType, setFormType] = useState<string>("login");
  const [loaderActive, setLoaderActive] = useState<boolean>(false);

  const changeLoaderState = (value: boolean) => {
    setLoaderActive(value);
  };
  return (
    <View style={styles.container}>
      {formType === "login" ? (
        <LoginForm
          loaderActive={loaderActive}
          changeLoaderState={(value: boolean) => changeLoaderState(value)}
          changeForm={() => setFormType("register")}
        />
      ) : (
        <RegisterForm
          loaderActive={loaderActive}
          changeLoaderState={(value: boolean) => changeLoaderState(value)}
          changeForm={() => setFormType("login")}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default LoginScreen;
