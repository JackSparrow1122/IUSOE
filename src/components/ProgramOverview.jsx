import React from "react";
import Ai from "../assets/Ai.png";
import Cyber from "../assets/Cyber.png";
import {
  FaRegClock,
  FaChartLine,
  FaUserTie,
  FaCheckCircle,
  FaGraduationCap,
  FaCreditCard,
} from "react-icons/fa";
const PROGRAM_CONTENT = {
  sectionTitle: "B.Tech in Computer Science & Engineering",
  sectionSubtitle: "Programme Overview",
  sectionDesc: "The B.Tech in Computer Science & Engineering at Indira University blends core engineering principles with advanced computing technologies, creating a learning environment where innovation, problem-solving, and industry readiness go hand in hand.",
  specialisations: [
    {
      title: "B.Tech in Artificial Intelligence & Data Science",
      bgImage: Ai,
      description: "Prepares students to build intelligent, data-driven solutions for the evolving digital economy. Through practical learning, advanced analytics, and emerging AI technologies, students gain expertise to create smart systems and drive innovation across industries.",
      points: [
        "Artificial Intelligence & Machine Learning",
        "DevOps Engineering",
        "Deep Learning & Neural Networks",
        "Big Data Analytics & Data Engineering",
        "Computer Vision & Image Processing",
        "Generative AI & Large Language Models (LLMs)",
      ]
    },
    {
      title: "B.Tech in Cyber Security & Cloud Technology",
      bgImage: Cyber,
      description: "Prepares students to become next-generation cyber defenders and cloud security professionals in an increasingly connected digital world. Through hands-on learning, real-world simulations, and advanced security practices, students gain expertise in protecting systems, networks, cloud platforms, and digital infrastructure.",
      points: [
        "Operating System Security",
        "Cyber Law & Cyber Policy",
        "Penetration Testing & Vulnerability Assessment",
        "Digital Forensics",
        "Cloud Computing Architecture",
        "Cloud Infrastructure & Services",
        "Cloud Security & Governance",
      ]
    }
  ]
};
const POINTERS_DATA = [
  {
    id: 1,
    title: "Duration",
    value: "4 Years (8 Semesters)",
    icon: FaRegClock,
  },
  {
    id: 2,
    title: "Study Mode",
    value: "Full-Time",
    icon: FaGraduationCap,
  },
  {
    id: 3,
    title: "Fees",
    value: "2,50,000 per year",
    icon: FaCreditCard,
  },

];
const ProgramOverview = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Top Section */}

      <div className="mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-[#000B24] mb-4 md:mb-6 leading-tight">

          {PROGRAM_CONTENT.sectionSubtitle}
          <span className="block text-[#990000] text-lg md:text-2xl font-bold uppercase tracking-wider mb-2">
            {PROGRAM_CONTENT.sectionTitle}
          </span>
        </h2>
        <p className="text-sm md:text-lg text-gray-700 leading-relaxed text-justify">
          {PROGRAM_CONTENT.sectionDesc}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-12">
        {POINTERS_DATA.map(({ id, title, value, icon: Icon }) => (
          <div
            key={id}
            className="w-full bg-[#F6FBFF] p-6 shadow-md flex flex-col items-center justify-center
                       transition-all duration-300 ease-in-out
                       hover:scale-105 hover:shadow-2xl hover:bg-[#E9F7FA]"
          >
            <Icon size={34} className="text-[#790D20]" />

            <h2 className="text-base md:text-lg font-bold mt-3 text-center text-slate-800">
              {title}
            </h2>

            <p className="text-sm md:text-base text-center mt-2 text-slate-600 font-semibold">
              {value}
            </p>
          </div>
        ))}
      </div>
      {PROGRAM_CONTENT.specialisations.map((spec, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className="mb-16 last:mb-8">
            {/* Desktop Course Box */}
            <div
              className="hidden md:flex w-full min-h-[45vh] bg-[#071A8C] overflow-hidden bg-cover bg-top rounded-tl-[2.5rem] rounded-br-[2.5rem] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative py-8 md:py-10"
              style={{ backgroundImage: `url(${spec.bgImage})` }}
            >
              {/* Gradient Overlay for Text Readability */}
              <div
                className={`absolute inset-0 ${isEven
                  ? "bg-gradient-to-r from-[#071A8C]/95 via-[#071A8C]/75 to-transparent"
                  : "bg-gradient-to-l from-[#071A8C]/95 via-[#071A8C]/75 to-transparent"
                  }`}
              />

              {!isEven && <div className="w-[40%] h-full" />}

              <div className="relative z-10 w-[60%] h-full flex flex-col justify-center px-8 md:px-12">
                <h2 className="text-white text-xl md:text-3xl font-bold leading-tight">
                  {spec.title}
                </h2>
                <p className="text-white/80 text-sm md:text-base mt-3 mb-4 leading-relaxed text-justify">
                  {spec.description}
                </p>
                <ul className="space-y-1">
                  {spec.points.map((point, i) => (
                    <li key={i} className="text-white text-xs md:text-base">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>

              {isEven && <div className="w-[40%] h-full" />}
            </div>

            {/* Mobile Course Card */}
            <div
              className="block md:hidden w-full rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden relative shadow-md"
              style={{
                backgroundImage: `url(${spec.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "top"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#071A8C]/90 via-[#071A8C]/70 to-transparent" />
              <div className="relative z-10 p-6">
                <h2 className="text-white text-lg font-bold leading-tight mb-2">
                  {spec.title}
                </h2>
                <p className="text-white/85 text-xs mb-4 leading-relaxed text-justify">
                  {spec.description}
                </p>
                <ul className="space-y-1">
                  {spec.points.map((point, i) => (
                    <li key={i} className="text-white text-xs">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProgramOverview;
