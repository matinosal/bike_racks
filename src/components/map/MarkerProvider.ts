import { Region } from "react-native-maps";
import { dev_config } from "../../../dev-config";
import { MapCoordinates, MapLocation, MarkerType } from "./CustomMapTypes";
class MarkerProvider {
  markers!: MarkerType[];
  constructor() {
    this.markers = [];
  }

  public getMarkers = (): MarkerType[] => {
    return this.markers;
  };

  public async searchMarkers(regionInfo: MapLocation): Promise<MarkerType[]> {
    const searchPoints = this.calculateSearchPoints(regionInfo);
    this.markers = await this.apiCall(searchPoints);
    return this.markers;
  }

  private apiCall = async (
    searchPoints: MapCoordinates[]
  ): Promise<MarkerType[]> => {
    const markers = await fetch(`${dev_config.localApi}/markers/location`, {
      method: "QUERY",
      body: JSON.stringify({ points: searchPoints }),
    })
      .then((res) => res.json())
      .then((res) => {
        return res.markers;
      })
      .catch((err) => {
        return [];
      });
    return markers;
  };

  private calculateSearchPoints(regionInfo: MapLocation): MapCoordinates[] {
    const halfLongitudeDelta = regionInfo.longitudeDelta / 2 || 0;
    const halfLatituedDelta = regionInfo.longitudeDelta / 2 || 0;
    return [
      {
        latitude: regionInfo.latitude + halfLatituedDelta,
        longitude: regionInfo.longitude - halfLongitudeDelta,
      },
      {
        latitude: regionInfo.latitude - halfLatituedDelta,
        longitude: regionInfo.longitude + halfLongitudeDelta,
      },
    ];
  }
  //TODO
  //zrobić ograniczenie do ilości pokazywanych markerów
  private filterMarkers = (): void => {
    this.markers.filter((marker, i, array) => {
      i === array.findIndex((object) => object.id == marker.id);
    });
  };
}

export default MarkerProvider;
