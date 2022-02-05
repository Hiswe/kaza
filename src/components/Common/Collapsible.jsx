import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Collapsible.css";
import SkeletonLoader from "./SkeletonLoader";

const Collapsible = ({ title = ``, isLoading = false, children }) => {
  const [showDetail, setShowDetail] = useState(false);

  const componentClasses = [`collapsible`];
  if (showDetail) componentClasses.push(`collapsible--open`);

  return (
    <dl className={componentClasses.join(` `)}>
      {isLoading ? (
        <SkeletonLoader className="collapsible__button" />
      ) : (
        <>
          <dt
            className="collapsible__button"
            onClick={() => setShowDetail(!showDetail)}
          >
            <div className="title-collapsible">{title}</div>
            <i className="fas fa-chevron-up"></i>
          </dt>
          <dd className="collapsible__content">{children}</dd>
        </>
      )}
    </dl>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Collapsible;
