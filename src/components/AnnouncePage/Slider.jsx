import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Slider.css";

const Slider = ({ images = [] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const onPrev = () => {
    setImageIndex(imageIndex > 0 ? imageIndex - 1 : images.length - 1);
  };

  const onNext = () => {
    setImageIndex(imageIndex + 1 < images.length ? imageIndex + 1 : 0);
  };

  return (
    <div
      className="slider"
      style={{
        backgroundImage: `
        url(${images[imageIndex]})`,
      }}
    >
      {images.length < 2 ? null : (
        <>
          <div className="slider__navigation">
            <i className="fas fa-chevron-left" onClick={onPrev} />
            <i className="fas fa-chevron-right" onClick={onNext} />
          </div>
          <p className="slider__pagination">
            {imageIndex + 1}/{images.length}
          </p>
        </>
      )}
    </div>
  );
};

Slider.propTypes = {
  images: PropTypes.array,
};

export default Slider;
