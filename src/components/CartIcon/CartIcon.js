import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { NavLink } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";

import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <>
      <div className="cart-icon d-none d-md-block" onClick={toggleCartHidden}>
        <Cart />
        <span className="cart-items">{itemCount}</span>
      </div>
      <NavLink to="/checkout" className="cart-icon d-block d-md-none">
        <Cart />
        <span className="cart-items">{itemCount}</span>
      </NavLink>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
