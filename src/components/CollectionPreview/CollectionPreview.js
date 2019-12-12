import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items, history, linkUrl }) => {
  const redirect = () => history.push(`${linkUrl}`);
  return (
    <div className="row spacing">
      <div className="col-12 collection-preview">
        <h3 onClick={redirect}>{title}</h3>
        <div className="row preview">
          {items
            .filter((item, index) => index < 4)
            .map(item => (
              <CollectionItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
