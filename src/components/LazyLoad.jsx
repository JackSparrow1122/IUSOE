import { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

/**
 * LazyImage Component
 * Loads standard <img> tag when within threshold and performs a smooth fade-in.
 */
export function LazyImage({ src, alt, className = "", rootMargin = "150px", ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [lazySrc, ref] = useLazySource(src, rootMargin);

  const handleLoad = () => {
    setLoaded(true);
    // Recalculate GSAP trigger coordinates to adjust for any minor layout differences
    ScrollTrigger.refresh();
  };

  return (
    <img
      ref={ref}
      src={lazySrc || "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'></svg>"}
      alt={alt}
      onLoad={handleLoad}
      className={`${className} transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
      {...props}
    />
  );
}

/**
 * LazyBackground Component
 * Defers setting background-image style on a container until it enters viewport.
 */
export function LazyBackground({ src, children, className = "", style = {}, rootMargin = "150px", ...props }) {
  const [lazySrc, ref] = useLazySource(src, rootMargin);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (lazySrc) {
      const img = new Image();
      img.src = lazySrc;
      img.onload = () => {
        setLoaded(true);
        ScrollTrigger.refresh();
      };
    }
  }, [lazySrc]);

  const mergedStyle = {
    ...style,
    backgroundImage: lazySrc && loaded ? `url(${lazySrc})` : "none",
  };

  return (
    <div
      ref={ref}
      style={mergedStyle}
      className={`${className} transition-all duration-700 ease-out`}
      {...props}
    >
      {children}
    </div>
  );
}
