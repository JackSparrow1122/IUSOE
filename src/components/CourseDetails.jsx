import React from "react";
import {
  FaRegClock,
  FaChartLine,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";
import TopPlacements from "./TopPlacements";

/* ---------------- DATA ---------------- */



/* ---------------- COMPONENT ---------------- */

function CourseDetails() {
  return (
    <div className="w-full px-6 py-8 poppins-regular">
      <TopPlacements />
    </div>
  );
}

export default CourseDetails;