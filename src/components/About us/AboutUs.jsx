import React from "react";
import "./AboutUs.css";
import AboutImage from "../../assests/about.png";
import PlayIcon from '../../assests/play-icon.png'
import Title from "../Title/Title";

const AboutUs = ({SetPlay}) => {
  return (
    <div className="AboutUs">
      <div className="aboutUsLeft">
        <img src={AboutImage} alt="About Us" className="AboutUsImage" />
        <img src={PlayIcon} alt="PlayIcon" className="PlayIcon" onClick={() => {SetPlay(true)}}/>
      </div>
      <div className="aboutUsRight">
          <h3>about university</h3>
          <h2>nuturing tomorrow's leaders today</h2>
        <p>
          we are committed to excellence in education, research, and community
          engagement. Founded in [Year], our institution has grown into a
          renowned center for learning,
          </p>
          <p>
          known for its innovative programs and inclusive atmosphere. Our
          faculty consists of distinguished scholars and industry experts
          dedicated to mentoring the next generation of leaders.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
