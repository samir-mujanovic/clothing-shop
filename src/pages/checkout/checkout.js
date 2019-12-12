import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import HeadingBlock from "../../components/HeadingBlock/HeadingBlock";
import CustomButon from "../../components/CustomButton/CustomButton";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart-selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <>
      <HeadingBlock title="Checkout" />
      <div className="checkout-page">
        <div className="container">
          <div className="table-responsive">
            <table
              className="table"
              style={{
                width: "100%"
              }}
            >
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Descriptiont</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </table>
          </div>
          <div className="cuopon-form mt-4">
            <form className="form-inline">
              <div className="form-group mr-sm-3 mb-2">
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Coupon code"
                />
              </div>
              <CustomButon title="Apply Coupon" />
            </form>
          </div>
          <div className="total mt-5">
            <span>Total: ${total}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
