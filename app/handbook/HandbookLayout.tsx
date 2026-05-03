import Link from "next/link";

type HandbookLayoutProps = {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  summary: React.ReactNode;
  meta?: React.ReactNode;
  aside?: React.ReactNode;
  children: React.ReactNode;
};

export function HandbookLayout({
  eyebrow,
  title,
  summary,
  meta,
  aside,
  children,
}: HandbookLayoutProps) {
  return (
    <main className="handbook-scroll text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-zinc-800/90 pb-4 text-sm">
          <Link href="/" className="font-semibold tracking-tight text-zinc-100 transition-colors hover:text-indigo-300">
            Federico <span className="text-indigo-400">Barrera</span>
          </Link>
          <Link href="/" className="text-zinc-500 transition-colors hover:text-zinc-200">
            Back home
          </Link>
        </nav>

        <div className="grid flex-1 gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:py-20">
          <div className="min-w-0">
            <header className="mb-14 max-w-2xl">
              <p
                data-handbook-heading
                className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300"
              >
                {eyebrow}
              </p>
              <h1
                data-handbook-heading
                className="text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl"
              >
                {title}
              </h1>
              <p data-handbook-heading className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
                {summary}
              </p>
              {meta ? <div className="mt-7 text-sm text-zinc-500">{meta}</div> : null}
            </header>

            <article className="prose prose-invert handbook-prose max-w-2xl">
              {children}
            </article>
          </div>

          {aside ? (
            <aside className="hidden border-l border-zinc-800 pl-6 text-sm text-zinc-500 lg:block">
              {aside}
            </aside>
          ) : null}
        </div>
      </div>
    </main>
  );
}
