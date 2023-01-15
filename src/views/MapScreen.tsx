import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, {
  EventUserLocation,
  LatLng,
  Marker,
  Region,
} from "react-native-maps";
import * as Location from "expo-location";
import React, { useEffect, useRef, useState } from "react";
import {
  MapCoordinates,
  MapDelta,
  MapLocation,
  MarkerType,
} from "../components/map/CustomMapTypes";
import MarkerProvider from "../components/map/MarkerProvider";
import Sidebar from "../components/sidebar/Sidebar";

const MapScreen: React.FC = () => {
  const mapRef = useRef<MapView>(null);
  const sidebarRef = useRef();

  const [errorMessage, setErrorMessage] = useState<String>();
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
        blockRegionChange = true;
        return;
      }
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
  const userLocationChangeHandler = (location: EventUserLocation) => {
    if (blockRegionChange == false) {
      mapRef.current?.animateToRegion(
        {
          latitude: location.nativeEvent.coordinate.latitude,
          longitude: location.nativeEvent.coordinate.longitude,
          latitudeDelta: initialData.latitudeDelta,
          longitudeDelta: initialData.longitudeDelta,
        },
        1
      );
      blockRegionChange = true;
    }
  };
  const toggleSidebar = () => {
    sidebarRef.current.sidebarAction();
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider="google"
        showsUserLocation={true}
        pitchEnabled={false}
        initialRegion={initialData as Region}
        onUserLocationChange={(event) => {
          userLocationChangeHandler(event);
        }}
        onRegionChangeComplete={(region, isGesture) => {
          onRegionChangeCompleteHandler(region, isGesture);
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            onPress={() => toggleSidebar()}
          />
        ))}
      </MapView>
      <Sidebar ref={sidebarRef} width={80} title={"Bike Rack"}>
        <View>
          <Text>Dziecko</Text>
        </View>
      </Sidebar>
    </View>
  );
};

const initialData: MapLocation = {
  latitude: 50.07212722890865,
  longitude: 19.94170333681023,
  latitudeDelta: 0.0021773514383554016,
  longitudeDelta: 0.002297312021255493,
};

let blockRegionChange = false;
const markerProvider = new MarkerProvider();

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
