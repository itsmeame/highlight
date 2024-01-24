import React from "react";
import "./courses.css";

import chooseImg from "../../assests/images/cards.png";

const Courses = () => {
  return (
    <section className="course">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="course__img">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="course__content">
              <h2>A cohesive view of your entire stack.</h2>
              <p>
                A natural pairing between your errors, session replay, logs and more. Understand the “what”, “why” and “how” of your full-stack web application
              </p>
              <button className="learn-more-btn">Get started for free</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;

