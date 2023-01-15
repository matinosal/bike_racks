import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Loader from "../loader/Loader";
import MarkerInfoService from "./MarkerInfoService";

const MarkerInfo: React.FC<MarkerInfoProps> = (props) => {
  const [activeLoader, setActiveLoader] = useState<boolean>(false);
  const [markerData, setMarkerData] = useState<MarkerData | null>(null);
  const service = new MarkerInfoService();
  useEffect(() => {
    (async () => {
      console.log(props);
      setActiveLoader(true);
      const marker = await service.getMarker(props.id);
      setMarkerData(marker);
      setActiveLoader(false);
    })();
  }, [props.id]);
  if (activeLoader) {
    return <Loader />;
  }
  return (
    <View>
      <Text>Info {props.id}</Text>
      <Text>{markerData?.id}</Text>
      <Text>{markerData?.latitude}</Text>
      <Text>{markerData?.longtitude}</Text>
      <Text>{markerData?.description}</Text>
    </View>
  );
};

export default MarkerInfo;
