import React from "react";

import "./Tag.css";

const Tag = (props) => {
  return <span className="tag">{props.children}</span>;
};
export default Tag;
