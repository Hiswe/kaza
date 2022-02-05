import React from "react";
import PropTypes from "prop-types";

import "./Host.css";

export const Host = ({ host }) => {
  return (
    <div className="host">
      <div className="host__name">
        {host.name.split(` `).map((text) => (
          <span key={text}>{text}</span>
        ))}
      </div>
      <div className="host__image">
        <img src={host.picture} alt="profil" />
      </div>
    </div>
  );
};

Host.propTypes = {
  host: PropTypes.object,
};

export default Host;
