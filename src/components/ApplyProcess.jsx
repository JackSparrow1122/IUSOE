import React from "react";

function ApplyProcess() {
  const steps = [
    {
      num: "01",
      title: "Online Application Form",
      desc: "Complete the online application form at: ",
      link: "admission.indirauniversity.edu.in",
      url: "https://admission.indirauniversity.edu.in"
    },
    {
      num: "02",
      title: "Upload Documents",
      desc: "Upload qualifying examination marksheets and entrance exam scores."
    },
    {
      num: "03",
      title: "Seat Allocation & Lock",
      desc: "Confirm your admission after seat allocation to lock your seat at one of the best engineering colleges of India."
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Main Heading */}
      <div className="mb-8 border-b-2 border-gray-100 pb-6">
        <h2 className="text-2xl md:text-3xl font-black text-[#000B24] mb-4 md:mb-6">
          How to Apply for Engineering at Indira University?
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-[#000B24] mb-2 leading-tight">
          Secure your B.Tech seat 2026 at Pune's best engineering college.
        </h3>
      </div>

      {/* Steps Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-slate-50 border border-slate-200 rounded-tl-[2.5rem] rounded-br-[2.5rem] p-8 hover:shadow-xl transition-all duration-300 relative group"
          >
            {/* Number on Top-Left (not conflicting with text) */}
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xl font-black text-white bg-[#000B24] w-10 h-10 rounded-tl-xl rounded-br-xl flex items-center justify-center shadow-md flex-shrink-0">
                {step.num}
              </span>
              <h4 className="text-lg md:text-xl font-bold text-[#000B24]">
                {step.title}
              </h4>
            </div>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {step.desc}
              {step.link && (
                <>
                  <br />
                  <a
                    href={step.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold underline break-all inline-block mt-1"
                  >
                    {step.link}
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Eligibility Section (Aligned inside same component, no separate gray bg container, horizontal less height boxes) */}
      <div className="w-full">
        <h3 className="text-2xl md:text-3xl font-black text-[#000B24] mb-8 text-left">
          Eligibility for B.Tech in Artificial Intelligence &amp; Data Science:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Criterion 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-tl-2xl rounded-br-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center min-h-[100px]">
            <p className="text-slate-700 text-sm md:text-base font-medium">
              Passed 10+2 (HSC) with Physics, Chemistry &amp; Mathematics (PCM) or Physics, Chemistry &amp; Biology (PCB)
            </p>
          </div>

          {/* Criterion 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-tl-2xl rounded-br-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center min-h-[100px]">
            <p className="text-slate-700 text-sm md:text-base font-medium">
              Minimum 45% aggregate in qualifying examination (40% for reserved categories)
            </p>
          </div>

          {/* Criterion 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-tl-2xl rounded-br-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center min-h-[100px]">
            <p className="text-slate-700 text-sm md:text-base font-medium">
              Valid score in MHT-CET / JEE Main / SAT / IUCET
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplyProcess;
