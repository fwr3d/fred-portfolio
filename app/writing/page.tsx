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
    <main className="min-h-screen overflow-y-auto bg-[#0a0a0a] text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-zinc-800/90 pb-4 text-sm">
          <Link href="/" className="font-semibold tracking-tight text-zinc-100 transition-colors hover:text-indigo-300">
            Federico <span className="text-indigo-400">Barrera</span>
          </Link>
          <Link href="/" className="text-zinc-500 transition-colors hover:text-zinc-200">
            Back home
          </Link>
        </nav>

        <section className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <header className="mb-12 max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Writing
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
              Essays, handbooks, and field notes.
            </h1>
            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              A small library of how I think about software, systems, and building with taste.
            </p>
          </header>

          <div className="grid gap-4">
            {WRITINGS.map((piece) => (
              <Link
                key={piece.href}
                href={piece.href}
                className="group rounded-lg border border-zinc-800 bg-zinc-950/70 p-5 transition-colors hover:border-indigo-500/60 hover:bg-zinc-950"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-semibold uppercase tracking-[0.16em] text-indigo-300">
                    {piece.eyebrow}
                  </span>
                  <span className="text-zinc-700">/</span>
                  <span className="font-mono text-zinc-500">{piece.date}</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-indigo-200">
                      {piece.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
                      {piece.description}
                    </p>
                  </div>
                  <span className="text-sm text-zinc-500 transition-colors group-hover:text-indigo-300">
                    Read
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {piece.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-800 px-2.5 py-1 text-xs text-zinc-500"
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
