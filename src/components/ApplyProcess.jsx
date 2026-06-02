import React from "react";

const APPLY_CONTENT = {
  mainHeading: "How to Apply for B.Tech at Indira University, Pune",
  steps: [
    "Fill the online application form",
    "Upload qualifying examination marksheets and entrance exam scores",
    "Pay the application fee online",
    "Participate in counselling (if applicable)",
    "Confirm your admission after seat allocation"
  ],
  eligibilityHeading: "Eligibility Criteria – B.Tech in AI & Data Science",
  criteria: [
    "Passed 10+2 (HSC) with Physics, Chemistry & Mathematics (PCM) or Physics, Chemistry & Biology (PCB)",
    "Minimum 45% aggregate in qualifying examination (40% for reserved categories)",
    "Valid score in MHT-CET / JEE Main / SAT / IUCET"
  ]
};

function ApplyProcess() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Main Heading */}
      <div className="mb-12 border-b-2 border-gray-100 pb-6">
        <h2 className="text-2xl md:text-3xl font-black text-[#000B24]">
          {APPLY_CONTENT.mainHeading}
        </h2>
      </div>

      {/* Steps List: All cards visible together and responsive */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
        {APPLY_CONTENT.steps.map((stepText, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:flex-1 min-w-[200px] flex flex-col bg-slate-50 border border-slate-200 rounded-tl-[1.5rem] rounded-br-[1.5rem] sm:rounded-tl-[2rem] sm:rounded-br-[2rem] p-4 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="text-sm sm:text-lg font-black text-white bg-[#000B24] w-8 h-8 sm:w-10 sm:h-10 rounded-tl-lg rounded-br-lg sm:rounded-tl-xl sm:rounded-br-xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#000B24] leading-snug">
                {stepText}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Eligibility Section */}
      <div className="w-full">
        <h3 className="text-2xl md:text-3xl font-black text-[#000B24] mb-6 sm:mb-8">
          {APPLY_CONTENT.eligibilityHeading}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {APPLY_CONTENT.criteria.map((criterion, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-tl-xl rounded-br-xl sm:rounded-tl-2xl sm:rounded-br-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center min-h-[80px] sm:min-h-[100px]"
            >
              <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium">
                {criterion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApplyProcess;