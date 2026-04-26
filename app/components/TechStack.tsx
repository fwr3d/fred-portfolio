const NOTES = [
  { label: "TypeScript",  color: "#fef08a", rotate: "-3deg",   pin: "#f87171" },
  { label: "JavaScript",  color: "#fef08a", rotate: "2.5deg",  pin: "#60a5fa" },
  { label: "C#",          color: "#bfdbfe", rotate: "-1.5deg", pin: "#34d399" },
  { label: "React 19",    color: "#a5f3fc", rotate: "3.5deg",  pin: "#f87171" },
  { label: "Next.js 15",  color: "#f1f5f9", rotate: "-2deg",   pin: "#a78bfa" },
  { label: "Tailwind",    color: "#bfdbfe", rotate: "4deg",    pin: "#fbbf24" },
  { label: "CSS Modules", color: "#fbcfe8", rotate: "-3.5deg", pin: "#34d399" },
  { label: "Git",         color: "#fed7aa", rotate: "2deg",    pin: "#60a5fa" },
  { label: "Node.js",     color: "#bbf7d0", rotate: "-1deg",   pin: "#f87171" },
  { label: "Vercel",      color: "#f1f5f9", rotate: "3deg",    pin: "#fbbf24" },
];

export default function TechStack() {
  return (
    <div
      style={{
        background: "#0b100b",
        border: "10px solid #4a2e14",
        borderRadius: "3px",
        boxShadow: "inset 0 0 80px rgba(0,0,0,0.5), 0 12px 40px rgba(0,0,0,0.6), inset 0 0 0 2px rgba(255,255,255,0.03)",
        padding: "36px 28px 28px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {NOTES.map((note) => (
          <div
            key={note.label}
            className="postit"
            style={{
              transform: `rotate(${note.rotate})`,
              width: "108px",
              background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.1) 22%, transparent 22%) ,${note.color}`,
              boxShadow: "3px 6px 18px rgba(0,0,0,0.45)",
              padding: "28px 12px 14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              cursor: "default",
            }}
          >
            {/* Pin */}
            <div style={{
              position: "absolute",
              top: "-6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: note.pin,
              boxShadow: `0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)`,
              zIndex: 1,
            }} />

            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 700,
              color: "#1a1a1a",
              textAlign: "center",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}>
              {note.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
