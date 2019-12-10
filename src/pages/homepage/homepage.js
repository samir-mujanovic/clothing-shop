import React from "react";

import SHOP_DATA from "../shop/shop.data";

import Directory from "../../components/Directory/Directory";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

import "./homepage.styles.scss";

class homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
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
          <div className="container">
            {collections
              .filter(item => item.title === "Womens" || item.title === "Mens")
              .map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />;
              })}
          </div>
        </div>
      </section>
    );
  }
}

export default homepage;
