import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MapView, { LatLng, Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import {
  MapCoordinates,
  MapDelta,
  MapLocation,
  MarkerType,
} from "../components/map/CustomMapTypes";
import MarkerProvider from "../components/map/MarkerProvider";

const initialData: MapLocation = {
  latitude: 50.07212722890865,
  longitude: 19.94170333681023,
  latitudeDelta: 0.0021773514383554016,
  longitudeDelta: 0.002297312021255493,
};

const markerProvider = new MarkerProvider();

const MapScreen: React.FC = () => {
  const [location, setLocation] = useState<MapCoordinates>(initialData);
  const [locationDelta, setLocationDelta] = useState<MapDelta>(initialData);
  const [errorMessage, setErrorMessage] = useState<String>();
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
        setLocation(initialData);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setLocationDelta(initialData);
    })();
  }, []);

  const onRegionChangeCompleteHandler = async (
    eventData: Region,
    isGesture:
      | {
          isGesture: boolean;
        }
      | undefined
  ): any => {
    if (isGesture?.isGesture) {
      const providedMarkers = await markerProvider.searchMarkers(eventData);
      setMarkers(providedMarkers);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={initialData as Region}
        onRegionChangeComplete={(region, isGesture) => {
          onRegionChangeCompleteHandler(region, isGesture);
        }}
      >
        {markers.map((marker, index) => (
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
