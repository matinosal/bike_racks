import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SidebarHeaderProps } from "./SidebarTypes";

const SidebarHeader: React.FC<SidebarHeaderProps> = (props) => {
  return (
    <View style={[styles.header]}>
      <Text style={[styles.title]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { alignItems: "center", width: "100%", height: "10%", padding: 10 },
  title: { fontSize: 20, fontWeight: "bold" },
});

export default SidebarHeader;
