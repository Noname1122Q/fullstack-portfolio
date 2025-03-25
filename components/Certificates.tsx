import { cn } from "@/lib/utils";
import React from "react";

const certificates = [
  {
    title: "Tutedude MERN Stack",
    description:
      "A certificate of completion for the Tutedude MERN stack course.",
    src: "/certificates/certificate.png",
  },
  {
    title: "Winning Website Design Competition",
    description:
      "Awarded certificate for winning a club hosted website design competition.",
    src: "/certificates/website-design.png",
  },
];

const Certificates = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl mb-3 font-semibold text-white">Certificates</h1>
      <div className="space-y-2 flex flex-col">
        {certificates.map((certificate, i) => (
          <div
            key={i}
            className={cn(
              "flex p-2",
              i % 2 == 0 ? "flex-row" : "flex-row-reverse"
            )}
          >
            <div className="object-cover">
              <img
                src={certificate.src}
                className="rounded-md w-full md:w-[450px] h-[250px]"
              />
            </div>
            <div className="flex-col items-center justify-center space-y-2 hidden md:flex text-wrap text-center p-4">
              <h2 className="text-lg font-semibold text-slate-300">
                {certificate.title}
              </h2>
              <p className="text-sm text-slate-500">
                {certificate.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
