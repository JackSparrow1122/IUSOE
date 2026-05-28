import React from "react";
import event1 from "../assets/Events/event3.jpg";
import event2 from "../assets/Events/BParak.JPG";
import event3 from "../assets/Events/IWA2.webp";
import event4 from "../assets/Events/event4.jpg";
import event5 from "../assets/Events/event5.jpg";

const NewSection = () => {
  const events = [
    { id: 1, name: "event1", image: event1 },
    { id: 2, name: "BParak", image: event2 },
    { id: 3, name: "IWA2", image: event3 },
    { id: 4, name: "event4", image: event4 },
    { id: 5, name: "event5", image: event5 },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════
          MOBILE LAYOUT  (hidden on md and above)
      ═══════════════════════════════════════════ */}
      <section className="block md:hidden w-full bg-white px-5 py-8">
        {/* Label */}
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-2 mb-6">
          01 - Campus Highlights
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#000B24] mb-3">Events &amp; Annual Celebrations</h2>
        <p className="text-sm text-gray-700 leading-relaxed text-justify mb-6">
          Experience exciting Annual Fest with diverse cultural activities, concerts, Industry Events
          including corporate conclaves, executive talks, placement drives, and workshops on
          leadership, industry readiness, skill development, and Cultural Celebrations featuring
          festivals, talent shows, fresher's induction, farewell parties, and sports tournaments
          that create well-rounded BBA professionals.
        </p>

        {/* Photo grid — 2 columns */}
        <div className="grid grid-cols-2 gap-3">
          {events.map((ev) => (
            <div key={ev.id} className="overflow-hidden rounded-xl shadow">
              <img
                src={ev.image}
                alt={ev.name}
                className={`w-full h-40 object-cover ${ev.id === 5 ? "object-top" : ""}`}
              />
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
            01 - Campus Highlights
          </p>
        </div>
        <div className="mb-4"></div>

        {/* Content section */}
        <div className="flex gap-6 items-center w-full h-[calc(100vh-120px)] max-w-[1800px] mx-auto py-4">
          {/* Left side - Text content (35%) */}
          <div
            style={{ flex: "0 0 40%" }}
            className="flex flex-col items-start justify-start min-h-0 flex-shrink-0 pt-10"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold text-[#000B24]">
                Events &amp; Annual Celebrations
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                Experience exciting Annual Fest with diverse cultural activities,
                concerts, Industry Events including corporate conclaves, executive
                talks, placement drives, and workshops on leadership, industry
                readiness, skill development, and Cultural Celebrations featuring
                festivals, talent shows, fresher's induction, farewell parties,
                and sports tournaments that create well-rounded BBA professionals.
              </p>
            </div>
          </div>

          {/* Right side - Grid (65%) */}
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
                <img src={events[0].image} alt={events[0].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "5 / span 2", gridRow: "1 / span 7" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={events[1].image} alt={events[1].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "1 / span 2", gridRow: "5 / span 6" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={events[2].image} alt={events[2].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 2", gridRow: "5 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={events[3].image} alt={events[3].name} className="w-full h-full object-cover" />
              </div>
              <div style={{ gridColumn: "3 / span 4", gridRow: "8 / span 3" }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img src={events[4].image} alt={events[4].name} className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSection;
