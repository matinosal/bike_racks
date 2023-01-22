import { useLinkProps } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const MarkerInfoVisited: React.FC<MarkerInfoVisitedProps> = (props) => {
  const [visited, setVisited] = useState<boolean>(false);

  useEffect(() => {
    if (!props.visited) setVisited(false);
    else setVisited(props.visited);
    console.log(">>>>");
  }, [props.visited]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, visited ? styles.visited : styles.unvisited]}
          onPress={() => props.userVisit()}
        >
          <Text
            style={[
              styles.buttonText,
              visited ? styles.visited : styles.unvisited,
            ]}
          >
            {visited ? "Visited" : "Mark Visited"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    width: 80,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#47B377",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 14,
    color: "#47B377",
  },
  unvisited: { color: "gray", borderColor: "gray" },
  visited: { color: "#47B377", borderColor: "#47B377" },
});
export default MarkerInfoVisited;
