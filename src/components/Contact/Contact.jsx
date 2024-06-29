import React from "react";
import "./Contact.css";
import MessageIcon from "../../assests/msg-icon.png";
import MailIcon from "../../assests/mail-icon.png";
import PhoneIcon from "../../assests/phone-icon.png";
import LocationIcon from "../../assests/location-icon.png";
import WhiteArrow from "../../assests/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "abd710ff-1fd5-4be8-8e61-dcdb0165429a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Contact">
      <div className="ContactCol">
        <h3>
          Send us a message <img src={MessageIcon} alt="MessageIcon" />
        </h3>
        <p>
          We're here to help! If you have any questions or need further
          information, please don't hesitate to reach out to us. Whether you're
          a prospective student, current student, or simply curious about
          Edusity, our team is ready to assist you.
        </p>
        <ul>
          <li>
            <img src={MailIcon} alt="MailIcon" />
            Contact@Mo'men.Root
          </li>
          <li>
            <img src={PhoneIcon} alt="PhoneIcon" />
            +201028950440
          </li>
          <li>
            <img src={LocationIcon} alt="LocationIcon" />
            Egypt - Sharkia
          </li>
        </ul>
      </div>
      <div className="ContactCol">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            required
          ></textarea>
          <button type="submit" className="btn darkBtn">
            Submit now <img src={WhiteArrow} alt="WhiteArrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
