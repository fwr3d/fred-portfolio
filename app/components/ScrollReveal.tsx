"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Observe snap sections — add .in-view when they enter, triggering child reveals
    const sections = document.querySelectorAll<HTMLElement>(".snap-section");
    // Also observe standalone .reveal elements (for hero which is pre-visible)
    const standalones = document.querySelectorAll<HTMLElement>(".reveal.in-view");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            // Remove so re-entering re-animates
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => sectionObserver.observe(s));

    return () => sectionObserver.disconnect();
  }, []);

  return null;
}
