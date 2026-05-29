import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

/* ---------------- FAQ DATA ---------------- */

const FAQ_DATA = [
  {
    question: "What is the eligibility for B.Tech admission?",
    answer:
      "You must have passed 10+2 with PCM or PCB, securing at least 45% aggregate (40% for reserved categories).",
  },
  {
    question: "Which entrance exams are accepted?",
    answer:
      "We accept valid scores from MHT-CET / JEE Main / SAT / IUCET.",
  },
  {
    question: "Does the university provide internship opportunities?",
    answer:
      "Yes, mandatory industry internships are integrated into the curriculum.",
  },
  {
    question: "Are hostel facilities available for engineering students?",
    answer:
      "Yes, we offer AC hostels with Wi-Fi, 24/7 security, and recreational areas.",
  },
  {
    question: "Does Indira University offer scholarships for B.Tech students?",
    answer:
      "Yes, scholarships are available based on merit, entrance exam scores, and reserved category eligibility. Contact admissions for details.",
  },
];

/* ---------------- ACCORDION ITEM ---------------- */

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div
      className={`
        rounded-3xl bg-slate-50 overflow-hidden transition-all duration-300
        border border-slate-200/80
        ${isOpen ? "shadow-lg ring-1 ring-[#000B24]/10" : "hover:shadow-md"}
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
                : "bg-white text-[#990000] border border-slate-200"
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
        bg-white
      "
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#000B24] mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about the B.Tech course at
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