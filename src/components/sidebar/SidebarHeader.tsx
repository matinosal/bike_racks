import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { SidebarHeaderProps } from "./SidebarTypes";

const SidebarHeader: React.FC<SidebarHeaderProps> = (props) => {
  return (
    <View style={[styles.header]}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          props.closeSidebar();
        }}
      >
        <View>
          <MaterialCommunityIcons name="close" size={20} />
        </View>
      </Pressable>
      <Text style={[styles.title]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    width: "100%",
    height: 50,
    padding: 10,
    flexDirection: "row",
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
  iconContainer: {
    width: 60,
    height: 60,
    padding: 20,
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SidebarHeader;
