import React from "react";
import PropTypes from "prop-types";

import "./RatingStar.css"

const RatingStar = ({ active = false, loading = false }) => {
  const componentClasses = [`rating-star fas fa-star`];
  if (active) componentClasses.push(`rating-star--is-active`);
  if (loading) componentClasses.push(`rating-star--is-loading`);

  return <i className={componentClasses.join(` `)} />;
};

RatingStar.propTypes = {
  active: PropTypes.bool,
  loading: PropTypes.bool,
};

export default RatingStar;
