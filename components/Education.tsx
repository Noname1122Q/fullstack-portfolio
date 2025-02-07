import { ChevronDown } from "lucide-react";
import React from "react";
import CertificateImage from "@/assets/certificate.png";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";

const Education = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-4 font-semibold text-white">Education</h1>
      <div>
        <div className="border-l border-slate-400 flex flex-row mb-4">
          <img
            src="https://ssmet.in/wp-content/uploads/2024/05/ss-mody-vidya-vihar-school-logo.png"
            alt=""
            className="rounded-full size-16 md:size-24 mx-2"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-lg text-slate-100">
              Senior Secondary Education
            </h3>
            <p className="text-sm text-slate text-slate-400">
              SS Mody Vidya Vihar,Jhunjhunu, Rajathan
            </p>
            <p className="text-xs text-slate-700">2022 - 2023</p>
          </div>
        </div>
        <div className="border-l border-slate-400 flex flex-row mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
            alt=""
            className="rounded-full size-16 md:size-24 mx-2 "
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-lg text-slate-100">
              Bachelors in Computer Science
            </h3>
            <p className="text-sm text-slate text-slate-400">
              BITS Pilani, Pilani, Rajathan
            </p>
            <p className="text-xs text-slate-700">2024 - 2028</p>
          </div>
        </div>
        <div className="border-l border-slate-400 flex flex-row mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwWJ7md2pCxMEnrzi5iFgvIbxmnLCaGpwzA&s"
            alt=""
            className="rounded-full size-16 md:size-24 mx-2 bg-white"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-medium text-lg text-slate-100">
              Web Development MERN Stack Certificate
            </h3>
            <p className="text-sm text-slate text-slate-400">
              Tutedude Online{" "}
              <Dialog>
                <DialogTrigger>
                  <span className="underline text-xs hover:cursor-pointer flex flex-row">
                    View Certificate <ChevronDown className="size-4" />
                  </span>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle></DialogTitle>
                  <Image
                    src={CertificateImage}
                    alt=""
                    className="rounded-lg object-contain"
                  />
                </DialogContent>
              </Dialog>
            </p>
            <p className="text-xs text-slate-700">2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
