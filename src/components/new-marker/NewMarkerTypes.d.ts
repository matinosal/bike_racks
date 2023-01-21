interface NewMarkerStartProps {
  setPictureUri(uri: string | undefined): void;
}
interface NewMarkerForm {
  imageUri: string;
  setDescriptionValue(description_: string): void;
  runSaveAction(): void;
}

interface NewMarkerAddedProps {
  buttonReset(): void;
}
