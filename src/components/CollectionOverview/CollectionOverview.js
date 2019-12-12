import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../CollectionPreview/CollectionPreview";
import HeadingBlock from "../HeadingBlock/HeadingBlock";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./CollectionOverview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <>
      <HeadingBlock title="Shop" />
      <div className="collections-overview">
        <div className="container">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
