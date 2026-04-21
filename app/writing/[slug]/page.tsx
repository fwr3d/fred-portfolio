import { notFound } from "next/navigation";
import { getPost, POSTS } from "@/lib/posts";
import Link from "next/link";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-border"
        style={{ background: "rgba(8,14,13,0.88)", backdropFilter: "blur(12px)" }}
      >
        <Link href="/" className="font-semibold tracking-tight text-text hover:text-amber transition-colors" style={{ fontSize: "0.95rem" }}>
          Federico <span className="text-amber">Barrera</span>
        </Link>
        <Link
          href="/#writing"
          className="text-sm text-muted hover:text-text transition-colors flex items-center gap-1.5"
        >
          ← Writing
        </Link>
      </nav>

      {/* Post */}
      <main className="max-w-[680px] mx-auto px-6 pt-28 pb-24">
        {/* Paper sheet */}
        <div
          className="relative rounded-sm"
          style={{
            background: "#F2EFE8",
            boxShadow: "2px 6px 32px rgba(0,0,0,0.5)",
            padding: "48px 40px 40px",
          }}
        >
          {/* Staple */}
          <div
            style={{
              position: "absolute",
              top: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "32px",
              height: "14px",
              border: "2.5px solid #888",
              borderBottom: "none",
              borderRadius: "4px 4px 0 0",
            }}
          />

          {/* Lined paper bg */}
          <div
            style={{
              position: "absolute",
              inset: "48px 40px 40px",
              background: "repeating-linear-gradient(transparent, transparent 26px, rgba(0,0,0,0.07) 26px, rgba(0,0,0,0.07) 27px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "#10B981", fontSize: "0.6rem", letterSpacing: "0.14em" }}
              >
                {post.tag}
              </span>
              <span style={{ color: "#999", fontSize: "0.72rem" }}>{post.date}</span>
            </div>

            <h1
              className="font-bold tracking-tight leading-tight mb-8"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "#111" }}
            >
              {post.title}
            </h1>

            <div style={{ color: "#333", fontSize: "0.95rem", lineHeight: "1.8" }}>
              {post.content.split("\n\n").map((para, i) => (
                <p key={i} style={{ marginBottom: "1.2em" }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
