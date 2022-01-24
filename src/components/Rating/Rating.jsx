import React from "react";
import PropTypes from "prop-types";

const Rating = (props) => {
  const stars = [];
  for (let i = 0; i < props.value; i++) {
    stars.push(
      <i
        key={stars.length}
        style={{ color: "#FF6060" }}
        className="fas fa-star"
      ></i>
    );
  }
  for (let i = 0; i < 5 - props.value; i++) {
    stars.push(
      <i
        key={stars.length}
        style={{ color: "#E3E3E3" }}
        className="fas fa-star"
      ></i>
    );
  }

  return <div>{stars}</div>;
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
