import React from "react";
import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ announce = {} }) => {
  return (
    <div className="title">
      <div className="title__title">{announce.title}</div>
      <div className="title__location">{announce.location}</div>
    </div>
  );
};

Title.propTypes = {
  announce: PropTypes.object,
};

export default Title;
