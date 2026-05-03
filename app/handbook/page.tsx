import type { Metadata } from "next";

import Handbook from "@/src/content/handbook.mdx";
import { HandbookLayout } from "./HandbookLayout";
import { HandbookMotion } from "./HandbookMotion";

export const metadata: Metadata = {
  title: "Vibe Coding Handbook | Federico Barrera",
  description: "A practical handbook for working with AI coding agents without losing engineering taste.",
};

export default function HandbookPage() {
  return (
    <HandbookMotion>
      <HandbookLayout
        eyebrow="Flagship guide"
        title="Vibe Coding Handbook"
        summary="A field manual for turning AI coding sessions into deliberate engineering work: clear context, tight loops, readable patches, and better taste under pressure."
        meta={<span>Minimal developer edition · MDX · 12 operating patterns</span>}
        aside={
          <div className="sticky top-8 flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">Handbook</p>
            <a href="#1-the-mindset" className="hover:text-indigo-300">Mindset</a>
            <a href="#2-the-loop" className="hover:text-indigo-300">The loop</a>
            <a href="#3-prompt-shape" className="hover:text-indigo-300">Prompt shape</a>
            <a href="#4-the-power-stack" className="hover:text-indigo-300">Power stack</a>
            <a href="#5-ship-with-control" className="hover:text-indigo-300">Ship with control</a>
          </div>
        }
      >
        <Handbook />
      </HandbookLayout>
    </HandbookMotion>
  );
}
