import React, { useState } from "react";
import Accordion from "./Accordion";

const FaqSection = () => {
  const FAQs = [
    {
      question: "Is LinkGuard free to use?",
      answer:
        "Yes! LinkGuard is completely free to use. You can enjoy all its core security features without any subscription or hidden charges.",
    },
    {
      question: "Does LinkGuard work offline?",
      answer:
        "Absolutely. LinkGuard can detect and save URLs even when you’re offline, allowing you to process them later. Once your internet connection is back, you can simply open the app and scan the saved links for complete security analysis.",
    },
    {
      question: "What permissions does LinkGuard need?",
      answer:
        "LinkGuard requires SMS access to detect links directly from your text messages, it won’t function properly without it. The app also needs internet access to analyze URLs using trusted security APIs. These permissions are used strictly for protection purposes and your privacy always remains secure.",
    },
    {
      question: "Will LinkGuard work on all Android phones?",
      answer:
        "LinkGuard is compatible with most Android devices running Android 8.0 (Oreo) and above. For best performance, make sure your phone’s Auto-start setting is enabled for the app so background features work properly.",
    },
    {
      question: "Does LinkGuard protect me in real time?",
      answer:
        "Yes. LinkGuard automatically scans and alerts you in real time whenever a suspicious link is detected in your text messages.",
    },
  ];

  return (
    <section id="faqs" className="py-20">
      <div className="container mx-auto px-4 text-white xl:px-0">
        <div className="flex flex-col gap-4 items-center mb-10">
          <h3 className="font-semibold">FAQs</h3>
          <h2 className="text-xl font-momo text-heading text-center md:text-3xl xl:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-5">
          {FAQs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
