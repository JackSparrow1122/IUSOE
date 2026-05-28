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
          DESKTOP LAYOUT  (hidden below md)
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-white p-10">

        {/* Top row — image placeholders + description */}
        <div className="flex gap-6 items-stretch max-w-[1800px] mx-auto w-full mb-6">

          {/* Left — image placeholders (40%) */}
          <div className="flex gap-4 w-2/5">
            {/* First column — 2 equal boxes */}
            <div className="flex flex-col gap-4 w-1/2">
              <div className="bg-gray-200 rounded-lg h-40"></div>
              <div className="bg-gray-200 rounded-lg h-40"></div>
            </div>
            {/* Second column — 70/30 split */}
            <div className="flex flex-col gap-4 w-1/2">
              <div className="bg-gray-200 rounded-lg" style={{ flex: "7", minHeight: "160px" }}></div>
              <div className="bg-gray-200 rounded-lg" style={{ flex: "3", minHeight: "80px" }}></div>
            </div>
          </div>

          {/* Right — description (60%) */}
          <div className="flex flex-col justify-center w-3/5">
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

        {/* Bottom — two blue panels */}
        <div className="flex gap-6 max-w-[1800px] mx-auto w-full">
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

      </section>
    </>
  );
};

export default ProgramOverview;

