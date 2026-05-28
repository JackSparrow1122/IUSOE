import React from "react";
import club1 from "../assets/Events/club1.jpg";
import club2 from "../assets/Events/club2.jpg";
import club3 from "../assets/Events/club3.jpg";
import club4 from "../assets/Events/club4.jpg";
import club5 from "../assets/Events/club5.jpg";

const StudentClubsSection = () => {
  const clubs = [
    { id: 1, name: "club1", image: club1 },
    { id: 2, name: "club2", image: club2 },
    { id: 3, name: "club3", image: club3 },
    { id: 4, name: "club4", image: club4 },
    { id: 5, name: "club5", image: club5 },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-white px-5 py-8">
        {/* Label */}
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-2 mb-6">
          03 - Campus Highlights
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#000B24] mb-3">Student Clubs</h2>
        <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
          Marketing Club, Finance Club, HR Club, Digital Marketing Club, Innovation &amp;
          Entrepreneurship Club, International Business Club, Current Affairs Club, IT Club,
          Sync Cultural Club, Music Club, Media Club and many more; these clubs offer
          leadership opportunities, industry networking, skill development, and
          resume-building experience for BBA students.
        </p>

        {/* Photo grid — 2 columns */}
        <div className="grid grid-cols-2 gap-3">
          {clubs.map((c) => (
            <div key={c.id} className="overflow-hidden rounded-xl shadow">
              <img src={c.image} alt={c.name} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below md) — UNCHANGED
      ═══════════════════════════════════════════ */}
      <section className="hidden md:block w-full bg-white p-10">
        {/* Top section */}
        <div className="w-full pt-8 pb-2 border-b-2 border-gray-300">
          <p className="text-sm md:text-base font-semibold text-gray-800 uppercase tracking-widest">
            03 - Campus Highlights
          </p>
        </div>
        <div className="mb-4"></div>

        {/* Content section */}
        <div className="flex gap-6 items-center w-full h-[calc(100vh-120px)] max-w-[1800px] mx-auto py-4">
          {/* Left side - Text content (40%) */}
          <div
            style={{ flex: "0 0 40%" }}
            className="flex flex-col items-start justify-start min-h-0 flex-shrink-0 pt-10"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold text-[#000B24]">Student Clubs</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                Marketing Club, Finance Club, HR Club, Digital Marketing Club,
                Innovation &amp; Entrepreneurship Club, International Business Club,
                Current Affairs Club, IT Club, Sync Cultural Club, Music Club,
                Media Club and many more; these clubs offer leadership
                opportunities, industry networking, skill development, and
                resume-building experience for BBA students.
              </p>
            </div>
          </div>

          {/* Right side - Grid (60%) */}
          <div style={{ flex: "0 0 60%" }} className="min-w-0 flex-shrink-0 flex items-center">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(10, 1fr)",
                gap: "8px",
                height: "72vh",
                padding: "20px",
              }}
              className="w-full"
            >
              <div style={{ gridColumn: "1 / span 4", gridRow: "1 / span 4" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[1].image} alt={clubs[1].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "5 / span 2", gridRow: "1 / span 7" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[0].image} alt={clubs[0].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "1 / span 2", gridRow: "5 / span 6" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[2].image} alt={clubs[2].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 2", gridRow: "5 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[3].image} alt={clubs[3].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 4", gridRow: "8 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={clubs[4].image} alt={clubs[4].name} className="w-full h-full object-cover" style={{ objectPosition: "center 18%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentClubsSection;
