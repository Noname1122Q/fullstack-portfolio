import React from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Achievements from "./Achievements";

const Info = () => {
  return (
    <div className="w-full flex-1 pt-10 px-5 space-y-16">
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
    </div>
  );
};

export default Info;
