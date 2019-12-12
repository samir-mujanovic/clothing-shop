import React from "react";
import { withRouter } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";

import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items, history, linkUrl }) => {
  const redirect = () => history.push(`${linkUrl}`);
  return (
    <div className="row spacing">
      <div className="col-12 collection-preview">
        <div className="category-heading">
          <h3>{title}</h3>
          <h5 className="view-more" onClick={redirect}>
            <span>View More</span> <FaChevronRight />
          </h5>
        </div>
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
