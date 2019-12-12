import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";

import "./CollectionItem.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="col-12 col-md-3 mt-5">
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >
          <div className="item-overlay">
            <CustomButton onClick={() => addItem(item)} title="Add To Cart" />
          </div>
        </div>
        <div className="collection-footer d-flex">
          <span className="name">{name}</span>
          <span className="price">${price + ".00"}</span>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
