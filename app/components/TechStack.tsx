"use client";

import { useState } from "react";

const LAYERS = [
  { name: "Git",        category: "Tooling",   color: "#F97316", desc: "Version control — branching, PRs, commit hygiene." },
  { name: "Node.js",    category: "Runtime",   color: "#84CC16", desc: "Server-side JS runtime, npm ecosystem." },
  { name: "Tailwind",   category: "Styling",   color: "#38BDF8", desc: "Utility-first CSS — fast, consistent styling." },
  { name: "HTML / CSS", category: "Language",  color: "#FB923C", desc: "The web's foundation — semantic markup and layout." },
  { name: "Next.js",    category: "Framework", color: "#A3A3A3", desc: "Full-stack React framework — SSR, routing, API routes." },
  { name: "React",      category: "Framework", color: "#61DAFB", desc: "Component model, hooks, state management." },
  { name: "JavaScript", category: "Language",  color: "#FDE047", desc: "Core language — async/await, DOM, ES modules." },
  { name: "TypeScript", category: "Language",  color: "#60A5FA", desc: "Static typing, interfaces, generics — JS with safety." },
];

export default function TechStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-[960px]">

      {/* Stack */}
      <div
        className="relative flex-shrink-0"
        style={{
          perspective: "900px",
          width: "320px",
          height: `${LAYERS.length * 38 + 60}px`,
        }}
      >
        {LAYERS.map((layer, i) => {
          const isHovered = hovered === i;
          const isBelow = hovered !== null && i < hovered;
          const totalLayers = LAYERS.length;
          // Base Y position — bottom layer at bottom
          const baseY = (totalLayers - 1 - i) * 38;
          const liftY = isHovered ? -60 : isBelow ? 6 : 0;

          return (
            <div
              key={layer.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                bottom: `${baseY}px`,
                left: 0,
                right: 0,
                height: "48px",
                transform: `
                  rotateX(30deg)
                  translateY(${liftY}px)
                  ${isHovered ? "translateZ(28px)" : "translateZ(0px)"}
                `,
                transformOrigin: "center bottom",
                transition: "transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s ease, z-index 0s",
                zIndex: isHovered ? 20 : i,
                cursor: "pointer",
                borderRadius: "6px",
                background: isHovered
                  ? `linear-gradient(135deg, ${layer.color}22, ${layer.color}11)`
                  : "#0F1A18",
                border: `1px solid ${isHovered ? layer.color + "66" : "#1E3330"}`,
                boxShadow: isHovered
                  ? `0 12px 32px rgba(0,0,0,0.6), 0 0 0 1px ${layer.color}44`
                  : "0 2px 8px rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: "10px",
              }}
            >
              {/* Color dot */}
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: layer.color,
                  flexShrink: 0,
                  boxShadow: isHovered ? `0 0 8px ${layer.color}` : "none",
                  transition: "box-shadow 0.2s ease",
                }}
              />
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: isHovered ? "#E4EDEA" : "#527068",
                  transition: "color 0.2s ease",
                  flex: 1,
                }}
              >
                {layer.name}
              </span>
              <span
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isHovered ? layer.color : "#1E3330",
                  transition: "color 0.2s ease",
                }}
              >
                {layer.category}
              </span>
            </div>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        style={{
          flex: 1,
          minHeight: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "opacity 0.2s ease",
          opacity: hovered !== null ? 1 : 0.35,
        }}
      >
        {hovered !== null ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: LAYERS[hovered].color,
                  boxShadow: `0 0 10px ${LAYERS[hovered].color}`,
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "#E4EDEA", letterSpacing: "-0.02em" }}>
                {LAYERS[hovered].name}
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: LAYERS[hovered].color,
                  border: `1px solid ${LAYERS[hovered].color}44`,
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: `${LAYERS[hovered].color}11`,
                }}
              >
                {LAYERS[hovered].category}
              </span>
            </div>
            <p style={{ fontSize: "0.9rem", color: "#527068", lineHeight: "1.7", maxWidth: "320px" }}>
              {LAYERS[hovered].desc}
            </p>
          </>
        ) : (
          <p style={{ fontSize: "0.85rem", color: "#527068", lineHeight: "1.7" }}>
            Hover a layer to inspect it.
          </p>
        )}
      </div>

    </div>
  );
}
