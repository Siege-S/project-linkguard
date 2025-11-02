import React from "react";
import logoVirusTotal from "../assets/logo/virusTotal.svg";
import logoLG from "../assets/logo/logo-lg.png";
import logoScreenshot from "../assets/logo/screenshotmachine.png";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="py-10 bg-secondary border-t-2 border-black/30">
      <div className="container mx-auto px-4 text-white xl:px-0">
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <div>
            <p className="text-lg text-heading font-bold md:w-1/2 md:text-xl xl:text-3xl">
              Protect Yourself From Smishing and Stay Safe Online
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-1 items-center">
              <div className="overflow-hidden rounded-full bg-white">
                <img className="w-10 py-2 px-1" src={logoLG} alt="linkguard" />
              </div>

              <span className="font-momo text-lg">LinkGuard</span>
            </div>
            <div className="flex gap-2 items-center">
              <IoMdMail className="size-5" />
              <span>linkguard0311@gmail.com</span>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex justify-center text-white/70">
          <span>© Copyright 2025 LinkGuard. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
