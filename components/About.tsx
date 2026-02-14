import React from "react";

const About = () => {
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = calculateAge("2006-09-21");

  return (
    <section className="flex flex-col max-w-3xl">
      <h1 className="text-3xl font-semibold text-white mb-4 tracking-tight">
        About Me
      </h1>

      <div className="space-y-4 text-slate-400 leading-relaxed text-[15px]">
        <p>
          I&apos;m a{" "}
          <span className="text-white font-medium">
            {age}-year-old Software Engineer{" "}
          </span>
          focused on building scalable backend systems and production-ready web
          applications. I enjoy transforming ideas into deployable products with
          clean architecture and thoughtful system design.
        </p>

        <p>
          Currently pursuing a{" "}
          <span className="text-white font-medium">
            Bachelor&apos;s in Computer Science at BITS Pilani
          </span>
          , I’ve built full-stack SaaS platforms, asynchronous processing
          systems, and containerized Spring Boot services deployed to the cloud.
        </p>

        <p>
          My strengths lie in backend architecture, API integrations,
          authentication flows, CI/CD pipelines, and designing systems that are
          reliable and scalable.
        </p>

        <p>
          Outside engineering, I enjoy chess and strategic problem-solving —
          disciplines that influence how I approach systems thinking and
          decision-making.
        </p>
      </div>
    </section>
  );
};

export default About;
