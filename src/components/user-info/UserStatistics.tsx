import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { UserStatsProps } from "./UserInfoTypes";

const UserStatistics: React.FC<UserStatsProps> = (props) => {
  return (
    <View style={[styles.container, props?.style]}>
      <View>
        <Text style={styles.header}>Markers Stats</Text>
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.singleStat}>
          <Text style={styles.singleStatHeader}>Visited</Text>
          <Text style={styles.singleStatHeader}>{props.stats.visited}</Text>
        </View>
        <View style={styles.singleStat}>
          <Text style={styles.singleStatHeader}>Added</Text>
          <Text style={styles.singleStatHeader}>{props.stats.added}</Text>
        </View>
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
  statsContainer: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  singleStat: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
  },
  singleStatHeader: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  userBio: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default UserStatistics;
