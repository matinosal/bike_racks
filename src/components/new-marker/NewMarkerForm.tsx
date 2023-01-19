import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
//TODO
//po tapnieciu bio mozna go zmieniac
const NewMarkerForm: React.FC<NewMarkerForm> = (props) => {
  return (
    <ScrollView style={styles.container}>
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
      <TextInput
        multiline
        autoCorrect
        textAlignVertical={"top"}
        placeholder={"Describe place"}
        style={styles.input}
        enablesReturnKeyAutomatically
        onChangeText={(val) => {
          props.setDescriptionValue(val);
        }}
      />
      <Button title="Add Marker" onPress={props.runSaveAction} />
    </ScrollView>
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
  input: {
    marginTop: 20,
    marginBottom: 20,
    height: 120,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    marginTop: 20,
  },
});
export default NewMarkerForm;
