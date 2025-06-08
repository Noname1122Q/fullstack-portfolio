import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Clock,
  Cloud,
  Code,
  Computer,
  Database,
  FileCode,
  Film,
  GitBranch,
  Globe,
  Layout,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

const skills = [
  {
    title: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: <FileCode className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "TypeScript",
        icon: <Code className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Python",
        icon: <Terminal className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Java",
        icon: <Computer className="size-3 md:size-4 mr-2" />,
      },
    ],
    classes: "bg-blue-500 text-sky-400",
  },
  {
    title: "Web Development",
    items: [
      {
        name: "React",
        icon: <Code className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Next.js",
        icon: <Globe className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Node.js",
        icon: <Server className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "TailwindCSS",
        icon: <Code className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "ShadCN UI",
        icon: <Layout className="size-3 md:size-4 mr-2" />,
      },
    ],
    classes: "bg-green-500 text-[#90EE90]",
  },
  {
    title: "Backend & Tools",
    items: [
      {
        name: "PostgreSQL",
        icon: <Database className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Prisma",
        icon: <Code className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Inngest",
        icon: <Clock className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Modal",
        icon: <Server className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "FFmpeg",
        icon: <Film className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Git",
        icon: <GitBranch className="size-3 md:size-4 mr-2" />,
      },
    ],
    classes: "bg-rose-500 text-[#F08080]",
  },
  {
    title: "Others",
    items: [
      {
        name: "Google Cloud Storage",
        icon: <Cloud className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Next-Auth",
        icon: <ShieldCheck className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "REST APIs",
        icon: <Globe className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Serverless",
        icon: <Zap className="size-3 md:size-4 mr-2" />,
      },
    ],
    classes: "bg-yellow-500 text-yellow-300",
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
