import React from "react";
import { ActivityIndicator, View } from "react-native";

const Loader: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size={"large"}></ActivityIndicator>
    </View>
  );
};

export default Loader;
