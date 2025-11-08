import React from "react";
import linkguard from "../assets/images/image1.png";
const HeroSection = () => {
  return (
    <section className="pt-18 bg-linear-to-bl from-[#D9D9D9] via-[#548EB6] via-47% to-[#314172]">
      <div className="container mx-auto py-10 px-4 flex flex-col items-center lg:flex-row lg:h-[calc(100vh-72px)] xl:px-0">
        <div className="lg:w-full md:flex md:flex-col md:items-center lg:items-start">
          <p className="text-white text-xs lg:text-sm font-medium">
            A Mobile SMS Link Checker With Content Preview For Android Devices
          </p>
          <h1 className="text-4xl font-momo tracking-wider text-heading py-2 lg:text-5xl xl:text-6xl">
            LinkGuard
          </h1>
          <p className="text-white mb-4 text-pretty text-sm font-light  md:text-center lg:text-start lg:w-110">
            LinkGuard is your first line of defense against malicious links in
            SMS messages. Download our app today to protect yourself from
            potential threats and ensure your online safety.
          </p>
          <div className="flex gap-4">
            <button
              className="bg-white px-6 py-2 rounded-md border font-semibold cursor-pointer transition-all text-primary hover:scale-105 active:scale-95"
              onClick={() =>
                window.open(
                  "https://github.com/Siege-S/LinkChecker/releases/download/LinkGuard-v17.7.00/LinkGuard.ver.17.7.apk"
                )
              }
            >
              Download
            </button>
            <button
              className=" px-6 py-2 rounded-md border border-white text-white cursor-pointer font-semibold transition-all hover:scale-105 active:scale-95"
              onClick={() => (window.location.href = "#about")}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:w-full">
          <img
            className="py-10 object-fit lg:py-0"
            src={linkguard}
            alt="linkguard scanning SMS for malicious links"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
