import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

const skills = [
  {
    title: "Languages",
    items: ["Javascript", "Typescript", "Python", "C", "C++"],
    classes: "bg-blue-500 text-sky-400",
  },
  {
    title: "Frameworks",
    items: ["Next", "React", "Hono", "Express"],
    classes: "bg-green-500 text-[#90EE90]",
  },
  {
    title: "Backend",
    items: ["Nodejs", "REST APIs", "Clerk", "WebSockets"],
    classes: "bg-rose-500 text-[#F08080]",
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Prisma", "Drizzle"],
    classes: "bg-purple-500 text-[#9370DB]",
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl mb-3 font-semibold text-white">Skills</h1>
      {skills.map((skill, idx) => (
        <div className="flex flex-col py-2" key={idx}>
          <h3 className="text-white font-medium mb-1">{skill.title}</h3>
          <div className="flex flex-row gap-2">
            {skill.items.map((item, i) => (
              <Badge
                key={i}
                className={cn(
                  "rounded-full font-bold border-none outline-none bg-opacity-40",
                  skill.classes
                )}
                variant={"outline"}
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
