import React from "react";

import Directory from "../../components/Directory/Directory";
import FeaturedPrevew from "../../components/FeaturedPreview/FeaturedPrevew";

const homepage = () => {
  return (
    <section className="home-page">
      <div className="container-fluid p-0">
        <Directory />
      </div>
      <FeaturedPrevew />
    </section>
  );
};

export default homepage;
