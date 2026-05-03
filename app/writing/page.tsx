import type { Metadata } from "next";
import Link from "next/link";

const WRITINGS = [
  {
    title: "Intent-Driven Development: The Vibe Coding Handbook",
    href: "/handbook",
    eyebrow: "Handbook",
    date: "2026",
    description:
      "A practical framework for using AI coding agents without losing architectural control, centered on intent, validation, and the Power Stack.",
    tags: ["AI", "Architecture", "Developer Workflow"],
  },
];

export const metadata: Metadata = {
  title: "Writing | Federico Barrera",
  description: "Essays, handbooks, and notes by Federico Barrera.",
};

export default function WritingPage() {
  return (
    <main className="min-h-screen overflow-y-auto bg-bg text-text">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-border pb-4 text-sm">
          <Link href="/" className="font-semibold tracking-tight text-text transition-colors hover:text-teal">
            Federico <span className="text-amber">Barrera</span>
          </Link>
          <Link href="/" className="text-muted transition-colors hover:text-text">
            Back home
          </Link>
        </nav>

        <section className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <header className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Writing
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
              Essays, handbooks, and field notes.
            </h1>
            <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
              A small library of how I think about software, systems, and building with taste.
            </p>
          </header>

          <div className="grid gap-4">
            {WRITINGS.map((piece) => (
              <Link
                key={piece.href}
                href={piece.href}
                className="group rounded-lg border border-border bg-surface p-5 transition-colors hover:border-teal/40 hover:bg-surface2"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-semibold uppercase tracking-[0.16em] text-teal">
                    {piece.eyebrow}
                  </span>
                  <span className="text-border">/</span>
                  <span className="font-mono text-muted">{piece.date}</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-text group-hover:text-teal">
                      {piece.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                      {piece.description}
                    </p>
                  </div>
                  <span className="text-sm text-muted transition-colors group-hover:text-teal">
                    Read
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {piece.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
