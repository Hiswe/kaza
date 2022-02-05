import React from "react";
import PropTypes from "prop-types";

import RatingStar from "./RatingStar";

const Rating = ({ rating = 0 }) => {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <RatingStar active={index < rating} key={index}/>
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
