"use client";
import { Dot, Link2 } from "lucide-react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

const projectDetails = [
  {
    title: "Quizy",
    image: "/projects/quizy.png",
    stack: ["Next", "Postgres", "Gemini"],
    points: [
      "An AI-powered platform for creating and participating in quizzes.",
      "Allows users to generate quizzes on any topic using AI technology.",
      "Provides detailed score breakdowns and result analysis for every quiz.",
      "Enables users to participate in quizzes created by others.",
    ],
    hostedLink: "https://quizy-flame.vercel.app/",
    githubLink: "https://github.com/Noname1122Q/Quizy",
    isUnderDevelopment: false,
  },
  {
    title: "Recommendation Algorithm",
    image: "/projects/nfx.png",
    stack: ["Python", "Jupyter", "Pandas"],
    points: [
      "Recommends personalized movie suggestions based on user preferences.",
      "Processes large datasets efficiently by reading complete CSV files.",
      "Utilizes the Pandas library for advanced data manipulation and analysis.",
      "Successfully sold the algorithm to a computer teacher for practical use.",
    ],
    hostedLink: "",
    githubLink: "https://github.com/Noname1122Q/Netflix-Recommendation",
    isUnderDevelopment: false,
  },
  {
    title: "Artsy Home Decor",
    image: "/projects/ecom.png",
    stack: ["Next", "Authjs", "Postgres"],
    points: [
      "Website for home decor startup that I am planning to launch.",
      "Best authentication practices including 2FA.",
      "Seperate dashboards for admin and customer.",
      "Modular UI components to provide an easy to update UI.",
    ],
    hostedLink: "",
    githubLink: "https://github.com/Noname1122Q/artsy-store",
    isUnderDevelopment: true,
  },
  {
    title: "Effortless UI",
    image: "/projects/cl.png",
    stack: ["Next", "ShadcnUI"],
    points: [
      "A personal component library aimed at streamlining development.",
      "Offers a curated collection of reusable UI components and functions.",
      "Facilitates quick integration of third-party services into projects.",
      "Designed to significantly reduce development time for web applications.",
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
      <div>
        {projectDetails.map((project, idx) => (
          <div
            key={idx}
            className="border-l border-slate-400 flex flex-col mb-4"
          >
            <div className=" flex flex-row mb-4">
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={70}
                    width={70}
                    className="lg:w-auto lg:h-auto rounded-lg aspect-auto mx-2 hover:cursor-pointer hover:scale-110 transition-all duration-400"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle aria-describedby={undefined}></DialogTitle>
                  <div className="min-w-80 min-h-80 aspect-auto">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fill rounded-lg w-auto h-auto "
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <div className="flex flex-col justify-center">
                <h3 className="font-medium md:text-lg flex md:flex-row flex-col text-slate-100 mb-2">
                  {project.title}
                  <span className="font-semibold text-sm text-center my-auto text-blue-500">
                    {project.isUnderDevelopment && "(Under Development)"}
                  </span>
                </h3>
                <div className="flex flex-row gap-3">
                  {project.stack.map((item) => (
                    <Badge
                      key={item}
                      className={
                        "rounded-full font-bold border-slate-400 text-sm text-slate text-slate-400"
                      }
                      variant={"outline"}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <p className="flex flex-row gap-4 py-2">
                  {project.githubLink != "" && (
                    <Link href={project.githubLink}>
                      <SiGithub className="size-5 text-gray-400 hover:text-white hover:cursor-pointer transition-colors duration-200" />
                    </Link>
                  )}
                  {project.hostedLink != "" && (
                    <Link href={project.hostedLink}>
                      <Link2 className="size-5 text-gray-400 hover:text-white hover:cursor-pointer transition-colors duration-200" />
                    </Link>
                  )}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <ul className="custom-list flex flex-col ml-2 mb-1">
                {project.points.map((point, i) => (
                  <li
                    className="text-slate-300 font-medium text-sm py-1 flex md:text-center "
                    key={i}
                  >
                    <Dot /> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
