import React from "react";
import "./Host.scss";
import { Tag, Profile } from "..";
import PropTypes from "prop-types";

const Host = (props) => {
  console.log(props);
  return (
    <div className="detail">
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="location">{props.location}</div>
        <div className="tags">
          {props.tags.map((tag, index) => {
            return <Tag key={`tag-${index}`} name={tag} />;
          })}
        </div>
      </div>
      <div>
        <Profile rating={props.rating} name={props.name} cover={props.cover} />
      </div>
    </div>
  );
};
Host.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
};
export default Host;
