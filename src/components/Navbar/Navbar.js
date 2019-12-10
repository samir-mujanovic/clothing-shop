import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="navbar-brand">
            New Vision
          </Link>
          <button
            className={`navbar-toggler ${toggler ? "" : "collapsed"}`}
            onClick={togglerHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${toggler ? "show" : ""}`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
