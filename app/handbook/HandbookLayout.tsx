import Link from "next/link";

type HandbookLayoutProps = {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  summary: React.ReactNode;
  meta?: React.ReactNode;
  children: React.ReactNode;
};

export function HandbookLayout({
  eyebrow,
  title,
  summary,
  meta,
  children,
}: HandbookLayoutProps) {
  return (
    <main className="handbook-scroll text-zinc-100">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between border-b border-zinc-800/80 pb-4 text-sm">
          <Link href="/" className="font-semibold tracking-tight text-zinc-100 transition-colors hover:text-indigo-300">
            Federico <span className="text-indigo-400">Barrera</span>
          </Link>
          <Link href="/writing" className="text-zinc-500 transition-colors hover:text-zinc-200">
            Writing
          </Link>
        </nav>

        <div className="flex flex-1 justify-center py-10 sm:py-14 lg:py-16">
          <div className="handbook-document w-full max-w-3xl">
            <header className="border-b border-zinc-800/90 px-6 py-7 sm:px-10 sm:py-9">
              <p
                data-handbook-heading
                className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300"
              >
                {eyebrow}
              </p>
              <h1
                data-handbook-heading
                className="text-2xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-3xl"
              >
                {title}
              </h1>
              <p data-handbook-heading className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
                {summary}
              </p>
              {meta ? (
                <div className="mt-6 border-t border-zinc-800/70 pt-4 font-mono text-xs uppercase tracking-[0.14em] text-zinc-600">
                  {meta}
                </div>
              ) : null}
            </header>

            <article className="prose prose-invert handbook-prose mx-auto max-w-2xl px-6 py-8 sm:px-10 sm:py-12">
              {children}
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
