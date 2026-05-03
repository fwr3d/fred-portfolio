const PROJECTS = [
  {
    title: "Cascadia",
    description:
      "A physics-based tsunami simulator for the Cascadia Subduction Zone with interactive inputs for magnitude, depth, and coastal impact estimates.",
    tags: ["Simulation", "Maps", "Hackathon"],
    github: "https://github.com/fwr3d/cascadia",
    demo: "",
    note: "2nd Place - Ridge Hacks",
  },
  {
    title: "Crane",
    description:
      "A full-stack job tracker with LinkedIn scraping, kanban stages, and streaming results so listings appear progressively as pages load.",
    tags: ["Full-Stack", "FastAPI", "Supabase"],
    github: "https://github.com/fwr3d/crane",
    demo: "",
  },
  {
    title: "Draftroom",
    description:
      "A fantasy football draft simulator for practicing picks, testing strategies, and preparing for draft day.",
    tags: ["React", "Simulation", "Sports"],
    github: "https://github.com/fwr3d/draftroom",
    demo: "https://fwr3d.github.io/draftroom",
  },
  {
    title: "Pennywise",
    description:
      "A personal budget manager for tracking spending, organizing categories, and staying on top of finances.",
    tags: ["Finance", "Budgeting", "Web App"],
    github: "https://github.com/fwr3d/Pennywise",
    demo: "https://pennywise-v1.vercel.app",
  },
  {
    title: "Atlas",
    description:
      "A personal dashboard that brings together tasks and notes in one place for day-to-day organization.",
    tags: ["Dashboard", "Tasks", "Notes"],
    github: "https://github.com/fwr3d/Atlas",
    demo: "https://atlas-sooty-psi.vercel.app",
  },
];

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "FastAPI",
  "Supabase",
  "Git",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="mx-auto w-full max-w-5xl px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-border pb-4 text-sm">
          <a href="#home" className="font-semibold tracking-tight text-text">
            Federico Barrera
          </a>
          <div className="hidden items-center gap-7 text-muted md:flex">
            <a href="#work" className="transition-colors hover:text-text">Work</a>
            <a href="/writing" className="transition-colors hover:text-text">Writing</a>
            <a href="#contact" className="transition-colors hover:text-text">Contact</a>
          </div>
        </nav>

        <section id="home" className="grid min-h-[72vh] items-center gap-12 py-20 md:grid-cols-[1fr_18rem]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Software Engineering Intern / CS Student
            </p>
            <h1 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-tight text-text sm:text-6xl">
              I build clean, useful software.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted">
              I am Federico Barrera, a developer focused on web apps, simulations, and tools with clear interfaces and reliable systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex rounded-md bg-text px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
              >
                View work
              </a>
              <a
                href="mailto:federicobarroc@gmail.com"
                className="inline-flex rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-text"
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-text"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-surface p-5">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Current
            </p>
            <div className="space-y-3 text-sm">
              {[
                ["Role", "SWE Intern"],
                ["Company", "Huroca"],
                ["School", "Purdue CS"],
                ["Focus", "Full-stack web"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0">
                  <span className="text-muted">{label}</span>
                  <span className="font-medium text-text">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-border py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Selected Work
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-text">Projects</h2>
            </div>
            <a
              href="https://github.com/fwr3d"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition-colors hover:text-text"
            >
              GitHub
            </a>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {PROJECTS.map((project) => (
              <article key={project.title} className="grid gap-5 py-7 md:grid-cols-[12rem_1fr_auto] md:items-start">
                <div>
                  <h3 className="font-semibold text-text">{project.title}</h3>
                  {project.note ? <p className="mt-1 text-xs text-muted">{project.note}</p> : null}
                </div>
                <div>
                  <p className="max-w-2xl text-sm leading-6 text-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded border border-border px-2 py-1 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 text-sm text-muted md:justify-end">
                  <a href={project.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
                    Code
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
                      Live
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-t border-border py-16 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              About
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              I am heading to Purdue University for Computer Science and currently building with TypeScript, Next.js, React, and backend tools. I care about simple interfaces, clear systems, and software that is easy to understand after it ships.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="rounded border border-border px-3 py-1.5 text-sm text-muted">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-border py-16 md:grid-cols-[1fr_18rem]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Writing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-text">Intent-Driven Development</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              My handbook on using AI coding agents without losing architectural control.
            </p>
          </div>
          <div className="flex items-start md:justify-end">
            <a href="/writing" className="rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-text">
              Read writing
            </a>
          </div>
        </section>

        <section id="contact" className="border-t border-border py-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text">Let&apos;s talk.</h2>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:gap-6">
            <a href="mailto:federicobarroc@gmail.com" className="transition-colors hover:text-text">
              federicobarroc@gmail.com
            </a>
            <a href="https://github.com/fwr3d" target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
              github.com/fwr3d
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
              Resume
            </a>
          </div>
        </section>

        <footer className="border-t border-border py-6 text-xs text-muted">
          2026 Federico Barrera
        </footer>
      </div>
    </main>
  );
}
