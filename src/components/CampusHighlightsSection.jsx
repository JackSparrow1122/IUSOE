import React from "react";
import facilities1 from "../assets/Events/facilities1.jpg";
import facilities2 from "../assets/Events/facilities2.jpg";
import facilities3 from "../assets/Events/facilities3.jpg";
import facilities4 from "../assets/Events/facilities4.jpg";
import facilities5 from "../assets/Events/facilities5.jpg";

const CampusHighlightsSection = () => {
  const facilities = [
    { id: 1, name: "facilities1", image: facilities1 },
    { id: 2, name: "facilities2", image: facilities2 },
    { id: 3, name: "facilities3", image: facilities3 },
    { id: 4, name: "facilities4", image: facilities4 },
    { id: 5, name: "facilities5", image: facilities5 },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-white px-5 py-8">
        {/* Label */}
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-2 mb-6">
          02 - Campus Highlights
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#000B24] mb-3">
          Campus Facilities &amp; Infrastructure
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
          Smart classrooms, computer labs, library with e-resources, Innovation and
          Entrepreneurship Center for startups, AC hostels with Wi-Fi, cafeteria,
          sports complex, gymnasium, medical center, placement cell, and modern
          auditorium for comprehensive BBA education in Pune.
        </p>

        {/* Photo grid — 2 columns */}
        <div className="grid grid-cols-2 gap-3">
          {facilities.map((f) => (
            <div key={f.id} className="overflow-hidden rounded-xl shadow">
              <img src={f.image} alt={f.name} className="w-full h-40 object-cover" />
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
            02 - Campus Highlights
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
              <h2 className="text-5xl md:text-7xl font-bold text-[#000B24]">
                Campus Facilities &amp; Infrastructure
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                Smart classrooms, computer labs, library with e-resources,
                Innovation and Entrepreneurship Center for startups, AC hostels
                with Wi-Fi, cafeteria, sports complex, gymnasium, medical center,
                placement cell, and modern auditorium for comprehensive BBA
                education in Pune.
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
                <img src={facilities[0].image} alt={facilities[0].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "5 / span 2", gridRow: "1 / span 7" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[1].image} alt={facilities[1].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "1 / span 2", gridRow: "5 / span 6" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[2].image} alt={facilities[2].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 2", gridRow: "5 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[3].image} alt={facilities[3].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 4", gridRow: "8 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={facilities[4].image} alt={facilities[4].name} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampusHighlightsSection;
