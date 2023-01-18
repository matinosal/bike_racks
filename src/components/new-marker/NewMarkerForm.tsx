import { ImageType } from "expo-camera/build/Camera.types";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//TODO
//po tapnieciu bio mozna go zmieniac
const NewMarkerForm: React.FC<NewMarkerForm> = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.imageAddContainer}>
        <View style={styles.halfWidthCentered}>
          <Text style={styles.header}>Picture: </Text>
        </View>
        <View style={styles.halfWidthCentered}>
          <View style={styles.pictureHolder}>
            <Image
              style={styles.image}
              source={{
                uri: `${props.imageUri}`,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  imageAddContainer: {
    flexDirection: "row",
  },
  halfWidthCentered: {
    width: "50%",
    justifyContent: "center",
  },
  pictureHolder: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 100,
    height: 100,
  },
  noPictureNotice: {
    textAlign: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default NewMarkerForm;
