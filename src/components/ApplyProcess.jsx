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

const STEP_TITLES = [
  "Online Application",
  "Document Upload",
  "Fee Payment",
  "Counselling Process",
  "Admission Confirmation"
];

const STEP_ICONS = [
  // 1. Laptop/Form
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>,
  // 2. Upload
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
  </svg>,
  // 3. Card/Payment
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
  </svg>,
  // 4. Chat/Discussion
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
  </svg>,
  // 5. Success/Checkmark
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
];

function ApplyProcess() {
  return (
    <section className="w-full bg-white py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#000B2E] text-center tracking-tight">
        B.Tech Admission <span className="text-[#A80B2C]">Open For 2026-2027</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-2 mb-12 text-center font-medium">
        {APPLY_CONTENT.mainHeading}
      </p>

      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT (Vertical timeline)
      ═══════════════════════════════════════════ */}
      <div className="relative md:hidden flex flex-col items-stretch w-full max-w-md mx-auto space-y-8 pl-2">
        {/* Vertical timeline line */}
        <div className="absolute left-[30px] top-6 bottom-6 w-[2px] bg-gray-200"></div>

        {APPLY_CONTENT.steps.map((stepText, idx) => {
          const isEven = idx % 2 === 0;
          const bgColor = isEven ? "bg-[#A80B2C]" : "bg-[#0A1633]";
          return (
            <div key={idx} className="relative flex items-start gap-4">
              {/* Circular Badge with Halo */}
              <div className={`relative z-10 w-11 h-11 rounded-full ${bgColor} border-2 border-white ring-4 ring-gray-100 flex items-center justify-center flex-shrink-0 shadow-md`}>
                <div className="transform scale-75">
                  {STEP_ICONS[idx]}
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col pt-1">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                  Step {idx + 1}:
                </span>
                <h4 className="text-[#000B2E] text-sm font-extrabold leading-tight">
                  {STEP_TITLES[idx]}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  {stepText}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT (Horizontal timeline)
      ═══════════════════════════════════════════ */}
      <div className="hidden md:flex relative w-full max-w-6xl mx-auto items-start justify-between">
        {/* Connecting Horizontal Line */}
        <div className="absolute left-8 right-8 top-8 h-[2px] bg-gray-200 -z-0"></div>

        {APPLY_CONTENT.steps.map((stepText, idx) => {
          const isEven = idx % 2 === 0;
          const bgColor = isEven ? "bg-[#A80B2C]" : "bg-[#0A1633]";
          return (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center w-[180px] lg:w-[210px] px-2">
              {/* Circular Badge with Halo */}
              <div className={`w-16 h-16 rounded-full ${bgColor} border-4 border-white ring-8 ring-white shadow-xl flex items-center justify-center flex-shrink-0 mb-4 transition-all duration-300 hover:scale-110`}>
                {STEP_ICONS[idx]}
              </div>

              {/* Step Label */}
              <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Step {idx + 1}:
              </span>
              
              {/* Step Title */}
              <h4 className="text-[#000B2E] text-sm lg:text-base font-bold mt-1 leading-snug">
                {STEP_TITLES[idx]}
              </h4>
              
              {/* Description */}
              <p className="text-gray-600 text-xs mt-2 leading-relaxed max-w-[170px]">
                {stepText}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ApplyProcess;