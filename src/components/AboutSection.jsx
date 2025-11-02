import React from "react";
import mockUp from "../assets/images/mockUp1.png";
import logoVirusTotal from "../assets/logo/virusTotal.svg";
import logoScreenshot from "../assets/logo/screenshotmachine.png";
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-white xl:px-0">
        <div className="flex flex-col gap-4 items-center mb-10">
          <h3 className="font-semibold">About</h3>
          <h2 className="text-xl font-momo text-heading text-center md:text-3xl xl:text-4xl">
            What is Linkguard?
          </h2>
        </div>
        <div className="lg:flex ">
          <div className="flex justify-center lg:flex-1 mb-10">
            <img className="object-fit max-h-113" src={mockUp} />
          </div>
          <div className="flex flex-col gap-10 lg:flex-1">
            <p className="text-sm text-pretty font-light">
              LinkGuard is an intelligent Android app designed to protect users
              from smishing attacks hidden in text messages. It automatically
              detects links from incoming SMS, analyzes them in real time using
              trusted security APIs, and alerts you if a link appears unsafe.{" "}
              <br /> <br /> Beyond detection, LinkGuard also provides visual
              screenshot previews of websites, allowing you to see what’s behind
              a link before opening it. Even when you’re offline, it safely
              stores unprocessed links and when your internet connection is
              back, you can open the app and scan the saved links.
              <br /> <br /> With LinkGuard, you get an extra layer of security
              keeping your personal data, finances, and peace of mind safe from
              online threats. <br />
            </p>

            <div className="space-y-4">
              <p className="font-semibold">
                Linkguard is powered by trusted technologies
              </p>
              <div className="flex gap-5">
                <img src={logoVirusTotal} />
                <img src={logoScreenshot} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
