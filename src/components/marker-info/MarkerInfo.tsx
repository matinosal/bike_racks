import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { dev_config } from "../../../dev-config";
import Loader from "../loader/Loader";
import MarkerInfoService from "./MarkerInfoService";
import MarkerInfoImage from "./MarkerInfoImage";
import MarkerInfoVisited from "./marker-info-authenticated/MarkerInfoAuthUser";

const MarkerInfo: React.FC<MarkerInfoProps> = (props) => {
  const [activeLoader, setActiveLoader] = useState<boolean>(false);
  const [markerData, setMarkerData] = useState<MarkerData | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [visited, setVisited] = useState<boolean | undefined>(false);
  const service = new MarkerInfoService();

  const userVisit = () => {
    visitMarker();
  };
  const visitMarker = async () => {
    if (markerData?.visited) return;
    const result = await service.visitMarker(markerData?.id, props.token);
    if (result.data) {
      setVisited(true);
    }
  };

  useEffect(() => {
    (async () => {
      setActiveLoader(true);
      const marker = await service.getMarker(props.id, props.token);
      setMarkerData(marker);
      setVisited(marker?.visited);
      setGalleryImages([
        { id: 1, url: `${dev_config.filePath}${marker?.uri}` as string },
      ]);

      setActiveLoader(false);
    })();
  }, [props.id]);

  if (activeLoader) {
    return <Loader />;
  }
  return (
    <ScrollView style={styles.container}>
      <MarkerInfoImage images={galleryImages} />
      <View style={styles.content}>
        <Text style={styles.header}>Description:</Text>
        <Text>{markerData?.description}</Text>
        {props.token && (
          <MarkerInfoVisited visited={visited} userVisit={userVisit} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    width: "100%",
  },
});
export default MarkerInfo;
