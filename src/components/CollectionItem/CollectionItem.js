import React from "react";

import "./CollectionItem.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="col-12 col-md-3">
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="collection-footer d-flex justify-content-between">
          <span className="name">{name}</span>
          <span className="price">${price + ".00"}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
