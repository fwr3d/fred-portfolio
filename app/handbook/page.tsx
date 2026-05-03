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
        eyebrow="Writing / Handbook"
        title="Vibe Coding Handbook"
        summary="A structured field document on intent-driven development, architectural drift, and the Power Stack."
        meta={<span>Federico Barrera / 2026 / MDX document</span>}
      >
        <Handbook />
      </HandbookLayout>
    </HandbookMotion>
  );
}
