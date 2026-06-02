import React from "react";

const WHY_CHOOSE_CONTENT = {
  title: "Why Choose the School of Engineering at Indira University?",
  features: [
    "Learn Directly from Industry Experts of Each Domain",
    "Experiential Learning & Project-Based Education",
    "Industry-Aligned Curriculum with Emerging Technologies",
    "Innovation & Startup Ecosystem Support",
    "Strong Industry Connect & Placement Support",
    "Modern Computing Infrastructure & Smart Labs",
    "Holistic Development with Events, Student Clubs and Co-curricular activities",
    "Industry Readiness Training "
  ]
};

function WhyChooseEngineering() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-gradient-to-b from-[#01051F] via-[#14002E] to-[#8B0035] py-12 px-5">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-white text-xl font-bold leading-tight">
            {WHY_CHOOSE_CONTENT.title}
          </h2>
        </div>

        {/* Cards — 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3">
          {WHY_CHOOSE_CONTENT.features.map((title, index) => (
            <div
              key={index}
              className="border border-[#1D5DFF] rounded-tl-[2rem] rounded-br-[2rem] p-4 flex flex-col justify-center text-center min-h-[120px]"
            >
              <h3 className="text-white text-xs md:text-xl font-bold leading-snug">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-gradient-to-r from-[#01051F] via-[#14002E] to-[#8B0035] py-16 px-6 md:px-12 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight md:whitespace-nowrap">
            {WHY_CHOOSE_CONTENT.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {WHY_CHOOSE_CONTENT.features.map((title, index) => (
            <div
              key={index}
              className="min-h-[160px] border border-[#1D5DFF] rounded-tl-[3rem] rounded-br-[3rem]
                         bg-transparent backdrop-blur-sm p-8 flex flex-col justify-center
                         transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
            >
              <h3 className="text-white text-lg md:text-xl font-bold leading-snug text-center">{title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhyChooseEngineering;