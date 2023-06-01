import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CommonButton: React.FC<CommonButton> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width: props.width, height: props.height }]}
      onPress={props.click}
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "#47B377",
    borderRadius: 4,
    textAlign: "center",
    color: "#47B377",
    alignSelf: "flex-end",
  },
  buttonText: {
    textAlign: "center",
  },
});
export default CommonButton;
