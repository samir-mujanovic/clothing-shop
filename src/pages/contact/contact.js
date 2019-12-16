import React from "react";

import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";
import CustomButton from "../../components/CustomButton/CustomButton";

import "./contact.styles.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <HeadingTitle
        title="Contact Us"
        subtitle="We design new products. You crwod-fundthem at incredible prices.
        New Vision. Everybody wins."
      />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>
              <CustomButton title="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
