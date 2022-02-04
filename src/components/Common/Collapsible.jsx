import React, { useState } from "react";
import "./Collapsible.css";
import PropTypes from "prop-types";

const Collapsible = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const componentClasses = [`collapsible`];
  if (showDetail) componentClasses.push(`collapsible--open`);

  return (
    <dl className={componentClasses.join(` `)}>
      <dt
        className="collapsible__button"
        onClick={() => setShowDetail(!showDetail)}
      >
        <div className="title-collapsible">{props.title}</div>
        <i className="fas fa-chevron-up"></i>
      </dt>
      <dd className="collapsible__content">{props.children}</dd>
    </dl>
  );
};

Collapsible.propTypes = {
  title: PropTypes.string,
};

export default Collapsible;
