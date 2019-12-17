import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import HeadingBlock from "../../components/HeadingBlock/HeadingBlock";
import CustomButon from "../../components/CustomButton/CustomButton";
import StripeButton from "../../components/StripeButton/StripeButton";

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
            <form className="form-inline checkout-form">
              <div className="form-group mr-sm-3">
                <label className="sr-only">Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coupon code"
                />
              </div>
              <CustomButon title="Apply Coupon" />
            </form>
          </div>
          <div className="total mt-5 d-flex align-items-center">
            <h2 className="mr-5">Cart Totals:</h2>
            <span>${total + ".00"}</span>
          </div>
          <div className="stripe-checkout d-flex align-items-center justify-content-start justify-content-md-end mt-5">
            <StripeButton price={total + ".00"} />
          </div>
          <div
            className="text-danger"
            style={{ fontSize: "15px", textAlign: "left" }}
          >
            * Please use the following test credit card for payments *
            <br />
            4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
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
