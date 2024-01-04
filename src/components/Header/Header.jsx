

import React, { useRef, useState, useEffect } from "react";
import { Container } from "reactstrap";
import { FaDiscord, FaGithub } from "react-icons/fa";

import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "Product",
    url: "#",
  },
  {
    display: "Pricing",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
  {
    display: "FAQ",
    url: "#",
  },
  
];

const Header = () => {
  const menuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignIn = () => {
    console.log("Sign In clicked");
  };

  const handleSignUp = () => {
    console.log("Sign Up clicked");
  };

  const handleDiscordSignIn = () => {
    console.log("Sign in with Discord clicked");
  };

  const handleGitHubSignIn = () => {
    console.log("Sign in with GitHub clicked");
  };

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> EduroClass.
            </h2>
          </div>

          <div className="nav">
            <ul className={`nav__list ${isMenuOpen ? "open" : ""}`}>
              {navLinks.map((item, index) => (
                <li key={index} className="nav__item">
                  <a href={item.url} onClick={menuToggle}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

           <div className="sign-in-buttons">
            <button className="signin-button" onClick={handleSignIn}>
              Sign In
            </button>  

            <button className="signup-button" onClick={handleSignUp}>
              Sign Up
            </button>

            <button className="discord-button" onClick={handleDiscordSignIn}>
              <FaDiscord className="icon" />
            </button>

            <button className="github-button" onClick={handleGitHubSignIn}>
              <FaGithub className="icon" />
            </button>
          </div>

          <div className="mobile__menu" onClick={menuToggle}>
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;