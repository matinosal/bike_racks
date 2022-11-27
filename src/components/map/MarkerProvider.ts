import { MarkerType } from "./CustomMapTypes";

class MarkerProvider {
  markers!: MarkerType[];
  constructor() {
    this.markers = [
      {
        latitude: 50.070813593554426,
        longitude: 19.941854384461248,
        description: "test 1",
      },
      {
        latitude: 50.07046800015046,
        longitude: 19.943765187747957,
        description: "test 2",
      },
    ];
  }

  getMarkers = (): MarkerType[] => {
    return this.markers;
  };
}

export default MarkerProvider;
