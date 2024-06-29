import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Title from "./components/Title/Title";
import AboutUs from "./components/About us/AboutUs";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {

  const [play, SetPlay] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title subTitle={"our program"} Title={"what we offer"}/>
        <Program />
      </div>
      <AboutUs SetPlay={SetPlay}/>
      <Title subTitle={"Gallery"} Title={"campus photos"}/>
      <Campus/>
      <Title subTitle={"testimonials"} Title={"what student says"}/>
      <Testimonials/>
      <Title subTitle={"Contact us"} Title={"get in touch"}/>
      <Contact/>
      <Footer/>
      <VideoPlayer play={play} SetPlay={SetPlay} />
    </div>
  );
};

export default App;
