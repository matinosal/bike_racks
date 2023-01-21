import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import NewMarkerForm from "../components/new-marker/NewMarkerForm";
import NewMarkerStart from "../components/new-marker/NewMarkerStart";
import { AuthContext } from "../context/AuthContext";
import { NewMarkerService } from "../components/new-marker/NewMarkerService";
import Loader from "../components/loader/Loader";
import NewMarkerAdded from "../components/new-marker/NewMarkerAdded";

const NewMarkerScreen: React.FC = () => {
  const [imagePath, setImagePath] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [loaderActive, setLoaderActive] = useState<boolean>(false);
  const [markerAdded, setMarkerAdded] = useState<boolean>(false);
  const { userToken }: any = useContext(AuthContext);
  const service = new NewMarkerService();

  const saveMarker = async () => {
    //todo check z permissions
    if (!imagePath || !description) return;
    setLoaderActive(true);
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
    if (result.data) setMarkerAdded(true);
    setLoaderActive(false);
  };

  const reset = () => {
    setImagePath(undefined);
    setLoaderActive(false);
    setMarkerAdded(false);
  };

  if (loaderActive) return <Loader />;
  else if (markerAdded) return <NewMarkerAdded buttonReset={reset} />;
  else if (imagePath) {
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
