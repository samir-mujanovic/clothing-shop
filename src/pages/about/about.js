import React from "react";

import HeadingTitle from "../../components/HeadingTitle/HeadingTitle";

import "./about.styles.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <HeadingTitle
        title="Story About Us"
        subtitle="We design new products. You crwod-fundthem at incredible prices.
        New Vision. Everybody wins."
      />
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="about-company-text">
                <h3>The Company You Trust In</h3>
                <p>
                  Donec quam felis, ultricies nec, and pellentesque eu, pretium
                  quis, sem. justo penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. commodo ligula eget dolor. Aenean
                  massa.
                </p>
                <p>
                  Cum sociis natoque Donec quam felis, ultricies nec, and
                  pellentesque quis eu, pretium quis, sem. Nulla consequat massa
                  quis enim. Donec pede justo, eget fringilla vel, aliquet nec,
                  vulputate eget, arcu. In enim justo, rhoncus ut, vitae.
                </p>
                <p>
                  In enim justo, rhoncus ut, vitae, ultricies nec, and
                  pellentesque quis eu, pretium quis, sem. Nulla consequat massa
                  quis enim. Donec pede justo, eget fringilla vel,
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="company-img">
                <img
                  src="./assets/img/about-us.jpg"
                  className="img-fluid"
                  alt="about us img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
