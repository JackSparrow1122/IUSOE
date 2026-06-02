import React from "react";

const ABOUT_CONTENT = {
  title: "About the School of Engineering – Indira University",
  paragraphs: [
    "The School of Engineering (SOE) at Indira University, braced by two decades of Indira's legacy in engineering education through Indira College of Engineering and Management (ICEM), is designed to cultivate technically adept, ethically grounded, and industry-ready engineers. Our flagship B.Tech in Computer Science & Engineering bridges strong engineering fundamentals with the rapidly evolving demands of today's technology-driven world."
  ],
  placeholderText: "Placeholder: Image Content"
};

function AboutUs() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-[45%] space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#000B24] leading-tight">
            {ABOUT_CONTENT.title}
          </h2>

          <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 font-light">
            {ABOUT_CONTENT.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* Right Grey Placeholder Container */}
        <div className="w-full md:w-[55%] flex items-center justify-center">
          <div className="w-full h-[250px] md:h-[350px] bg-slate-200 border border-dashed border-slate-300 rounded-tl-[2.5rem] rounded-br-[2.5rem] flex items-center justify-center text-slate-500 font-medium">
            {ABOUT_CONTENT.placeholderText}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
