"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Dot, Link2 } from "lucide-react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const projectDetails = [
  {
    title: "Quizy",
    stack: ["Next.js", "PostgreSQL", "Gemini AI"],
    description:
      "An AI-powered platform for creating and participating in quizzes.",
    features: [
      "Generate quizzes on any topic using AI.",
      "Detailed score breakdowns and result analysis.",
      "Participate in quizzes created by others.",
    ],
    hostedLink: "https://quizy-flame.vercel.app/",
    githubLink: "https://github.com/Noname1122Q/Quizy",
    isUnderDevelopment: false,
  },
  {
    title: "Recommendation Algorithm",
    stack: ["Python", "Jupyter Notebook", "Pandas"],
    description: "A recommendation system for personalized movie suggestions.",
    features: [
      "Processes large datasets efficiently.",
      "Utilizes Pandas for advanced data manipulation.",
      "Successfully sold for practical use.",
    ],
    hostedLink: "",
    githubLink: "https://github.com/Noname1122Q/Netflix-Recommendation",
    isUnderDevelopment: false,
  },
  {
    title: "Effortless UI",
    stack: ["Next.js", "ShadCN UI"],
    description: "A personal component library for rapid UI development.",
    features: [
      "Collection of reusable UI components.",
      "Quick integration with third-party services.",
      "Reduces development time significantly.",
    ],
    hostedLink: "https://effortless-ui-wheat.vercel.app/",
    githubLink: "https://github.com/Noname1122Q/EffortlessUI",
    isUnderDevelopment: false,
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-4 font-semibold text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {projectDetails.map((project, idx) => (
          <Card key={idx} className="bg-transparent text-white border-gray-700">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {project.title}
                {project.isUnderDevelopment && (
                  <span className="text-sm text-blue-400">
                    (Under Development)
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.stack.map((tech, i) => (
                  <Badge
                    key={i}
                    className="bg-gray-700 text-gray-300 border-none rounded-full text-xs px-2 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="list-none space-y-1 text-gray-400 text-sm">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Dot size={16} /> {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-start gap-4 mt-3">
                {project.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    <SiGithub className="size-6" />
                  </Link>
                )}
                {project.hostedLink && (
                  <Link
                    href={project.hostedLink}
                    target="_blank"
                    className="text-gray-400 hover:text-white"
                  >
                    <Link2 className="size-6" />
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
