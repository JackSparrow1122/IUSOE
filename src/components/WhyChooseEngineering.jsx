import React from "react";

const features = [
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Designed with input from global tech leaders to ensure you learn exactly what the industry demands.",
  },
  {
    title: "Experiential Learning",
    description:
      "Learn by doing through live projects, case studies, hackathons, and real-world engineering challenges.",
  },
  {
    title: "Specialised Learning Tracks",
    description:
      "Choose from AI and Data Science, or Cyber Security, the most in-demand fields of the decade.",
  },
  {
    title: "Startup & Innovation Ecosystem",
    description:
      "Turn your ideas into products with incubation support, mentorship, and seed funding opportunities.",
  },
  {
    title: "Research-Driven Environment",
    description:
      "Work alongside faculty on cutting-edge research in machine learning, cloud security, and computer vision.",
  },
  {
    title: "Modern Computing Infrastructure",
    description:
      "Access to AI labs, cyber ranges, GPU workstations, and smart classrooms.",
  },
  {
    title: "Industry Readiness Programme",
    description:
      "Gain industry certifications, attend mock interviews, and build a portfolio that stands out.",
  },
  {
    title: "Holistic Development",
    description:
      "Develop leadership, communication, and teamwork skills alongside your technical expertise.",
  },
];

function WhyChooseEngineering() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-gradient-to-b from-[#01051F] via-[#14002E] to-[#8B0035] py-12 px-5">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl font-bold leading-tight">
            Why Choose ENGINEERING at Indira University?
          </h2>
        </div>

        {/* Cards — 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-[#1D5DFF] rounded-tl-[2rem] rounded-br-[2rem] p-4 flex flex-col justify-center text-center"
            >
              <h3 className="text-white text-xs md:text-xl font-bold leading-snug">{item.title}</h3>
              <p className="text-slate-200/90 text-[10px] md:text-base mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md) — UNCHANGED
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-gradient-to-r from-[#01051F] via-[#14002E] to-[#8B0035] py-16 px-6 md:px-12 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Why Choose ENGINEERING at Indira University?
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="min-h-[280px] border border-[#1D5DFF] rounded-tl-[3rem] rounded-br-[3rem]
                         bg-transparent backdrop-blur-sm p-8 flex flex-col justify-center
                         transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2"
            >
              <h3 className="text-white text-lg md:text-xl font-bold leading-snug text-center">{item.title}</h3>
              <p className="text-slate-200/90 text-sm md:text-base text-center mt-5 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhyChooseEngineering;