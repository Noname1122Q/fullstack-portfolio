import { cn } from "@/lib/utils";
import {
  Box,
  Cloud,
  Code,
  Coffee,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  GitCommit,
  Globe,
  Link,
  Package,
  Server,
  Terminal,
  Zap,
  Layers,
  Workflow,
} from "lucide-react";
import { Badge } from "./ui/badge";

const skills = [
  {
    title: "Core Languages",
    items: [
      { name: "Java", icon: <Coffee className="size-3 md:size-4 mr-2" /> },
      { name: "TypeScript", icon: <Code className="size-3 md:size-4 mr-2" /> },
      {
        name: "JavaScript",
        icon: <FileCode className="size-3 md:size-4 mr-2" />,
      },
      { name: "Python", icon: <Cpu className="size-3 md:size-4 mr-2" /> },
      { name: "Bash", icon: <Terminal className="size-3 md:size-4 mr-2" /> },
    ],
    classes: "bg-blue-500 text-sky-300",
  },
  {
    title: "Frontend & Full Stack",
    items: [
      { name: "Next.js", icon: <Globe className="size-3 md:size-4 mr-2" /> },
      { name: "React", icon: <Layers className="size-3 md:size-4 mr-2" /> },
      { name: "REST APIs", icon: <Link className="size-3 md:size-4 mr-2" /> },
      { name: "Prisma", icon: <Code className="size-3 md:size-4 mr-2" /> },
    ],
    classes: "bg-yellow-500 text-yellow-300",
  },
  {
    title: "Backend & Systems",
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
      { name: "WebSockets", icon: <Zap className="size-3 md:size-4 mr-2" /> },
      {
        name: "Authentication (OAuth)",
        icon: <Workflow className="size-3 md:size-4 mr-2" />,
      },
    ],
    classes: "bg-rose-500 text-rose-300",
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: <Box className="size-3 md:size-4 mr-2" /> },
      { name: "CI/CD", icon: <GitBranch className="size-3 md:size-4 mr-2" /> },
      {
        name: "Microsoft Azure",
        icon: <Cloud className="size-3 md:size-4 mr-2" />,
      },
      { name: "Git", icon: <GitCommit className="size-3 md:size-4 mr-2" /> },
    ],
    classes: "bg-purple-500 text-purple-300",
  },
];

const Skills = () => {
  return (
    <section className="flex flex-col max-w-4xl">
      <h1 className="text-3xl font-semibold text-white mb-3 tracking-tight">
        Skills
      </h1>

      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <h3 className="font-normal mb-3 text-lg tracking-wide text-slate-400">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <Badge
                  key={i}
                  className={cn(
                    "rounded-full font-medium border-none bg-opacity-40 px-3 py-1 text-xs md:text-sm transition hover:scale-105",
                    skill.classes,
                  )}
                  variant="outline"
                >
                  {item.icon}
                  {item.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
