import React from "react";
import PropTypes from "prop-types";

import "./Title.css";
import SkeletonLoader from "../Common/SkeletonLoader";

const Title = ({ announce = {}, isLoading = false }) => {
  return (
    <div className="title">
      {isLoading ? (
        <>
          <SkeletonLoader
            className="title__title"
            style={{ "width": `10em` }}
          />
          <SkeletonLoader className="title__location" style={{ "width": `5em` }} />
        </>
      ) : (
        <>
          <div className="title__title">{announce.title}</div>
          <div className="title__location">{announce.location}</div>
        </>
      )}
    </div>
  );
};

Title.propTypes = {
  announce: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default Title;
