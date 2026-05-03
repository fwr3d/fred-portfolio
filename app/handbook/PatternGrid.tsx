const PATTERNS = [
  {
    name: "Sync",
    category: "Data Flow",
    detail: "Keep shared state aligned across UI, server, and persistence layers.",
  },
  {
    name: "Streaming",
    category: "Data Flow",
    detail: "Move partial results through the system as soon as they are available.",
  },
  {
    name: "Snapshot",
    category: "Data Flow",
    detail: "Capture a stable view of data so reads stay predictable during change.",
  },
  {
    name: "Queue",
    category: "Data Flow",
    detail: "Buffer work into ordered units that can be retried, delayed, or processed asynchronously.",
  },
  {
    name: "Slot",
    category: "UI Composition",
    detail: "Expose named regions so layout owns structure while callers provide content.",
  },
  {
    name: "Compound",
    category: "UI Composition",
    detail: "Group related components under one shared API so complex UI stays coherent.",
  },
  {
    name: "Stateful UI",
    category: "UI Composition",
    detail: "Make interaction state explicit so rendering follows a controlled model.",
  },
  {
    name: "Skeleton",
    category: "UI Composition",
    detail: "Reserve visual structure while data loads to preserve rhythm and reduce layout shift.",
  },
  {
    name: "Adapter",
    category: "System Logic",
    detail: "Normalize an external service or mismatched interface behind a stable local contract.",
  },
  {
    name: "Observer",
    category: "System Logic",
    detail: "React to events without coupling the source of change to every consumer.",
  },
  {
    name: "Factory",
    category: "System Logic",
    detail: "Create configured objects or workflows from a single decision point.",
  },
  {
    name: "Guard",
    category: "System Logic",
    detail: "Block invalid inputs, unsafe states, or unauthorized paths before they spread.",
  },
];

function PatternCard({
  index,
  name,
  category,
  detail,
}: {
  index: number;
  name: string;
  category: string;
  detail: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition-colors hover:border-indigo-500/50">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-xs text-indigo-300">{String(index + 1).padStart(2, "0")}</span>
        <span className="h-px flex-1 bg-zinc-800" />
      </div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">{category}</p>
      <h3 className="m-0 text-base font-semibold tracking-tight text-zinc-100">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{detail}</p>
    </div>
  );
}

export function PatternGrid() {
  return (
    <div className="not-prose my-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {PATTERNS.map((pattern, index) => (
        <PatternCard key={pattern.name} index={index} {...pattern} />
      ))}
    </div>
  );
}
