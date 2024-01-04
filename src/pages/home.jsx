import React, { Fragment } from "react";

import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import TextBox from "../components/Feature-section/TextBox";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Open from "../components/Open/Opens"
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Company from "../components/Company-section/Company";


const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
    
      <AboutUs />
      <TextBox/>
      <Courses />
      <ChooseUs />
      
      <FreeCourse />
      <Testimonials />
      <Open/>
      <Company/>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default Home;
