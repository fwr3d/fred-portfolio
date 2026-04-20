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

const TECH = [
  { name: "TypeScript", type: "language" },
  { name: "JavaScript", type: "language" },
  { name: "React",      type: "framework" },
  { name: "Next.js",    type: "framework" },
  { name: "HTML/CSS",   type: "language" },
  { name: "Tailwind",   type: "styling" },
  { name: "Node.js",    type: "runtime" },
  { name: "Git",        type: "tooling" },
];

export default function Home() {
  return (
    <>
      {/* ── Fixed Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-border"
        style={{ background: "rgba(14,14,14,0.85)", backdropFilter: "blur(12px)" }}
      >
        <span style={{ fontFamily: "var(--font-mono)", color: "#F5A623", fontSize: "0.95rem" }}>
          fb<span style={{ color: "#666660" }}>@portfolio</span>
        </span>

        {/* Section dots */}
        <div className="hidden md:flex items-center gap-6">
          {["home", "stack", "work"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-muted hover:text-amber transition-colors duration-150"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em" }}
            >
              {id}
            </a>
          ))}
        </div>

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

      {/* ── Scroll container ── */}
      <div className="snap-container">

        {/* ── Section 1: Hero ── */}
        <section id="home" className="snap-section">
          <div className="section-inner">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10 items-center w-full max-w-[960px]">
              <div>
                <div
                  className="reveal in-view text-muted mb-5 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem" }}
                >
                  <span className="text-amber">$</span> whoami
                </div>
                <h1
                  className="reveal in-view font-bold leading-[1.02] tracking-[-0.03em] mb-5 text-text"
                  style={{ fontSize: "clamp(42px, 7vw, 72px)", animationDelay: "60ms" }}
                >
                  Federico<br />
                  <span className="text-amber">Barrera</span>
                </h1>
                <p
                  className="reveal in-view text-muted leading-[1.72] mb-8 max-w-[380px]"
                  style={{ fontSize: "0.88rem", animationDelay: "120ms" }}
                >
                  I build developer-focused web apps and tools — clean interfaces,
                  real functionality, code that ships.
                </p>
                <div className="reveal in-view flex gap-3 flex-wrap" style={{ animationDelay: "180ms" }}>
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
                className="reveal in-view rounded-lg border border-border p-5 bg-surface"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", animationDelay: "200ms" }}
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
            </div>

            <div className="scroll-hint">
              scroll <span className="text-amber">↓</span>
            </div>
          </div>
        </section>

        {/* ── Section 2: Tech Stack ── */}
        <section id="stack" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <div
                className="reveal flex items-center gap-2 mb-8 text-muted"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
              >
                <span className="text-amber text-base">#</span>
                tech_stack.ts
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {TECH.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="reveal rounded border border-border bg-surface px-4 py-3 flex items-center justify-between gap-2"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <span className="font-medium text-text" style={{ fontSize: "0.82rem" }}>
                      {tech.name}
                    </span>
                    <span
                      className="text-muted shrink-0"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", letterSpacing: "0.08em" }}
                    >
                      {tech.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Projects ── */}
        <section id="work" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <div
                className="reveal flex items-center gap-2 mb-8 text-muted"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem" }}
              >
                <span className="text-amber text-base">#</span>
                selected_work.ts
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {PROJECTS.map((p, i) => (
                  <div
                    key={p.title}
                    className="reveal project-row rounded-lg border border-border bg-surface p-5 flex flex-col gap-3 cursor-default transition-all duration-200"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "rgba(245,166,35,0.55)" }}>
                        {p.index}
                      </span>
                      <div className="flex gap-3" style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem" }}>
                        <a href={p.github} target="_blank" rel="noreferrer" className="text-muted hover:text-amber transition-colors">
                          github ↗
                        </a>
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noreferrer" className="text-muted hover:text-amber transition-colors">
                            demo ↗
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold tracking-[-0.015em] mb-2 leading-snug" style={{ fontSize: "0.98rem" }}>
                        {p.title}
                      </h3>
                      <p className="text-muted leading-relaxed" style={{ fontSize: "0.78rem" }}>
                        {p.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-teal rounded px-2 py-0.5"
                          style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.04em", background: "rgba(45,212,191,0.08)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer inside last section */}
              <div
                className="mt-10 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4 text-muted"
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
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
