// Instant-submit every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver,
// Yep, Amazon — which in turn feed Microsoft Copilot). Google does NOT use
// IndexNow — Google indexing is Search Console/sitemap-driven, unaffected by
// this script.
//
// Usage:  node scripts/submit-indexnow.mjs
// Run it after `npm run deploy` publishes a new build to gh-pages.
//
// The key is published at https://kryil.com/<key>.txt (via public/, copied
// into dist/ by the Vite build), which is how IndexNow verifies ownership.

const HOST = "kryil.com";
const KEY = "060e564583ecf47ffc26b5d70ff2c8a1";
const SITEMAP = `https://${HOST}/sitemap.xml`;

const xml = await fetch(SITEMAP).then((r) => r.text());
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (urlList.length === 0) {
  console.error("No <loc> URLs found in sitemap — aborting.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow submitted ${urlList.length} URLs → HTTP ${res.status} ${res.statusText}`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
