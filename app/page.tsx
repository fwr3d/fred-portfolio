const PROJECTS = [
  {
    index: "01",
    title: "Shipyard",
    description:
      "Component generator for developer tools. Describe a UI component, get production-ready HTML/CSS/JS instantly.",
    tags: ["Next.js", "AI", "Developer Tools"],
    github: "https://github.com/fwr3d/shipyard",
    demo: "https://shipyard-v1.vercel.app/",
  },
  {
    index: "02",
    title: "Draftroom",
    description:
      "A fantasy football draft simulator built to help users practice picks, test strategies, and prepare for draft day.",
    tags: ["React", "Simulation", "Sports"],
    github: "https://github.com/fwr3d/draftroom",
    demo: "https://fwr3d.github.io/draftroom",
  },
  {
    index: "03",
    title: "Pennywise",
    description:
      "A budget manager for tracking spending, organizing categories, and staying on top of personal finances.",
    tags: ["Finance", "Budgeting", "Web App"],
    github: "https://github.com/fwr3d/Pennywise",
    demo: "https://pennywise-v1.vercel.app",
  },
  {
    index: "04",
    title: "Atlas",
    description:
      "A personal dashboard that brings together tasks and notes in one place to keep day-to-day work organized.",
    tags: ["Dashboard", "Tasks", "Notes"],
    github: "https://github.com/fwr3d/Atlas",
    demo: "https://atlas-sooty-psi.vercel.app",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ── Noise texture overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.022,
        }}
      />

      <div className="max-w-[66rem] mx-auto px-6 md:px-10 lg:px-16">
        {/* ── Header ── */}
        <header className="reveal d-0 flex items-center justify-between py-5 border-b border-border">
          <span className="font-serif text-sm italic text-ink-light select-none">
            Federico Barrera
          </span>
          <nav className="flex items-center gap-5 md:gap-7">
            {[
              { label: "GitHub", href: "https://github.com/fwr3d", external: true },
              { label: "X", href: "https://x.com/fbr0792", external: true },
              { label: "Email", href: "mailto:federicobarroc@gmail.com", external: false },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-[0.65rem] tracking-[0.15em] uppercase text-ink-light hover:text-rust transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        {/* ── Hero ── */}
        <section className="pt-16 pb-20 md:pt-24 md:pb-28">
          <p className="reveal d-1 text-[0.65rem] tracking-[0.22em] uppercase text-ink-light mb-8">
            Developer · Builder · Student
          </p>

          <h1
            className="reveal d-2 font-serif leading-[0.88] tracking-[-0.015em] text-ink mb-10"
            style={{ fontSize: "clamp(3rem, 10.5vw, 7.5rem)" }}
          >
            Federico
            <br />
            <em className="not-italic text-rust">Barrera</em>
          </h1>

          <div className="reveal d-3 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12">
            <p className="text-[0.875rem] text-ink-light leading-[1.8] max-w-[21rem]">
              I build developer-focused web apps and tools — clean UI, real
              functionality, maintainable code.
            </p>
            <p className="text-[0.63rem] tracking-[0.18em] uppercase text-ink-light flex items-center gap-2.5 shrink-0">
              <span className="inline-block w-6 h-px bg-rust" />
              Incoming CS @ Purdue, Fall 2026
            </p>
          </div>
        </section>

        {/* ── Projects ── */}
        <section className="pb-24">
          <div className="reveal d-4 flex items-center justify-between pb-3 border-b border-border mb-0">
            <span className="text-[0.63rem] tracking-[0.22em] uppercase text-ink-light">
              Selected Work
            </span>
            <span className="text-[0.63rem] text-ink-light" style={{ opacity: 0.45 }}>
              {PROJECTS.length} projects
            </span>
          </div>

          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.title} {...p} delay={`d-${5 + i}`} />
          ))}
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-border py-6 flex flex-wrap items-center justify-between gap-4">
          <span className="font-serif italic text-sm text-ink-light">fwr3d</span>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="mailto:federicobarroc@gmail.com"
              className="text-[0.68rem] text-ink-light hover:text-rust transition-colors duration-150"
            >
              federicobarroc@gmail.com
            </a>
            <a
              href="https://github.com/fwr3d"
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] text-ink-light hover:text-rust transition-colors duration-150"
            >
              github.com/fwr3d
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Project Row
──────────────────────────────────────────── */
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
      className={`reveal ${delay} project-row flex gap-5 md:gap-8 py-6 border-b border-border transition-colors duration-200 cursor-default`}
    >
      {/* Index number */}
      <span
        className="text-[0.6rem] tabular-nums pt-1 w-5 shrink-0 leading-none font-sans"
        style={{ color: "rgba(184,69,26,0.45)" }}
      >
        {index}
      </span>

      {/* Body */}
      <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="flex-1 min-w-0">
          <h3 className="font-serif text-[1.15rem] text-ink mb-1.5 leading-snug">
            {title}
          </h3>
          <p className="text-[0.78rem] text-ink-light leading-relaxed mb-3 max-w-[26rem]">
            {description}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className="text-[0.58rem] tracking-[0.1em] uppercase"
                style={{ color: "rgba(122,115,108,0.65)" }}
              >
                {tag}
                {i < tags.length - 1 && (
                  <span className="ml-2" style={{ color: "rgba(221,216,209,1)" }}>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 sm:pt-1 shrink-0">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-ink-light hover:text-rust transition-colors duration-150"
            aria-label={`${title} on GitHub`}
          >
            <GitHubIcon />
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-ink-light hover:text-rust transition-colors duration-150"
              aria-label={`${title} live demo`}
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Icons
──────────────────────────────────────────── */
function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" />
    </svg>
  );
}
