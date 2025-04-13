import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Code,
  Computer,
  Database,
  FileCode,
  Globe,
  Server,
  Terminal,
} from "lucide-react";

const skills = [
  {
    title: "Languages",
    items: [
      {
        name: "Javascript",
        icon: <FileCode className=" size-3 md:size-4 mr-2" />,
      },
      { name: "Typescript", icon: <Code className=" size-3 md:size-4 mr-2" /> },
      { name: "Python", icon: <Terminal className=" size-3 md:size-4 mr-2" /> },
      { name: "Java", icon: <Computer className=" size-3 md:size-4 mr-2" /> },
    ],
    classes: "bg-blue-500 text-sky-400",
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next", icon: <Globe className=" size-3 md:size-4 mr-2" /> },
      { name: "React", icon: <Code className=" size-3 md:size-4 mr-2" /> },
      { name: "Hono", icon: <Server className=" size-3 md:size-4 mr-2" /> },
      {
        name: "Express",
        icon: <Terminal className=" size-3 md:size-4 mr-2" />,
      },
    ],
    classes: "bg-green-500 text-[#90EE90]",
  },
  {
    title: "Backend",
    items: [
      { name: "Nodejs", icon: <Server className=" size-3 md:size-4 mr-2" /> },
      { name: "REST APIs", icon: <Globe className=" size-3 md:size-4 mr-2" /> },
      { name: "Clerk", icon: <Code className=" size-3 md:size-4 mr-2" /> },
      {
        name: "WebSockets",
        icon: <Terminal className=" size-3 md:size-4 mr-2" />,
      },
    ],
    classes: "bg-rose-500 text-[#F08080]",
  },
  {
    title: "Databases",
    items: [
      {
        name: "MongoDB",
        icon: <Database className=" size-3 md:size-4 mr-2" />,
      },
      {
        name: "PostgreSQL",
        icon: <Database className=" size-3 md:size-4 mr-2" />,
      },
      { name: "Prisma", icon: <Code className=" size-3 md:size-4 mr-2" /> },
      {
        name: "Drizzle",
        icon: <BookOpen className=" size-3 md:size-4 mr-2" />,
      },
    ],
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
                  "rounded-full font-bold border-none outline-none bg-opacity-40 ",
                  skill.classes
                )}
                variant={"outline"}
              >
                {item.icon}
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
