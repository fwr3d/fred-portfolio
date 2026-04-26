const STACK = [
  { key: "languages",  values: ["TypeScript", "JavaScript", "C#"] },
  { key: "frameworks", values: ["React 19", "Next.js 15", "ASP.NET Core"] },
  { key: "styling",    values: ["Tailwind CSS", "CSS Modules"] },
  { key: "tools",      values: ["Git", "Mapbox GL", "Node.js", "Vercel"] },
];

const lineCount = STACK.length + 2; // opening + rows + closing

export default function TechStack() {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono)",
        background: "#0a1512",
        border: "1px solid #1E3330",
        borderRadius: "10px",
        overflow: "hidden",
        width: "100%",
        maxWidth: "580px",
      }}
    >
      {/* Editor chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 14px",
          borderBottom: "1px solid #1E3330",
          background: "#080e0d",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
        <span
          style={{
            marginLeft: "10px",
            fontSize: "0.65rem",
            color: "#527068",
            letterSpacing: "0.06em",
          }}
        >
          stack.ts
        </span>
      </div>

      {/* Code body */}
      <div style={{ padding: "18px 0 20px", lineHeight: "1.85", fontSize: "0.82rem" }}>

        {/* Line: const stack = { */}
        <CodeLine n={1}>
          <Kw>const</Kw> <Va>stack</Va> <Pu>=</Pu> <Pu>{"{"}</Pu>
        </CodeLine>

        {STACK.map(({ key, values }, i) => (
          <CodeLine key={key} n={i + 2}>
            <span style={{ paddingLeft: "20px", display: "inline" }}>
              <Key>{key}</Key><Pu>:</Pu>{" "}
              <Pu>[</Pu>
              {values.map((v, vi) => (
                <span key={v}>
                  <Str>"{v}"</Str>
                  {vi < values.length - 1 && <Pu>, </Pu>}
                </span>
              ))}
              <Pu>]</Pu><Pu>,</Pu>
            </span>
          </CodeLine>
        ))}

        {/* Line: } */}
        <CodeLine n={lineCount}>
          <Pu>{"}"}</Pu>
          <span className="blink" style={{ color: "#34D399", marginLeft: "1px", fontWeight: 400 }}>▋</span>
        </CodeLine>

      </div>
    </div>
  );
}

function CodeLine({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <span
        style={{
          width: "40px",
          textAlign: "right",
          paddingRight: "20px",
          color: "#2a4040",
          fontSize: "0.72rem",
          userSelect: "none",
          flexShrink: 0,
        }}
      >
        {n}
      </span>
      <span>{children}</span>
    </div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#C084FC" }}>{children}</span>;
}
function Va({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#34D399" }}>{children}</span>;
}
function Key({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#60A5FA" }}>{children}</span>;
}
function Str({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#86EFAC" }}>{children}</span>;
}
function Pu({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#527068" }}>{children}</span>;
}
