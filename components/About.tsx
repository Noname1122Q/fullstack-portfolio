import React from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl mb-3 font-semibold text-white">About Me</h1>
      <div className="gap-2 py-4 text-slate-400">
        <p className="py-1">
          I&apos;m an 19-year-old{" "}
          <b>software developer and DevOps enthusiast</b> with strong
          communication, development, and debugging skills. I enjoy solving
          challenging problems, building user-friendly applications, and
          automating the infrastructure that powers them.
        </p>
        <p className="py-1">
          Currently pursuing my{" "}
          <b>Bachelor&apos;s in Computer Science at BITS Pilani</b>, I&apos;m
          seeking an internship to gain industry experience—whether in software
          development or DevOps/cloud engineering—while sharpening my skills in
          <b> CI/CD, Docker, Kubernetes, and cloud platforms</b>.
        </p>
        <p className="py-1">
          In my free time, I enjoy playing chess—aspiring to become a FIDE-rated
          IM and exploring video games that spark creativity and
          problem-solving.
        </p>
        <p className="py-1">
          My long-term goal is to grow as a well-rounded engineer, contributing
          both as a developer and in DevOps, bridging the gap between code and
          infrastructure to deliver scalable, reliable systems.
        </p>
      </div>
    </div>
  );
};

export default About;
