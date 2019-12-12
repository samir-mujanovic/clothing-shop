import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

import Directory from "../../components/Directory/Directory";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

import "./homepage.styles.scss";

const HomePage = ({ collections }) => {
  return (
    <section className="home-page">
      <div className="container-fluid p-0">
        <Directory />
      </div>
      <div className="featured-section">
        <HeadingTitle
          title="Featured Products"
          subtitle="Freegan actually brunch, lumbersexual fanny pack aesthetic tbh tofu
      cardigan yr quinoa hot chicken bushwick normcore."
        />
        <div className="container spacing">
          {collections
            .filter(item => item.title === "Womens" || item.title === "Mens")
            .map(({ id, ...otherCollectionProps }) => {
              return <CollectionPreview key={id} {...otherCollectionProps} />;
            })}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(HomePage);
