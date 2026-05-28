import React from "react";

const features = [
  {
    title: "Industry-Ready Curriculum",
    description:
      "Future-focused curriculum designed with industry trends, real-world skills and emerging technologies.",
  },
  {
    title: "Consistent Placement Record",
    description:
      "Proven track record of high placements with top recruiters year after year.",
  },
  {
    title: "Expert Faculty & Mentorship",
    description:
      "Learn from experienced faculty and industry experts who mentor, guide and inspire.",
  },
  {
    title: "Guest Lectures & Industry Sessions",
    description:
      "Regular sessions by industry leaders to keep you inspired and industry-aware.",
  },
  {
    title: "Advanced Infrastructure",
    description:
      "State-of-the-art labs, smart classrooms and innovation centers for future-ready engineers.",
  },
  {
    title: "Industry Readiness Programme",
    description:
      "Special training, certifications, workshops and mock sessions to make you industry ready.",
  },
  {
    title: "Widespread Alumni Network",
    description:
      "Strong alumni network across the globe opens doors to opportunities and guidance.",
  },
  {
    title: "Experiential Learning Methodology",
    description:
      "Learn by doing through projects, case studies, hackathons and hands-on experiences.",
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
          <p className="text-white/80 text-sm mt-3 leading-relaxed">
            Empowering future engineers with AI-driven education, innovation, and industry-ready skills.
          </p>
        </div>

        {/* Cards — 2 columns on mobile */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-[#1D5DFF] rounded-tl-[2rem] rounded-br-[2rem] p-4 flex flex-col justify-center text-center"
            >
              <h3 className="text-white text-sm font-bold leading-snug">{item.title}</h3>
              <p className="text-white/70 text-[11px] mt-2 leading-relaxed">{item.description}</p>
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
          <p className="text-white/90 text-lg md:text-2xl mt-4 max-w-4xl mx-auto leading-relaxed">
            Empowering future engineers with AI-driven education, innovation, and industry-ready skills.
          </p>
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
              <h3 className="text-white text-2xl font-bold leading-snug text-center">{item.title}</h3>
              <p className="text-white/80 text-sm md:text-base text-center mt-5 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhyChooseEngineering;