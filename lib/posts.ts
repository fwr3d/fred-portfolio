export type Post = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  content: string;
};

export const POSTS: Post[] = [
  {
    slug: "building-cascadia",
    title: "Building Cascadia in 48 Hours",
    date: "Apr 2026",
    tag: "Build Log",
    content: `The idea came from a conversation about the Pacific Northwest. The Cascadia Subduction Zone — a 600-mile fault off the coast of Oregon and Washington — is overdue for a major rupture. Scientists estimate a magnitude 9.0+ event could generate tsunami waves reaching the coast in under 15 minutes. We wanted to visualize what that actually looks like.

We had 48 hours. The core challenge was physics: modeling wave propagation across bathymetric terrain isn't simple. We used a simplified shallow-water equation model — not oceanographer-grade, but accurate enough to feel real. Wave speed depends on water depth (v = √(g·h)), which meant pulling elevation data from Mapbox Terrain DEM and inverting it for ocean depth. Every variable the user sets — magnitude, depth, epicenter — feeds into the initial wave amplitude and propagation radius.

The frontend was Next.js 15 with Mapbox GL handling the 3D terrain map. The backend ran on .NET 10 / ASP.NET Core, crunching the simulation and pulling live data from the USGS Earthquake Feed. The hardest part wasn't the physics — it was the timing. Rendering animated wave rings on a 3D map in real time while recalculating impact estimates for every county, hospital, power plant, and port in the Pacific Northwest meant every layer had to be fast.

We won. I didn't expect that. The judges said what stood out wasn't the simulation alone but that it actually worked — drop an epicenter anywhere in the ocean, set magnitude and depth, get a realistic animated result in seconds. That's the part I'm most proud of. It shipped, and it worked.`,
  },
  {
    slug: "on-typescript",
    title: "TypeScript Made Me a Better Developer",
    date: "Mar 2026",
    tag: "Dev",
    content: `I resisted TypeScript longer than I should have. I was building React apps with plain JavaScript and things were working fine. The types felt like noise — extra ceremony for code that already ran. Then I spent an hour debugging a null reference in Pennywise that a type annotation would have caught in three seconds. That was the last JavaScript-only project I shipped.

The shift wasn't instant. The first week felt like arguing with the editor. Every red squiggle was an accusation. But somewhere around week three, something clicked: the compiler isn't blocking you, it's telling you things you'd rather know now than at 2am when a user reports a bug. The red squiggles stopped feeling hostile and started feeling useful.

What actually changed how I think: interfaces. Defining the shape of data before writing logic forces you to understand what you're working with. When I built Cascadia's impact estimation system — counties, hospitals, ports, power plants, all with different data shapes — having explicit interfaces meant I could reason about the whole system without holding it all in my head at once.

I still write JavaScript sometimes. But TypeScript has made me slower in the best way — more deliberate about what data flows where and why. That deliberateness turns out to be most of the job.`,
  },
  {
    slug: "ship-it",
    title: "Ship It Anyway",
    date: "Feb 2026",
    tag: "Thoughts",
    content: `Every project I've shipped has had something wrong with it. Draftroom's draft logic doesn't handle edge cases for certain pick orders. Pennywise's category system is more rigid than it should be. Atlas has a data persistence model I'd redesign if I started today. I know all of this. I shipped them anyway.

There's a version of perfectionism that's actually just fear. If it's not done, no one can judge it. If you're still building, you're still safe. I've watched people stay in that mode for months — learning, planning, never shipping. The feedback loop you get from something actually being used is irreplaceable. Even if no one uses it, the act of finishing forces decisions that planning never does.

I'm heading to Purdue in the fall to study CS. I'll learn things there that will make me look back at my current code and cringe. That's fine. The goal was never to write perfect code — it was to build the habit of finishing. You can always refactor. You can't go back and ship something you talked yourself out of.

Start it. Break it. Fix it. Ship it.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
