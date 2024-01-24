import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <section className="subs">
      <div className="newsletter">
        <div className="text-center">
          <h2 className="mb-4">
            Get the <span className="highlight">visibility</span> you <br /> need
          </h2>
          <button className="subscribe-btn">Get started for free</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

