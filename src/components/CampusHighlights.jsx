import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NewSection from "./NewSection";
import CampusHighlightsSection from "./CampusHighlightsSection";
import StudentClubsSection from "./StudentClubsSection";

gsap.registerPlugin(ScrollTrigger);

/**
 * CampusHighlights
 *
 * Scroll-stack animation:
 *   1. NewSection is pinned while CampusHighlightsSection slides up over it.
 *   2. CampusHighlightsSection is then pinned while StudentClubsSection slides up over it.
 *   3. StudentClubsSection unpins and the page continues normally.
 *
 * The three sections share a single stacking container so z-indices are
 * predictable and no other part of the page is affected.
 */
export default function CampusHighlights() {
  const containerRef = useRef(null);
  const newSectionRef = useRef(null);
  const campusRef = useRef(null);
  const clubsRef = useRef(null);

  useLayoutEffect(() => {
    // Wait one tick so the DOM has painted and heights are real
    const ctx = gsap.context(() => {
      const ns = newSectionRef.current;
      const cs = campusRef.current;
      const sc = clubsRef.current;
      if (!ns || !cs || !sc) return;

      // ── Section 1 → Section 2 ──────────────────────────────────────────────
      // Pin NewSection; slide CampusHighlightsSection from below up to y=0
      gsap.set(cs, { y: "100%" });

      ScrollTrigger.create({
        trigger: ns,
        start: "top top",
        end: "+=100%",        // scroll distance = one viewport height
        pin: true,
        pinSpacing: false,    // section 2 is already in the stack — no gap
        scrub: true,
        onUpdate: (self) => {
          // As progress goes 0→1, slide section 2 from +100% → 0%
          gsap.set(cs, { y: `${(1 - self.progress) * 100}%` });
        },
      });

      // ── Section 2 → Section 3 ──────────────────────────────────────────────
      // Pin CampusHighlightsSection; slide StudentClubsSection from below up
      gsap.set(sc, { y: "100%" });

      ScrollTrigger.create({
        trigger: cs,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          gsap.set(sc, { y: `${(1 - self.progress) * 100}%` });
        },
      });

      // Refresh after all images have loaded so heights are correct
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    /**
     * The outer container just groups the three sections.
     * `overflow: hidden` clips the sections that are still off-screen below.
     * Each inner wrapper is `position: sticky` at the OS level; GSAP's pin
     * mechanism takes over on scroll.
     */
    <div ref={containerRef} style={{ position: "relative", overflow: "hidden" }}>

      {/* ── 01 Events & Annual Celebrations ── */}
      <div
        ref={newSectionRef}
        style={{ position: "relative", zIndex: 1, willChange: "transform" }}
      >
        <NewSection />
      </div>

      {/* ── 02 Campus Facilities & Infrastructure ── */}
      <div
        ref={campusRef}
        style={{
          position: "relative",
          zIndex: 2,
          willChange: "transform",
          /* starts translated 100% down; GSAP drives it to 0 */
        }}
      >
        <CampusHighlightsSection />
      </div>

      {/* ── 03 Student Clubs ── */}
      <div
        ref={clubsRef}
        style={{
          position: "relative",
          zIndex: 3,
          willChange: "transform",
        }}
      >
        <StudentClubsSection />
      </div>
    </div>
  );
}
