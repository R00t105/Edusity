import React from "react";
import "./Hero.css";
import darkArrow from '../../assests/dark-arrow.png'

const Hero = () => {
  return (
    <div className="Hero">
      <div className="HeroText">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills and experiences needed to excel in the dynamic field
          of education
        </p>
        <button className="btn">
          Explore more{" "}
          <img src={darkArrow} alt="dark arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
