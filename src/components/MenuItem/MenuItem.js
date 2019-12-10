import React from "react";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="wrapper-box">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
          className="hero-block"
        >
          <div className="hero-info-block">
            <h4>{title}</h4>
            <button className="btn green-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
