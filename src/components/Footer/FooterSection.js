import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaVimeoV,
  FaPinterestP,
  FaYoutube
} from "react-icons/fa";

import "./FooterSection.styles.scss";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="footer-links">
                <h5>Customer Services</h5>
                <ul className="links">
                  <li>Contact Us</li>
                  <li>Shipping</li>
                  <li>Click & Collect</li>
                  <li>Returns</li>
                  <li>FAQ's</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-links">
                <h5>Customer Assistance</h5>
                <ul className="links">
                  <li>Track My Orders</li>
                  <li>Online Returns</li>
                  <li>Shipping Rates</li>
                  <li>Returns & Exchanges</li>
                  <li>International Shipping</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-links">
                <h5>Follow New Vision</h5>
                <ul className="links">
                  <li>
                    <FaFacebookF />
                    Facebook
                  </li>
                  <li>
                    <FaTwitter />
                    Twitter
                  </li>
                  <li>
                    <FaVimeoV />
                    Vimeo
                  </li>
                  <li>
                    <FaPinterestP />
                    Pinterest
                  </li>
                  <li>
                    <FaYoutube />
                    Youtube
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="footer-links company-info">
                <h5>Contact Info</h5>
                <ul>
                  <li>Address: 79 Grant Street, NY 10950</li>
                  <li>Tel: +123 456 789</li>
                  <li>Fax: +123 456 789</li>
                  <li>Email: domain@info.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copy-right">
        <p className="text-center">
          Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </>
  );
};
export default Footer;
