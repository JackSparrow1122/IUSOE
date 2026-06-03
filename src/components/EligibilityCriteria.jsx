import React from "react";
import {
  FaGraduationCap,
  FaAward,
  FaClipboardCheck,
} from "react-icons/fa";

const APPLY_CONTENT = {
  eligibilityHeading: "Eligibility Criteria – B.Tech in AI & Data Science",
  criteria: [
    {
      text: "Passed 10+2 (HSC) with Physics, Chemistry & Mathematics (PCM) or Physics, Chemistry & Biology (PCB)",
      icon: FaGraduationCap,
    },
    {
      text: "Minimum 45% aggregate in qualifying examination (40% for reserved categories)",
      icon: FaAward,
    },
    {
      text: "Valid score in MHT-CET / JEE Main / SAT / IUCET",
      icon: FaClipboardCheck,
    },
  ],
};

function EligibilityCriteria() {
  return (
    <section className="w-full bg-gradient-to-b md:bg-gradient-to-r from-[#01051F] via-[#14002E] to-[#8B0035] py-12 md:py-16 px-6 md:px-12 overflow-hidden flex flex-col items-center">
      {/* Eligibility Section */}
      <div className="w-full text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-10 leading-snug">
          {APPLY_CONTENT.eligibilityHeading}
        </h3>
        
        {/* Grid matching WhyChooseEngineering cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
          {APPLY_CONTENT.criteria.map((criterion, idx) => {
            const Icon = criterion.icon;
            const isEven = idx % 2 === 0;
            const iconColorClass = isEven ? "border-[#D946EF] text-[#D946EF]" : "border-[#3B82F6] text-[#3B82F6]";
            return (
              <div
                key={idx}
                className="min-h-[220px] border border-[#1D5DFF] rounded-tl-[3rem] rounded-br-[3rem]
                           bg-transparent backdrop-blur-sm p-6 flex flex-col items-center justify-center
                           transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 pt-8"
              >
                {/* Circle Icon Container */}
                <div className={`w-16 h-16 rounded-full border-2 ${iconColorClass} flex items-center justify-center mb-5 flex-shrink-0 shadow-md bg-black/10`}>
                  <Icon size={26} />
                </div>
                <p className="text-white text-center text-xs sm:text-sm font-medium leading-relaxed">
                  {criterion.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EligibilityCriteria;
