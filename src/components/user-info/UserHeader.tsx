import React from "react";
import { Text, View } from "react-native";

const UserHeader: React.FC<UserHeaderProps> = (props) => {
  return (
    <View>
      <Text>{props.image}</Text>
      <Text>{props.username}</Text>
    </View>
  );
};

export default UserHeader;
