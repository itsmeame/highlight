import React from "react";
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
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> EduroClass.
            </h2>

            <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                <a href="facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                <a href="facebook.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                <a href="facebook.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                <a href="facebook.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold ">Product</h6>
            <ul className="link__list ">
              {footerQuickLinks.map((item, index) => (
                <li key={index} className="border-0 ps-0 link__item mb-2">
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-7">
            <h6 className="fw-bold">Competitors</h6>
            <ul className="link__list">
              {footerInfoLinks.map((item, index) => (
                <li key={index} className="border-0 ps-0 link__item mb-2">
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: birauta, Pokhara</p>
            <p>Phone: 9806676702</p>
            <p>Email: example@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
