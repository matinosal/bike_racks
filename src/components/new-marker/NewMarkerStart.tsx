import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { dev_config } from "../../../dev-config";

const NewMarkerStart: React.FC<NewMarkerStartProps> = (props) => {
  const [status, setCameraPermission] = useState<boolean>(false);
  const [cameraReady, setCameraReady] = useState<boolean>();
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);

  const cameraStart = () => setCameraReady(true);

  const takePicture = async () => {
    if (!cameraReady) return;
    const picture = await cameraRef?.takePictureAsync({
      quality: 0.8,
    });
    props.setPictureUri(picture?.uri);
  };

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraPermission.status === "granted");
    })();
  });

  if (!status) {
    return <Text>Ty no nie dziala</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={(ref) => {
          setCameraRef(ref);
        }}
        style={styles.camera}
        type={CameraType.back}
        onCameraReady={() => cameraStart()}
      >
        <View style={styles.buttonContainer}>
          <View style={styles.cameraButtonHolder}>
            <TouchableOpacity onPress={() => takePicture()}>
              <View style={styles.cameraButton}></View>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    width: "100%",
    height: 100,
    bottom: 0,
    position: "absolute",
    backgroundColor: "#ffffff",
    opacity: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraButtonHolder: {
    height: 80,
    marginTop: 10,
    backgroundColor: "gray",
    width: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraButton: {
    height: 76,
    backgroundColor: "#fff",
    width: 76,
    borderRadius: 38,
  },
});
export default NewMarkerStart;
