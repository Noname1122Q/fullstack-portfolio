import React from "react";

const achievements = [
  {
    title: "Winner - Website Design Competition",
    issuer: "College Web Design Club",
    year: "2025",
    description:
      "Awarded for designing and developing a responsive, user-focused web application under competitive constraints.",
  },
];

const Achievements = () => {
  return (
    <section className="flex flex-col max-w-3xl pb-6">
      <h1 className="text-3xl font-semibold text-white mb-6 tracking-tight">
        Achievements
      </h1>

      <div className="space-y-6">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/40"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-white font-semibold">{item.title}</h2>
              <span className="text-xs text-zinc-500">{item.year}</span>
            </div>

            <p className="text-sm text-zinc-400 mt-1">{item.issuer}</p>

            <p className="text-sm text-zinc-500 mt-3">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
