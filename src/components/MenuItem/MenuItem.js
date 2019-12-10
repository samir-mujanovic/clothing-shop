import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
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
            <button
              onClick={() => history.push(`${match.url$}${linkUrl}`)}
              className="btn green-btn"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
