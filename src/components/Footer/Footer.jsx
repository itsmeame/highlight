import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Pricing",
    url: "#",
  },
  {
    display: "Sign up",
    url: "#",
  },

  {
    display: "Features",
    url: "#",
  },

  {
    display: "Privacy & Security",
    url: "#",
  },
  {
    display: "Customers",
    url: "#",
  },
  {
    display: "Session Replay",
    url: "#",
  },
  {
    display: "Error Monitoring",
    url: "#",
  },
  {
  display: "Error Logging",
  url: "#",
},
];

const footerInfoLinks = [
  {
    display: "Competitors",
    url: "#",
  },
  {
    display: "Hotjar",
    url: "#",
  },

  {
    display: "Fullstory",
    url: "#",
  },

  {
    display: "Smartlook",
    url: "#",
  },
  {
    display: "Inspectlet",
    url: "#",
  },
  {
    display: "Datadog",
    url: "#",
  },
  {
    display: "Sentry",
    url: "#",
  },
];


const Footer = () => {
  return (
  
    <footer className="footers">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> EduroClass.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Product</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Competitors</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
         

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            <p>Address: birauta, Pokhara</p>
            <p> Phone: 9806676702</p>
            <p>Email: example@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>

  );
};

export default Footer;
