import React from "react";
import {
  FaUserTie,
  FaFlask,
  FaLaptopCode,
  FaLightbulb,
  FaHandshake,
  FaServer,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const WHY_CHOOSE_CONTENT = {
  title: "Why Choose the School of Engineering at Indira University?",
  features: [
    {
      title: "Learn Directly from Industry Experts of Each Domain",
      icon: FaUserTie,
    },
    {
      title: "Experiential Learning & Project-Based Education",
      icon: FaFlask,
    },
    {
      title: "Industry-Aligned Curriculum with Emerging Technologies",
      icon: FaLaptopCode,
    },
    {
      title: "Innovation & Startup Ecosystem Support",
      icon: FaLightbulb,
    },
    {
      title: "Strong Industry Connect & Placement Support",
      icon: FaHandshake,
    },
    {
      title: "Modern Computing Infrastructure & Smart Labs",
      icon: FaServer,
    },
    {
      title: "Holistic Development with Events, Student Clubs and Co-curricular activities",
      icon: FaUsers,
    },
    {
      title: "Industry Readiness Training",
      icon: FaGraduationCap,
    },
  ],
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
          {WHY_CHOOSE_CONTENT.features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            const iconColorClass = isEven ? "border-pink-500 text-pink-500" : "border-blue-500 text-blue-500";
            return (
              <div
                key={index}
                className="border border-[#1D5DFF] rounded-tl-[2rem] rounded-br-[2rem] p-4 flex flex-col items-center justify-center text-center min-h-[150px]"
              >
                {/* Circle Icon Container */}
                <div className={`w-10 h-10 rounded-full border ${iconColorClass} flex items-center justify-center mb-3 flex-shrink-0 bg-black/10`}>
                  <Icon size={16} />
                </div>
                <h3 className="text-white text-[11px] font-bold leading-tight">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-gradient-to-r from-[#01051F] via-[#14002E] to-[#8B0035] py-16 px-6 md:px-12 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight">
            {WHY_CHOOSE_CONTENT.title}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {WHY_CHOOSE_CONTENT.features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            const iconColorClass = isEven ? "border-[#D946EF] text-[#D946EF]" : "border-[#3B82F6] text-[#3B82F6]";
            return (
              <div
                key={index}
                className="min-h-[220px] border border-[#1D5DFF] rounded-tl-[3rem] rounded-br-[3rem]
                           bg-transparent backdrop-blur-sm p-6 flex flex-col items-center justify-center
                           transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2 pt-8"
              >
                {/* Circle Icon Container */}
                <div className={`w-16 h-16 rounded-full border-2 ${iconColorClass} flex items-center justify-center mb-5 flex-shrink-0 shadow-md bg-black/10`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-white text-base md:text-lg font-bold leading-snug text-center">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default WhyChooseEngineering;