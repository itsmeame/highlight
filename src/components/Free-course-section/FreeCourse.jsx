import React from "react";
import chooseImg from "../../assests/images/integra.png";
import "./free-course.css";

const FreeCourse = () => {
  return (
    <section className="free">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="free__img">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="free__content">
              <h2>Integrations with your favorite tools.</h2>
              <p>
                Connect your favorite issue tracker, support tool, or even analytics software, and we'll give you a way to push and pull data in the right places.
              </p>
              <button className="learn-more-btn">View all integrations</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeCourse;
