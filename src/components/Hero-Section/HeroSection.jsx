import React from "react";
import { Container, Row, Col } from "reactstrap";
import { PlayCircle } from "react-feather";
import { ChevronRight } from "react-feather";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="line1">The open source,fullstack</h2>
              <h2 className="line2">Monitoring Platform.</h2>
             
            </div>
            <div className="buttons">
              <button className="btn btn-get-started">Get Started</button>
              <button className="btn btn-live-demo">
                <PlayCircle className="icon" />
                Live Demo
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Add the Request a Demo Call and Arrow components */}
      <button className="request-demo">
  <p>Request a Demo Call</p>
  <span className="arrow-icon">→</span>
</button>

    </section>
  );
};

export default HeroSection;
