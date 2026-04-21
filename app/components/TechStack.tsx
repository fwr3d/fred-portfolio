"use client";

import { useState } from "react";

const LAYERS = [
  { name: "TypeScript", category: "Language",  color: "#60A5FA", desc: "Static typing, interfaces, generics — JS with safety." },
  { name: "JavaScript", category: "Language",  color: "#FDE047", desc: "Core language — async/await, DOM, ES modules." },
  { name: "React",      category: "Framework", color: "#61DAFB", desc: "Component model, hooks, state management." },
  { name: "Next.js",    category: "Framework", color: "#C0C0C0", desc: "Full-stack React framework — SSR, routing, API routes." },
  { name: "HTML / CSS", category: "Language",  color: "#FB923C", desc: "The web's foundation — semantic markup and layout." },
  { name: "Tailwind",   category: "Styling",   color: "#38BDF8", desc: "Utility-first CSS — fast, consistent styling." },
  { name: "Node.js",    category: "Runtime",   color: "#84CC16", desc: "Server-side JS runtime, npm ecosystem." },
  { name: "Git",        category: "Tooling",   color: "#F97316", desc: "Version control — branching, PRs, commit hygiene." },
];

// Disc dimensions
const W = 260;      // disc width
const ELLIPSE_H = 22; // height of the top ellipse
const BODY_H = 28;  // height of the cylinder body
const DISC_H = BODY_H + ELLIPSE_H / 2; // total vertical space per disc
const OVERLAP = 6;  // how much each disc overlaps the one below

export default function TechStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  const totalH = LAYERS.length * (DISC_H - OVERLAP) + ELLIPSE_H + 16;

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "60px", flexWrap: "wrap" }}>

      {/* ── Cylinder stack ── */}
      <div style={{ position: "relative", width: `${W}px`, height: `${totalH}px`, flexShrink: 0 }}>
        {/* Render bottom-to-top so higher layers paint over lower */}
        {[...LAYERS].reverse().map((layer, ri) => {
          const i = LAYERS.length - 1 - ri; // original index (0 = top)
          const isHovered = hovered === i;
          const topY = i * (DISC_H - OVERLAP);
          const c = layer.color;

          // Darken the color for side/shadow
          const sideDark = `${c}55`;
          const sideBase = `${c}33`;

          return (
            <div
              key={layer.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                left: 0,
                top: `${topY}px`,
                width: `${W}px`,
                height: `${DISC_H + ELLIPSE_H / 2}px`,
                willChange: "transform",
                transform: isHovered ? "translateY(-18px)" : "translateY(0)",
                transition: "transform 0.15s ease",
                zIndex: isHovered ? 99 : LAYERS.length - i,
                cursor: "pointer",
              }}
            >
              {/* Cylinder body (rectangle between top and bottom ellipse) */}
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${ELLIPSE_H / 2}px`,
                height: `${BODY_H}px`,
                background: isHovered
                  ? `linear-gradient(to right, ${c}44, ${c}22 50%, ${c}44)`
                  : `linear-gradient(to right, ${sideDark}, ${sideBase} 50%, ${sideDark})`,
                transition: "background 0.15s",
              }} />

              {/* Bottom ellipse (gives depth) */}
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${ELLIPSE_H / 2 + BODY_H - ELLIPSE_H / 2}px`,
                height: `${ELLIPSE_H}px`,
                borderRadius: "50%",
                background: isHovered ? `${c}33` : `${c}22`,
                transition: "background 0.15s",
              }} />

              {/* Top ellipse face — main visible surface */}
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: `${ELLIPSE_H}px`,
                borderRadius: "50%",
                background: isHovered
                  ? `radial-gradient(ellipse at 40% 35%, ${c}ff, ${c}bb)`
                  : `radial-gradient(ellipse at 40% 35%, ${c}cc, ${c}66)`,
                boxShadow: isHovered ? `0 0 18px ${c}66, 0 2px 12px rgba(0,0,0,0.4)` : `0 2px 6px rgba(0,0,0,0.3)`,
                transition: "background 0.15s, box-shadow 0.15s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}>
                <span style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  color: isHovered ? "#fff" : "rgba(255,255,255,0.65)",
                  letterSpacing: "-0.01em",
                  textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                  transition: "color 0.15s",
                  pointerEvents: "none",
                  userSelect: "none",
                }}>
                  {layer.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Detail panel ── */}
      <div style={{
        flex: 1,
        minWidth: "200px",
        paddingTop: "12px",
        opacity: hovered !== null ? 1 : 0.3,
        transition: "opacity 0.15s ease",
      }}>
        {hovered !== null ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{
                width: "10px", height: "10px", borderRadius: "50%",
                background: LAYERS[hovered].color,
                boxShadow: `0 0 10px ${LAYERS[hovered].color}`,
                flexShrink: 0,
              }} />
              <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#E4EDEA", letterSpacing: "-0.02em" }}>
                {LAYERS[hovered].name}
              </span>
              <span style={{
                fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase",
                color: LAYERS[hovered].color,
                border: `1px solid ${LAYERS[hovered].color}44`,
                padding: "2px 8px", borderRadius: "4px",
                background: `${LAYERS[hovered].color}11`,
              }}>
                {LAYERS[hovered].category}
              </span>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#527068", lineHeight: "1.7", maxWidth: "280px" }}>
              {LAYERS[hovered].desc}
            </p>
          </>
        ) : (
          <p style={{ fontSize: "0.82rem", color: "#527068", lineHeight: "1.7" }}>
            Hover a disc to inspect it.
          </p>
        )}
      </div>

    </div>
  );
}
