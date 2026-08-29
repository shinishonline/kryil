// Post-build pre-rendering for GitHub Pages.
//
// A Vite + react-router SPA serves one shell for every route, so deep routes
// (products, services, blog posts) are invisible to crawlers — on GitHub Pages
// they even 404. This renders each route in a real headless browser after the
// build and writes dist/<route>/index.html, so every route ships complete,
// crawlable HTML while the client app still takes over on load.
//
// Drives the system Google Chrome via puppeteer-core (no Chromium download).
// Routes are derived from the data files so blog/news stay in sync automatically.

import { createServer } from "node:http";
import { readFileSync, mkdirSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const PORT = 4188;

const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// ---- routes -----------------------------------------------------------------
const STATIC_ROUTES = [
  "/", "/careers", "/defense", "/brand",
  "/services/enterprise-solutions", "/services/professional-services",
  "/services/aimlservices", "/services/cybersecurity",
  "/services/automation", "/services/database",
  "/products/avionix", "/products/nextdooh",
  "/blog", "/news",
  "/privacy-policy", "/terms-of-use", "/anti-slavery-policy",
  "/carbon-reduction-plan",
];

function slugsFrom(file, prefix) {
  const src = readFileSync(join(ROOT, "src/data", file), "utf8");
  const slugs = [...src.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)].map((m) => m[1]);
  return [...new Set(slugs)].map((s) => `${prefix}/${s}`);
}

const ROUTES = [
  ...STATIC_ROUTES,
  ...slugsFrom("blogPosts.ts", "/blog"),
  ...slugsFrom("newsArticles.ts", "/news"),
];

// ---- a tiny static server with SPA fallback (so BrowserRouter routes load) ---
const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".ico": "image/x-icon", ".woff": "font/woff", ".woff2": "font/woff2",
  ".txt": "text/plain", ".xml": "application/xml",
};
function serve() {
  return createServer((req, res) => {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let file = join(DIST, url);
    if (existsSync(file) && statSync(file).isFile()) {
      res.setHeader("Content-Type", MIME[extname(file)] || "application/octet-stream");
      res.end(readFileSync(file));
      return;
    }
    // SPA fallback — serve index.html so the client router can render the route
    res.setHeader("Content-Type", "text/html");
    res.end(readFileSync(join(DIST, "index.html")));
  });
}

// ---- prerender --------------------------------------------------------------
async function main() {
  if (!existsSync(CHROME)) {
    console.error(`Chrome not found at ${CHROME}. Set CHROME_PATH.`);
    process.exit(1);
  }
  if (!existsSync(join(DIST, "index.html"))) {
    console.error("dist/index.html missing — run the build first.");
    process.exit(1);
  }

  const server = serve();
  await new Promise((r) => server.listen(PORT, r));

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let ok = 0, failed = 0;
  for (const route of ROUTES) {
    const page = await browser.newPage();
    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });
      // give React a beat to settle any post-mount effects
      await new Promise((r) => setTimeout(r, 250));
      let html = await page.content();
      html = "<!DOCTYPE html>\n" + html.replace(/^<!DOCTYPE html>/i, "").trim();

      const outDir = route === "/" ? DIST : join(DIST, route);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), html);
      ok++;
      process.stdout.write(`  ✓ ${route}\n`);
    } catch (e) {
      failed++;
      process.stdout.write(`  ✗ ${route} — ${String(e.message).slice(0, 60)}\n`);
    } finally {
      await page.close();
    }
  }

  // 404.html = the app shell, so genuinely-unknown routes still boot the SPA
  writeFileSync(join(DIST, "404.html"), readFileSync(join(DIST, "index.html")));

  await browser.close();
  server.close();
  console.log(`\nPrerendered ${ok}/${ROUTES.length} routes (${failed} failed).`);
  if (failed) process.exit(1);
}

main();
