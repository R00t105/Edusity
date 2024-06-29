import React from "react";
import "./Program.css";
import Program1 from "../../assests/program-1.png";
import Program2 from "../../assests/program-2.png";
import Program3 from "../../assests/program-3.png";
import ProgramIcon1 from "../../assests/program-icon-1.png";
import ProgramIcon2 from "../../assests/program-icon-2.png";
import ProgramIcon3 from "../../assests/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={Program1} alt="image1" />
        <div className="caption">
          <img src={ProgramIcon1} alt="Prog1" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program2} alt="image2" />
        <div className="caption">
          <img src={ProgramIcon2} alt="Prog2" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={Program3} alt="image3" />
        <div className="caption">
          <img src={ProgramIcon3} alt="Prog3" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
