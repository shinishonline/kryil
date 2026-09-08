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

// Submit to each participating endpoint independently. api.indexnow.org is meant to
// fan out to all of them, but it is fronted by Bing, so a Bing-side rejection there
// silently costs us Yandex, Naver and Seznam too. Posting directly to each keeps one
// engine's authorisation state from blocking the others.
const ENDPOINTS = [
  ["Bing",   "https://www.bing.com/indexnow"],
  ["Yandex", "https://yandex.com/indexnow"],
  ["Naver",  "https://searchadvisor.naver.com/indexnow"],
  ["Seznam", "https://search.seznam.cz/indexnow"],
];

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
});

let accepted = 0;
for (const [name, endpoint] of ENDPOINTS) {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body,
    });
    const ok = res.status === 200 || res.status === 202;
    if (ok) accepted++;
    const detail = ok ? "" : ` — ${(await res.text()).slice(0, 120)}`;
    console.log(`  ${ok ? "OK  " : "FAIL"} ${name.padEnd(7)} HTTP ${res.status}${detail}`);
  } catch (err) {
    console.log(`  FAIL ${name.padEnd(7)} ${err.message}`);
  }
}

console.log(`IndexNow: ${urlList.length} URLs to ${accepted}/${ENDPOINTS.length} endpoints.`);

// Google does not participate in IndexNow; its discovery is sitemap and Search
// Console driven, so nothing here affects Google either way.
if (accepted === 0) {
  console.error("No endpoint accepted the submission.");
  process.exit(1);
}
