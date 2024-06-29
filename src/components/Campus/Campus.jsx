import React from "react";
import "./Campus.css";
import Gallery1 from "../../assests/gallery-1.png";
import Gallery2 from "../../assests/gallery-2.png";
import Gallery3 from "../../assests/gallery-3.png";
import Gallery4 from "../../assests/gallery-4.png";
import WhiteArrow from '../../assests/white-arrow.png'

const Campus = () => {
  return (
    <div className="Campus">
      <div className="gallery">
        <img src={Gallery1} alt="Gallery1" />
        <img src={Gallery2} alt="Gallery2" />
        <img src={Gallery3} alt="Gallery3" />
        <img src={Gallery4} alt="Gallery4" />
      </div>
      <button className="btn darkBtn">See more here <img src={WhiteArrow} alt="White Arrow"/></button>
    </div>
  );
};

export default Campus;
