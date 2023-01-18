import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { dev_config } from "../../../dev-config";
import AuthorizedTabNavigation from "../../navigation/AuthorizedTabNavigation";
import { UserHeaderProps } from "./UserInfoTypes";
//TODO
//po tapnieciu zdjecia mozna wgrac na serwer swoje profilowe
const UserHeader: React.FC<UserHeaderProps> = (props) => {
  console.log(`${dev_config.basePath}${props.image}`);
  return (
    <View style={[styles.container, props?.style]}>
      <View style={styles.userImageContainer}>
        <Image
          source={{
            uri: `${dev_config.basePath}${props.image}`,
          }}
          style={styles.userImage}
        ></Image>
      </View>
      <View style={styles.userName}>
        <Text style={styles.userNameText}>{props.username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  userImageContainer: {
    width: 88,
    height: 88,
    justifyContent: "center",
    alignContent: "stretch",
    borderRadius: 88 / 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  userImage: {
    width: 88,
    height: 88,
    borderRadius: 88 / 2,
  },
  userName: {
    padding: 20,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  userNameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default UserHeader;
