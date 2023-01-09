import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import LoginForm from "../components/login/LoginForm";

const LoginScreen: React.FC = () => {
  const [formType, setFormType] = useState(null);
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default ProfileScreen;
