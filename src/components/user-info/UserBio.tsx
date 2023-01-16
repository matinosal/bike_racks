import React from "react";
import { Text, View } from "react-native";

const UserBio: React.FC<UserBioProps> = (props) => {
  return (
    <View>
      <Text>{props.bio}</Text>
    </View>
  );
};

export default UserBio;
