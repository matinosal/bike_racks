import { ImageGallery } from "@georstat/react-native-image-gallery";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet } from "react-native";

const MarkerInfoImage: React.FC<MarkerInfoImagesProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openGallery = () => setIsOpen(true);
  const closeGallery = () => setIsOpen(false);
  return (
    <>
      <Pressable onPress={openGallery}>
        <Image
          source={{ uri: props.images[0]?.url }}
          style={styles.image}
          resizeMode={"center"}
        />
      </Pressable>
      <ImageGallery
        close={closeGallery}
        isOpen={isOpen}
        images={props.images}
      />
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 250,
  },
});
export default MarkerInfoImage;
