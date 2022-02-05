import React from "react";

import "./SkeletonLoader.css";

const SkeletonLoader = ({ className, style = {} }) => (
  <div className={[`skeleton-loader`, className].join(` `)} style={style} />
);

export default SkeletonLoader;
