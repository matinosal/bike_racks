import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MapView, { LatLng, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { MarkerType } from "../components/map/CustomMapTypes";
import MarkerProvider from "../components/map/MarkerProvider";

export default function MapScreen() {
  const markerProvider = new MarkerProvider();

  const [location, setLocation] = useState<Location.LocationObject | LatLng>(
    initialData
  );

  const [errorMessage, setErrorMessage] = useState<String>();
  const [markers, setMarkers] = useState<MarkerType[]>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
        setLocation(initialData);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    setMarkers(markerProvider.getMarkers());
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {markers?.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

const initialData = {
  coords: {
    latitude: 50.07212722890865,
    longitude: 19.94170333681023,
    altitude: 0,
    accuracy: 0,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  },
  timestamp: 0,
};
