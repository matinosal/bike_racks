import { Region } from "react-native-maps";
import { MapLocation, MarkerType } from "./CustomMapTypes";

class MarkerProvider {
  markers!: MarkerType[];
  counter!: number;
  constructor() {
    this.markers = [];
  }

  public getMarkers = (): MarkerType[] => {
    return this.markers;
  };

  public async searchMarkers(regionInfo: MapLocation): Promise<MarkerType[]> {
    this.markers = await this.apiCall();
    return this.markers;
  }
  private apiCall = async (): Promise<MarkerType[]> => {
    const markers = await fetch("http://192.168.0.199:8000/markers", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => res.markers as MarkerType[])
      .catch((err) => {
        return [] as MarkerType[];
      });
    return markers;
  };
  //TODO
  //zrobić ograniczenie do ilości pokazywanych markerów
  private filterMarkers = (): void => {
    this.markers.filter((marker, i, array) => {
      i === array.findIndex((object) => object.id == marker.id);
    });
  };
}

export default MarkerProvider;
