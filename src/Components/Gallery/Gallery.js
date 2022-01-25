import React, { useState } from "react";
import SearchLanguages from "../Common/SearchLanguage/SearchLanguages";
import { GALLERY_IMAGES } from "../../DummyData/Gallery";

//scss
import "./scss/gallery.scss";
import ImageModal from "./ImageModal/ImageModal";

const Gallery = () => {
  const [clickedImage, setclickedImage] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageClicked = (image) => {
    setclickedImage(image);
    setIsModalOpen(true);
  };

  return (
    <div className="gallery--container">
      <SearchLanguages />

      <div className="images--container">
        {GALLERY_IMAGES?.map((image) => (
          <img
            src={image?.src}
            key={image?.id}
            alt={image?.alt}
            onClick={() => imageClicked(image)}
          />
        ))}
      </div>
      <ImageModal
        image={clickedImage}
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      />
    </div>
  );
};

export default Gallery;
