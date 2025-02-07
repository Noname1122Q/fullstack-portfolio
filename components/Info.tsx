import React from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

const Info = () => {
  return (
    <div className="w-full h-screen flex-1 pt-10 px-5">
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
};

export default Info;
