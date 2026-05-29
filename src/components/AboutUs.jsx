import React from "react";

function AboutUs() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full md:w-[45%] space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#000B24] leading-tight">
            About Us
          </h2>

          <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 font-light">
            <p>
              The School of Engineering at Indira University, Pune is built upon
              the strong academic foundation and legacy of 20+ years of Indira
              College of Engineering & Management and 31+ years of the Indira
              Group of Institutes.
            </p>
            <p>
              With a long-standing tradition of excellence in engineering
              education, innovation, industry integration, and top placements
              reaching up to 27 LPA, the institution continues to shape
              future-ready engineers equipped for the global technology
              landscape.
            </p>
          </div>
        </div>

        {/* Right Grey Placeholder Container */}
        <div className="w-full md:w-[55%] flex items-center justify-center">
          <div className="w-full h-[250px] md:h-[350px] bg-slate-200 border border-dashed border-slate-300 rounded-tl-[2.5rem] rounded-br-[2.5rem] flex items-center justify-center text-slate-500 font-medium">
            Placeholder: Image Content
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
