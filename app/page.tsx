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
];

const POSTS = [
  {
    slug: "post-one",
    title: "Post title goes here",
    date: "Apr 2026",
    summary: "A short description of what this post is about. What did you learn, build, or figure out?",
    tag: "Thoughts",
    rotate: "-2deg",
  },
  {
    slug: "post-two",
    title: "Another post title",
    date: "Mar 2026",
    summary: "A short description of what this post is about. What did you learn, build, or figure out?",
    tag: "Build Log",
    rotate: "1.5deg",
  },
  {
    slug: "post-three",
    title: "One more thing you wrote about",
    date: "Feb 2026",
    summary: "A short description of what this post is about. What did you learn, build, or figure out?",
    tag: "Dev",
    rotate: "-1deg",
  },
];

const LEARNING = [
  { topic: "Rust", detail: "Systems programming, memory safety, and ownership model." },
  { topic: "System Design", detail: "Architecting scalable systems, trade-offs, and distributed patterns." },
  { topic: "Databases", detail: "SQL, relational modeling, indexing, and query optimization." },
];

const TECH = [
  { name: "TypeScript", type: "Language" },
  { name: "JavaScript", type: "Language" },
  { name: "React",      type: "Framework" },
  { name: "Next.js",    type: "Framework" },
  { name: "HTML / CSS", type: "Language" },
  { name: "Tailwind",   type: "Styling" },
  { name: "Node.js",    type: "Runtime" },
  { name: "Git",        type: "Tooling" },
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
          {[["home", "#home"], ["stack", "#stack"], ["work", "#work"], ["writing", "#writing"], ["learning", "#learning"]].map(([label, href]) => (
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
                </div>
              </div>

              {/* Status card */}
              <div className="from-right d-2 rounded-xl border border-border p-5 bg-surface">
                <p className="text-xs text-muted uppercase tracking-widest mb-4" style={{ fontSize: "0.6rem" }}>
                  Status
                </p>
                {[
                  ["Role",   "Student"],
                  ["School", "Purdue"],
                  ["Start",  "Fall 2026"],
                  ["Focus",  "CS"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2.5 border-b border-border last:border-b-0">
                    <span className="text-muted text-sm">{k}</span>
                    <span className="text-teal text-sm font-medium">{v}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 mt-4 text-teal text-sm">
                  <span className="w-2 h-2 rounded-full bg-teal pulse-dot inline-block shrink-0" />
                  Open to work
                </div>
              </div>
            </div>

            <div className="scroll-hint">scroll ↓</div>
          </div>
        </section>

        {/* ── Section 2: Tech Stack ── */}
        <section id="stack" className="snap-section" style={{ overflow: "hidden" }}>
          <div className="section-inner">
            <div className="w-full">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted text-center mb-10 max-w-[960px] mx-auto px-6" style={{ letterSpacing: "0.18em" }}>
                Tech Stack
              </p>

              <div className="from-bottom d-1 marquee-outer mb-3">
                <div className="marquee-track">
                  {[...TECH, ...TECH].map((tech, i) => (
                    <div key={i} className="marquee-chip">
                      <span className="text-text font-medium" style={{ fontSize: "0.88rem" }}>{tech.name}</span>
                      <span className="text-amber text-xs">{tech.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="from-bottom d-2 marquee-outer">
                <div className="marquee-track marquee-reverse">
                  {[...TECH.slice().reverse(), ...TECH.slice().reverse()].map((tech, i) => (
                    <div key={i} className="marquee-chip">
                      <span className="text-text font-medium" style={{ fontSize: "0.88rem" }}>{tech.name}</span>
                      <span className="text-amber text-xs">{tech.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: Projects ── */}
        <section id="work" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted mb-8" style={{ letterSpacing: "0.18em" }}>
                Selected Work
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROJECTS.map((p, i) => {
                  const dirs = ["from-left", "from-bottom", "from-right"];
                  return (
                    <div
                      key={p.title}
                      className={`${dirs[i % 3]} project-row rounded-xl border border-border bg-surface p-5 flex flex-col gap-3 transition-all duration-200`}
                      style={{ animationDelay: `${i * 100}ms` }}
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

        {/* ── Section 4: Writing ── */}
        <section id="writing" className="snap-section">
          <div className="section-inner">
            <div className="w-full max-w-[960px]">
              <p className="from-top d-0 text-xs uppercase tracking-widest text-muted mb-10" style={{ letterSpacing: "0.18em" }}>
                Writing
              </p>

              <div className="flex flex-wrap gap-6 justify-start">
                {POSTS.map((post, i) => (
                  <a
                    key={post.slug}
                    href={`/writing/${post.slug}`}
                    className={`from-bottom paper-card group`}
                    style={{
                      animationDelay: `${i * 100}ms`,
                      transform: `rotate(${post.rotate})`,
                      display: "block",
                      width: "220px",
                      textDecoration: "none",
                    }}
                  >
                    {/* Staple */}
                    <div className="paper-staple" />

                    {/* Paper body */}
                    <div className="paper-body">
                      <span className="paper-tag">{post.tag}</span>
                      <h3 className="paper-title">{post.title}</h3>
                      <p className="paper-summary">{post.summary}</p>
                      <span className="paper-date">{post.date}</span>
                    </div>
                  </a>
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

              {/* Footer in last section */}
              <div className="from-bottom d-5 mt-8 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4 text-muted text-xs">
                <span>© 2026 Federico Barrera</span>
                <div className="flex gap-5">
                  <a href="mailto:federicobarroc@gmail.com" className="hover:text-text transition-colors">
                    federicobarroc@gmail.com
                  </a>
                  <a href="https://github.com/fwr3d" target="_blank" rel="noreferrer" className="hover:text-text transition-colors">
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
