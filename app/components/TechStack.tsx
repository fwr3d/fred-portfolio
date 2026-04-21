"use client";

import { useState } from "react";

const LAYERS = [
  { name: "Git",        category: "Tooling",   color: "#F97316", desc: "Version control — branching, PRs, commit hygiene." },
  { name: "Node.js",    category: "Runtime",   color: "#84CC16", desc: "Server-side JS runtime, npm ecosystem." },
  { name: "Tailwind",   category: "Styling",   color: "#38BDF8", desc: "Utility-first CSS — fast, consistent styling." },
  { name: "HTML / CSS", category: "Language",  color: "#FB923C", desc: "The web's foundation — semantic markup and layout." },
  { name: "Next.js",    category: "Framework", color: "#C0C0C0", desc: "Full-stack React framework — SSR, routing, API routes." },
  { name: "React",      category: "Framework", color: "#61DAFB", desc: "Component model, hooks, state management." },
  { name: "JavaScript", category: "Language",  color: "#FDE047", desc: "Core language — async/await, DOM, ES modules." },
  { name: "TypeScript", category: "Language",  color: "#60A5FA", desc: "Static typing, interfaces, generics — JS with safety." },
];

const LAYER_H = 40;   // gap between layers (coin thickness visible)
const COIN_H  = 14;   // visible side depth

export default function TechStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-16 w-full max-w-[960px]">

      {/* ── Coin stack ── */}
      <div
        style={{
          position: "relative",
          width: "300px",
          flexShrink: 0,
          // tilt the whole container once — no per-element rotateX
          transform: "rotateX(28deg) rotateY(-6deg)",
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
          perspective: "800px",
          height: `${LAYERS.length * LAYER_H + 60}px`,
          marginTop: "40px",
        }}
      >
        {LAYERS.map((layer, i) => {
          const isHovered = hovered === i;
          // bottom layer = index 0, top = index 7
          const bottomOffset = i * LAYER_H;

          return (
            <div
              key={layer.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: `${bottomOffset}px`,
                height: "44px",
                willChange: "transform",
                transform: isHovered ? "translateY(-52px)" : "translateY(0px)",
                transition: "transform 0.18s ease, box-shadow 0.18s ease",
                zIndex: isHovered ? 50 : i,
                cursor: "pointer",
              }}
            >
              {/* Coin face */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "6px",
                  background: isHovered
                    ? `linear-gradient(135deg, ${layer.color}28, ${layer.color}0e)`
                    : "#0F1A18",
                  border: `1px solid ${isHovered ? layer.color + "88" : "#1E3330"}`,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  gap: "10px",
                  boxShadow: isHovered
                    ? `0 0 20px ${layer.color}33, 0 8px 24px rgba(0,0,0,0.5)`
                    : "none",
                  transition: "background 0.18s, border-color 0.18s, box-shadow 0.18s",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: layer.color,
                    flexShrink: 0,
                    boxShadow: isHovered ? `0 0 8px ${layer.color}` : "none",
                    transition: "box-shadow 0.18s",
                  }}
                />
                <span style={{
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: isHovered ? "#E4EDEA" : "#527068",
                  transition: "color 0.18s",
                  flex: 1,
                }}>
                  {layer.name}
                </span>
                <span style={{
                  fontSize: "0.56rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: isHovered ? layer.color : "#1E3330",
                  transition: "color 0.18s",
                }}>
                  {layer.category}
                </span>
              </div>

              {/* Coin side (bottom edge — makes it look like a slab) */}
              <div
                style={{
                  position: "absolute",
                  bottom: `-${COIN_H}px`,
                  left: "2px",
                  right: "2px",
                  height: `${COIN_H}px`,
                  borderRadius: "0 0 6px 6px",
                  background: isHovered
                    ? `linear-gradient(to bottom, ${layer.color}22, ${layer.color}08)`
                    : "linear-gradient(to bottom, #0a1210, #080e0d)",
                  borderLeft: `1px solid ${isHovered ? layer.color + "44" : "#162320"}`,
                  borderRight: `1px solid ${isHovered ? layer.color + "44" : "#162320"}`,
                  borderBottom: `1px solid ${isHovered ? layer.color + "22" : "#0f1a18"}`,
                  transition: "background 0.18s, border-color 0.18s",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* ── Detail panel ── */}
      <div
        style={{
          flex: 1,
          paddingTop: "8px",
          transition: "opacity 0.15s ease",
          opacity: hovered !== null ? 1 : 0.3,
          minHeight: "100px",
        }}
      >
        {hovered !== null ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <span style={{
                width: "9px", height: "9px",
                borderRadius: "50%",
                background: LAYERS[hovered].color,
                boxShadow: `0 0 10px ${LAYERS[hovered].color}`,
                flexShrink: 0,
              }} />
              <span style={{ fontSize: "1.15rem", fontWeight: 700, color: "#E4EDEA", letterSpacing: "-0.02em" }}>
                {LAYERS[hovered].name}
              </span>
              <span style={{
                fontSize: "0.58rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: LAYERS[hovered].color,
                border: `1px solid ${LAYERS[hovered].color}44`,
                padding: "2px 8px",
                borderRadius: "4px",
                background: `${LAYERS[hovered].color}11`,
              }}>
                {LAYERS[hovered].category}
              </span>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#527068", lineHeight: "1.7", maxWidth: "300px" }}>
              {LAYERS[hovered].desc}
            </p>
          </>
        ) : (
          <p style={{ fontSize: "0.82rem", color: "#527068", lineHeight: "1.7" }}>
            Hover a layer to inspect it.
          </p>
        )}
      </div>

    </div>
  );
}
