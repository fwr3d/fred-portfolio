import type { MDXComponents } from "mdx/types";

import { PatternGrid } from "@/app/handbook/PatternGrid";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    PatternGrid,
    ...components,
  };
}
