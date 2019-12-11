import React from "react";

import CustomButton from "../CustomButton/CustomButton";

import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton title="Go To Checkout" />
    </div>
  );
};

export default CartDropdown;
