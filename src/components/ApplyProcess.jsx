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
    <section className="w-full bg-white py-8 md:py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      {/* Main Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#1E3050] text-center mb-4 md:mb-6 max-w-3xl leading-snug">
        {APPLY_CONTENT.mainHeading}
      </h2>

      {/* Steps List */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-1.5 lg:gap-4 w-full max-w-6xl mb-5">
        {APPLY_CONTENT.steps.map((stepText, idx) => (
          <React.Fragment key={idx}>
            {/* Card */}
            <div className="w-[200px] md:w-[130px] lg:w-[185px] xl:w-[200px] h-[110px] md:h-[130px] bg-gradient-to-b from-[#1E52E8] to-[#0A1633] rounded-tl-[2.5rem] lg:rounded-tl-[3.5rem] rounded-br-[2.5rem] lg:rounded-br-[3.5rem] rounded-tr-none rounded-bl-none shadow-[0_10px_25px_rgba(10,22,51,0.3)] flex items-center justify-center p-4 lg:p-5 select-none hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <p className="text-white text-center text-xs md:text-[10px] lg:text-xs xl:text-sm font-medium leading-normal lg:leading-relaxed">
                {stepText}
              </p>
            </div>

            {/* Arrow (render only if not the last item) */}
            {idx < APPLY_CONTENT.steps.length - 1 && (
              <div className="flex items-center justify-center my-1 md:my-0 flex-shrink-0">
                <svg
                  className="w-5 h-5 md:w-3 md:h-3 lg:w-5 lg:h-5 text-gray-800 transform rotate-90 md:rotate-0 filter drop-shadow-sm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>


    </section>
  );
}

export default ApplyProcess;