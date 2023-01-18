import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NewMarkerForm from "../components/new-marker/NewMarkerForm";
import NewMarkerStart from "../components/new-marker/NewMarkerStart";

const NewMarkerScreen: React.FC = () => {
  const [imagePath, setimagePath] = useState<string | undefined>();

  const savePicture = (uri: string | undefined) => {
    setimagePath(uri);
  };
  if (imagePath) {
    return <NewMarkerForm imageUri={imagePath} />;
  }
  return <NewMarkerStart getPictureAction={savePicture} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
export default NewMarkerScreen;
