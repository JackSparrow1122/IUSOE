import React from "react";

const ProgramOverview = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-white px-5 py-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#000B24] mb-4">Program Overview</h2>

        {/* Description */}
        <p className="text-sm text-gray-700 leading-relaxed text-justify mb-8">
          The School of Engineering at Indira University is built upon the strong
          academic foundation and proven legacy of Indira College of Engineering &amp;
          Management and the Indira Group of Institutes. With a long-standing tradition
          of excellence in engineering education, innovation, industry integration, and
          placements reaching up to 27 LPA, the institution continues to shape
          future-ready engineers equipped for the global technology landscape.
        </p>

        {/* Specialization cards – stacked */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#0B2B5E] rounded-tl-3xl rounded-br-3xl p-6 text-white">
            <h3 className="text-lg font-bold mb-3">Artificial Intelligence &amp; Data Science</h3>
            <p className="text-sm leading-relaxed text-blue-100 text-justify">
              This specialization focuses on building intelligent, data-driven solutions.
              Students gain practical experience in data analytics, machine learning,
              deep learning, and AI technologies, preparing them to develop smart systems
              that solve real-world challenges across industries.
            </p>
          </div>

          <div className="bg-[#0B2B5E] rounded-tl-3xl rounded-br-3xl p-6 text-white">
            <h3 className="text-lg font-bold mb-3">Cyber Security &amp; Cloud Technology</h3>
            <p className="text-sm leading-relaxed text-blue-100 text-justify">
              This specialization prepares students to become next-generation cyber
              defenders and cloud security professionals. Through hands-on learning and
              real-world simulations, students develop expertise in protecting systems,
              networks, cloud platforms, and digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md) — UNCHANGED
      ═══════════════════════════════════════════ */}
      <section className="hidden md:flex w-full bg-white p-10 h-screen flex-col">
        {/* Content */}
        <div className="flex-1 flex flex-col gap-6 max-w-[1800px] mx-auto w-full py-4">
          {/* Top section - Image placeholders + Text */}
          <div className="flex gap-6 flex-1">
            {/* Left - Empty image placeholders */}
            <div className="flex gap-4 flex-shrink-0" style={{ flex: "0 0 40%" }}>
              {/* First column - 2 equal boxes */}
              <div className="flex flex-col gap-4 w-1/2">
                <div className="bg-gray-200 rounded-lg flex-1 min-h-[150px]"></div>
                <div className="bg-gray-200 rounded-lg flex-1 min-h-[150px]"></div>
              </div>
              {/* Second column - 70/30 split */}
              <div className="flex flex-col gap-4 w-1/2">
                <div className="bg-gray-200 rounded-lg min-h-[150px]" style={{ flex: "7" }}></div>
                <div className="bg-gray-200 rounded-lg min-h-[80px]" style={{ flex: "3" }}></div>
              </div>
            </div>

            {/* Right - Description text */}
            <div style={{ flex: "0 0 60%" }} className="flex flex-col justify-center pr-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#000B24] mb-6">Program Overview</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                The School of Engineering at Indira University is built upon the
                strong academic foundation and proven legacy of Indira College of
                Engineering &amp; Management and the Indira Group of Institutes. With
                a long-standing tradition of excellence in engineering education,
                innovation, industry integration, and placements reaching up to 27
                LPA, the institution continues to shape future-ready engineers
                equipped for the global technology landscape.
              </p>
            </div>
          </div>

          {/* Bottom - Two blue panels side by side */}
          <div className="flex gap-6" style={{ flex: "0 0 45%" }}>
            {/* AI & Data Science Panel */}
            <div className="flex-1 bg-[#0B2B5E] rounded-tl-3xl rounded-br-3xl p-8 flex flex-col justify-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Artificial Intelligence &amp; Data Science</h3>
              <p className="text-sm md:text-base leading-relaxed text-justify text-blue-100">
                This specialization focuses on building intelligent, data-driven
                solutions. Students gain practical experience in data analytics,
                machine learning, deep learning, and AI technologies, preparing
                them to develop smart systems that solve real-world challenges
                across industries.
              </p>
            </div>

            {/* Cyber Security & Cloud Technology Panel */}
            <div className="flex-1 bg-[#0B2B5E] rounded-tl-3xl rounded-br-3xl p-8 flex flex-col justify-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Cyber Security &amp; Cloud Technology</h3>
              <p className="text-sm md:text-base leading-relaxed text-justify text-blue-100">
                This specialization prepares students to become next-generation
                cyber defenders and cloud security professionals. Through hands-on
                learning and real-world simulations, students develop expertise in
                protecting systems, networks, cloud platforms, and digital
                infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramOverview;
