import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";

import "./Navbar.styles.scss";

const Navbar = () => {
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
              <li className="nav-item">
                <NavLink to="/contact" className="cart">
                  <Cart />
                  <span className="cart-items">0</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
