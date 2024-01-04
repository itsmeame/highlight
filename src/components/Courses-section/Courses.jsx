import React from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/cards.png";
import "./courses.css";

const Courses= () => {
  return (
    <section className="course">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="course__img">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="course__content">
              <h2>A cohesive view of your entire stack.</h2>
              <p>
              A natural pairing between your errors, session replay, logs and more. Understand the “what”, “why” and “how” of your full-stack web application
              </p>
              <button className="learn-more-btn">Get started for free</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses;

