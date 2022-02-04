import React from "react";
import PropTypes from "prop-types";

import "./TagList.css";
import Tag from "./Tag";

const TagList = ({ tags = [], loading = false }) => {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <Tag key={`tag-${index}`}>{tag}</Tag>
      ))}
    </div>
  );
};

TagList.propTypes = {
  tags: PropTypes.array,
  loading: PropTypes.bool,
};

export default TagList;
