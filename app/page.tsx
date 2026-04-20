const PROJECTS = [
  {
    index: "01",
    title: "Draftroom",
    description:
      "A fantasy football draft simulator to practice picks, test strategies, and prepare for draft day.",
    tags: ["react", "simulation", "sports"],
    github: "https://github.com/fwr3d/draftroom",
    demo: "https://fwr3d.github.io/draftroom",
  },
  {
    index: "02",
    title: "Pennywise",
    description:
      "A budget manager for tracking spending, organizing categories, and staying on top of personal finances.",
    tags: ["finance", "budgeting", "web-app"],
    github: "https://github.com/fwr3d/Pennywise",
    demo: "https://pennywise-v1.vercel.app",
  },
  {
    index: "03",
    title: "Atlas",
    description:
      "A personal dashboard bringing together tasks and notes in one place to keep day-to-day work organized.",
    tags: ["dashboard", "tasks", "notes"],
    github: "https://github.com/fwr3d/Atlas",
    demo: "https://atlas-sooty-psi.vercel.app",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-[960px] mx-auto px-6 md:px-10">

        {/* ── Nav ── */}
        <nav className="reveal d-1 flex items-center justify-between py-5 border-b border-border">
          <span style={{ fontFamily: "var(--font-mono)", color: "#F5A623", fontSize: "0.95rem" }}>
            fb<span style={{ color: "#666660" }}>@portfolio</span>
          </span>
          <div className="flex gap-0 border border-border rounded-md overflow-hidden">
            {[
              { label: "github", href: "https://github.com/fwr3d" },
              { label: "x.com",  href: "https://x.com/fbr0792" },
              { label: "email",  href: "mailto:federicobarroc@gmail.com" },
            ].map((l, i, arr) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label !== "email" ? "_blank" : undefined}
                rel={l.label !== "email" ? "noreferrer" : undefined}
                className="text-muted hover:text-amber hover:bg-[rgba(245,166,35,0.08)] transition-colors duration-150 px-4 py-2"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.04em",
                  borderRight: i < arr.length - 1 ? "1px solid #2A2A2A" : "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Hero ── */}
        <section className="py-14 md:py-20 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10 items-center border-b border-border">
          <div>
            <div
              className="reveal d-2 text-muted mb-5 flex items-center gap-2"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem" }}
            >
              <span className="text-amber">$</span> whoami
            </div>

            <h1
              className="reveal d-3 font-bold leading-[1.02] tracking-[-0.03em] mb-5 text-text"
              style={{ fontSize: "clamp(42px, 7vw, 66px)" }}
            >
              Federico<br />
              <span className="text-amber">Barrera</span>
            </h1>

            <p
              className="reveal d-4 text-muted leading-[1.72] mb-8 max-w-[380px]"
              style={{ fontSize: "0.88rem" }}
            >
              I build developer-focused web apps and tools — clean interfaces,
              real functionality, code that ships.
            </p>

            <div className="reveal d-5 flex gap-3 flex-wrap">
              <a
                href="https://github.com/fwr3d"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-bg hover:opacity-90 transition-opacity"
                style={{ background: "#F5A623", fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.03em" }}
              >
                github ↗
              </a>
              <a
                href="mailto:federicobarroc@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-text border border-border hover:border-[rgba(245,166,35,0.4)] hover:text-amber transition-colors"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.03em" }}
              >
                email
              </a>
            </div>
          </div>

          {/* Status card */}
          <div
            className="reveal d-5 rounded-lg border border-border p-5 bg-surface"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
          >
            <div className="text-muted tracking-widest uppercase mb-3 text-[0.55rem]">// status</div>
            {[
              ["role",   "student"],
              ["school", "Purdue"],
              ["start",  "Fall 2026"],
              ["focus",  "CS"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-2 border-b border-border last:border-b-0 text-muted">
                <span>{k}</span>
                <span className="text-teal">{v}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-4 text-teal">
              <span className="w-2 h-2 rounded-full bg-teal pulse-dot inline-block shrink-0" />
              open to work
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="py-10 pb-20">
          <div
            className="reveal d-6 flex items-center gap-2 mb-5 text-muted"
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
          >
            <span className="text-amber text-base">#</span>
            selected_work.ts
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROJECTS.map((p, i) => (
              <ProjectRow key={p.title} {...p} delay={`d-${6 + i}`} />
            ))}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer
          className="border-t border-border py-5 flex flex-wrap items-center justify-between gap-4 text-muted"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem" }}
        >
          <span>© 2026 Federico Barrera</span>
          <div className="flex gap-5">
            <a href="mailto:federicobarroc@gmail.com" className="hover:text-amber transition-colors">
              federicobarroc@gmail.com
            </a>
            <a href="https://github.com/fwr3d" target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
              github.com/fwr3d
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ProjectRow
───────────────────────────────────────────── */
function ProjectRow({
  delay,
  index,
  title,
  description,
  tags,
  github,
  demo,
}: {
  delay: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
}) {
  return (
    <div
      className={`reveal ${delay} project-row rounded-lg border border-border bg-surface transition-all duration-200 p-5 flex flex-col gap-3 cursor-default`}
    >
      {/* Top: index + links */}
      <div className="flex items-center justify-between">
        <span
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "rgba(245,166,35,0.55)" }}
        >
          {index}
        </span>
        <div
          className="flex gap-3"
          style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem" }}
        >
          <a href={github} target="_blank" rel="noreferrer" className="text-muted hover:text-amber transition-colors">
            github ↗
          </a>
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="text-muted hover:text-amber transition-colors">
              demo ↗
            </a>
          )}
        </div>
      </div>

      {/* Title + description */}
      <div className="flex-1">
        <h3 className="font-semibold tracking-[-0.015em] mb-2 leading-snug" style={{ fontSize: "0.98rem" }}>
          {title}
        </h3>
        <p className="text-muted leading-relaxed" style={{ fontSize: "0.78rem" }}>
          {description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-teal rounded px-2 py-0.5"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.04em",
              background: "rgba(45,212,191,0.08)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
