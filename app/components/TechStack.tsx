const STACK = [
  { category: "languages",  items: ["TypeScript", "JavaScript", "C#"] },
  { category: "frameworks", items: ["React 19", "Next.js 15", "ASP.NET Core"] },
  { category: "styling",    items: ["Tailwind CSS", "CSS Modules"] },
  { category: "tools",      items: ["Git", "Mapbox GL", "Node.js", "Vercel"] },
  { category: "learning",   items: ["Rust", "System Design", "SQL"] },
];

export default function TechStack() {
  return (
    <div className="flex flex-col gap-6 w-full">
      {STACK.map(({ category, items }) => (
        <div key={category} className="flex items-start gap-8 sm:gap-14">
          <span
            className="text-muted shrink-0 uppercase tracking-widest pt-px"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", width: "76px" }}
          >
            {category}
          </span>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="text-teal rounded-md px-2.5 py-1 border border-border transition-colors duration-150 hover:border-teal/30 hover:bg-teal/10"
                style={{ fontSize: "0.75rem", background: "rgba(52,211,153,0.05)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
