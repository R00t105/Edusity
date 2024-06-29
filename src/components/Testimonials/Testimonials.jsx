import React, { useRef } from "react";
import "./Testimonials.css";
import NextIcon from "../../assests/next-icon.png";
import BackIcon from "../../assests/back-icon.png";
import User1 from "../../assests/user-1.png";
import User2 from "../../assests/user-2.png";
import User3 from "../../assests/user-3.png";
import User4 from "../../assests/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="Testimonials">
      <img
        src={NextIcon}
        alt="Next Icon"
        className="nextBtn"
        onClick={slideForward}
      />
      <img
        src={BackIcon}
        alt="Back Icon"
        className="backBtn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User1} alt="User1" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing Edusity was the best decision of my life. The
                supportive faculty and hands-on learning experiences have truly
                prepared me for my career. Edusity offers an incredible
                community and countless opportunities for growth.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User2} alt="User2" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing Edusity was the best decision of my life. The
                supportive faculty and hands-on learning experiences have truly
                prepared me for my career. Edusity offers an incredible
                community and countless opportunities for growth.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User3} alt="User3" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing Edusity was the best decision of my life. The
                supportive faculty and hands-on learning experiences have truly
                prepared me for my career. Edusity offers an incredible
                community and countless opportunities for growth.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={User4} alt="User4" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing Edusity was the best decision of my life. The
                supportive faculty and hands-on learning experiences have truly
                prepared me for my career. Edusity offers an incredible
                community and countless opportunities for growth.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
