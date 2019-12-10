import React from "react";

import Directory from "../../components/Directory/Directory";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const homepage = () => {
  return (
    <section className="home">
      <div className="container-fluid p-0">
        <Directory />
      </div>
      <FeaturedProducts />
    </section>
  );
};

export default homepage;
