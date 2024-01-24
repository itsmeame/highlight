import React from "react";
import chooseImg from "../../assests/images/support.png";
import "./choose-us.css";

const ChooseUs = () => {
  return (
    <section className="choose-us-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="choose__content">
              <h2>Support for all the modern frameworks.</h2>
              <p>
                We support all the fancy new frameworks and our platform is powered by open source, scalable technologies.
              </p>
              <button className="learn-more-btn">Get Started for free</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="choose__img">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
