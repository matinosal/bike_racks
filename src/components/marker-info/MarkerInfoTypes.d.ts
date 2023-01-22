interface MarkerInfoProps {
  id: number;
  token: string;
}
//TODO przenieść typ gdzie indziej (jest używany w dwóch różnych komponentach)
type MarkerData = {
  id?: number;
  uri?: string;
  latitude: number;
  longitude: number;
  description: string | undefined;
  visited?: boolean;
};
interface MarkerInfoImagesProps {
  images: GalleryImage[];
}
type GalleryImage = {
  id: number;
  url: string;
};
interface MarkerInfoVisitedProps {
  userVisit(): void;
  visited: boolean | undefined;
}
type visitedApiData = {
  marker_id: number;
};
