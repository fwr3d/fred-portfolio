"use client";

import { useState } from "react";

function SafeImg({ src, alt, size = 28 }: { src: string; alt: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="inline-block object-contain"
      style={{ verticalAlign: "middle", mixBlendMode: "multiply" }}
      onError={() => setFailed(true)}
    />
  );
}

export default function PurdueLogos() {
  return (
    <SafeImg src="/purdue-mascot.png" alt="Purdue Pete" size={32} />
  );
}
