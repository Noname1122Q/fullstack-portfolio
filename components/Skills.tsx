import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import {
  Activity,
  Box,
  Clock,
  Cloud,
  CloudRain,
  Code,
  Coffee,
  Computer,
  Cpu,
  Database,
  FileCode,
  Film,
  GitBranch,
  GitCommit,
  Globe,
  Grid,
  Layout,
  Link,
  Package,
  Server,
  ShieldCheck,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

// const skills = [

//   {
//     title: "Languages",
//     items: [
//       {
//         name: "JavaScript",
//         icon: <FileCode className="size-3 md:size-4 mr-2" />,
//       },
//       { name: "TypeScript", icon: <Code className="size-3 md:size-4 mr-2" /> },
//       { name: "Python", icon: <Terminal className="size-3 md:size-4 mr-2" /> },
//       { name: "Java", icon: <Computer className="size-3 md:size-4 mr-2" /> },
//     ],
//     classes: "bg-blue-500 text-sky-400",
//   },
//   {
//     title: "Backend & Databases",
//     items: [
//       { name: "Node.js", icon: <Server className="size-3 md:size-4 mr-2" /> },
//       {
//         name: "PostgreSQL",
//         icon: <Database className="size-3 md:size-4 mr-2" />,
//       },
//       { name: "Prisma", icon: <Code className="size-3 md:size-4 mr-2" /> },
//       { name: "Inngest", icon: <Clock className="size-3 md:size-4 mr-2" /> },
//       { name: "Modal", icon: <Server className="size-3 md:size-4 mr-2" /> },
//       { name: "Springboot", icon: <Film className="size-3 md:size-4 mr-2" /> },
//     ],
//     classes: "bg-rose-500 text-[#F08080]",
//   },
//   {
//     title: "DevOps & Cloud",
//     items: [
//       {
//         name: "Google Cloud",
//         icon: <Cloud className="size-3 md:size-4 mr-2" />,
//       },
//       { name: "Docker", icon: <Box className="size-3 md:size-4 mr-2" /> },
//       { name: "Kubernetes", icon: <Grid className="size-3 md:size-4 mr-2" /> },
//       {
//         name: "CI/CD",
//         icon: <GitBranch className="size-3 md:size-4 mr-2" />,
//       },
//       { name: "Serverless", icon: <Zap className="size-3 md:size-4 mr-2" /> },
//     ],
//     classes: "bg-purple-500 text-purple-300",
//   },
//   {
//     title: "Other Tools & Concepts",
//     items: [
//       {
//         name: "NextAuth",
//         icon: <ShieldCheck className="size-3 md:size-4 mr-2" />,
//       },
//       { name: "REST APIs", icon: <Globe className="size-3 md:size-4 mr-2" /> },
//       {
//         name: "Git",
//         icon: <GitBranch className="size-3 md:size-4 mr-2" />,
//       },
//       {
//         name: "ffmpeg",
//         icon: <Film className="size-3 md:size-4 mr-2" />,
//       },
//     ],
//     classes: "bg-yellow-500 text-yellow-300",
//   },
// ];

const skills = [
  {
    title: "Languages",
    items: [
      { name: "Java", icon: <Coffee className="size-3 md:size-4 mr-2" /> },
      { name: "Bash", icon: <Terminal className="size-3 md:size-4 mr-2" /> },
      {
        name: "JavaScript",
        icon: <FileCode className="size-3 md:size-4 mr-2" />,
      },
      { name: "TypeScript", icon: <Code className="size-3 md:size-4 mr-2" /> },
      { name: "Python", icon: <Cpu className="size-3 md:size-4 mr-2" /> },
    ],
    classes: "bg-blue-500 text-sky-400",
  },
  {
    title: "DevOps & Cloud",
    items: [
      {
        name: "Google Cloud",
        icon: <Cloud className="size-3 md:size-4 mr-2" />,
      },
      {
        name: "Microsoft Azure",
        icon: <CloudRain className="size-3 md:size-4 mr-2" />,
      },
      { name: "Docker", icon: <Box className="size-3 md:size-4 mr-2" /> },
      {
        name: "GitHub Actions",
        icon: <GitBranch className="size-3 md:size-4 mr-2" />,
      },
    ],
    classes: "bg-purple-500 text-purple-300",
  },
  {
    title: "Backend & Tools",
    items: [
      {
        name: "Spring Boot",
        icon: <Server className="size-3 md:size-4 mr-2" />,
      },
      { name: "Node.js", icon: <Package className="size-3 md:size-4 mr-2" /> },
      {
        name: "PostgreSQL",
        icon: <Database className="size-3 md:size-4 mr-2" />,
      },
      { name: "Prisma", icon: <Code className="size-3 md:size-4 mr-2" /> },
      { name: "Git", icon: <GitCommit className="size-3 md:size-4 mr-2" /> },
    ],
    classes: "bg-rose-500 text-[#F08080]",
  },
  {
    title: "Others",
    items: [
      { name: "Next.js", icon: <Globe className="size-3 md:size-4 mr-2" /> },
      { name: "Serverless", icon: <Zap className="size-3 md:size-4 mr-2" /> },
      { name: "REST APIs", icon: <Link className="size-3 md:size-4 mr-2" /> },
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
          <div className="grid grid-cols-3 md:flex md:flex-row gap-2">
            {skill.items.map((item, i) => (
              <Badge
                key={i}
                className={cn(
                  "rounded-full font-bold border-none outline-none bg-opacity-40 whitespace-nowrap col-span-1",
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
