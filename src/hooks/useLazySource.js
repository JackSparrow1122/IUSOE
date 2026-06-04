import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to defer loading of an asset until it is close to the viewport.
 * Automatically triggers ScrollTrigger.refresh() on load completion to keep GSAP markers aligned.
 */
export function useLazySource(src, rootMargin = "150px") {
  const [source, setSource] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (!src) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSource(src);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, rootMargin]);

  return [source, ref];
}
