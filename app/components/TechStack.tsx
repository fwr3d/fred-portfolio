"use client";
import { useState } from "react";

type Node = { id: string; label: string; x: number; y: number };

const NODES: Node[] = [
  { id: "ts",    label: "TypeScript",  x: 245, y: 150 },
  { id: "js",    label: "JavaScript",  x: 125, y: 95  },
  { id: "cs",    label: "C#",          x: 375, y: 80  },
  { id: "react", label: "React 19",    x: 295, y: 230 },
  { id: "next",  label: "Next.js 15",  x: 415, y: 168 },
  { id: "tw",    label: "Tailwind",    x: 455, y: 252 },
  { id: "css",   label: "CSS Modules", x: 355, y: 292 },
  { id: "git",   label: "Git",         x: 105, y: 238 },
  { id: "node",  label: "Node.js",     x: 72,  y: 158 },
  { id: "vcel",  label: "Vercel",      x: 505, y: 112 },
];

const EDGES: [string, string][] = [
  ["ts",    "js"],
  ["ts",    "react"],
  ["ts",    "cs"],
  ["ts",    "next"],
  ["js",    "node"],
  ["js",    "git"],
  ["react", "next"],
  ["next",  "vcel"],
  ["next",  "tw"],
  ["tw",    "css"],
];

const STARS = [
  {x:22,y:28},{x:75,y:48},{x:155,y:18},{x:310,y:38},{x:430,y:22},
  {x:498,y:52},{x:542,y:28},{x:18,y:105},{x:180,y:188},{x:200,y:268},
  {x:255,y:315},{x:405,y:318},{x:480,y:298},{x:530,y:205},{x:558,y:148},
  {x:560,y:268},{x:8,y:200},{x:138,y:318},{x:340,y:48},{x:488,y:188},
];

export default function TechStack() {
  const [hovered, setHovered] = useState<string | null>(null);

  const connectedTo = (id: string) =>
    EDGES.flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []));

  return (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <svg
        viewBox="0 0 580 330"
        width="100%"
        style={{ overflow: "visible" }}
      >
        {/* Background stars */}
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={0.9} fill="rgba(52,211,153,0.2)" />
        ))}

        {/* Edges */}
        {EDGES.map(([a, b]) => {
          const na = NODES.find(n => n.id === a)!;
          const nb = NODES.find(n => n.id === b)!;
          const lit = hovered === a || hovered === b;
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke={lit ? "rgba(52,211,153,0.5)" : "rgba(52,211,153,0.1)"}
              strokeWidth={lit ? 1 : 0.7}
              style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => {
          const isHovered  = hovered === node.id;
          const isNeighbor = hovered ? connectedTo(hovered).includes(node.id) : false;
          const active     = isHovered || isNeighbor;

          const rightSide  = node.x > 290;
          const lx         = rightSide ? node.x + 13 : node.x - 13;
          const anchor     = rightSide ? "start" : "end";

          return (
            <g
              key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "crosshair" }}
            >
              {/* Glow */}
              {isHovered && (
                <circle cx={node.x} cy={node.y} r={16}
                  fill="rgba(52,211,153,0.07)"
                  stroke="rgba(52,211,153,0.18)"
                  strokeWidth={1}
                />
              )}

              {/* Star dot */}
              <circle
                cx={node.x} cy={node.y}
                r={isHovered ? 5.5 : 3.5}
                fill={active ? "#34D399" : "#1e4a3e"}
                stroke={active ? "#34D399" : "#2d6357"}
                strokeWidth={active ? 0 : 1}
                className={active ? "" : "constellation-node"}
                style={{
                  animationDelay: `${i * 380}ms`,
                  transition: "r 0.18s, fill 0.18s",
                }}
              />

              {/* Label */}
              <text
                x={lx} y={node.y + 4}
                textAnchor={anchor}
                fill={isHovered ? "#E4EDEA" : isNeighbor ? "#6b9e94" : "#2e5a50"}
                fontSize={10}
                fontFamily="var(--font-mono)"
                letterSpacing={0.4}
                style={{ transition: "fill 0.18s", pointerEvents: "none", userSelect: "none" }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
