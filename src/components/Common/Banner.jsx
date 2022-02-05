import React from "react";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("/assets/images/Banner.svg")`,
      }}
    >
      <h1 className="banner__title">{props.children}</h1>
    </div>
  );
};
export default Banner;
