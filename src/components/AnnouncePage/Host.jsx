import React from "react";
import PropTypes from "prop-types";

import "./Host.css";
import SkeletonLoader from "../Common/SkeletonLoader";

export const Host = ({ host = {}, isLoading = false }) => {
  return (
    <div className="host">
      <div className="host__name">
        {host.name &&
          host.name.split(` `).map((text) => <span key={text}>{text}</span>)}
      </div>
      <div className="host__image">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <img src={host.picture} alt="profile" />
        )}
      </div>
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default Host;
