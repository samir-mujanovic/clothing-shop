import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionOverview/CollectionOverview";
import CollectionPage from "../collection/collection";

import "./shop.styles.scss";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <div className="container">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    </div>
  );
};

export default ShopPage;
