import React from "react";

import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="row spacing">
      <div className="col-12 collection-preview">
        <h3>{title}</h3>
        <div className="row preview">
          {items
            .filter((item, index) => index < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPreview;
