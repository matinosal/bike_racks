import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserBioProps } from "./UserInfoTypes";
//TODO
//po tapnieciu bio mozna go zmieniac
const UserBio: React.FC<UserBioProps> = (props) => {
  return (
    <View style={[styles.container, props?.style]}>
      <Text style={styles.header}>Bio:</Text>
      <View style={styles.userBio}>
        <Text>{props.bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f3f3f3",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userBio: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default UserBio;
