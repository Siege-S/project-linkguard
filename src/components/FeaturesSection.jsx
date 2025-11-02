import React from "react";
import iconSecurity from "../assets/icon/icon_security.svg";
const FeaturesSection = () => {
  const features = [
    {
      text: "Automatic Link Detection",
      description:
        "Instantly detects links from incoming SMS messages, identifying suspicious or malicious URLs before you even tap them.",
    },
    {
      text: "Screenshot Previews",
      description:
        "Linkguard automatically generates website previews so you can see what’s behind the link—without risking your safety.",
    },
    {
      text: "Real-time Security Analysis",
      description:
        "Each detected link is analyzed instantly using trusted security APIs to determine if it’s safe or harmful.",
    },
    {
      text: "User-Friendly Interface",
      description:
        "LinkGuard offers an intuitive interface that makes it easy for anyone to use, no technical skills required.",
    },
    {
      text: "Offline Processing",
      description:
        "No internet? No problem. The app securely stores unprocessed links and automatically scans them once you’re back online.",
    },
    {
      text: "Alert Notifications",
      description:
        "Detects potential threats in real time, notifies you immediately, and delivers a complete analysis of the results.",
    },
  ];
  return (
    <section id="features" className="bg-primary py-20">
      <div className="container mx-auto px-4 text-white xl:px-0">
        <div className="flex flex-col items-center gap-4 mb-10">
          <h3 className="font-semibold">Features</h3>
          <h2 className="text-xl font-momo text-heading text-center md:text-3xl xl:text-4xl">
            Key Features That Keeps You Safe
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              className="flex flex-col md:items-center gap-2 py-4"
              key={index}
            >
              <img className="size-10" src={iconSecurity} />
              <h3 className="text-lg font-momo text-heading">{feature.text}</h3>
              <p className="md:text-center text-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
