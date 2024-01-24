import React from "react";
import { PlayCircle } from "react-feather";

const HeroSection = () => {
  return (
    <section className="hero-section bg-back flex flex-col items-center justify-center text-center w-full p-16">
      <div className="hero__content text-center">
        <h2 className="text-6xl font-bold leading-tight  text-white">
          <span className="line1 whitespace-nowrap">The open source, fullstack</span>{" "}
          <span className="line2 whitespace-nowrap ml-48 text-yellow-500">Monitoring Platform.</span>
        </h2>
      </div>
      <div className="buttons flex gap-4 pl-16 mt-3 mb-12">
        <button className="btn-get-started bg-blue-500 text-black font-bold px-9 py-3 rounded transition duration-300 hover:bg-violet-500 hover:text-white">
          Get Started
        </button>
        <button className="btn-live-demo flex items-center border border-white text-white font-bold rounded cursor-pointer transition duration-300 px-9 py-3 hover:bg-pink-500 hover:text-black">
          <PlayCircle className="icon mr-2" />
          Live Demo
        </button>
      </div>
      <button className="request-demo flex items-center justify-center bg-back text-white px-4 py-2 mb-7 font-bold rounded cursor-pointer mx-auto  pr-1 transition duration-300 h-full hover:bg-indigo-900">
        <p className="mr-2   mb-0">Request a Demo Call</p>
        <span className="arrow-icon text-white text-1.5rem">→</span>
      </button>
    </section>
  );
};

export default HeroSection;

