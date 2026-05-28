import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

/* ---------------- FAQ DATA ---------------- */

const FAQ_DATA = [
  {
    question:
      "What is the eligibility for BBA admission at Indira University?",
    answer:
      "You need to have passed 10+2 from any recognized board with minimum 45% aggregate. All streams (Commerce, Science, Arts) are eligible.",
  },
  {
    question: "Which entrance exams are accepted for BBA admission?",
    answer:
      "We accept CUET and conduct our own Indira University Common Entrance Test (IU-CET).",
  },
  {
    question: "What is the BBA course fee at Indira University Pune?",
    answer:
      "The total fee for the BBA programme is ₹1.5 Lakh, and scholarships are also available.",
  },
  {
    question: "What is the highest placement package for BBA graduates?",
    answer:
      "The highest placement package is up to ₹9 LPA, and the average package is up to ₹4 LPA.",
  },
  {
    question: "Can I pursue MBA after BBA from Indira University?",
    answer:
      "Yes! Our BBA graduates have been placed in top B-schools including international universities.",
  },
  {
    question: "Is work experience required for BBA admission?",
    answer:
      "No, BBA is an undergraduate programme for students directly after 12th. No work experience is required.",
  },
];

/* ---------------- ACCORDION ITEM ---------------- */

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`
        rounded-3xl bg-white overflow-hidden transition-all duration-300
        border border-white/10 backdrop-blur-sm
        ${isOpen ? "shadow-2xl ring-1 ring-white/20" : "hover:shadow-xl"}
      `}
    >
      {/* Question */}
      <button
        onClick={onClick}
        className="w-full flex items-start justify-between px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`
            text-base md:text-lg font-semibold pr-6 leading-relaxed transition-colors duration-300
            ${isOpen ? "text-[#990000]" : "text-[#071B52]"}
          `}
        >
          {item.question}
        </span>

        {/* Icon */}
        <span
          className={`
            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
            transition-all duration-300
            ${
              isOpen
                ? "bg-[#990000] text-white rotate-180"
                : "bg-[#F4F4F4] text-[#990000]"
            }
          `}
        >
          <FaArrowDown size={11} />
        </span>
      </button>

      {/* Answer */}
      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-dashed border-gray-200 pt-4">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="
        relative overflow-hidden
        px-4 sm:px-6 md:px-12 py-10 md:py-20
        bg-[linear-gradient(90deg,#01011A_0%,#04003A_30%,#1A003F_55%,#4B003B_78%,#8B003E_100%)]
      "
    >
      {/* Decorative Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        
        {/* Left Blue Glow */}
        <div
          className="
            absolute top-[15%] -left-[10%]
            w-[500px] h-[500px]
            rounded-full bg-[#003BFF]
            blur-3xl
          "
        />

        {/* Right Pink Glow */}
        <div
          className="
            absolute -top-[10%] -right-[10%]
            w-[550px] h-[550px]
            rounded-full bg-[#FF0066]
            blur-3xl
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about BBA course of
            Indira University, Maharashtra.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;