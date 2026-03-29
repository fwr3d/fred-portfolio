import PurdueLogos from "./components/PurdueLogos";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col gap-14">
        <section className="flex flex-col gap-4 fade-up fade-up-1">
          <div
            className="w-16 h-16 rounded-full border border-gh-border flex items-center justify-center font-mono text-sm text-gh-muted select-none shrink-0"
            style={{ background: "#21262d" }}
          >
            FB
          </div>

          <h1 className="font-mono text-[1.85rem] leading-tight text-gh-text">
            Federico Barrera
          </h1>

          <p className="text-sm text-gh-muted">I build AI-native developer tools</p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/fwr3d"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gh-border rounded text-gh-text hover:border-gh-accent hover:text-gh-accent transition-colors duration-150"
            >
              <GitHubIcon />
              View GitHub
            </a>
            <a
              href="https://x.com/fbr0792"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gh-border rounded text-gh-text hover:border-gh-accent hover:text-gh-accent transition-colors duration-150"
            >
              <XIcon />
              Follow on X
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-4 fade-up fade-up-2">
          <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gh-muted font-mono">
            projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectCard
              title="Shipyard"
              description="Component generator for developer tools. Describe a UI component, get production-ready HTML/CSS/JS instantly."
              tags={["Next.js", "AI", "Developer Tools"]}
              githubUrl="https://github.com/fwr3d/shipyard"
              demoUrl="https://shipyard-v1.vercel.app/"
            />
            <ProjectCard
              title="Draftroom"
              description="A fantasy football draft simulator built to help users practice picks, test strategies, and prepare for draft day."
              tags={["Fantasy Football", "Simulation", "Sports"]}
              githubUrl="https://github.com/fwr3d/draftroom"
              demoUrl="https://fwr3d.github.io/draftroom"
            />
            <ProjectCard
              title="Pennywise"
              description="A budget manager for tracking spending, organizing categories, and staying on top of personal finances."
              tags={["Finance", "Budgeting", "Web App"]}
              githubUrl="https://github.com/fwr3d/Pennywise"
              demoUrl="https://pennywise-v1.vercel.app"
            />
            <ProjectCard
              title="Atlas"
              description="A personal dashboard that brings together tasks and notes in one place to keep day-to-day work organized."
              tags={["Dashboard", "Tasks", "Notes"]}
              githubUrl="https://github.com/fwr3d/Atlas"
              demoUrl="https://atlas-sooty-psi.vercel.app"
            />
          </div>
        </section>

        <section className="flex flex-col gap-4 fade-up fade-up-3">
          <p className="text-[0.65rem] uppercase tracking-[0.12em] text-gh-muted font-mono">
            currently
          </p>
          <div className="flex flex-col gap-2 pl-4 border-l border-gh-border">
            <p className="text-sm text-gh-text flex items-center gap-2 flex-wrap">
              Incoming CS @{" "}
              <span className="inline-flex items-center gap-1.5">
                <PurdueLogos />
                <span style={{ color: "#CFB991" }}>Purdue University</span>
                , fall 2026
              </span>
            </p>
          </div>
        </section>

        <footer className="text-center pt-2 fade-up fade-up-4">
          <a
            href="mailto:federicobarroc@gmail.com"
            className="text-xs text-gh-muted hover:text-gh-text transition-colors duration-150"
          >
            federicobarroc@gmail.com
          </a>
        </footer>
      </div>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}) {
  return (
    <div
      className="flex flex-col gap-3 rounded-lg border border-gh-border p-5"
      style={{ background: "#161b22" }}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-mono text-sm font-semibold text-gh-text">{title}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gh-muted hover:text-gh-accent transition-colors duration-150"
              aria-label={`${title} on GitHub`}
            >
              <GitHubIcon size={15} />
            </a>
          ) : null}
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gh-muted hover:text-gh-accent transition-colors duration-150"
              aria-label={`${title} live demo`}
            >
              <ExternalIcon size={15} />
            </a>
          ) : null}
        </div>
      </div>
      <p className="text-xs text-gh-muted leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.6rem] px-2 py-0.5 rounded-full text-gh-muted border border-gh-border"
            style={{ background: "#1c2128" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ExternalIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" />
    </svg>
  );
}
