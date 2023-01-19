interface MarkerInfoProps {
  id: number;
}
//TODO przenieść typ gdzie indziej (jest używany w dwóch różnych komponentach)
type MarkerData = {
  id?: number;
  uri?: string;
  latitude: number;
  longitude: number;
  description: string | undefined;
};
