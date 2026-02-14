import React from "react";

const Education = () => {
  return (
    <section className="flex flex-col max-w-3xl">
      <h1 className="text-3xl font-semibold text-white mb-8 tracking-tight">
        Education
      </h1>

      <div className="space-y-8">
        <div className="flex gap-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
            alt="BITS Pilani Logo"
            className="rounded-full size-14 md:size-20 object-contain p-1"
          />

          <div>
            <h3 className="text-lg font-semibold text-white">
              Bachelors in Computer Science
            </h3>
            <p className="text-slate-400 text-sm">
              BITS Pilani, Pilani, Rajasthan
            </p>
            <p className="text-xs text-slate-500 mt-1">2024 – 2028</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
