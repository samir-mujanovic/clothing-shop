import React from "react";

import "./HeadingTitle.styles.scss";

const HeadingTitle = ({ title, subtitle }) => {
  return (
    <div className="heading-title">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default HeadingTitle;
