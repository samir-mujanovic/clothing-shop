import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart-selectors";

import "./Navbar.styles.scss";

const Navbar = ({ hidden }) => {
  const [toggler, setToggler] = useState(false);

  const togglerHandler = () => {
    setToggler(!toggler);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            New Vision
          </NavLink>
          <button
            className={`navbar-toggler ${toggler ? "" : "collapsed"}`}
            onClick={togglerHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${toggler ? "show" : ""}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  to="/"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/about"
                  className="nav-link"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/shop"
                  className="nav-link"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/contact"
                  className="nav-link"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <CartIcon />
            {hidden ? null : <CartDropdown />}
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);
