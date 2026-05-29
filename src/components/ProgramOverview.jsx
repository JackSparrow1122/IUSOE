import React from "react";
import Ai from "../assets/Ai.png";
import Cyber from "../assets/Cyber.png";

const ProgramOverview = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#000B24] mb-4 md:mb-6">
          Program Overview
        </h2>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify">
          Our B.Tech programme is a four-year, full-time engineering degree focused on emerging technologies. Students choose from AI &amp; Data Science, or Cyber Security. With hands-on learning, industry projects, and placement support, the programme prepares future-ready engineers for global careers.
        </p>
      </div>

      {/* Specialisations Subheading */}
      <div className="mb-8 md:mb-12">
        <h3 className="text-xl md:text-3xl font-bold text-[#000B24] uppercase tracking-wide">
          Choose Your Engineering Specialisation
        </h3>
      </div>

      {/* Specialisation 1: AI & Data Science */}
      <div className="mb-16">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-[#000B24] mb-3">
            B. Tech in Artificial Intelligence &amp; Data Science
          </h4>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            This specialization empowers students to build intelligent, data-driven solutions for the evolving digital economy. Through practical learning, advanced analytics, and emerging AI technologies, students gain expertise to create smart systems and drive innovation across industries.
          </p>
        </div>

        {/* Desktop Course Box 1 */}
        <div
          className="hidden md:flex w-full h-[45vh] bg-[#071A8C] overflow-hidden bg-cover bg-top rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
          style={{ backgroundImage: `url(${Ai})` }}
        >
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A8C]/95 via-[#071A8C]/75 to-transparent" />
          <div className="relative z-10 w-[55%] h-full flex flex-col justify-center px-8">
            <h2 className="text-white text-xl md:text-3xl font-bold leading-tight">
              Artificial Intelligence &amp; Data Science
            </h2>
            <ul className="mt-4 space-y-1">
              <li className="text-white text-xs md:text-lg">• Artificial Intelligence &amp; Machine Learning</li>
              <li className="text-white text-xs md:text-lg">• DevOps Engineering</li>
              <li className="text-white text-xs md:text-lg">• Deep Learning &amp; Neural Networks</li>
              <li className="text-white text-xs md:text-lg">• Big Data Analytics &amp; Data Engineering</li>
              <li className="text-white text-xs md:text-lg">• Computer Vision &amp; Image Processing</li>
              <li className="text-white text-xs md:text-lg">• Generative AI &amp; Large Language Models</li>
            </ul>
          </div>
          <div className="w-[45%] h-full"></div>
        </div>

        {/* Mobile Course Card 1 */}
        <div
          className="block md:hidden w-full rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden relative shadow-md"
          style={{ backgroundImage: `url(${Ai})`, backgroundSize: "cover", backgroundPosition: "top" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A8C]/90 via-[#071A8C]/70 to-transparent" />
          <div className="relative z-10 p-6">
            <h2 className="text-white text-lg font-bold leading-tight mb-3">
              Artificial Intelligence &amp; Data Science
            </h2>
            <ul className="space-y-1">
              {[
                "Artificial Intelligence & Machine Learning",
                "DevOps Engineering",
                "Deep Learning & Neural Networks",
                "Big Data Analytics & Data Engineering",
                "Computer Vision & Image Processing",
                "Generative AI & Large Language Models",
              ].map((item, i) => (
                <li key={i} className="text-white text-xs">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Specialisation 2: Cyber Security */}
      <div className="mb-8">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-[#000B24] mb-3">
            Cyber Security &amp; Cloud Technology
          </h4>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
            This specialization prepares students to become next-generation cyber defenders and cloud security professionals in an increasingly connected digital world. Through hands-on learning, real-world simulations, and advanced security practices, students gain expertise in protecting systems, networks, cloud platforms, and digital infrastructure.
          </p>
        </div>

        {/* Desktop Course Box 2 */}
        <div
          className="hidden md:flex w-full h-[45vh] bg-[#071A8C] overflow-hidden bg-cover bg-top rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
          style={{ backgroundImage: `url(${Cyber})` }}
        >
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A8C]/95 via-[#071A8C]/75 to-transparent" />
          <div className="w-[45%] h-full"></div>
          <div className="relative z-10 w-[55%] h-full flex flex-col justify-center px-8">
            <h2 className="text-white text-xl md:text-3xl font-bold leading-tight">
              Cyber Security &amp; Cloud Technology
            </h2>
            <ul className="mt-4 space-y-1">
              <li className="text-white text-xs md:text-lg">• Operating System Security</li>
              <li className="text-white text-xs md:text-lg">• Cyber Law &amp; Cyber Policy</li>
              <li className="text-white text-xs md:text-lg">• Penetration Testing &amp; Vulnerability Assessment</li>
              <li className="text-white text-xs md:text-lg">• Digital Forensics</li>
              <li className="text-white text-xs md:text-lg">• Cloud Computing Architecture</li>
              <li className="text-white text-xs md:text-lg">• Cloud Infrastructure &amp; Services</li>
              <li className="text-white text-xs md:text-lg">• Cloud Security &amp; Governance</li>
            </ul>
          </div>
        </div>

        {/* Mobile Course Card 2 */}
        <div
          className="block md:hidden w-full rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden relative shadow-md"
          style={{ backgroundImage: `url(${Cyber})`, backgroundSize: "cover", backgroundPosition: "top" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A8C]/90 via-[#071A8C]/70 to-transparent" />
          <div className="relative z-10 p-6">
            <h2 className="text-white text-lg font-bold leading-tight mb-3">
              Cyber Security &amp; Cloud Technology
            </h2>
            <ul className="space-y-1">
              {[
                "Operating System Security",
                "Cyber Law & Cyber Policy",
                "Penetration Testing & Vulnerability Assessment",
                "Digital Forensics",
                "Cloud Computing Architecture",
                "Cloud Infrastructure & Services",
                "Cloud Security & Governance",
              ].map((item, i) => (
                <li key={i} className="text-white text-xs">• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
