import React from "react";

import "./HeadingBlock.styles.scss";

const HeadingBlock = ({ title }) => {
  return (
    <div className="heading-container">
      <div className="container">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default HeadingBlock;
