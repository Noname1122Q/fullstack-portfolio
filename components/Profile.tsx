"use client";

import { DownloadCloud, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { toast } from "sonner";
import ProfileImage from "@/assets/profile.png";
import Image from "next/image";

const Profile = () => {
  const onEmailCopy = () => {
    navigator.clipboard
      .writeText("uttamjangir1415@gmail.com")
      .then(() => toast.success("Email copied to clipboard"));
  };

  return (
    <section className="flex flex-col pt-16 pl-10 md:pl-20 w-full lg:h-screen">
      <Image
        src={ProfileImage}
        alt="Uttam Jangir"
        className="rounded-full size-36 border border-zinc-800"
      />

      <h1 className="text-4xl font-bold text-white mt-6 tracking-tight">
        Uttam Jangir
      </h1>

      <p className="mt-2 text-zinc-400 text-sm uppercase tracking-wide">
        Software Engineer · Backend Focused
      </p>

      <p className="mt-4 max-w-md text-zinc-400 text-sm leading-relaxed">
        I build scalable backend systems and production-ready web applications
        using Spring Boot, Next.js, and modern cloud infrastructure.
      </p>

      <div className="mt-6 space-y-2 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          Jhunjhunu, Rajasthan, India
        </div>

        <div
          onClick={onEmailCopy}
          className="flex items-center gap-2 hover:text-white cursor-pointer transition"
        >
          <Mail size={14} />
          uttamjangir1415@gmail.com
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <a href="/Uttam_Jangir_Resume.pdf" download>
          <Button className="rounded-md bg-zinc-800 hover:bg-zinc-700 text-white border-none">
            <DownloadCloud className="size-4 mr-2" />
            Download Resume
          </Button>
        </a>

        <Link
          href="https://github.com/Noname1122Q"
          target="_blank"
          className="text-zinc-500 hover:text-white transition"
        >
          <SiGithub size={20} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/uttam-jangir/"
          target="_blank"
          className="text-zinc-500 hover:text-white transition"
        >
          <SiLinkedin size={20} />
        </Link>
      </div>
    </section>
  );
};

export default Profile;
