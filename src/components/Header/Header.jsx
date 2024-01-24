import React, { useState, useRef, useEffect } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

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

const ProductDropdown = ({ types, onSelect }) => {
  return (
    <ul className="absolute top-full left-0 bg-#0d0225 border border-gray-300 rounded-md shadow-md p-4 w-48 z-10">
      {types.map((type, index) => (
        <li
          key={index}
          onClick={() => onSelect(type)}
          className="text-lg  text-gray-500 font-bold cursor-pointer hover:text-white"
        >
          {type === "Session Replay" && (
            <span onClick={() => console.log("Session Replay clicked")}>{type}</span>
          )}
          {type === "Error Monitoring" && (
            <span onClick={() => console.log("Error Monitoring clicked")}>{type}</span>
          )}
          {type === "Logging" && (
            <span onClick={() => console.log("Logging clicked")}>{type}</span>
          )}
          {type === "Integration" && (
            <span onClick={() => console.log("Integration clicked")}>{type}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

ProductDropdown.propTypes = {
  types: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

const Header = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsProductDropdownOpen(true);
    };

    const handleMouseLeave = () => {
      setIsProductDropdownOpen(false);
    };

    if (dropdownRef.current) {
      dropdownRef.current.addEventListener("mouseenter", handleMouseEnter);
      dropdownRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (dropdownRef.current) {
        dropdownRef.current.removeEventListener("mouseenter", handleMouseEnter);
        dropdownRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

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
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const handleProductTypeSelect = (type) => {
    console.log(`Selected product type: ${type}`);
    setIsProductDropdownOpen(false);

    // Perform specific actions based on the selected product type
    switch (type) {
      case "Session Replay":
        // Execute session replay action
        break;
      case "Error Monitoring":
        // Execute error monitoring action
        break;
      case "Logging":
        // Execute logging action
        break;
      case "Integration":
        // Execute integration action
        break;
      default:
        break;
    }
  };

  return (
    <header style={{ backgroundColor: "#0d0225" }}>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="logo">
            <h2 className="flex items-center gap-1 text-white">
              <i className="ri-pantone-line"></i> EduroClass.
            </h2>
          </div>

          <div className="nav hidden md:flex ml-6 mt-3">
            <ul className="flex space-x-6">
              {navLinks.map((item, index) => (
                <li key={index} className="nav__item">
                  {item.display === "Product" ? (
                    <div
                      ref={dropdownRef}
                      className="relative"
                    >
                      <button
                        className="text-gray-500 hover:text-white transition duration-300 text-lg font-semibold mb-2 no-underline flex items-center"
                        onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                      >
                        {item.display}
                        <span className="ml-1">&#9662;</span>
                      </button>
                      {isProductDropdownOpen && (
                        <ProductDropdown
                          types={["Session Replay", "Error Monitoring", "Logging", "Integration"]}
                          onSelect={handleProductTypeSelect}
                        />
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.url}
                      className="text-gray-500 hover:text-white transition duration-300 text-lg font-semibold mb-2 no-underline"
                    >
                      {item.display}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="sign-in-buttons text-lg flex items-center space-x-4">
            <button
              className="signin-button text-aqua px-4 py-2 rounded transition duration-300 hover:bg-aqua hover:text-black border-1 border-aqua"
              onClick={handleSignIn}
            >
              Sign In
            </button>

            <button
              className="signup-button text-aqua px-4 py-2 rounded transition duration-300 hover:bg-aqua hover:text-black border-1 border-aqua"
              onClick={handleSignUp}
            >
              Sign Up
            </button>

            <div className="sign-in-buttons flex items-center space-x-0">
              <div className="flex">
                <button
                  className="discord-button text-aqua px-2 py-2 rounded-l transition duration-300 hover:bg-aqua hover:text-black border-1 border-aqua"
                  onClick={handleDiscordSignIn}
                >
                  <FaDiscord className="icon" style={{ fontSize: '1.5em' }} />
                </button>

                <button
                  className="github-button text-aqua px-2 py-2 rounded-r transition duration-300 hover:bg-aqua hover:text-black border-1 border-aqua"
                  onClick={handleGitHubSignIn}
                >
                  <FaGithub className="icon" style={{ fontSize: '1.5em' }} />
                </button>
              </div>
            </div>
          </div>

          <div className="mobile__menu cursor-pointer md:hidden">
            <span onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}>
              <i className="ri-menu-line text-white text-3xl"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
