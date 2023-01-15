import React from "react";
import { StyleSheet, View } from "react-native";
import { SidebarBodyProps } from "./SidebarTypes";

const SidebarBody: React.FC<SidebarBodyProps> = (props) => {
  return <View style={[styles.body]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  body: { backgroundColor: "#fff", width: "100%", height: "90%" },
});

export default SidebarBody;
