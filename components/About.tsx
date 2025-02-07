import React from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl mb-3 font-semibold text-white">About Me</h1>
      <div className="gap-2 py-4 text-slate-400">
        <p className="py-1">
          I&apos;m an 18-year-old full-stack developer with strong
          communication, development, and debugging skills. I enjoy solving
          challenging problems and building exciting, user-friendly
          applications.
        </p>
        <p className="py-1">
          Currently pursuing a{" "}
          <b>Bachelor's in Computer Science at BITS Pilani</b>, I&apos;m seeking
          an internship to gain industry experience and further enhance my
          development skills.
        </p>
        <p className="py-1">
          In my free time, I enjoy playing chess—aspiring to become a FIDE-rated
          IM—and exploring video games that spark creativity and
          problem-solving.
        </p>
        <p className="py-1">
          My long-term goal is to continually grow as a developer and transition
          into a full-time full-stack development role after completing my
          degree.
        </p>
      </div>
    </div>
  );
};

export default About;
