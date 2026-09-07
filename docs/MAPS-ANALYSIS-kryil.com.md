# Maps Intelligence — Kryil Infotech

Audited 2026-08-09.

## Maps Health Score: 38/100

| Dimension | Status | Score |
|---|---|---|
| GBP profile presence | Fail | 20/100 |
| Cross-platform NAP consistency | Fail | 35/100 |
| Schema (Maps eligibility) | Warn | 70/100 |
| Competitor landscape context | Info only | — |

## Capability Tier Detected: Tier 0 (Free)

No DataForSEO MCP tool is configured in this environment, so this audit ran on free APIs only: Overpass (OSM), Nominatim (geocoding), and manual web/Bing checks. **Not available at this tier:** geo-grid rank tracking, live GBP profile data (claimed/unclaimed status, categories, photo count, Q&A), review velocity/sentiment analysis, GBP post activity. Install the DataForSEO extension for those.

## NAP Data Used

- **Name:** Kryil Infotech Private Limited (brand: "KRYIL Infotech")
- **Address (per website):** Workflow Ranka Junction, 3rd Floor, 224 KR Puram, Bangalore, Karnataka 560016, India
- **Phone:** +91-8089090365
- **Website:** https://www.kryil.com

## GBP Profile Audit (Tier 0 — manual signals only)

No Google Business Profile could be confirmed as claimed or live:
- No Maps embed, "View on Google Maps" link, or review widget anywhere on kryil.com (checked the live JS bundle directly, not just static HTML)
- A direct search for "Kryil Infotech Google Maps" surfaced no Maps knowledge panel or listing — only company-registry sites (Tracxn, IndiaFilings, Tofler) and the website itself
- No customer or employee reviews found on any platform

This doesn't prove a GBP doesn't exist (Tier 0 can't check claimed status directly), but the complete absence across three independent search angles is itself a signal worth acting on: either there's no profile, or it's unclaimed/unoptimized enough that it isn't surfacing.

## Cross-Platform NAP Verification

| Platform | Status | Finding |
|---|---|---|
| Google Maps | Unconfirmed / likely absent | No listing surfaced in search; needs a direct claim check |
| Bing Maps | Inconclusive | Page loads (HTTP 200) but listing presence wasn't confirmable without live parsing |
| Apple Maps | Not checked | No public API — requires manual verification in Apple Business Connect |
| OpenStreetMap | **Confirmed absent** | Direct Nominatim search for "Kryil Infotech Bangalore" returns zero results. Notably, the surrounding 3km radius has well-tagged major offices (Capgemini, Airbus Group India, Red Hat, Qualcomm, McKinsey) — Kryil sits in a real tech-park corridor but isn't on the map itself. |
| LinkedIn | **Broken** | The company's own schema claims `https://www.linkedin.com/company/kryil` — that URL returns **HTTP 404**. Either it was never created, uses a different slug, or was deleted/renamed. This is worse than a missing link: it's an actively wrong claim in structured data. |
| Twitter/X, Instagram, Facebook | Resolving (HTTP 200) | URLs load, but 200 doesn't confirm live content on these client-rendered platforms — worth a manual glance to confirm they're not "account not found" states. |

### Address format inconsistency (Medium)

The company's official MCA registration (per Tracxn/IndiaFilings/Tofler company-registry listings) gives the address as:

> RK NO 224 SY NO 80/3 3RDF, OLD MADRAS ROAD, Doorvaninagar, Bangalore, Bangalore North, Karnataka, 560016

The website's published address is:

> Workflow Ranka Junction, 3rd Floor, 224 KR Puram, Bangalore, Karnataka 560016, India

Both share "224," "3rd floor," and the same postal code, and Doorvaninagar/KR Puram are adjacent areas along Old Madras Road — these are very likely the same physical location (a coworking space, "Workflow," at that address), just described inconsistently: the legal filing uses the raw survey-number format, the website uses the building/brand name. Search engines and GBP verification match addresses fairly literally; this mismatch is exactly the kind of thing that stalls or fails GBP verification and confuses cross-platform entity matching. Standardize on one format everywhere public-facing.

### Duplicate web presence (flag for investigation)

A second, separate site — `kryil.netlify.app` — presents itself as "Kryil Infotech Pvt Ltd - Software Solutions & Cloud Infrastructure," using the identical company name. No contact details were visible on it and its freshness/ownership couldn't be determined from a surface check. If this isn't an actively maintained secondary property under your control, it's worth either claiming and redirecting it to kryil.com, or requesting its removal — a second indexed domain under the same brand name actively confuses both search engines' and AI systems' entity resolution about which site is authoritative, on top of the NextDOOH/Nextdoor name-collision problem already flagged in the GEO audit.

## Competitor Landscape (Tier 0 — Overpass, 3km radius)

OSM has essentially no coverage of small defense-tech/UAV competitors in the area (expected — that's a narrow, low-visibility industry). What it does show: Kryil's registered address sits inside or immediately next to a major enterprise tech corridor — Capgemini, Airbus Group India, Volvo, Ernst & Young, Visa, Red Hat India, Qualcomm, Publicis Sapient, Finastra, and McKinsey & Company all have OSM-tagged offices within 3km, several inside the Bagmane tech park cluster. None of these are direct competitors, but it underscores that Kryil is physically embedded among well-mapped major companies while having no map presence of its own — an easy, achievable fix rather than a crowded-market problem.

## Schema Recommendation

The site already has a strong `Organization` schema block — name, `alternateName`, `address` (PostalAddress), `contactPoint`, `sameAs`, `knowsAbout`, `serviceType` are all present and detailed. The gap: `Organization` alone doesn't carry Maps/local-pack rich-result eligibility the way `LocalBusiness` (or a more specific subtype) does, and it's missing `geo` coordinates and hours. Recommended addition — either upgrade the existing block to a dual-type, or add alongside it:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KRYIL Infotech",
  "image": "https://www.kryil.com/logo.png",
  "url": "https://www.kryil.com",
  "telephone": "+91-8089090365",
  "email": "contact@kryil.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Workflow Ranka Junction, 3rd Floor, 224 KR Puram",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560016",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "REPLACE_WITH_EXACT_LAT",
    "longitude": "REPLACE_WITH_EXACT_LNG"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "REPLACE_WITH_OPEN_TIME",
    "closes": "REPLACE_WITH_CLOSE_TIME"
  },
  "areaServed": "Worldwide",
  "sameAs": [
    "https://twitter.com/kryil",
    "https://www.instagram.com/kryil",
    "https://www.facebook.com/kryil"
  ]
}
```

Notes: `latitude`/`longitude` need the exact building coordinates (the 1km Nominatim lookup only resolved to the KR Puram suburb centroid, not street-level — pull the precise value from Google Maps once/if a GBP listing is claimed). Hours are a placeholder since none were published anywhere checked. The broken LinkedIn URL was dropped from `sameAs` above until it's fixed — don't ship a schema block with a link search engines can verify is dead. Per the skill's own rule, no `aggregateRating` is included since no third-party reviews exist yet — never self-mark up reviews you haven't actually received.

## Top Prioritized Actions

**Critical**
1. Investigate `kryil.netlify.app` — claim/redirect it if it's yours, request takedown if it isn't. A live duplicate under the identical company name actively undermines entity resolution everywhere else in this report.

**High**
2. Claim (or verify) a Google Business Profile for Kryil Infotech — right now there's no evidence one exists or is optimized, and Google Maps/local pack is the highest-traffic surface this report covers.
3. Fix the broken LinkedIn URL — either create the company page at `linkedin.com/company/kryil` and keep the schema link, or update `sameAs` to the correct working URL. LinkedIn presence also has a "moderate" correlation with AI-search citation per the GEO audit's own findings, so this double-counts as an AI-visibility fix.
4. Standardize the business address to one format across the website, schema, and any future GBP listing — pick either the "Workflow Ranka Junction" building-name format or the legal survey-number format, not both.

**Medium**
5. Add a `LocalBusiness`/`ProfessionalService` schema block (template above) alongside the existing `Organization` block, with real `geo` coordinates once available.
6. Create an OpenStreetMap entry for the business — it's free, takes minutes, and every major neighbor in the same tech corridor already has one.
7. Verify the Twitter/X, Instagram, and Facebook `sameAs` links actually resolve to active Kryil-branded profiles rather than empty/renamed accounts (200 status alone doesn't confirm this on client-rendered platforms).

**Low**
8. Once a GBP is claimed, revisit this audit with the DataForSEO extension enabled for geo-grid rank tracking and review intelligence — Tier 0 can't assess ranking position or review health at all.

## Cost Report

Tier 0 — all checks used free APIs (Overpass, Nominatim) and manual web fetches. No DataForSEO credits consumed (none available).

## Limitations Disclaimer

This audit could not assess: actual Google Maps ranking position, GBP claimed/verified status, photo count or completeness, Q&A activity, review count/sentiment/velocity, or Apple Maps listing status (no public API). All of these require either the DataForSEO extension (Tier 1) or manual login to Google Business Profile / Apple Business Connect. Treat every "unconfirmed" / "likely absent" finding above as a strong signal, not a certainty.
