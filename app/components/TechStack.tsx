const ROWS = [
  { offset: "0px",  keys: ["TypeScript", "JavaScript", "C#"] },
  { offset: "14px", keys: ["React 19", "Next.js 15"] },
  { offset: "28px", keys: ["Tailwind CSS", "CSS Modules"] },
  { offset: "14px", keys: ["Git", "Node.js", "Vercel"] },
];

const KEY_STYLE: React.CSSProperties = {
  background: "#0d1916",
  border: "1px solid #1a2e2a",
  borderRadius: "7px",
  boxShadow: "0 4px 0 #020706",
  padding: "10px 16px",
  fontFamily: "var(--font-mono)",
  fontSize: "0.72rem",
  color: "#34D399",
  letterSpacing: "0.02em",
  cursor: "default",
  userSelect: "none" as const,
  whiteSpace: "nowrap" as const,
};

export default function TechStack() {
  return (
    <div
      style={{
        background: "#070c0b",
        border: "1px solid #162320",
        borderRadius: "16px",
        padding: "22px 22px 18px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        display: "inline-flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {ROWS.map(({ offset, keys }, ri) => (
        <div key={ri} style={{ display: "flex", gap: "8px", paddingLeft: offset }}>
          {keys.map((key) => (
            <div key={key} className="kbd-key" style={KEY_STYLE}>
              {key}
            </div>
          ))}
        </div>
      ))}

      {/* Spacebar */}
      <div style={{ display: "flex", paddingLeft: "42px" }}>
        <div
          className="kbd-key"
          style={{
            ...KEY_STYLE,
            width: "220px",
            textAlign: "center",
            color: "#1a3530",
            letterSpacing: "0.22em",
            fontSize: "0.6rem",
          }}
        >
          FWR3D
        </div>
      </div>
    </div>
  );
}
