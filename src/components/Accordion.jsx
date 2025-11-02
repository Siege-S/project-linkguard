import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-5" onClick={() => setIsOpen(!isOpen)}>
      <div className={`flex justify-between transition-all`}>
        <h4 className="font-semibold">{question}</h4>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-6 transition-all ${
            isOpen ? "scale-y-[1]" : "scale-y-[-1]"
          }`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      <p
        className={`${
          isOpen ? "max-h-100 pb-2" : "max-h-0"
        } text-sm font-light transition-all duration-300 overflow-hidden border-b`}
      >
        {answer}
      </p>
    </div>
  );
};

export default Accordion;
