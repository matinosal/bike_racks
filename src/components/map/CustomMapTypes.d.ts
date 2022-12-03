export type MarkerType = {
  id: number;
  latitude: number;
  longitude: number;
  description: string;
};

export type MapLocation = MapCoordinates & MapDelta;

type MapCoordinates = {
  latitude: number;
  longitude: number;
};

type MapDelta = {
  latitudeDelta?: number;
  longitudeDelta?: number;
};
