import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const NewMarkerAdded: React.FC<NewMarkerAddedProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Marker Added!</Text>
      <Button title={"Add new one"} onPress={() => props.buttonReset()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default NewMarkerAdded;
