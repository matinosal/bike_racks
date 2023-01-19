import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import NewMarkerForm from "../components/new-marker/NewMarkerForm";
import NewMarkerStart from "../components/new-marker/NewMarkerStart";
import { AuthContext } from "../context/AuthContext";
import { NewMarkerService } from "../components/new-marker/NewMarkerService";

const NewMarkerScreen: React.FC = () => {
  const [imagePath, setImagePath] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const { userToken }: any = useContext(AuthContext);
  const service = new NewMarkerService();

  const saveMarker = async () => {
    //todo check z permissions
    const location = await Location.getCurrentPositionAsync({});
    const result = await service.addMarker(
      {
        uri: imagePath,
        description: description,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
      userToken
    );
  };

  if (imagePath) {
    return (
      <NewMarkerForm
        imageUri={imagePath}
        setDescriptionValue={setDescription}
        runSaveAction={saveMarker}
      />
    );
  }

  return <NewMarkerStart setPictureUri={setImagePath} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
export default NewMarkerScreen;
