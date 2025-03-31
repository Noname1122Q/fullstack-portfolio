"use client";
import { DownloadCloud, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { toast } from "sonner";
import ProfileImage from "@/assets/profile.png";
import Image from "next/image";

const Profile = () => {
  const onEmailCopy = () => {
    navigator.clipboard
      .writeText("uttamjangir1415@gmail.com")
      .then(() => toast.success("Coppied to Clipboard"));
  };

  return (
    <div className="flex flex-col pt-10 pl-20 w-full lg:h-screen mb-8 lg:mb-0">
      <Image src={ProfileImage} alt="" className="rounded-full size-36" />
      <h1 className="text-2xl text-white font-semibold pt-4">Uttam Jangir</h1>
      <p className="mb-3 text-sm text-gray-500">Software Developer</p>
      <p className="text-sm text-gray-500 font-medium flex flex-row p-1">
        <MapPin className="size-4 mr-2" /> Jhunjhunu, Rajasthan, India
      </p>
      <p className="text-sm text-gray-500 font-medium flex flex-row p-1">
        <Mail
          onClick={onEmailCopy}
          className="size-4 mr-2 hover:scale-110 hover:cursor-pointer hover:text-white transition-colors duration-300"
        />{" "}
        uttamjangir1415@gmail.com
      </p>
      <p className="text-sm text-gray-500 font-medium flex flex-row p-1">
        <Phone className="size-4 mr-2" /> +91 9257733088
      </p>

      <div className="flex mt-4">
        <a href="/resume.pdf" download>
          <Button
            className="text-white rounded-sm bg-transparent"
            variant={"outline"}
          >
            <DownloadCloud className="size-4 mr-2" />
            Resume
          </Button>
        </a>
        <div className="ml-4 flex items-center justify-center gap-2 text-gray-500">
          <Link href={"https://github.com/Noname1122Q"}>
            <SiGithub className="size-5 hover:text-white transition-colors duration-200" />
          </Link>
          <Link href={"https://www.linkedin.com/in/uttam-jangir/"}>
            <SiLinkedin className="size-5 hover:text-white transition-colors duration-200" />
          </Link>
          <Link href={"https://www.instagram.com/uttam_jangir1122/"}>
            <SiInstagram className="size-5 hover:text-white transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
