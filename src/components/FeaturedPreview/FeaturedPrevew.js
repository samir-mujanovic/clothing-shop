import React from "react";

import HeadingTitle from "../HeadingTitle/HeadingTitle";

import "./FeaturedPreview.styles.scss";

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <div className="container">
        <HeadingTitle
          title="Featured Products"
          subtitle="Freegan actually brunch, lumbersexual fanny pack aesthetic tbh tofu
        cardigan yr quinoa hot chicken bushwick normcore."
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
