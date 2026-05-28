import React from "react";

// Dynamically import all logos directly from the src/assets/Logo folder (excluding logo 44)
const logoModules = import.meta.glob("../assets/Logo/*.jpg", { eager: true });
const logos = Object.entries(logoModules)
  .filter(([path]) => !path.endsWith("/44.jpg"))
  .map(([_, mod]) => mod.default);

const TopRecruiters = () => {
  // Split the loaded logos into 3 rows for the desktop marquee
  const itemsPerRow = Math.ceil(logos.length / 3);
  const row1 = logos.slice(0, itemsPerRow);
  const row2 = logos.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = logos.slice(itemsPerRow * 2);

  return (
    <section className="w-full bg-gradient-to-r from-[#7A0C1E] via-[#5C1233] to-[#2A0F3F] py-10 md:py-14 px-4 overflow-hidden">
      <div className="w-full text-center mb-8 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
          Top Recruiters
        </h2>
        <p className="text-gray-200 text-sm md:text-base font-medium leading-relaxed opacity-90">
          Join a legacy where industry giants meet tomorrow’s talent, proving
          that an Indira University's BBA secures your future at the top
          companies.
        </p>
      </div>

      {/* MOBILE GRID VIEW */}
      <div className="block md:hidden">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
          {logos.map((logo, index) => (
            <div
              key={`grid-${index}`}
              className="bg-white rounded-lg flex items-center justify-center p-2 h-[55px] shadow-md"
            >
              <img
                src={logo}
                alt="Recruiter Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP MARQUEE VIEW */}
      <div className="hidden md:block space-y-6">
        {/* Row 1: Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-4 items-center py-2">
            {row1.concat(row1).map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-2.5 w-[170px] h-[75px] shadow-lg"
              >
                <img
                  src={logo}
                  alt="Recruiter Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-reverse flex whitespace-nowrap gap-4 items-center py-2">
            {row2.concat(row2).map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-2.5 w-[170px] h-[75px] shadow-lg"
              >
                <img
                  src={logo}
                  alt="Recruiter Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Left to Right */}
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex whitespace-nowrap gap-4 items-center py-2">
            {row3.concat(row3).map((logo, index) => (
              <div
                key={`row3-${index}`}
                className="flex-shrink-0 bg-white rounded-xl flex items-center justify-center p-2.5 w-[170px] h-[75px] shadow-lg"
              >
                <img
                  src={logo}
                  alt="Recruiter Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;
