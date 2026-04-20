import { chromium } from "playwright";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/projects");
mkdirSync(outDir, { recursive: true });

const pages = [
  { name: "shipyard",  url: "https://shipyard-v1.vercel.app/" },
  { name: "draftroom", url: "https://fwr3d.github.io/draftroom" },
  { name: "pennywise", url: "https://pennywise-v1.vercel.app" },
  { name: "atlas",     url: "https://atlas-sooty-psi.vercel.app" },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

for (const { name, url } of pages) {
  console.log(`Screenshotting ${name}…`);
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(1500);
    await page.screenshot({
      path: join(outDir, `${name}.png`),
      clip: { x: 0, y: 0, width: 1280, height: 800 },
    });
    console.log(`  ✓ saved ${name}.png`);
  } catch (e) {
    console.error(`  ✗ ${name}: ${e.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done.");
