import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <tbody>
      <tr className="table-row">
        <th>
          <div className="image-block">
            <img src={imageUrl} alt={name} />
          </div>
        </th>
        <th>
          <div className="name-block">{name}</div>
        </th>
        <th>
          <div className="quantity-wrapp">
            <div className="quantity-block">
              <div className="arrow top" onClick={() => removeItem(cartItem)}>
                <Minus />
              </div>
              <span className="value">{quantity}</span>
              <div className="arrow bottom" onClick={() => addItem(cartItem)}>
                <Plus />
              </div>
            </div>
          </div>
        </th>
        <th>
          <div className="price-block">${price + ".00"}</div>
        </th>
        <th>
          <div className="remove-button" onClick={() => clearItem(cartItem)}>
            &#10005;
          </div>
        </th>
      </tr>
    </tbody>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
