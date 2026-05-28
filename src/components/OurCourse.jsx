import React from "react";
import Ai from "../assets/Ai.png";
import Cyber from "../assets/Cyber.png";

function OurCourse() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-white px-5 py-10">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#000B24] leading-tight">Our Course</h2>
        <h3 className="text-lg font-bold text-[#000B24] mt-1 mb-6 leading-tight">
          B.Tech in Computer Science and Engineering
        </h3>

        {/* Course Card 1 */}
        <div
          className="w-full rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden mb-6 relative"
          style={{ backgroundImage: `url(${Ai})`, backgroundSize: "cover", backgroundPosition: "top" }}
        >
          {/* Gradient overlay so text is readable */}
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

        {/* Course Card 2 */}
        <div
          className="w-full rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden relative"
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

        {/* Admission Process */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-[#000B24] text-center leading-tight">
            Engineering Admission open for 2026-2027
          </h2>
          <p className="text-sm text-[#3A4258] text-center mt-2 mb-6">
            How to Apply for Engineering at Indira University?
          </p>

          {/* Steps — vertical on mobile */}
          <div className="flex flex-col gap-3">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className="h-[80px] bg-[#D9D9D9] rounded-tl-[1.5rem] rounded-br-[1.5rem] flex items-center justify-center"
              >
                <span className="text-gray-500 font-semibold">Step {step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md) — UNCHANGED
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-white px-6 md:px-12 py-10">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#000B24] leading-tight">Our Course</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-[#000B24] mt-2 leading-tight">
            B.Tech in computer science and engineering
          </h3>
        </div>

        {/* Course Box */}
        <div
          className="w-[100%] h-[50vh] bg-[#071A8C] overflow-hidden flex bg-cover bg-top rounded-tl-[2.5rem] rounded-br-[2.5rem]"
          style={{ backgroundImage: `url(${Ai})` }}
        >
          {/* Left Content */}
          <div className="w-[55%] h-full flex flex-col justify-center px-8 md:px-8">
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
          {/* Right Side */}
          <div className="w-[45%] h-full">{/* Add image here later */}</div>
        </div>

        {/* Second Course Box */}
        <div
          className="w-[100%] h-[50vh] bg-[#071A8C] overflow-hidden flex bg-cover bg-top mt-8 rounded-tl-[2.5rem] rounded-br-[2.5rem]"
          style={{ backgroundImage: `url(${Cyber})` }}
        >
          {/* Left Empty Side */}
          <div className="w-[45%] h-full">{/* Image side */}</div>
          {/* Right Content */}
          <div className="w-[55%] h-full flex flex-col justify-center px-8 md:px-8">
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

        {/* Admission Process Section */}
        <section className="w-full py-16 px-6 md:px-12 mt-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#000B24]">
              Engineering Admission open for 2026-2027
            </h2>
            <p className="text-lg md:text-3xl text-[#3A4258] mt-4">
              How to Apply for Engineering at Indira University?
            </p>
          </div>
          <div className="flex items-center justify-between gap-4 md:gap-6 mt-16 overflow-x-auto">
            <div className="min-w-[180px] h-[120px] bg-[#D9D9D9] rounded-tl-[2.5rem] rounded-br-[2.5rem]"></div>
            <span className="text-4xl text-black font-light">→</span>
            <div className="min-w-[180px] h-[120px] bg-[#D9D9D9] rounded-tl-[2.5rem] rounded-br-[2.5rem]"></div>
            <span className="text-4xl text-black font-light">→</span>
            <div className="min-w-[180px] h-[120px] bg-[#D9D9D9] rounded-tl-[2.5rem] rounded-br-[2.5rem]"></div>
            <span className="text-4xl text-black font-light">→</span>
            <div className="min-w-[180px] h-[120px] bg-[#D9D9D9] rounded-tl-[2.5rem] rounded-br-[2.5rem]"></div>
            <span className="text-4xl text-black font-light">→</span>
            <div className="min-w-[180px] h-[120px] bg-[#D9D9D9] rounded-tl-[2.5rem] rounded-br-[2.5rem]"></div>
          </div>
        </section>
      </section>
    </>
  );
}

export default OurCourse;
