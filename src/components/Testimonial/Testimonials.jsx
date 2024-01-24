import React from "react";
import chooseImg from "../../assests/images/read.png";
import "./testimonial.css";

const Testimonials = () => {
  return (
    <section className="test">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="test__content">
              <h2>Built with compliance and security.</h2>
              <p>
                Whether  SOC 2, HIPAA, or ISO, highlight.io can work with your stack. Contact us at security@highlight.io for more information.
              </p>
              <button className="learn-more-btn">Read our docs</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="test__img">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
