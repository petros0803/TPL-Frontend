import React from "react";
import "./scss/imageModal.scss";
import xWhite from "../../../Assets/Icons/xWhite.png";

const ImageModal = (props) => {
  const { image, onClose, isOpen } = props;
  return (
    isOpen && (
      <div
        className={
          isOpen ? "image-modal--container" : "image-modal--container--close"
        }
      >
        <img
          src={xWhite}
          alt="Close Modal"
          className="closeModal"
          onClick={onClose}
        />
        <img src={image.src} alt={image.alt} className="image" />
      </div>
    )
  );
};

export default ImageModal;
