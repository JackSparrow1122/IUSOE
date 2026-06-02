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
 * Stacking Panels Scroll Animation:
 *   - On Mobile: Sections stack and render vertically in one normal column.
 *   - On Desktop: The parent container is pinned, and Slide 2 & Slide 3
 *     slide up over Slide 1 dynamically as the user scrolls.
 */
export default function CampusHighlights() {
  const containerRef = useRef(null);
  const newSectionRef = useRef(null);
  const campusRef = useRef(null);
  const clubsRef = useRef(null);

  useLayoutEffect(() => {
    // Only run scroll-stacking animations on desktop/tablet (width >= 768px)
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const ns = newSectionRef.current;
      const cs = campusRef.current;
      const sc = clubsRef.current;
      if (!ns || !cs || !sc) return;

      // Pin the outer container and slide the overlays sequentially
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",        // 200% of viewport height scroll distance
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      // Set initial states: keep overlay slides off-screen below
      gsap.set(cs, { yPercent: 100 });
      gsap.set(sc, { yPercent: 100 });

      // Slide them up one by one
      tl.to(cs, { yPercent: 0, ease: "none" })
        .to(sc, { yPercent: 0, ease: "none" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full md:h-screen md:overflow-hidden bg-gradient-to-b from-[#8B0035] via-[#14002E] to-[#8B0035]"
    >
      {/* Slide 1: Events */}
      <div
        ref={newSectionRef}
        className="relative md:absolute md:inset-0 w-full md:h-full z-10 will-change-transform"
      >
        <NewSection />
      </div>

      {/* Slide 2: Facilities */}
      <div
        ref={campusRef}
        className="relative md:absolute md:inset-0 w-full md:h-full z-20 will-change-transform"
      >
        <CampusHighlightsSection />
      </div>

      {/* Slide 3: Clubs */}
      <div
        ref={clubsRef}
        className="relative md:absolute md:inset-0 w-full md:h-full z-30 will-change-transform"
      >
        <StudentClubsSection />
      </div>
    </div>
  );
}