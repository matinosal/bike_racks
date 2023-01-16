import React from "react";
import { Text, View } from "react-native";

const UserStats: React.FC<UserStatsProps> = (props) => {
  return (
    <View>
      <Text>{props.stats.added}</Text>
      <Text>{props.stats.visited}</Text>
    </View>
  );
};

export default UserStats;
