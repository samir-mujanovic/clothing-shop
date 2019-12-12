import React from "react";
import { withRouter } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton";

import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  const redirect = () => history.push(`${match.url}${linkUrl}`);

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
            <CustomButton onClick={redirect} title="Shop Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
