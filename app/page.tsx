import TechStack from "./components/TechStack";

const PROJECTS = [
  {
    index: "01",
    title: "Draftroom",
    description:
      "A fantasy football draft simulator to practice picks, test strategies, and prepare for draft day.",
    tags: ["React", "Simulation", "Sports"],
    github: "https://github.com/fwr3d/draftroom",
    demo: "https://fwr3d.github.io/draftroom",
  },
  {
    index: "02",
    title: "Pennywise",
    description:
      "A budget manager for tracking spending, organizing categories, and staying on top of personal finances.",
    tags: ["Finance", "Budgeting", "Web App"],
    github: "https://github.com/fwr3d/Pennywise",
    demo: "https://pennywise-v1.vercel.app",
  },
  {
    index: "03",
    title: "Atlas",
    description:
      "A personal dashboard bringing together tasks and notes in one place to keep day-to-day work organized.",
    tags: ["Dashboard", "Tasks", "Notes"],
    github: "https://github.com/fwr3d/Atlas",
    demo: "https://atlas-sooty-psi.vercel.app",
  },
  {
    index: "04",
    title: "Cascadia",
    description:
      "A physics-based tsunami simulator for the Cascadia Subduction Zone. Drop an earthquake epicenter, set magnitude and depth, and watch wave propagation and coastal impact estimates update in real time.",
    tags: ["Simulation", "Maps", "Hackathon"],
    github: "https://github.com/fwr3d/cascadia",
    demo: "",
    award: "2nd · Ridge Hacks",
    starred: true,
  },
  {
    index: "05",
    title: "Crane",
    description:
      "A full-stack job tracker with LinkedIn scraping, a kanban board with drag-and-drop stages, and streaming results — so listings appear progressively as pages load rather than all at once.",
    tags: ["Full-Stack", "FastAPI", "Supabase"],
    github: "https://github.com/fwr3d/crane",
    demo: "",
  },
];

const ACHIEVEMENTS = [
  {
    place: "2nd Place",
    event: "Ridge Hacks",
    detail: "Built Cascadia — a physics-based tsunami simulator for the Cascadia Subduction Zone.",
    date: "Apr 2026",
  },
];

const LEARNING = [
  { topic: "Rust", detail: "Systems programming, memory safety, and ownership model." },
  { topic: "System Design", detail: "Architecting scalable systems, trade-offs, and distributed patterns." },
  { topic: "Databases", detail: "SQL, relational modeling, indexing, and query optimization." },
];


export default function Home() {
  return (
    <>
      {/* ── Fixed Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-border"
        style={{ background: "rgba(8,14,13,0.88)", backdropFilter: "blur(12px)" }}
      >
        <span className="font-semibold tracking-tight text-text" style={{ fontSize: "0.95rem" }}>
          Federico <span className="text-amber">Barrera</span>
        </span>

        <div className="hidden md:flex items-center gap-7">
          {[["home", "#home"], ["about", "#about"], ["stack", "#stack"], ["work", "#work"], ["achievements", "#achievements"], ["learning", "#learning"], ["contact", "#contact"]].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-muted hover:text-text transition-colors duration-150 text-sm capitalize tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/fwr3d"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted hover:text-text border border-border rounded-md px-4 py-1.5 hover:border-[#444] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:federicobarroc@gmail.com"
            className="text-sm text-bg font-medium rounded-md px-4 py-1.5 hover:opacity-90 transition-opacity"
            style={{ background: "#10B981" }}
          >
            Email
          </a>
        </div>
      </nav>

      {/* ── Scroll container ── */}
      <div className="snap-container">

        {/* ── Section 1: Hero ── */}
        <section id="home" className="snap-section">
          <div className="section-inner">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-12 items-center w-full max-w-[960px]">
              <div>
                <p className="from-top d-0 text-sm text-muted mb-4 tracking-wide uppercase" style={{ fontSize: "0.7rem", letterSpacing: "0.14em" }}>
                  Developer · Builder · Student
                </p>
                <h1
                  className="from-left d-1 font-bold leading-[1.02] tracking-tight mb-5 text-text"
                  style={{ fontSize: "clamp(42px, 7vw, 72px)" }}
                >
                  Federico<br />
                  <span className="text-amber">Barrera</span>
                </h1>
                <p className="from-left d-2 text-muted leading-relaxed mb-8 max-w-[380px]" style={{ fontSize: "0.95rem" }}>
                  I build developer-focused web apps and tools — clean interfaces,
                  real functionality, code that ships.
                </p>
                <div className="from-bottom d-3 flex gap-3 flex-wrap">
                  <a
                    href="https://github.com/fwr3d"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-bg hover:opacity-90 transition-opacity"
                    style={{ background: "#10B981" }}
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="mailto:federicobarroc@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-text border border-border hover:border-[#444] transition-colors"
                  >
                    Get in touch
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-text border border-border hover:border-[#444] transition-colors"
                  >
                    Resume ↗
                  </a>
                </div>
              </div>

              {/* Status card */}
              <div className="from-right d-2 rounded-xl border border-border p-5 bg-surface">
                <p className="text-xs text-muted uppercase tracking-widest mb-4" style={{ fontSize: "0.6rem" }}>
                  Status
                </p>
                {[
                  ["Role",    "SWE Intern"],
                  ["Company", "Huroca"],
                  ["Period",  "Summer 2026"],
                  ["School",  "Purdue → Fall 2026"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2.5 border-b border-border last:border-b-0">
                    <span className="text-muted text-sm">{k}</span>
                    <span className="text-teal text-sm font-medium">{v}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 mt-4 text-teal text-sm">
                  <span className="w-2 h-2 rounded-full bg-teal pulse-dot inline-block shrink-0" />
                  Joining Huroca this summer
                </div>
              </div>
            </div>

            <div className="scroll-hint">scroll ↓</div>
          </div>
        </section>

        {/* ── Section 2: About ── */}
        <section id="about" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted mb-10" style={{ letterSpacing: "0.18em" }}>
                About
              </p>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12">
                <div className="flex flex-col gap-5">
                  <p className="from-left d-1 text-text leading-relaxed" style={{ fontSize: "0.95rem" }}>
                    I'm Federico — a developer and builder heading to{" "}
                    <span className="text-amber font-medium">Purdue University</span>{" "}
                    to study Computer Science in the fall.
                  </p>
                  <p className="from-left d-2 text-muted leading-relaxed text-sm">
                    I build web apps and tools that solve real problems — clean interfaces, real
                    functionality, code that ships. My work ranges from developer utilities to
                    data-heavy simulations. Most recently, I built Cascadia, a physics-based
                    tsunami simulator that took 2nd at Ridge Hacks.
                  </p>
                  <p className="from-left d-3 text-muted leading-relaxed text-sm">
                    This summer I'm joining{" "}
                    <span className="text-text font-medium">Huroca</span>{" "}
                    as a Software Engineering Intern. I'm drawn to the intersection of
                    clean interfaces and real backend complexity — the kind of work where
                    every decision has a reason.
                  </p>
                </div>

                <div className="from-right d-2 flex flex-col gap-3">
                  {[
                    ["Internship", "Huroca · Summer 2026"],
                    ["University", "Purdue · Fall 2026"],
                    ["Focus",      "Computer Science"],
                    ["Currently",  "TypeScript, Next.js, React"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex flex-col gap-0.5 py-3 border-b border-border last:border-b-0">
                      <span className="text-muted uppercase tracking-widest" style={{ fontSize: "0.6rem", letterSpacing: "0.14em" }}>{k}</span>
                      <span className="text-text text-sm font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Tech Stack ── */}
        <section id="stack" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted mb-10" style={{ letterSpacing: "0.18em" }}>
                Tech Stack
              </p>
              <div className="from-bottom d-1">
                <TechStack />
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Projects ── */}
        <section id="work" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted mb-6" style={{ letterSpacing: "0.18em" }}>
                Selected Work
              </p>

              {/* Starred / featured project */}
              {PROJECTS.filter(p => p.starred).map((p) => (
                <div
                  key={p.title}
                  className="from-bottom d-1 project-row rounded-xl bg-surface p-5 flex flex-col gap-3 mb-4 transition-all duration-200"
                  style={{ border: "1px solid rgba(52,211,153,0.22)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs text-muted">{p.index}</span>
                      {p.award && (
                        <span
                          className="text-teal font-semibold tracking-wide"
                          style={{ fontSize: "0.62rem", letterSpacing: "0.1em" }}
                        >
                          ★ {p.award}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3 text-xs text-muted">
                      <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-teal transition-colors">
                        GitHub ↗
                      </a>
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noreferrer" className="hover:text-teal transition-colors">
                          Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold tracking-tight mb-2" style={{ fontSize: "1.1rem" }}>
                        {p.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-sm max-w-2xl">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:justify-end shrink-0">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-teal rounded-md px-2 py-0.5"
                          style={{ background: "rgba(52,211,153,0.1)", fontSize: "0.7rem" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Regular project grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PROJECTS.filter(p => !p.starred).map((p, i) => {
                  const dirs = ["from-left", "from-bottom", "from-right"];
                  return (
                    <div
                      key={p.title}
                      className={`${dirs[i % 3]} project-row rounded-xl border border-border bg-surface p-5 flex flex-col gap-3 transition-all duration-200`}
                      style={{ animationDelay: `${(i + 1) * 100}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted">{p.index}</span>
                        <div className="flex gap-3 text-xs text-muted">
                          <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
                            GitHub ↗
                          </a>
                          {p.demo && (
                            <a href={p.demo} target="_blank" rel="noreferrer" className="hover:text-amber transition-colors">
                              Demo ↗
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold tracking-tight mb-2" style={{ fontSize: "1rem" }}>
                          {p.title}
                        </h3>
                        <p className="text-muted leading-relaxed text-sm">
                          {p.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-teal rounded-md px-2 py-0.5"
                            style={{ background: "rgba(16,185,129,0.1)", fontSize: "0.7rem" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 4: Achievements ── */}
        <section id="achievements" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted mb-8" style={{ letterSpacing: "0.18em" }}>
                Achievements
              </p>

              <div className="flex flex-col gap-3">
                {ACHIEVEMENTS.map((a, i) => (
                  <div
                    key={a.event}
                    className="from-bottom project-row rounded-xl border border-border bg-surface p-5 flex items-center gap-6 transition-all duration-200"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div
                      className="shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.15)" }}
                    >
                      <span className="text-teal font-bold" style={{ fontSize: "1.25rem" }}>🏆</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="text-teal font-semibold" style={{ fontSize: "0.8rem" }}>{a.place}</span>
                        <span className="text-muted" style={{ fontSize: "0.75rem" }}>·</span>
                        <span className="text-text font-semibold" style={{ fontSize: "0.9rem" }}>{a.event}</span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{a.detail}</p>
                    </div>
                    <span className="text-muted shrink-0" style={{ fontSize: "0.72rem" }}>{a.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Currently Learning ── */}
        <section id="learning" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted mb-2" style={{ letterSpacing: "0.18em" }}>
                Currently Learning
              </p>
              <p className="from-top d-1 text-muted text-sm mb-10 max-w-sm">
                What I'm exploring, reading, or building right now.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {LEARNING.map((item, i) => {
                  const dirs = ["from-left", "from-bottom", "from-right"];
                  return (
                    <div
                      key={item.topic}
                      className={`${dirs[i % 3]} rounded-xl border border-border bg-surface p-5`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[rgba(16,185,129,0.12)] flex items-center justify-center mb-4">
                        <span className="text-amber font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="font-semibold tracking-tight mb-2" style={{ fontSize: "0.95rem" }}>
                        {item.topic}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  );
                })}
              </div>

              {/* Purdue note */}
              <div className="from-bottom d-4 mt-10 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                <p className="text-muted text-sm">
                  Starting CS at{" "}
                  <span className="text-text font-medium">Purdue University</span>
                  {" "}— Fall 2026
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 7: Contact ── */}
        <section id="contact" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted mb-8" style={{ letterSpacing: "0.18em" }}>
                Contact
              </p>

              <div className="from-left d-1 mb-10">
                <p className="text-text font-semibold mb-2" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.2 }}>
                  Let's talk.
                </p>
                <p className="text-muted text-sm max-w-sm leading-relaxed">
                  Open to conversations about engineering, interesting problems, and what comes after Purdue.
                </p>
              </div>

              <div className="from-bottom d-2 flex flex-col gap-3 max-w-sm">
                <a
                  href="mailto:federicobarroc@gmail.com"
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-border bg-surface hover:border-teal/30 hover:bg-surface2 transition-all duration-200 group"
                >
                  <span className="text-text text-sm font-medium">federicobarroc@gmail.com</span>
                  <span className="text-muted group-hover:text-teal transition-colors text-sm">↗</span>
                </a>
                <a
                  href="https://github.com/fwr3d"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-border bg-surface hover:border-teal/30 hover:bg-surface2 transition-all duration-200 group"
                >
                  <span className="text-text text-sm font-medium">github.com/fwr3d</span>
                  <span className="text-muted group-hover:text-teal transition-colors text-sm">↗</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-border bg-surface hover:border-teal/30 hover:bg-surface2 transition-all duration-200 group"
                >
                  <span className="text-text text-sm font-medium">Resume</span>
                  <span className="text-muted group-hover:text-teal transition-colors text-sm">↓ PDF</span>
                </a>
              </div>

              <div className="from-bottom d-4 mt-12 pt-5 border-t border-border flex items-center justify-between text-muted text-xs">
                <span>© 2026 Federico Barrera</span>
                <span>Built with Next.js · Deployed on Vercel</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
