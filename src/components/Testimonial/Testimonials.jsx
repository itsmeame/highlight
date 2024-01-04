import React from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/read.png";
import "./testimonial.css";

const Testimonials = () => {
  return (
    <section className="test">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="test__content">
              <h2>Built with compliance and security.</h2>
              <p>
              Whether its SOC 2, HIPAA, or ISO, highlight.io can work with your stack. Contact us at security@highlight.io for more information.
                
              </p>
              <button className="learn-more-btn">Read our docs</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="test__img">
              <img src={chooseImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
