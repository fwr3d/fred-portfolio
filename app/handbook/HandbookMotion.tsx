"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HandbookMotion({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-handbook-heading]",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          ease: "power2.out",
          stagger: 0.08,
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
