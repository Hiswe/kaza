import React from "react";
import propTypes from "prop-types";
import "./Tag.scss";

const Tag = (props) => {
  return <div className="tag">{props.name}</div>;
};
export default Tag;

Tag.propType = {
  name: propTypes.string,
};
