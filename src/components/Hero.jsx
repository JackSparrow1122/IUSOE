import IUlogo from "../assets/IULogo.png";
import HeroBg from "../assets/HeroImg.png";

import Icon1 from "../assets/icon5.png";
import Icon2 from "../assets/icon6.png";
import Icon3 from "../assets/icon7.png";

const stats = [
  { icon: Icon1, title: "31+", subtitle: "Years of Legacy" },
  { icon: Icon2, title: "350+", subtitle: "Top Recruiters" },
  { icon: Icon3, title: "100%", subtitle: "Placement Support" },
];

const Hero = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full min-h-screen overflow-hidden relative bg-[#02103B]">
        {/* Background */}
        <img
          src={HeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full min-h-screen">
          {/* Navbar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#000B2E]">
            <img src={IUlogo} alt="IU Logo" className="h-10 object-contain" />
            <div className="border border-white/20 bg-white/10 px-3 py-1 rounded-full text-white text-[10px] font-semibold tracking-wide">
              LIMITED SEATS
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col justify-center px-5 pb-8 pt-6">
            {/* Heading */}
            <h1 className="text-white font-extrabold leading-[0.95] text-[2.4rem]">
              <span className="block">ENGINEER</span>
              <span className="block">INTELLIGENCE</span>
              <span className="block">FOR THE FUTURE.</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm leading-relaxed mt-4">
              Future-ready Computer Science, Artificial Intelligence & Data
              Science, and Cyber Security programmes designed to build
              innovators, problem-solvers, and industry leaders.
            </p>

            {/* Admission tag */}
            <div className="mt-4 inline-flex items-center self-start border border-white/20 bg-white/5 px-4 py-2 rounded-lg shadow-lg">
              <p className="text-white text-xs font-medium">
                Admission open for 2026-2027
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-5">
              <button className="w-full bg-[#E3003A] hover:bg-[#c00032] transition-all duration-300 text-white px-5 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-3 shadow-xl">
                <span>APPLY NOW</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button className="w-full border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-sm text-white px-5 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-3">
                <span>Download brochure</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0l4-4m-4 4l-4-4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1"
                  />
                </svg>
              </button>
            </div>

            {/* Stats — 2×2 grid */}
            <div className="grid grid-cols-2 gap-3 mt-6 border-t border-white/10 pt-5">
              {stats.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-7 h-7 object-contain flex-shrink-0"
                  />
                  <div>
                    <p className="text-white text-sm font-semibold leading-none">
                      {item.title}
                    </p>
                    <p className="text-white/70 text-[10px] leading-snug mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md)
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full h-screen overflow-hidden relative bg-[#02103B]">
        {/* Background */}
        <img
          src={HeroBg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Navbar */}
          <div className="h-[10vh] w-full flex items-center justify-between px-5 md:px-10 bg-[#000B2E]">
            <img
              src={IUlogo}
              alt="IU Logo"
              className="h-14 md:h-16 object-contain"
            />
            <div className="border border-white/20 bg-white/10 px-4 py-1.5 rounded-full text-white text-xs md:text-sm font-semibold">
              LIMITED SEATS
            </div>
          </div>

          {/* Hero Body */}
          <div className="flex-1 flex items-center px-5 md:px-14 pb-6">
            <div className="max-w-2xl">
              {/* Heading */}
              <h1 className="text-white font-extrabold leading-[0.92]">
                <span className="block text-4xl md:text-6xl">ENGINEER</span>
                <span className="block text-4xl md:text-6xl">
                  INTELLIGENCE
                </span>
                <span className="block text-4xl md:text-6xl">
                  FOR THE FUTURE.
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/90 text-sm md:text-lg leading-relaxed mt-5 max-w-xl">
                Future-ready Computer Science, Artificial Intelligence &amp; Data
                Science, and Cyber Security programmes designed to build
                innovators, problem-solvers, and industry leaders.
              </p>

              {/* Admission Tag */}
              <div className="mt-5 inline-flex items-center border border-white/20 bg-white/5 px-5 py-3 rounded-r-xl rounded-l-md shadow-lg">
                <p className="text-white text-sm md:text-lg font-medium">
                  Admission open for 2026-2027
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-5">
                <button className="bg-[#E3003A] hover:bg-[#c00032] transition-all duration-300 text-white px-6 py-3 rounded-lg text-sm md:text-base font-bold flex items-center gap-3 shadow-xl">
                  <span>APPLY NOW</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
                <button className="border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-sm transition-all duration-300 text-white px-6 py-3 rounded-lg text-sm md:text-base font-semibold flex items-center gap-3">
                  <span>Download brochure</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v12m0 0l4-4m-4 4l-4-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1"
                    />
                  </svg>
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-8 border-t border-white/10 pt-5 w-fit">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 pr-6 border-r border-white/20 last:border-none"
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-9 h-9 object-contain"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-white text-base font-semibold leading-none">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-xs leading-snug mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
