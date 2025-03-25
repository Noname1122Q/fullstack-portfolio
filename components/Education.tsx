import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-4 font-semibold text-white">Education</h1>
      <div>
        <div className="border-l border-slate-400 flex flex-row mb-4">
          <img
            src="https://ssmet.in/wp-content/uploads/2024/05/ss-mody-vidya-vihar-school-logo.png"
            alt=""
            className="rounded-full size-16 md:size-24 mx-2"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-lg text-slate-100">
              Senior Secondary Education
            </h3>
            <p className="text-sm text-slate text-slate-400">
              SS Mody Vidya Vihar,Jhunjhunu, Rajathan
            </p>
            <p className="text-xs text-slate-700">2022 - 2023</p>
          </div>
        </div>
        <div className="border-l border-slate-400 flex flex-row mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
            alt=""
            className="rounded-full size-16 md:size-24 mx-2 "
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-lg text-slate-100">
              Bachelors in Computer Science
            </h3>
            <p className="text-sm text-slate text-slate-400">
              BITS Pilani, Pilani, Rajathan
            </p>
            <p className="text-xs text-slate-700">2024 - 2028</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
