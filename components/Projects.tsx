"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const projectDetails = [
  {
    title: "SpendStats",
    tagline: "AI-powered financial analytics SaaS",
    stack: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "OAuth"],
    highlights: [
      "Parsed bank statement PDFs using LLM APIs",
      "Secure multi-user auth with Google OAuth",
      "Interactive analytics dashboard with filtering & CRUD",
      "Designed scalable relational database schema",
    ],
    live: "https://spend-stats.vercel.app/",
    github: "https://github.com/Noname1122Q/spend-stats",
  },
  {
    title: "YouTube Broadcaster",
    tagline: "Multi-channel upload & analytics platform",
    stack: ["Next.js", "YouTube API", "OAuth 2.0", "Scheduled Jobs"],
    highlights: [
      "Multi-account OAuth integration",
      "Automated video scheduling system",
      "Unified cross-channel analytics dashboard",
      "Managed API orchestration & rate limits",
    ],
    live: "",
    github: "https://github.com/Noname1122Q/youtube-automation",
  },
  {
    title: "Projectile Simulation Engine",
    tagline: "Cloud-deployed physics computation backend",
    stack: ["Spring Boot", "Docker", "Azure", "CI/CD"],
    highlights: [
      "High-performance trajectory computation engine",
      "Containerized & deployed on Azure",
      "Automated CI/CD pipelines",
      "Real-time frontend visualization integration",
    ],
    live: "https://physics-simulations-five.vercel.app/",
    github: "https://github.com/Noname1122Q/physics-simulations",
  },
];

const Projects = () => {
  return (
    <section className="flex flex-col max-w-6xl">
      <h1 className="text-3xl font-semibold text-white mb-8 tracking-tight">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectDetails.map((project, idx) => (
          <Card
            key={idx}
            className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl transition hover:border-zinc-700 hover:shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-zinc-400 mt-1">{project.tagline}</p>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-zinc-400 hover:text-white"
                  >
                    <SiGithub size={18} />
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-zinc-400 hover:text-white"
                  >
                    <ExternalLink size={18} />
                  </Link>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.stack.map((tech, i) => (
                <Badge
                  key={i}
                  className="bg-zinc-800 text-zinc-300 border-none rounded-full text-xs px-3 py-1"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              {project.highlights.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
