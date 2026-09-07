# KRYIL 2026–2030 TRANSFORMATION BLUEPRINT

**Prepared:** 8 September 2026 · **Horizon:** Q2 FY27 → FY31
**Subject:** KRYIL Infotech Private Limited (CIN U62099KA2025PTC201071), Bangalore
**Status of this document:** Draft v1 for founder review. Not published. Not on the website.

---

## How to read this document

Every claim is tagged. Do not let the tags blur together — the entire value of this
document is that it refuses to flatter you.

| Tag | Meaning |
|---|---|
| **[VERIFIED]** | Confirmed against a public source, cited inline. |
| **[ASSUMED]** | A reasoned inference. Stated so you can correct it. Correct it. |
| **[RECOMMENDED]** | My recommendation. Arguable. I have picked one option and said why. |
| **[UNKNOWN]** | I could not find this. It is not "small" or "zero" — it is unknown. |

**Sources used:** MCA/ROC registry data via Tofler, Tracxn, Zauba Corp, IndiaFilings,
FalconEbiz; the live site at kryil.com; the repository at `~/02 Projects/kryil`;
LinkedIn public profiles; Kerala Startup Mission listing. Full URLs in §35.

**What I was not given:** revenue, pipeline, customer list, bank balance, salaries,
headcount, burn rate, runway, current contracts. Everything financial in §19 is
therefore a *model with labelled assumptions*, not a forecast. Give me the real
numbers and §19 becomes ten times more useful. Until then, treat §19 as a template.

---

# 1. Executive Summary

## 1.1 The one-paragraph version

KRYIL is a 17-month-old Bangalore IT services company with ₹10,000 of paid-up capital,
two directors, two self-built products, and a website that claims to be a UAV drone
manufacturer serving Fortune 500 clients. The gap between the registry and the website
is the single biggest problem in this business — not the competition, not the tech
stack, not the branding. Every strategic recommendation below flows from closing that
gap honestly rather than widening it. KRYIL's realistic path to a durable company is
**not** defence UAVs. It is **applied AI and data engineering for Indian mid-market
enterprises, sold on senior-engineer delivery quality, with two productised SaaS lines
(NextDOOH now, Avionix later) building recurring revenue underneath the services
business.** Everything else should be cut, parked, or reframed.

## 1.2 The five findings that matter

**Finding 1 — The website is a liability, not an asset.**
The homepage `<title>` is *"KRYIL Infotech | UAV Drone Manufacturer | Robotics & IoT
Solutions | Bangalore India"*. The MCA classification for CIN U62099KA2025PTC201071 is
*"Other Information Technology and Computer Service Activities N.E.C."* — a services
code, not a manufacturing code. Paid-up capital is ₹10,000. There is no credible reading
in which this company manufactures UAVs. The `/defense` page goes further and advertises
*"multi-role combat drone capable of precision strikes"*, *"AI-coordinated swarm
drones"*, *"radar-absorbing materials"* and *"military-grade encrypted data links with
anti-jamming"*. This is not aggressive marketing. It is a regulatory, legal and
commercial hazard, and it is discussed properly in §10 and §32. **Fix this week.**

**Finding 2 — The positioning is six services wide and zero services deep.**
Enterprise apps, professional services, AI/ML, cybersecurity, infrastructure/DevOps,
database administration, plus defence, plus two products. Nine lines of business for a
company that almost certainly has fewer than fifteen people. No case studies. No named
clients. No certifications. A buyer cannot tell what KRYIL is *good* at, because the site
does not claim to be good at anything in particular — it claims to be present at
everything. Breadth without proof reads as inexperience, and it is priced accordingly.

**Finding 3 — There is real, undervalued IP sitting in the products folder.**
Avionix (browser-based aircraft design with CFD, 58+ templates, no signup) and NextDOOH
(cloud digital signage, sub-2s WebSocket sync, multi-zone, Android) are genuinely
buildable-by-a-small-team products with actual differentiation. They are currently
presented as afterthoughts behind a "Products" dropdown. **NextDOOH is the single most
commercially ready asset KRYIL owns** and is being treated as a portfolio piece. This is
the biggest unforced error after the defence claims.

**Finding 4 — KRYIL is benchmarking against the wrong tier.**
KRYIL is a tier-4 boutique in a city whose IT market runs from Infosys (~328,000 staff)
and Wipro (~245,000) at the top, through Mphasis and Sonata in the mid-cap band, to
AI/data specialists like Tredence (~3,500 staff, Forrester Wave leader). KRYIL loses to
all of them on paper — certifications, logos, balance sheet — before a proposal is read.
It does not need to beat them. It needs the ₹15–60 lakh band they either won't staff
properly or can't service at all (§3).

**Finding 5 — Nothing on the site converts, and nothing measures.**
The contact form opens a `mailto:`. There is no CRM, no form backend, no gated asset, no
booking link, no lead scoring, no attribution. Whatever traffic the extensive SEO work
has generated, KRYIL cannot tell you what it did. A company that cannot measure its
funnel cannot improve it.

## 1.3 The recommendation in one sentence

> **Become the Bangalore firm that Indian mid-market CIOs call when they need AI on
> their own data, running in their own environment, delivered by engineers who write
> the architecture doc before the invoice — and fund that reputation with two SaaS
> products that keep earning while the consultants sleep.**

## 1.4 What to stop doing immediately

| Stop | Why | When |
|---|---|---|
| Calling KRYIL a "UAV Drone Manufacturer" | Contradicted by the MCA registry; unwinnable in a Google category owned by ideaForge, Garuda, NewSpace | This week |
| Advertising combat drones, swarms, precision strike, stealth | Legal exposure (§10.3); destroys enterprise credibility instantly | This week |
| "From startups to Fortune 500 companies, we've helped…" | Unverifiable for a 17-month-old company; misleading-advertisement risk under Consumer Protection Act 2019 | This week |
| Selling six co-equal service lines | Dilutes every SEO, sales and hiring decision | 30 days |
| Standalone database administration as a headline service | Commodity, ₹-per-hour, no path to margin | 90 days |
| `mailto:` as the conversion mechanism | Unmeasurable; loses ~half of intent | 30 days |

## 1.5 The three pillars (detail in §4)

```
                    ┌──────────────────────────────────────────┐
                    │     KRYIL — Applied AI Engineering       │
                    └──────────────────────────────────────────┘
                                       │
        ┌──────────────────────┬───────┴────────┬──────────────────────┐
        ▼                      ▼                ▼                      ▼
 ┌─────────────┐      ┌────────────────┐  ┌──────────────┐   ┌────────────────┐
 │  PILLAR 1   │      │   PILLAR 2     │  │  PILLAR 3    │   │  PARKED        │
 │ Applied AI  │      │ Data & Cloud   │  │  Products    │   │  Aerospace     │
 │ & Automation│      │  Engineering   │  │ NextDOOH +   │   │  (Avionix as   │
 │             │      │                │  │  Avionix     │   │  R&D / brand)  │
 │  ~55% rev   │      │   ~30% rev     │  │  ~15% rev    │   │   0% rev       │
 │  Yr 3       │      │   Yr 3         │  │  Yr 3 → 35%  │   │   until Yr 3   │
 │             │      │                │  │  Yr 5        │   │                │
 └─────────────┘      └────────────────┘  └──────────────┘   └────────────────┘
        │                      │                  │
        └──────────────────────┴──────────────────┘
                               │
                  Security & compliance is a
                  DELIVERY STANDARD across all
                  three — not a 4th sales line
                        (see §9)
```

## 1.6 Financial shape being targeted

Assumption-driven, see §19 for the full model and every input.

| | FY27 (now) | FY28 | FY29 | FY31 |
|---|---|---|---|---|
| Revenue (Base case) | [UNKNOWN] | ₹2.4 Cr | ₹6.1 Cr | ₹22 Cr |
| Recurring % of revenue | ~0% | 12% | 25% | 45% |
| Headcount | [UNKNOWN] | 14 | 30 | 85 |
| Gross margin | [UNKNOWN] | 48% | 55% | 62% |
| EBITDA margin | [UNKNOWN] | 4% | 12% | 20% |
| Named referenceable logos | 0 public | 5 | 14 | 45 |

The single most important row is **"Named referenceable logos"**. Everything else is
downstream of it.

---

# 2. Current State

## 2.1 Verified facts

### Corporate

| Item | Value | Source |
|---|---|---|
| Legal name | KRYIL INFOTECH PRIVATE LIMITED | MCA/ROC |
| CIN | U62099KA2025PTC201071 | MCA/ROC |
| Incorporated | 10 April 2025 (age: ~17 months) | MCA/ROC |
| Registrar | ROC Bangalore | MCA/ROC |
| Status | Active | MCA/ROC |
| Authorised capital | ₹1,00,000 | MCA/ROC |
| Paid-up capital | ₹10,000 | MCA/ROC |
| MCA industry class | Other Information Technology and Computer Service Activities N.E.C. | MCA/ROC |
| Registered address | RK No 224, Sy No 80/3 3rd F, Old Madras Road, Doorvaninagar, Bangalore North, Karnataka 560016 | MCA/ROC |
| Directors | Kunju Nooranad Sarojini; Ajay Kumar | MCA/ROC |
| MD (per LinkedIn) | Sarojini K N | LinkedIn |
| FY26 revenue band | Under ₹10 Cr | Tracxn |
| Related entity | KRYIL INFOSOLUTIONS PRIVATE LIMITED, CIN U72900KA2022PTC167337, inc. 21 Oct 2022, directors Vijay Narayan + Kunju Nooranad Sarojini | Zauba Corp |

Two notes on this table that matter strategically.

**The "under ₹10 Cr" band is not information.** Tracxn applies it to everything below a
threshold. It is consistent with ₹0 and with ₹9.9 Cr. Do not cite it as a revenue claim
and do not let anyone else cite it at you.

**The Infosolutions entity is a strategic asset you are not using.** KRYIL Infosolutions
has been incorporated since October 2022. In enterprise procurement, "operating since
2022" clears vendor-onboarding filters that "incorporated April 2025" does not — many
Indian enterprise RFPs carry a three-year-minimum-existence clause. Whether the group can
legitimately present a 2022 lineage depends on facts I do not have (was Infosolutions
trading? are the businesses continuous? is there a common-control group structure?).
**Action: ask your CA whether a group structure lets you legitimately say "part of the
KRYIL group, operating since 2022".** If yes, that is free credibility. If no, never say
it. [ASSUMED: this has not been explored.]

### Digital estate

| Property | State |
|---|---|
| kryil.com | React 19 + Vite 7 + Tailwind 4 SPA, TypeScript, deployed via `gh-pages` to GitHub Pages, custom domain via CNAME |
| Pages | Home, Defense, Careers, Blog, News, Brand, 6 service pages, 2 product pages, 4 legal pages |
| Products | Avionix (aircraft design/CFD), NextDOOH (digital signage) |
| SEO tooling | sitemap.xml, robots.txt, llms.txt, IndexNow submission script (`scripts/submit-indexnow.mjs`), JSON-LD for Organization / LocalBusiness / WebSite / Service |
| Social | LinkedIn /company/kryil, X @kryilinfotech, YouTube @kryilinfotech, Instagram @kryilinfotech |
| Contact | info@kryil.com, +91-8089090365 |
| Open roles | Senior Full Stack Dev, Cloud Solutions Architect, + 3 internships (Marketing, Backend, UAV Design) |
| Certifications | **None. Anywhere.** |
| Case studies | **None.** |
| Named clients | **None.** |
| Team / leadership page | **None.** |

The engineering side of this is better than the strategy side. The IndexNow script, the
llms.txt, the structured data, the per-route meta handling, the accessibility skip-link —
somebody has done real technical SEO work here. That work is currently pointed at the
wrong keywords, which is a fixable problem and a much nicer problem to have than the
reverse.

## 2.2 Unverified claims currently published

This is the section to read twice.

| Claim on site | Reality | Severity |
|---|---|---|
| "UAV Drone Manufacturer" (in `<title>`, meta description, OG, Twitter card) | MCA class is IT services. ₹10k paid-up. No DGCA type certificate found. | **CRITICAL** |
| "Leading UAV Drone Manufacturer & Robotics Company in Bangalore" | "Leading" is unsupportable. | **CRITICAL** |
| "Multi-role combat drone capable of precision strikes and close air support" | No DPIIT industrial licence found; armed-UAV marketing (§10.3) | **CRITICAL** |
| "AI-coordinated swarm drones for overwhelming tactical advantage" | No evidence of any flight-tested platform | **CRITICAL** |
| "Low-observable airframes with radar-absorbing materials" | RAM is a controlled materials domain | **CRITICAL** |
| "Military-grade encrypted data links with anti-jamming and frequency-hopping" | Crypto export/use controls apply | **HIGH** |
| "jet propulsion technology" (hero slide 1) | No evidence | **HIGH** |
| "From startups to Fortune 500 companies, we've helped organizations…" | 17-month-old company, no named client | **HIGH** |
| "24/7 expert support" / "24/7 monitoring" | Requires a staffed rota; [UNKNOWN] whether one exists | **MEDIUM** |
| "Sub-meter accuracy targeting systems with multiple payload options" | Weapons-adjacent claim | **CRITICAL** |

**On the Fortune 500 line specifically.** India's Consumer Protection Act 2019 (§2(28))
defines misleading advertisement to include a description that is false, and the CCPA has
penalty powers up to ₹10 lakh for a first offence, ₹50 lakh for repeats. More
practically: an enterprise buyer's first move is to ask *which* Fortune 500 company. There
is no good second sentence. The claim costs you the deal it was written to win.

## 2.3 Technical / UX defects found

| # | Defect | Where | Impact |
|---|---|---|---|
| 1 | Copy duplicated in DOM — About/WhoWeAre/Mission each render text twice (base layer + animated overlay layer) | `About.tsx`, `WhoWeAre.tsx`, `Mission.tsx` | Screen readers read everything twice; duplicate-content signal |
| 2 | "Five core services, infinite possibilities" above a grid of six services | `ServicesGrid.tsx` | Small, but it is the kind of thing a careful buyer notices |
| 3 | `twitter:site` / `twitter:creator` = `@kaborobotics`, footer says `@kryilinfotech` | `index.html` | Wrong brand attribution on every shared link |
| 4 | Contact form is `mailto:` — "Opens your email app with everything filled in" | `Contact.tsx` | Unmeasurable; fails on any device without a configured mail client |
| 5 | Keyword-stuffed `<meta name="keywords">` — 29 terms | `index.html` | Ignored by Google; signals amateurism to anyone who views source |
| 6 | Dead meta tags: `revisit-after`, `distribution`, `rating`, `target`, `coverage`, `skype_toolbar`, `MobileOptimized` | `index.html` | No effect; clutter |
| 7 | Copy reads with dropped articles in places ("solutions modern defense requirements") | Multiple | Reads as machine-generated |
| 8 | `dist/` is committed to git | repo root | Every build produces a large noisy diff |
| 9 | No analytics on conversion events | site-wide | Cannot compute funnel |

Defects 1–5 are corrected in the code change accompanying this document. 6–9 are in the
30/60/90 (§28).

## 2.4 Honest SWOT

**Strengths (real ones)**
- Two shipped products with non-trivial engineering (real-time WebSocket sync; browser CFD)
- Modern, competently built front end — React 19, TS, Tailwind 4, good Lighthouse-shaped choices
- Technical SEO discipline unusual in a company this size (IndexNow, llms.txt, structured data)
- Bangalore location — talent pool, client proximity, credibility by postcode
- Founder-led, no investor pressure, free to reposition without a board conversation

**Weaknesses**
- Zero third-party proof: no logos, no case studies, no certifications, no testimonials
- Published claims that will not survive contact with a procurement team
- Positioning spread across nine offerings
- ₹10,000 paid-up capital — fails vendor financial-stability screens outright
- No visible team; enterprise buyers buy people, and there are none on the site
- No measurable funnel

**Opportunities**
- Indian mid-market AI adoption is early; the "AI on your own data, in your own VPC" niche is under-served by firms this size
- DPDP Act 2023 compliance work is a live, funded, deadline-driven budget line
- NextDOOH is in a fragmented market with weak incumbents at the SMB end
- Global capability centres in Bangalore hire local specialist vendors constantly
- AI-native delivery genuinely lets a 15-person firm bid work that used to need 50

**Threats**
- Anyone can now claim "AI company"; differentiation decays fast
- Price compression from larger Indian firms with real certifications
- A single defence-claim complaint could produce a regulatory problem out of all proportion to the company's size
- Key-person dependency on the founder for every sale
- ₹10k capital = no shock absorber; one bad quarter is existential

---

# 3. Competitive Analysis

*Rebased Sept 2026 at the founder's direction: benchmarked against the Bangalore market
rather than against a same-stage peer. Figures from secondary sources and vary between
them; treat as order-of-magnitude, not filings.*

## 3.1 The Bangalore ladder

| Tier | Who | Scale | What they sell | Deal size they want |
|---|---|---|---|---|
| **1 — Global** | **Infosys** (~$18B rev, ~328,000 staff), **Wipro** (~$11.3B, ~245,000) | Enormous | Multi-year transformation, managed services | ₹10 Cr+ |
| **2 — Mid-cap listed** | **Mphasis** (~$1.8B, ~31–46k, BFSI/cloud focus), **Sonata Software** (enterprise modernisation), **Happiest Minds** (f. 2011) | Large | Modernisation programmes, cloud, domain-vertical work | ₹1–20 Cr |
| **3 — AI/data specialists** | **Tredence** (f. 2013, ~3,500 staff, "last-mile AI", Forrester Wave leader, acquired Further Advisory 2025), **Sigmoid**, **Mu Sigma**, **Gramener**, **Flutura** | Substantial | Data platforms, advanced analytics, GenAI/agentic programmes | ₹50 L – ₹10 Cr |
| **4 — Boutiques** | 10–60 person Bangalore AI/software shops, mostly unbranded | Small | Project work, staff augmentation | ₹5 L – ₹60 L |
| **5 — GCC in-house** | The client's own captive centre | n/a | Nothing — they build it | n/a |

**KRYIL is tier 4.** Not tier 3, and nowhere near tiers 1–2. Any strategy that pretends
otherwise fails on first contact with procurement.

## 3.2 Honest scoring against each tier

| Dimension | KRYIL today | Tier 1–2 | Tier 3 | Tier 4 peers |
|---|---|---|---|---|
| Scale / bench depth | **1** | 5 | 4 | 2 |
| Certifications (ISO/SOC 2) | **1** | 5 | 4 | 1 |
| Named case studies | **1** | 5 | 5 | 2 |
| Analyst recognition | **1** | 5 | 4 | 1 |
| Financial screening strength | **1** | 5 | 4 | 2 |
| Owned product IP | **4** | 3 | 2 | 1 |
| Senior people actually on the project | **5** | 1 | 2 | 3 |
| Speed from first call to working software | **5** | 1 | 2 | 4 |
| Price for a ₹20–40 L scope | **5** | 1 | 2 | 4 |
| Willingness to take a ₹20 L deal at all | **5** | 1 | 1 | 5 |

## 3.3 Where the deals actually get lost — and the one gap that is real

KRYIL loses tier 1–3 bake-offs on paper before anyone reads the proposal: no ISO 27001,
no SOC 2, no named logos, ₹10,000 paid-up capital. That is not a sales problem and no
amount of pitching fixes it. **So do not enter those bake-offs.**

The exploitable gap is structural and it is about *deal size*:

> A ₹15–60 lakh applied-AI engagement is **too small for Tier 1–3 to staff properly** —
> Tredence and Mphasis need six- and seven-figure-dollar programmes to justify an account
> team — and **too complex for Tier 4 generalists**, who do not have data engineering plus
> MLOps plus private-infrastructure deployment in one small team.

That band is where KRYIL can win, and it is a real band: it is the budget an Indian
mid-market CIO can approve without a board paper. Tier 1–3 will happily quote it and then
put a junior team on it, which is exactly the experience that produced the failed pilot
KRYIL is selling against.

**The four differentiators (unchanged from §3.4 of the original analysis):** private/
on-prem deployment as the default; a fixed-price 10-day Proof of Value with written kill
criteria; named senior engineers in the contract; and owned products as the engineering
evidence. Against Tier 3 specifically, the only one they cannot match cheaply is the
third — Tredence at 3,500 people structurally cannot promise you the same engineer from
scoping to production.

## 3.4 What this changes about the plan

Nothing strategic. It sharpens two things:

1. **Never bid against Tier 1–3 head-on before ISO 27001 lands (§28, FY28).** Qualify out
   loudly. A lost bake-off costs three weeks KRYIL does not have.
2. **The ₹15–60 lakh band is the ICP filter**, more precisely than "₹100–2,000 Cr revenue
   company". If the budget is over ₹1 Cr, the client will and should shortlist Tier 3, and
   KRYIL will lose. Under ₹15 L, it is not worth the delivery overhead.

## 3.5 A note on comparator claims

Whatever a competitor's website says about headcount, patents or client counts, check the
MCA filing before you believe it — the gap is routinely large in this market, in both
directions. KRYIL's own site carried "150+ Expert Consultants" until this week (§2.2).
Assume everyone else's numbers are constructed the same way, and make *verifiability*
the thing KRYIL sells.

# 4. Strategic Positioning

## 4.1 The choice: broad or specialised

**Recommendation: specialise, hard, now.** Not because breadth is philosophically wrong
but because breadth requires proof at every point of the perimeter, and KRYIL has proof
at none of them. A 15-person firm claiming nine capabilities is read as a body shop. A
15-person firm claiming one capability with three case studies is read as a specialist
and priced 2–3x higher.

The counter-argument, taken seriously: narrowing reduces the addressable set of inbound
enquiries, and an early-stage services firm needs cash. **This is real, and the answer is
not to stay broad — it is to narrow the *marketing* while keeping the *delivery* flexible
for 12 months.** Say one thing publicly. Take the adjacent work that walks in the door.
Do not build a website around the adjacent work.

## 4.2 Evaluation of the candidate pillars

| Pillar | Market size (India, mid-market) | KRYIL's current proof | Margin potential | Time to credible | Verdict |
|---|---|---|---|---|---|
| **A. AI & Enterprise Technology** | Large, growing, budget-approved | Site claims only | High (45–65%) | 3–6 months | **PRIMARY** |
| **F. Data Engineering** | Large, unglamorous, always funded | None | Medium-high (40–55%) | 3–6 months | **PRIMARY (fused with A)** |
| **C. Cloud & DevOps** | Large, commoditising fast | None | Medium (35–45%) | 3–6 months | **SECONDARY — as delivery substrate** |
| **B. Cybersecurity** | Large, but credential-gated | None; no certs, no CVEs, no CTF record | High if certified, zero if not | 18–24 months | **DE-EMPHASISE → fold into delivery standard** |
| **E. Custom Software Development** | Vast, commodity, price-crushed | The site itself; two products | Low (25–35%) standalone | Already | **KEEP as delivery capability, drop as headline** |
| **D. Aerospace / UAV / Defence** | Large but capital- and licence-gated | Avionix (a design tool, not a platform) | Negative for 3+ years | 3–5 years, ₹10–50 Cr | **PARK. See §10** |
| **G. Vertical AI products** (new) | Focused, defensible | NextDOOH shipped | Very high (70–85%) | 6–12 months | **PRIMARY (as Pillar 3)** |

### Why cybersecurity gets demoted — and this will be unpopular

Cybersecurity is the most tempting line on the list: high day rates, board-level urgency,
recurring retainers. It is also the line where **buyers refuse to consider an uncertified
vendor.** A CISO evaluating a pentest vendor asks for CREST or OSCP-holding testers,
sample redacted reports, and liability insurance. KRYIL has none of the three and cannot
acquire them quickly — OSCP is a 3–6 month individual effort, CREST is organisational,
ISO 27001 certification is a 6–12 month, ₹4–8 lakh programme.

Selling security services without them is the highest-risk revenue in the portfolio:
one missed finding on a client's system and the reputational damage is terminal for a
company this size. **Fold security into the delivery standard** — "every system we build
is threat-modelled, dependency-scanned and secrets-managed by default" — which is
truthful, differentiating, and free. Revisit security as a *sold* line in FY29 after ISO
27001 lands (§9, §28).

## 4.3 The positioning statement

> **For Indian mid-market enterprises that need AI working on their own operational data
> — not a pilot, not a demo — KRYIL builds and runs production AI systems inside the
> customer's own infrastructure. Unlike consultancies that hand over a slide deck, or
> platform vendors that require your data to leave the building, KRYIL ships working
> software with the architecture documented, the benchmarks published, and the same
> engineers on the call from proof-of-value to production.**

**Primary positioning:** Applied AI engineering for the Indian mid-market.
**Secondary positioning:** The data and cloud foundations that make it possible.
**Third leg (product):** Vertical SaaS built on the same engineering.

## 4.4 Ideal Customer Profile

**Primary ICP — "The Constrained Moderniser"**

| Attribute | Target |
|---|---|
| Revenue | ₹100 Cr – ₹2,000 Cr |
| Headcount | 200 – 3,000 |
| IT team | 5 – 50 people, has a CIO/CTO/Head of IT, no in-house ML team |
| Geography | Bangalore, Chennai, Hyderabad, Pune, Mumbai, NCR (Year 1: Bangalore + Chennai only) |
| Industries | Manufacturing & industrial, healthcare & diagnostics, logistics & supply chain, BFSI (NBFC/insurance ops, not core banking), professional services (legal/accounting), retail chains |
| Trigger events | New CIO/CTO hired; DPDP compliance deadline; ERP migration; a failed AI pilot; a competitor's AI announcement; audit finding on data handling |
| Budget | ₹15 lakh – ₹1.5 Cr per engagement |
| Buying committee | CIO/CTO (economic), Head of Ops/function head (champion), CFO (approver), IT security (blocker) |
| Disqualifiers | Wants a body shop at ₹X/hour; no executive sponsor; "explore AI" with no P&L owner; requires vendor >3 yrs old with no exception path |

**Secondary ICP — GCC overflow.** Bangalore global capability centres with local
discretionary budgets (₹10–50 lakh) for specialist work their global bench cannot cover.
Shorter sales cycle, lower loyalty, excellent logo value. Worth ~25% of Year 1 effort.

**Product ICP (NextDOOH) — separate motion entirely.** Retail chains (15–500 outlets),
QSR groups, hospital networks, transport hubs, gyms, education campuses in India and SEA.
Buyer is Marketing Ops or Facilities, not IT. Deal size ₹1.5–15 lakh ARR. Self-serve
onboarding. Do not run this through the enterprise sales motion — it will suffocate.

## 4.5 The message set

**One-line description**
> KRYIL builds production AI systems that run inside your own infrastructure.

**10-word elevator pitch**
> Production AI on your data, in your infrastructure, shipped in weeks.

**30-second pitch**
> Most mid-market companies have tried an AI pilot and killed it — either it never left
> the demo, or legal blocked it because the data had to leave the building. KRYIL builds
> the version that ships. We deploy AI systems inside your own cloud or on your own
> hardware, on your own operational data, and we start with a fixed-price two-week proof
> of value so you see the working system before you commit to the programme. We are
> engineers, not a consultancy — the person who scopes it is the person who builds it.

**2-minute pitch**
> There are three reasons enterprise AI projects die, and none of them are the model.
>
> The first is data. The model is fine; the data is in six systems, three of them
> undocumented, and nobody owns the definition of "customer". Most AI vendors treat that
> as out of scope. We treat it as the job — data engineering is half of what we do,
> because it is half of why these projects fail.
>
> The second is deployment. A notebook that works on a laptop is not a system. It needs
> to be inside your network, monitored, versioned, access-controlled, and cheap enough at
> your actual volume that finance does not kill it in month four. We build for that from
> day one, in your VPC or on your own GPUs.
>
> The third is trust. Under the DPDP Act, and under your own board's patience, "we send
> it to an API in Virginia" is increasingly not an answer. We default to private
> deployment — open-weight models where they are good enough, hosted models where they
> genuinely earn it, and we publish the benchmark that shows you which is which for your
> workload.
>
> The way we start is deliberately small. Ten working days, fixed price, one narrow
> problem, and at the end you get a working system plus an architecture document plus an
> honest number for what production costs. If it does not work, you stop, and you keep
> the document. We have done this on our own products before we did it for clients —
> NextDOOH synchronises content across arbitrary Android device fleets in under two
> seconds, and Avionix runs aerodynamic analysis in a browser. That is the engineering
> you are hiring.

**Website headline**
> Production AI. Your data. Your infrastructure.

**Website subheadline**
> KRYIL builds and runs AI systems inside your own cloud or on your own hardware — for
> Indian enterprises that cannot send their operational data anywhere else. Fixed-price
> proof of value in ten working days.

**LinkedIn company description**
> KRYIL builds production AI systems for Indian mid-market enterprises — deployed inside
> the customer's own infrastructure, on the customer's own data.
>
> Most enterprise AI dies between the pilot and production: the data is fragmented, the
> deployment is a notebook, and the compliance team blocks anything that leaves the
> network. We work on all three. Data engineering, private and on-premise model
> deployment, retrieval systems over internal documents, and the monitoring that keeps
> them honest in production.
>
> We also build our own products — NextDOOH (cloud digital signage with sub-2-second
> sync) and Avionix (browser-based aircraft design and aerodynamic analysis) — because
> the fastest way to prove engineering ability is to ship something and let people use
> it.
>
> Bangalore, India. KRYIL Infotech Private Limited, CIN U62099KA2025PTC201071.

**Investor description**
> KRYIL is a Bangalore applied-AI engineering firm converting services cash flow into
> vertical SaaS. The services business — private AI deployment and data engineering for
> Indian mid-market enterprises — funds product development without dilution. Two
> products are live: NextDOOH, a cloud digital signage platform targeting the fragmented
> India/SEA SMB-to-mid-market segment, and Avionix, a browser-based aerospace design
> tool with an existing organic engineering-education audience. Target Year 3: ₹6 Cr
> revenue, 25% recurring. Target Year 5: ₹22 Cr, 45% recurring, with SaaS gross margins
> pulling blended margin above 60%.

**Enterprise customer pitch (the paragraph that goes in an RFP response)**
> KRYIL Infotech is a Bangalore-based engineering firm specialising in production AI and
> data platform delivery for Indian enterprises. Our delivery model places senior
> engineers directly on client engagements — the individual who scopes the work is named
> in the contract and delivers it. We specialise in deployments inside client-controlled
> infrastructure (private cloud VPC or on-premise), which addresses data-residency and
> DPDP Act obligations without the compliance overhead of third-party model APIs. Every
> engagement begins with a fixed-price, fixed-scope Proof of Value delivering a working
> system, an architecture record and a production cost model within ten working days,
> giving the client a documented off-ramp before committing to a full programme.

## 4.6 What to stop selling

| Offering | Action | Rationale |
|---|---|---|
| Defence / combat UAV systems | **Remove entirely** | §10 |
| "UAV Drone Manufacturer" identity | **Remove entirely** | Not true |
| Standalone database administration | Retire as headline; keep as a skill inside data engineering | Commodity |
| Cybersecurity as a sold service line | Convert to a delivery standard + Trust Center | Uncertified (§9) |
| Generic "Professional Services" | Retire | Means nothing to a buyer |
| Generic "Enterprise Solution Application Development" | Retire as headline; keep as capability | Undifferentiated |
| Digital marketing services (in meta keywords) | Remove from all metadata | Off-strategy entirely |

---

# 5. Brand

## 5.1 Current brand assessment

**What exists** [VERIFIED from repo]: a refreshed logo system (effective 9 July 2026,
documented at `/brand`), a colour system built on a lime-yellow accent `#dff140` with a
secondary cyan `#25a9e0` on near-black `#010101`, Lato as the sole typeface (300/400/700/900
self-hosted as woff2), and a dark, cinematic homepage with scroll-triggered reveals.

**The craft is good. The strategy is absent.** The visual system says "premium tech
studio". The copy says "we do nine things". The `<title>` says "drone manufacturer". A
brand is not a colour palette; it is the consistency between what you look like, what you
say, and what you actually do. KRYIL currently has three different answers.

**Specific brand problems:**

| Problem | Detail |
|---|---|
| Category confusion | Defence contractor visual language + IT services offering + product-company assets |
| The lime accent is doing all the work | `#dff140` is distinctive but it is used for defence, enterprise, AI and cyber alike — no hierarchy |
| No human presence | Zero photographs of actual people; enterprise trust is built on faces |
| Tone is inflated | "Overwhelming tactical advantage", "redefine the boundaries of modern warfare" — this is game-trailer register, not enterprise register |
| Cyan/lime tension | Two strong accents with no defined rule for when each applies |
| No verbal identity | No documented voice rules, so every page sounds slightly different |

## 5.2 Brand positioning

> **KRYIL is the engineering firm that shows its work.**

Everything in the brand should ladder to *demonstrated competence over asserted
competence*. This is chosen deliberately as the antidote to the current state — a company
whose credibility problem is entirely self-inflicted through over-claiming should build a
brand whose central promise is under-claiming and over-showing.

## 5.3 Brand personality

Five traits, each with an explicit anti-trait so they are usable in a review:

| Trait | Means | Does NOT mean |
|---|---|---|
| **Precise** | Numbers, versions, benchmarks, named constraints | Pedantic or jargon-heavy |
| **Candid** | Publishes what did not work; states limits | Self-deprecating or negative |
| **Composed** | Calm under pressure; no urgency theatre | Slow or passive |
| **Technical** | Talks to engineers as engineers | Inaccessible to a CFO |
| **Ambitious** | Builds products, not just invoices | Grandiose or messianic |

## 5.4 Brand voice — operational rules

**The five rules. These are enforceable in code review of copy.**

1. **Every claim carries a number or a name, or it gets deleted.** Not "fast sync" —
   "sub-2-second sync across 500 devices". Not "trusted by enterprises" — a logo or
   nothing.
2. **No superlatives without a source.** "Leading", "best-in-class", "world-class",
   "cutting-edge", "revolutionary" are banned words. If a third party said it, quote and
   attribute it. Otherwise cut it.
3. **Name the constraint.** Every honest engineering statement has a trade-off. State it.
   "Open-weight models on your hardware cost more in ops and less in per-token spend;
   here is the crossover point." This is the single most trust-building move available.
4. **Second person, active voice, present tense.** "You keep the architecture document."
   Not "architecture documentation will be provided to the client."
5. **A sentence a smart non-engineer cannot parse must be followed by one they can.**
   Technical depth then plain-English consequence. Always in that order.

**Banned vocabulary** (add to a lint list): leverage, synergy, holistic, cutting-edge,
world-class, best-in-class, revolutionary, game-changing, seamless, robust, empower,
unlock, transform your business, driving innovation, trusted technology partner, journey,
solutioning, ideate, next-generation (unless naming an actual generation).

## 5.5 Visual direction

**Keep:** the near-black canvas, the lime `#dff140`, Lato, the restrained motion.
The bones are good and re-branding again 14 months after the last refresh would waste the
recognition already built.

**Change:**

| Element | Current | Recommended |
|---|---|---|
| Accent hierarchy | Lime and cyan used interchangeably | **Lime `#dff140` = KRYIL corporate + services. Cyan `#25a9e0` = product family (NextDOOH/Avionix) only.** One rule, no exceptions |
| Typography | Lato for everything | Lato for UI/body; add a monospace (JetBrains Mono or IBM Plex Mono) for all numbers, benchmarks, code, metrics, version strings. The mono is the *visual signature of "we show our work"* |
| Imagery | Stock-feeling drone/office photography | Architecture diagrams, real screenshots, real dashboards, real team photographs. Zero stock |
| Motion | Heavy scroll-reveal on every section | Halve it. Reserve motion for one moment per page. Current volume delays content and duplicates DOM text |
| Data display | None | A recurring "metric block" component — mono numerals, label, and a footnote stating how it was measured |
| Diagrams | None | A defined diagram style (thin lime strokes on black, mono labels). This becomes the most recognisable KRYIL asset |

**Logo:** no change. It was refreshed in July 2026 and is fine. Resist the urge.

## 5.6 Messaging framework

```
                        KRYIL shows its work
                                 │
        ┌────────────────────────┼────────────────────────┐
        ▼                        ▼                        ▼
  BUILT, NOT PITCHED       INSIDE YOUR WALLS        NAMED ENGINEERS
  Working software and     Private and on-prem      The person who
  published benchmarks     AI as the default,       scopes it builds it
  before the invoice       not the upsell           and is in the contract
        │                        │                        │
   Proof: PoV output,       Proof: reference         Proof: team page,
   product screenshots,     deployment, DPDP         delivery clause,
   open benchmarks          mapping, VPC arch        engineer bylines
```

Every page, post, deck and email should be traceable to one of the three middle boxes.
If it is not, it is off-message.

## 5.7 Tagline options

Ranked. All avoid the banned register.

| # | Tagline | Why it works | Risk |
|---|---|---|---|
| **1** | **Engineered where it runs.** | Owns the private/on-prem position in three words; doubles as an engineering-quality claim | Slightly abstract alone; needs the subhead |
| **2** | **We show our work.** | The whole brand strategy, said plainly; memorable; a promise you can be held to | Modest — some will read it as small |
| 3 | Production, not pilots. | Names the exact pain of the ICP | Narrow; ages once AI pilots stop failing |
| 4 | Your data never leaves. | Sharpest compliance hook; instantly understood by a CISO | Only covers Pillar 2 |
| 5 | Built to be inspected. | Confidence through transparency; unusual | Can read as audit-flavoured |
| 6 | The last mile of AI. | Names the gap KRYIL fills | "Last mile" is nearly a cliché |
| 7 | Fewer slides. More systems. | Sharp anti-consultancy positioning | Slightly combative |
| 8 | Ship it inside. | Compact, technical, on-prem | Ambiguous out of context |
| 9 | Benchmarks, not brochures. | Alliterative, provable | Same shape as #7 |
| 10 | From your data, on your metal. | Vivid, concrete, engineer-friendly | "Metal" excludes VPC deployments |

**Recommendation: #1 "Engineered where it runs." as the corporate line, with "We show our
work." as the recruiting and content-marketing line.** Two lines, two audiences, one
philosophy.

## 5.8 Brand architecture

**Branded house with product endorsement.** Do not build separate brands — a company this
size cannot afford three brand-equity investments.

```
KRYIL  (masterbrand — lime, corporate, services)
  │
  ├── KRYIL Services          "Applied AI & Data Engineering"
  │      ├── Proof of Value   (productised entry engagement)
  │      ├── AI Systems
  │      └── Data Platform
  │
  ├── NextDOOH by KRYIL       (cyan, own product site/subdomain, own funnel)
  │
  ├── Avionix by KRYIL        (cyan, free tool, top-of-funnel + recruiting magnet)
  │
  └── KRYIL Labs              (research, benchmarks, open source, blog — the proof engine)
```

**"KRYIL Labs" is the most valuable new brand asset in this document.** It is where
benchmarks, open-source releases and technical writing live. It costs nothing to create,
it gives engineers a byline to be proud of, and it converts "we have no case studies"
into "we have published research" — which for a technical buyer is often better.

## 5.9 Product naming strategy

- Products get real names, never acronyms (NextDOOH passes; Avionix did too, though it is
  withdrawn from the public site as of Sept 2026).
- Always "X by KRYIL" on first mention externally; endorsement builds the masterbrand.
- Service offerings get *descriptive* names, never invented ones. **Do not create a
  "KRYIL Velocity Framework™".** Invented methodology names are unverifiable by
  construction, which is precisely the credibility problem KRYIL is escaping. Name the
  offering what it is: "Proof of Value", "AI Systems", "Data Platform".
- The one framework worth naming is the delivery methodology (§8.4), because it is
  genuinely repeatable — and even then, name it plainly.

---

# 6. Website

## 6.1 Audit — findings by category

**UX**
- Four-slide auto-rotating hero. Carousels are among the most-studied conversion failures
  in web UX; the first slide gets the attention and slides 2–4 are seen by a small
  minority. Four different value propositions rotating means the site has no value
  proposition.
- Motion-gated content: several sections only become legible after scroll-trigger
  animation, delaying comprehension.
- Nine top-level destinations across two dropdowns. Too many for a firm this size.
- No pricing signal of any kind, so every visitor must talk to a human to learn anything
  about cost — the biggest single filter against mid-market inbound.

**UI**
- Genuinely good craft: type scale, spacing, dark palette, restraint in colour.
- Motion volume is excessive; `will-change-transform` appears on many elements, which on
  low-end Android has a real cost.
- No dedicated data/metric display pattern despite a strategy that depends on showing numbers.

**Messaging**
- Category-incoherent (defence contractor / IT services / product company).
- Unsupported claims throughout (§2.2).
- "Five core services" over six services.
- Duplicated paragraphs rendered twice in DOM.
- Dropped articles in multiple strings ("solutions modern defense requirements",
  "Transforming visionary ideas results").

**Conversion**
- `mailto:` contact form. No backend, no CRM, no confirmation, no measurement.
- No calendar booking link.
- No gated asset, no newsletter, no low-commitment next step of any kind.
- CTAs are generic and inconsistent: "Get a Quote", "Request Demo", "Get Started",
  "Work With Us", "Get in Touch" — five different asks with no hierarchy.

**Trust**
- No team page, no faces, no bios.
- No case studies, no testimonials, no logos.
- No certifications.
- No security or compliance documentation.
- Legal pages exist (privacy, terms, anti-slavery, carbon) which is unusually thorough
  for the stage — a genuine positive, currently buried in the footer.

**SEO**
- Strong foundations: sitemap, robots, llms.txt, IndexNow, per-route canonical/OG,
  structured data across Organization/LocalBusiness/WebSite/Service.
- Pointed at the wrong target: "UAV manufacturer Bangalore", "drone manufacturer India"
  are categories KRYIL cannot win and should not want.
- 29-term keyword meta tag — inert with search engines, corrosive to credibility with
  anyone who reads the source.
- Multiple obsolete meta tags.
- Client-side-rendered SPA on GitHub Pages: content requires JS execution to index. Google
  usually manages this; several AI crawlers do not, which directly undermines the GEO/AI
  visibility work the llms.txt implies you care about.
- `twitter:site` points at `@kaborobotics`, not `@kryilinfotech`.

**Content**
- Blog and News scaffolding exists — good.
- No technical depth content, which is the only content that reaches this ICP.
- Service pages describe categories, not outcomes.

**Technical**
- `dist/` committed to the repository; every build creates a large diff.
- No prerendering / SSG despite being a mostly-static marketing site.
- No error tracking, no analytics beyond [UNKNOWN].

## 6.2 Recommended architecture

```
/                          Home
/what-we-do                (replaces "Services" dropdown — ONE page, three offerings)
  /what-we-do/ai-systems
  /what-we-do/data-platform
  /what-we-do/proof-of-value      ← the money page
/work                      Case studies index
  /work/<slug>             Individual case studies
/products
  /products/nextdooh
  /products/avionix
/labs                      KRYIL Labs — benchmarks, research, open source
/blog                      Technical writing
/about                     Story + the team, with faces
/trust                     Trust Center (§9.4)
/careers
/contact
--- retire ---
/defense                   → 301 to /  (see §10)
/services/*                → 301 to the mapped /what-we-do/* page
/news                      → merge into /blog with a tag
```

Top navigation reduces to five items: **What We Do · Products · Work · Labs · Contact**,
with About/Careers/Trust in the footer. Five is enough. Nine is a symptom.

## 6.3 Page specifications

### Home
- **Purpose:** In eight seconds, tell a CIO what KRYIL does, for whom, and what the first
  step costs.
- **Audience:** CIO/CTO/Head of IT at a ₹100–2,000 Cr Indian enterprise.
- **Key message:** Production AI, inside your infrastructure, proven in ten days.
- **Sections:** (1) Static hero — no carousel. (2) The problem, in three sentences.
  (3) Three offerings. (4) Proof strip — products, benchmarks, Labs. (5) How Proof of
  Value works, with price. (6) Who we work with (industries, honestly stated). (7) The
  team, with faces. (8) One clear CTA.
- **Primary CTA:** "Book a 30-minute technical call" → real calendar link.
- **Secondary CTA:** "See how Proof of Value works" → `/what-we-do/proof-of-value`.
- **SEO target:** `AI development company Bangalore`, `enterprise AI implementation India`,
  `private AI deployment India`.
- **Content required:** new copy (§6.4), 4 team photos, 1 architecture diagram.

### /what-we-do/proof-of-value  ← build this page first
- **Purpose:** Convert. This is the lowest-friction, highest-intent page on the site.
- **Key message:** ₹2–4 lakh, ten working days, a working system and a document, and you
  can stop.
- **Sections:** what you get (itemised); the ten-day schedule day by day; what we need
  from you; the price; what happens next; three example PoV scopes; FAQ (including "what
  if it does not work" — answered honestly).
- **CTA:** "Scope a Proof of Value" → form → calendar.
- **SEO:** `AI proof of concept India`, `AI pilot project cost`, `enterprise AI PoC`.

### /what-we-do/ai-systems
- **Key message:** RAG over internal documents, document intelligence, forecasting,
  vision QC — built to run in production, in your environment.
- **Sections:** the five solution patterns (§8.2); reference architecture diagram;
  deployment options (VPC / on-prem / hybrid) with an honest cost comparison; model
  selection policy; what we will not do.
- **SEO:** `enterprise RAG implementation`, `on premise LLM deployment India`,
  `private AI infrastructure`.

### /what-we-do/data-platform
- **Key message:** The unglamorous half. Pipelines, warehouse, quality, lineage,
  governance — because this is why AI projects fail.
- **SEO:** `data engineering services India`, `data warehouse consulting Bangalore`,
  `DPDP Act data governance`.

### /work (case studies)
- **Purpose:** The single biggest credibility gap. This page does not exist yet and must.
- **Format per study:** Client (named, or "a ₹400 Cr diagnostics chain" if under NDA —
  never fabricated) · the problem · constraints · what we built · architecture diagram ·
  measured result with method · what we would do differently.
- **The last field is the differentiator.** Nobody publishes it. It is the most
  trust-building paragraph on a services website.
- **Bootstrap:** publish NextDOOH and Avionix as engineering case studies on day one.
  Zero client permission needed, and they are real.

### /labs
- **Purpose:** Manufacture technical credibility without clients.
- **Content:** benchmark posts, open-source releases, reproducible evaluations.
- **First three artefacts:** (1) "Open-weight vs hosted models on Indian-language
  enterprise documents — a reproducible benchmark". (2) An open-source RAG evaluation
  harness on GitHub. (3) "What private LLM inference actually costs in India: measured
  ₹/1M tokens across GPU options".
- **SEO:** long-tail technical queries + AI-crawler citation surface.

### /trust
- Full spec in §9.4.

### /about
- **Must contain faces and real bios.** Sarojini K N and Ajay Kumar named, with
  photographs and actual backgrounds. Enterprise buyers buy people.
- Honest founding story: incorporated 2025, what was built, what is next. **Youth stated
  plainly is more credible than youth concealed** — and it is verifiable in 30 seconds on
  Tofler anyway, so concealment only demonstrates dishonesty.

### /products/nextdooh
- Treat as a standalone product page with its own funnel: pricing table, free trial or
  demo device flow, feature comparison against Yodeck/ScreenCloud, integration list.
- **Add public pricing.** Product buyers who cannot see a price leave.

## 6.4 Complete homepage copy

> **[HERO]**
>
> **Production AI. Your data. Your infrastructure.**
>
> KRYIL builds AI systems that run inside your own cloud or on your own hardware — for
> Indian enterprises whose operational data cannot leave the building. We start with a
> fixed-price proof of value in ten working days.
>
> `[ Book a 30-minute technical call ]`  `[ See how Proof of Value works → ]`
>
> ---
>
> **[THE PROBLEM]**
>
> **Most enterprise AI dies between the demo and the deployment.**
>
> Not because the model is wrong. Because the data lives in six systems and nobody owns
> the definitions. Because a notebook is not a system. Because compliance will not
> approve sending customer records to an API in another country — and under the DPDP Act,
> they are right not to.
>
> We work on all three. That is the whole company.
>
> ---
>
> **[WHAT WE DO]**
>
> **AI Systems**
> Retrieval over your internal documents. Document extraction that survives real-world
> scans. Forecasting on your operational history. Vision inspection on your line. Built
> to run in production — versioned, monitored, access-controlled, and costed before you
> commit.
> `Explore AI Systems →`
>
> **Data Platform**
> The half nobody demos. Pipelines, warehouse modelling, quality checks, lineage, and the
> governance the DPDP Act now requires. If your AI project failed before, this is
> probably why.
> `Explore Data Platform →`
>
> **Proof of Value**
> Ten working days. Fixed price. One narrow problem. At the end you have a working
> system, an architecture document, and an honest number for what production costs. If it
> does not work, you stop — and you keep the document.
> `See how it works →`
>
> ---
>
> **[PROOF]**
>
> **We build our own products, so you can inspect our engineering before you hire it.**
>
> **NextDOOH** — Cloud digital signage. Content changes propagate to Android display
> fleets in **under two seconds** over WebSocket, with multi-zone layouts and remote
> device management. `See the platform →`
>
> **Avionix** — Browser-based aircraft design with real-time aerodynamic analysis, 3D
> visualisation and 58+ templates. Free, no signup. `Open Avionix →`
>
> **KRYIL Labs** — Our benchmarks and open-source tools, published with the method so you
> can reproduce them. `Read the research →`
>
> ---
>
> **[HOW PROOF OF VALUE WORKS]**
>
> **Ten working days. From ₹2,00,000. You can stop at the end.**
>
> **Days 1–2 · Scope.** We sit with the people who do the work today and pick one problem
> narrow enough to finish and real enough to matter.
> **Days 3–7 · Build.** Working system, on your data, in an environment you control.
> **Days 8–9 · Measure.** Accuracy, latency and cost against a baseline we agree in
> advance. Including the cases where it fails.
> **Day 10 · Decide.** Demo, architecture document, production cost model, and a
> recommendation — which is sometimes "do not build this."
>
> `[ Scope a Proof of Value ]`
>
> ---
>
> **[WHO WE WORK WITH]**
>
> Indian enterprises between ₹100 Cr and ₹2,000 Cr in revenue, with an IT team and no
> in-house ML team. Manufacturing and industrial. Healthcare and diagnostics. Logistics.
> Financial services operations. Professional services.
>
> If you need a body shop at an hourly rate, we are the wrong firm and we will say so on
> the first call.
>
> ---
>
> **[THE TEAM]**
>
> **The person who scopes your project writes the code.**
>
> We are a small senior team in Bangalore. There is no account manager between you and
> the engineer, and the individuals delivering your work are named in the contract.
>
> `[ team photographs and real bios ]`
>
> `Meet the team →`
>
> ---
>
> **[CTA]**
>
> **Tell us what is not working.**
>
> Thirty minutes with an engineer, not a salesperson. If we are not the right fit we will
> tell you on the call and, where we can, point you at who is.
>
> `[ Book a technical call ]`
>
> info@kryil.com · +91 8089 090 365 · Bangalore, India

**Note on the removed hero:** the current site's four rotating headlines are replaced by
one static statement. This will feel like a loss of content. It is a gain in
comprehension. Measure it — that is what §27's KPI dashboard is for.

---

# 7. Products

## 7.1 Portfolio principle

Build a product only where recurring revenue, high margin and defensible IP intersect
with something KRYIL already knows how to build. On that test, KRYIL should carry
**two** products and **one** free top-of-funnel tool. Not six. The most common
early-stage failure mode is a portfolio of half-finished products none of which reaches
the quality bar that produces referrals.

## 7.2 NextDOOH — the priority

| Field | Detail |
|---|---|
| **Problem** | Multi-site operators (retail, QSR, clinics, gyms, campuses) run screens on USB sticks and manual visits. Enterprise signage platforms are priced and architected for 1,000+ screens; SMB tools are unreliable at scale. The 15–500 screen band is badly served in India and SEA. |
| **Target customer** | Marketing Ops or Facilities lead at a 15–500 outlet chain. Not IT. |
| **Market** | Global DOOH software is large and consolidating at the top; the India/SEA mid-market is fragmented with weak local support from US/EU vendors. [ASSUMED — validate with 20 customer calls before scaling spend.] |
| **Solution today** | Cloud CMS, Android player, sub-2s WebSocket sync, multi-zone layouts, remote device management, kiosk mode |
| **MVP status** | **Shipped.** This is not a concept. |
| **V1 (next 6 months)** | Public pricing + self-serve signup + card payment; scheduled playlists with dayparting; proof-of-play reporting (the #1 reason a chain pays for signage — advertisers and franchisees demand it); offline resilience with local cache; Android TV + Windows player parity |
| **V2 (6–18 months)** | Multi-tenant reseller/white-label console (channel is how signage actually scales in India); API + Zapier; audience measurement via camera (opt-in, privacy-reviewed); AI content generation from a brand kit; SSO |
| **Competitive advantage** | Sub-2s sync is genuinely better than most competitors' polling intervals; India/SEA pricing; local support timezone; unlimited-screens pricing tiers vs per-screen bleed |
| **Architecture** | Existing React/Node stack; WebSocket fan-out; move to per-tenant Postgres schemas; object storage + CDN for media; device heartbeat + OTA update channel |
| **Pricing** | Starter ₹399/screen/mo (1–10) · Growth ₹299/screen/mo (11–50) · Scale ₹199/screen/mo (51–200) · Enterprise custom, unlimited-screen site licence. USD: $9 / $7 / $5. Annual −20%. |
| **Effort to V1** | ~4 engineer-months |
| **Team** | 1 full-stack lead + 1 engineer + 0.5 designer |
| **GTM** | Self-serve first; SEO on "digital signage software India"; partner with AV integrators and display resellers (they already sell the screens); direct outbound to 50-outlet chains |
| **Revenue potential** | Year 3: 3,000–6,000 screens ≈ ₹1.1–2.2 Cr ARR [ASSUMED] |
| **Risks** | Hardware fragmentation across cheap Android boxes; support cost per small customer; a well-funded incumbent dropping India pricing |

**Rank: #1. Start now.** Publishing pricing and enabling self-serve signup is the single
highest-ROI product action available and needs roughly two engineer-weeks.

## 7.3 Avionix — reposition, do not monetise yet

| Field | Detail |
|---|---|
| **Problem** | Aircraft conceptual design tools are desktop, expensive and licence-gated; students and hobbyists have no accessible option |
| **Target** | Aerospace students, university labs, hobbyist designers, early-stage UAV teams |
| **Status** | Shipped, free, no signup, 58+ templates, browser CFD |
| **Honest assessment** | **This is not a business.** The paying market for conceptual aircraft design tooling is small and served by entrenched vendors. Attempting to monetise it directly will consume engineering for little return. |
| **What it IS worth** | (a) The best recruiting magnet KRYIL owns — aerospace-curious engineers will apply because of it; (b) organic top-of-funnel traffic and backlinks; (c) proof of hard engineering (browser-based numerical analysis is not trivial); (d) a legitimate, honest connection to aerospace without claiming to build weapons |
| **Recommendation** | Keep free. Keep improving slowly (≤10% of one engineer). Add optional accounts to save designs — this builds an email list of aerospace engineers, which is a recruiting asset. Add a university-lab tier at ₹0 with attribution. **Revisit commercial licensing in FY29** if an institutional pull emerges. |
| **Rank** | #3 — strategic, not financial |

## 7.4 The third product: build it from services

**Do not invent it now.** The correct process is: run 12–18 months of AI services
engagements, notice which deliverable you build three or more times, and productise
*that*. [RECOMMENDED]

Two hypotheses to watch for, based on the ICP:

**Hypothesis A — "Private RAG appliance."** A packaged, self-hostable retrieval system
for internal documents: connectors, ingestion, evaluation harness, audit log, admin
console, deployable into a client VPC in a day. If KRYIL builds the same RAG stack for
five clients, that stack is the product. Licence at ₹6–20 lakh/year. Highest probability
of the three.

**Hypothesis B — "DPDP evidence platform."** Data-mapping, consent records, retention
enforcement and audit reporting against India's DPDP Act. Regulatory deadlines create
budget; compliance software has excellent retention. Requires legal partnership.

**Trigger to commit:** three paying clients requesting substantially the same thing.
Not before.

## 7.5 Products explicitly NOT to build

| Idea | Verdict |
|---|---|
| A UAV hardware platform | No. §10. Capital, licensing and certification make it impossible at this size |
| A cybersecurity product | No. Certification-gated market; no credibility base |
| A generic "AI platform" | No. Competing with hyperscalers and 200 funded startups |
| An internal-tools / low-code builder | No. Brutally commoditised |
| A blockchain anything | No |

## 7.6 Product ranking

| Product | Strategic value | Revenue potential | Difficulty | Time to market | Competitive advantage | **Priority** |
|---|---|---|---|---|---|---|
| NextDOOH V1 | High | High | Low | 3 months | Medium-high | **1** |
| Private RAG appliance | Very high | High | Medium | 12–18 months | High | **2** |
| Avionix (as brand/recruiting) | Medium | Very low | Very low | Now | High | **3** |
| DPDP evidence platform | Medium | Medium | High | 18–24 months | Medium | **4** |
| UAV hardware | Negative | Unknown | Extreme | 3–5 years | None | **Do not** |

---

# 8. AI Strategy

## 8.1 The strategic bet

KRYIL cannot win at model building, at AI platforms, or at generic "AI consulting". It
can win at a narrow, unglamorous and well-funded position:

> **Getting AI into production inside environments where the data cannot leave.**

This bet rests on three things that are true right now: India's DPDP Act 2023 has given
compliance teams a reason to say no to third-party APIs; open-weight models have become
good enough that private deployment is a real engineering choice rather than a large
quality sacrifice; and almost nobody in the Indian mid-market segment has the combined
data-engineering plus MLOps plus infrastructure skill set to do it well. The window is
open and it is not open forever — call it 24–36 months before this is a commodity
capability. [ASSUMED]

## 8.2 The five sellable solutions

Deliberately five, not ten. Each one must be built three times before adding a sixth.

### AI-1 · Internal Knowledge Retrieval (private RAG)
- **Problem:** Institutional knowledge is in 40,000 documents across SharePoint, a shared
  drive and email. New staff take six months to become useful; experts spend a third of
  their week answering the same questions.
- **Customer:** Manufacturing (SOPs, maintenance manuals), professional services
  (precedent), healthcare (protocols), BFSI ops (circulars).
- **Solution:** Ingestion and chunking tuned to document type, hybrid retrieval (BM25 +
  dense), reranking, citation-bearing answers, an evaluation harness with a golden
  question set, an admin console, and a full audit log. Deployed in the client VPC.
- **Architecture:** Postgres + pgvector (not a separate vector DB — one less system to
  run, and adequate to ~10M chunks); open-weight instruct model on client GPU or managed
  private endpoint; document parsing pipeline; FastAPI service; React console.
- **Implementation:** 8–14 weeks after PoV.
- **Pricing:** PoV ₹2.5L → build ₹18–45L → run ₹1.2–3L/month.
- **ROI pitch:** "Your senior engineers answer the same 200 questions every month. At
  their loaded cost, that is ₹X. We will show you the measured deflection rate before you
  commit."
- **Sales line:** *Your documents, searchable by meaning, with a citation on every answer
  and none of it leaving your network.*

### AI-2 · Document Intelligence / Extraction
- **Problem:** Invoices, POs, claims, lab reports, KYC packets, shipping documents are
  keyed by hand. Volume scales with headcount.
- **Customer:** Logistics, insurance ops, diagnostics, NBFCs, manufacturing AP teams.
- **Solution:** Layout-aware extraction, confidence scoring, a human-in-the-loop review
  queue for low-confidence items, ERP write-back, drift monitoring.
- **Why this wins:** it is the easiest ROI arithmetic in enterprise AI — documents per
  month × minutes each × loaded cost. CFOs approve it without a strategy debate.
- **Pricing:** PoV ₹2L → build ₹15–35L → run ₹80K–2.5L/month, or per-document pricing
  above a volume floor.
- **Sales line:** *Stop paying people to retype what a machine can read — and keep the
  human on the 8% the machine is unsure about.*

### AI-3 · Operational Forecasting
- **Problem:** Demand, inventory, staffing and maintenance planned on spreadsheets and
  instinct.
- **Customer:** Manufacturing, retail chains, logistics, hospitals.
- **Solution:** Feature pipeline from the client's own history, gradient-boosted baseline
  before anything fancier, backtesting harness, scenario UI, monitored retraining.
- **The honest differentiator:** insist on the boring baseline first and publish how much
  the complex model actually beats it. Frequently it does not, and saying so wins more
  trust than any accuracy number.
- **Pricing:** PoV ₹2L → build ₹12–30L → run ₹60K–1.5L/month.

### AI-4 · Visual Inspection & Monitoring
- **Problem:** Manual QC is inconsistent and does not scale; defects escape.
- **Customer:** Manufacturing lines, warehouses, food processing, pharma packaging.
- **Solution:** Edge inference on a small device at the line, active-learning loop for
  new defect classes, dashboard, alerting. Runs offline by design.
- **Why it fits KRYIL:** it is genuinely edge/embedded work, which is where the UAV
  interest actually has legitimate transferable value — vision, sensors, constrained
  compute — without any of the defence exposure.
- **Pricing:** PoV ₹3L (needs a site visit) → build ₹20–50L → run ₹1–3L/month per line.

### AI-5 · Enterprise Copilot / Agentic Workflows
- **Problem:** Multi-step internal processes span systems and stall on human handoffs.
- **Customer:** Ops-heavy businesses with an existing ERP/CRM.
- **Solution:** Tool-using agents against real internal APIs, with hard authorisation
  boundaries, human approval gates on any write, and complete traceability.
- **Caveat — say this to clients:** this is the least mature of the five. Sell it only to
  clients who have already succeeded with AI-1 or AI-2. Leading with agents to a
  first-time buyer is how you get a failed reference.
- **Pricing:** PoV ₹3L → build ₹25–60L → run ₹1.5–4L/month.

## 8.3 Deliberate non-goals

| Not doing | Why |
|---|---|
| Training foundation models | Capital-infeasible; no advantage |
| Fine-tuning as a headline service | Usually the wrong answer; retrieval and prompt engineering solve most cases at a fraction of the cost. Offer it when measurement proves it is needed |
| Chatbots for websites | Commodity; ₹5,000/month market |
| "AI strategy" decks with no build | This is what the client already distrusts |
| Reselling a hyperscaler's AI platform | Zero margin, zero IP, zero differentiation |

## 8.4 The KRYIL Enterprise AI Framework

Name it plainly. Five stages, each with a defined artefact — the artefacts are the
product, because they are what makes the methodology repeatable and sellable.

```
  ┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐
  │  1. FRAME  │──▶│ 2. GROUND  │──▶│ 3. PROVE   │──▶│ 4. HARDEN  │──▶│ 5. OPERATE │
  └────────────┘   └────────────┘   └────────────┘   └────────────┘   └────────────┘
   2–3 days         1–2 weeks        10 days           6–12 weeks       ongoing
   ─────────        ─────────        ─────────         ─────────        ─────────
   Decision Brief   Data Readiness   PoV Report        Production       Operations
   ・the decision   Report           ・working system   Runbook          Review
     being made     ・what data      ・measured vs      ・architecture    ・monthly
   ・baseline今      exists            baseline          record            metrics
   ・success         where            ・failure cases   ・eval suite      ・cost trend
     threshold      ・quality gaps    ・prod cost       ・monitoring      ・drift
   ・kill criteria  ・access path      model            ・rollback        ・retraining
```

**Two things make this framework worth more than the usual consulting diagram.**

**Stage 1 requires written kill criteria.** Before any work starts, the client and KRYIL
agree in writing what result would mean "stop". No other vendor in the ICP's shortlist
will offer this, and it converts a risky purchase into a bounded one.

**Stage 3 requires publishing failure cases.** The PoV report has a mandatory section
listing what the system got wrong and why. This is counter-intuitive as sales behaviour
and it is the single most effective trust mechanism available to a company with no
track record.

## 8.5 Model selection policy (publish this on the site)

| Situation | Default choice |
|---|---|
| Data cannot leave client infrastructure | Open-weight model on client GPU or private managed endpoint |
| Data may leave; quality is the binding constraint | Frontier hosted model, with a documented data-processing agreement |
| High volume, narrow task, latency-sensitive | Small fine-tuned or distilled model at the edge |
| Prototype / PoV under time pressure | Hosted frontier model to establish the quality ceiling, then measure what the private option costs against it |

Publishing this makes KRYIL look like engineers rather than resellers, and it
pre-empts the "are you just wrapping an API?" objection that will otherwise arrive on
every second call.

---

# 9. Cybersecurity

## 9.1 The decision: do not sell it yet

Restating §4.2 because it is the recommendation most likely to be overridden.
Cybersecurity services are credential-gated. Without OSCP/CREST-qualified testers,
professional indemnity insurance and a redacted sample report, KRYIL will lose every
qualified deal and win only the unqualified ones — which are the dangerous ones. A missed
critical finding on a client's production system is an extinction-level event for a
company with ₹10,000 of paid-up capital and no insurance.

**Decision: security becomes a delivery standard in FY27–28, and a sold service line
from FY29 once ISO 27001 and at least two certified individuals are in place.**

## 9.2 Security as a delivery standard (starts now, costs nothing)

Every KRYIL engagement includes, by default and at no extra line item:

- Threat model documented at design time (STRIDE, one page, in the repo)
- Dependency and container scanning in CI, build fails on critical
- Secrets in a managed store, never in code; automated secret scanning on every push
- Least-privilege IAM, documented, with a rationale per grant
- Encryption in transit and at rest as a non-negotiable default
- Audit logging on every data access path
- Data-classification map and retention rules per engagement
- Security section mandatory in every architecture record

This is truthful, differentiating, free, and it is the honest version of the "security"
claim currently on the site. **Put it on the site as a standard, not as a service.**

## 9.3 The FY29 service line (build toward this)

| Offering | Prerequisite | Indicative price |
|---|---|---|
| Secure architecture review | None — can start now | ₹1.5–4L per system |
| Cloud security posture assessment | Cloud certifications | ₹2–6L |
| DPDP Act readiness assessment | Legal partner | ₹3–8L |
| AI security & governance review | This is a genuine white space — few firms can assess prompt injection, data leakage through retrieval, model supply chain | ₹2–5L |
| Application penetration testing | **OSCP-qualified tester + PI insurance** | ₹2–8L |
| vCISO retainer | Certified lead + track record | ₹1.5–4L/month |
| Managed detection | SOC tooling + 24/7 rota (real one) | ₹2–8L/month |

**Note the fourth row.** AI security and governance is the one security offering KRYIL
can credibly lead with early, because it sits inside the AI competence rather than
outside it, and because the certification market has not caught up to it yet. Start
there.

## 9.4 Trust Center specification (`/trust`)

Build this in FY27. It is the highest-leverage credibility asset per rupee in this entire
document, and it removes a procurement blocker that will otherwise stop every enterprise
deal.

| Section | Contents | Honesty rule |
|---|---|---|
| Security overview | How KRYIL secures client data and its own systems | Describe what is actually implemented |
| Certifications & status | **"ISO 27001 — in progress, target Q3 FY28"** | Never imply a certificate that does not exist. Publishing a roadmap is credible; implying a certificate is fraud |
| Data handling | Classification, residency, retention, deletion, sub-processors | List every sub-processor by name |
| Privacy | DPDP Act 2023 alignment; GDPR posture for any EU work | Link the existing privacy policy |
| Access control | Who can access client data, how it is granted and revoked | Real policy |
| Secure development | The §9.2 standard, stated as engineering practice | |
| Vulnerability disclosure | `security@kryil.com`, scope, 90-day policy, safe-harbour statement | Costs one mailbox; signals seriousness |
| Business continuity | RTO/RPO, backups, where the code lives | Honest numbers, even if modest |
| Incident response | Notification commitment (e.g. 24 hours), escalation path | Only commit to what you can staff |
| AI governance | Model selection policy (§8.5), data-usage-for-training stance, human oversight, bias testing | **This section is a differentiator.** Almost no Indian firm this size has one |
| Downloads | Security whitepaper, DPA template, completed standard security questionnaire | Pre-answering the questionnaire saves 2–3 weeks per enterprise deal |

**The pre-completed security questionnaire is worth calling out.** Enterprise procurement
sends a 200-question spreadsheet. Having it pre-answered and downloadable takes weeks out
of the sales cycle and signals maturity out of proportion to company size.

---

# 10. Aerospace / UAV / Defence

## 10.1 The finding

**This is the most important section in the document, and the recommendation is to stop.**

KRYIL currently advertises, on a public website, that it offers:
multi-role combat drones capable of precision strikes and close air support; AI-coordinated
swarm drones for "overwhelming tactical advantage"; low-observable airframes with
radar-absorbing materials; military-grade encrypted data links with anti-jamming and
frequency hopping; sub-meter-accuracy targeting systems with multiple payload options;
and jet propulsion technology.

There is no evidence that any of this exists. The company has ₹10,000 of paid-up capital,
was incorporated 17 months ago, is classified by the MCA as an IT services company, and
its aerospace-adjacent asset is a free browser-based *design tool*.

## 10.2 Why this is worse than ordinary marketing exaggeration

**It destroys enterprise sales.** A CIO evaluating KRYIL for a ₹40 lakh AI project will
visit `/defense`. Reading that a 17-month-old IT services firm builds precision-strike
combat drones does not create an impression of ambition. It creates an impression that
nothing on the site can be believed — including the parts that are true. **The defence
page is actively costing KRYIL the AI deals it can actually win.**

**It poisons recruitment.** The senior engineers KRYIL needs will check the site, reach
the same conclusion, and not apply.

**It creates a regulatory surface that is entirely unnecessary.** Detail below.

## 10.3 The regulatory position — accurately stated

I checked this rather than assuming it, because the details matter and the popular
version is wrong in both directions.

**Civil UAV operation — Drone Rules 2021.** A Type Certificate is issued under Rule 32,
administered by DGCA through the DigitalSky platform, with prototype testing by the
Quality Council of India or accredited bodies against CSUAS standards; QCI reports within
60 days and the certificate issues within 15 days of the report. A drone model cannot be
registered on DigitalSky, and therefore cannot legitimately be operated in India, without
a Type Certificate or an exemption. Nano UAS and model remotely-piloted aircraft are
outside the requirement. **Practical consequence: KRYIL cannot sell an operable
non-nano drone in India without going through QCI type certification for that model.**

**Defence manufacturing licensing — the nuance that is usually reported wrongly.** DPIIT
Press Note 1 of 2019 moved defence aircraft, warships and allied items into industrial
licensing under the Industries (Development & Regulation) Act 1951, and — importantly —
**expressly excluded** "UAV or unmanned airships designed for controlled flight within or
out of the direct natural vision of the operator" from that defence-aircraft
categorisation. So an unarmed UAV does *not* by itself require an IDRA industrial licence.
**However**, armament and ammunition production pulls the activity into Arms Act 1959
licensing. The site's language — precision strikes, targeting systems, payload options,
close air support — describes exactly the armed configuration that crosses that line.

**Export controls.** Military and dual-use UAV systems fall under SCOMET, Category 6
(Munitions List, Appendix-3 to Schedule 2 of ITC(HS)), with the Department of Defence
Production as licensing authority, filed through defenceexim.gov.in using ANF-2O, with a
mandatory End-User Certificate. India is a member of the MTCR, Wassenaar Arrangement and
Australia Group; MTCR range/payload thresholds bite directly on armed UAVs.

**Net position:** the unarmed-UAV path is *less* licence-gated than most people assume,
but every claim currently on `/defense` describes the armed path, which is heavily
gated — and KRYIL has none of the gates. The claims are also, as far as any public
evidence shows, simply not true, which is the more immediate problem.

## 10.4 Concept vs reality — where KRYIL actually is

| Maturity stage | Definition | KRYIL's actual position |
|---|---|---|
| Concept | Idea, no design | Where the `/defense` content sits |
| Prototype | Physical article, bench-tested | **Not reached** |
| MVP | Flies, does one useful thing | **Not reached** |
| Field-tested | Operated in a real environment by a real user | **Not reached** |
| Production-ready | Repeatable manufacture, QA, support | **Not reached** |
| Certified | DGCA Type Certificate | **Not reached** |

The only asset in this domain is **Avionix — a design tool, at production quality, with
real users.** That is genuinely creditable. It is also not a drone.

## 10.5 Recommendation

**Immediate (this week):** remove `/defense` entirely and 301 it to the homepage. Remove
every UAV-manufacturer and defence claim from titles, meta, OG tags, structured data,
llms.txt and the sitemap. Remove the "jet propulsion" hero slide.

**Keep and reframe honestly:** Avionix stays, presented as what it is — a free aerospace
design and analysis tool built by KRYIL engineers, and evidence of engineering ability.
The "UAV Design Engineer Intern (SolidWorks / Aerospace)" role can stay if it genuinely
supports Avionix; it should be described that way.

**Three-year path back into aerospace — only if the core business succeeds:**

| Period | Milestone | Gate to pass first |
|---|---|---|
| FY27–28 | None. Zero aerospace revenue activity. Avionix maintained as a tool | Core business at ₹2.5 Cr+ revenue |
| FY29 | *Software only* for civil UAV operators: fleet management, flight-log analytics, computer-vision processing of drone imagery for agriculture/infrastructure inspection. No hardware, no defence, no weapons. Sells into the existing AI competence | ₹6 Cr revenue, 25%+ recurring, profitable |
| FY30 | Optionally: a university research partnership (IISc, IIT-B aerospace departments are in reach from Bangalore) on autonomy/perception software. Publish, do not productise | Cash reserve > 12 months opex |
| FY31 | *Reassess only.* Hardware would require ₹10–50 Cr, a QCI certification programme, an airworthiness-literate team and a 3-year cycle. If it still looks attractive with a real balance sheet, revisit with a proper business case | Genuine strategic reason beyond founder interest |

**On the founder's aerospace interest.** It is clearly real, and it produced Avionix,
which is a good piece of engineering. The recommendation is not to abandon it. It is to
stop letting it write cheques the company cannot cash on the homepage. Aerospace is the
reward for building a profitable software business, not the route to one.

---

# 11. Sales

## 11.1 Current state

There is no sales system. There is a `mailto:` link. Everything below is construction,
not optimisation.

## 11.2 Buyer personas

| Persona | Role | Cares about | Fears | Wins them with |
|---|---|---|---|---|
| **Ravi — the CIO** (economic buyer) | CIO/CTO/Head of IT, ₹100–2,000 Cr firm | Delivery certainty, no new headcount, board-defensible choice | Another failed pilot; being blamed | Kill criteria in writing; fixed-price PoV; named engineers |
| **Priya — the function head** (champion) | Head of Ops / Finance / Quality | Her team's specific pain, this quarter | Disruption; being ignored by IT | Talking to *her* team on day one; a demo on her real data |
| **Anand — the CFO** (approver) | CFO | Payback period, total cost, contract risk | Runaway scope; recurring cost surprise | A production cost model at PoV; capped scope |
| **Meera — security/compliance** (blocker) | IT Security / Legal / DPO | Data residency, DPDP, sub-processors | An auditor's question she cannot answer | The Trust Center; private deployment; pre-answered questionnaire |

**The Trust Center exists to neutralise Meera.** She has no budget and cannot say yes,
but she can say no, and in an Indian mid-market enterprise with a DPO she frequently
does.

## 11.3 The funnel

| Stage | Definition | Owner | Target conv. | Cycle | KPI |
|---|---|---|---|---|---|
| **Lead** | Identifiable person + company + a reason | Marketing | — | — | 40/month by M12 |
| **Qualified (MQL→SQL)** | ICP fit + budget signal + a named problem | CEO/Sales | 30% | 3 days | 12 SQL/month |
| **Discovery** | 30-min technical call held | Engineer + CEO | 60% | 1 week | 7/month |
| **Technical workshop** | 2–3 hrs with the actual users, on real constraints | Engineer | 55% | 2 weeks | 4/month |
| **PoV proposal** | Fixed-scope, fixed-price document issued | CEO | 65% | 1 week | 2.6/month |
| **PoV won** | Signed and paid | CEO | 50% | 2 weeks | 1.3/month |
| **PoV → programme** | Converts to a full build | Delivery lead | **70%** | 3 weeks | 0.9/month |
| **Expansion** | Second workload in the same account | Account owner | 45% within 12 mo | — | — |
| **Renewal (run contract)** | Managed-service renewed | Delivery lead | 85% | — | — |

**The 70% PoV→programme conversion is the number the entire business model rests on.** If
it comes in under 50%, the PoV is scoped wrong — it is proving the wrong thing — and that
is a scoping problem, not a sales problem. Review it monthly.

**Pipeline arithmetic to hit ₹2.4 Cr in FY28:** ~11 programmes at an average of ₹22 lakh,
which requires ~16 PoVs sold, ~24 PoV proposals, ~44 workshops, ~80 discovery calls,
~135 SQLs, ~450 leads. Work backwards from this every month; it is the only sales metric
that predicts anything.

## 11.4 Channels, ranked by expected return for KRYIL specifically

| Rank | Channel | Why | Effort | Expected share of pipeline Yr 1 |
|---|---|---|---|---|
| 1 | **Founder-led LinkedIn + direct outbound** | Cheapest credible channel for a technical founder; the ICP is on LinkedIn | High (CEO, 8 hrs/wk) | 35% |
| 2 | **Technical content / KRYIL Labs** | Compounds; reaches Ravi's engineers who brief Ravi | High, delayed payoff | 20% by M12 |
| 3 | **Bangalore ecosystem & events** | Face-to-face closes the trust gap that youth creates | Medium | 15% |
| 4 | **Partnerships / referrals** | ERP implementers, CA firms, cloud resellers already sit next to the budget | Medium | 15% |
| 5 | **Inbound SEO** | Foundations already strong; needs re-targeting | Medium | 10% |
| 6 | **GCC overflow** | Fast cycles, great logos | Low | 5% |
| — | **Paid ads** | **Do not.** ₹/lead in enterprise IT is brutal and the site does not convert yet | — | 0% |
| — | **Government tenders** | **Not yet.** Requires turnover and experience criteria KRYIL cannot meet; the paperwork will eat a quarter. Revisit FY29 | — | 0% |

## 11.5 Cold email templates

**Template A — trigger-based (new CIO). Highest response rate.**

> **Subject:** the data question, before the AI question
>
> Hi {First},
>
> Saw you joined {Company} as {Title} last month — congratulations.
>
> Most people in your seat get asked for an AI roadmap in the first quarter. The part that
> usually decides whether it works isn't the model, it's whether {domain} data is in a
> state anyone can build on. That's usually where the first ninety days go.
>
> We build production AI for Indian mid-market companies, deployed inside the client's
> own infrastructure. Two things that might be useful whether or not we ever work
> together: a one-page data-readiness checklist we use in the first week of every
> engagement, and an honest cost model for running models privately vs on an API.
>
> Want me to send both? No call required.
>
> Shinish · KRYIL, Bangalore

**Template B — the failed pilot.**

> **Subject:** the {use case} pilot that didn't ship
>
> Hi {First},
>
> A question rather than a pitch: did {Company}'s {use case} work make it to production,
> or did it stop after the pilot?
>
> I ask because roughly three in four do stop, and it's almost never the model. It's that
> the data needed three months of work nobody scoped, or the deployment couldn't clear
> security because the data had to leave the network.
>
> That second one is most of what we do — we deploy inside the client's own VPC or on
> their hardware. If the pilot stalled on either, I can show you in twenty minutes what
> the production version would actually have cost.
>
> Worth a conversation?

**Template C — compliance trigger.**

> **Subject:** DPDP + AI: the sub-processor problem
>
> Hi {First},
>
> Quick one. Most AI vendor conversations at the moment stall in the same place: legal
> asks where the data goes, the answer is "a third-party API", and the project pauses.
>
> We build AI systems that run inside the client's own infrastructure, so the answer is
> "nowhere". I've written up how we map that to DPDP obligations — six pages, no pitch.
>
> Want it?

**Rules for all outbound:** ≤150 words. One ask. No attachments. No calendar link in
email one. Never "just following up" — every follow-up carries a new piece of value.
Maximum four touches over 18 days, then stop for six months.

## 11.6 LinkedIn strategy (founder-led)

- **Post 3×/week.** Monday: a technical finding with a number. Wednesday: something that
  did not work and what it cost. Friday: a short observation on Indian enterprise tech.
- **The Wednesday post is the differentiator.** Failure posts outperform success posts
  for technical credibility by a wide margin and almost nobody in this market writes them.
- Comment substantively on 10 ICP posts daily — 20 minutes, and it is worth more than the
  posting.
- Connection requests: 15/day to ICP titles, no pitch, ever, in the request.
- **No automation tools.** Detection risk plus it destroys the voice.
- Target by month 12: 5,000 relevant followers, 3–5 inbound conversations/month.

## 11.7 Discovery call framework (30 minutes)

```
0–3    Frame: "I'd like to understand the problem. If we're not a fit
       I'll say so and suggest who is."
3–12   The current process. Who does it, how long, how often, what
       breaks. Ask for a number three times.
12–18  What has already been tried. Internal? Vendor? Why did it stop?
       ← the most informative question in the call
18–23  Constraints: where can the data live? Who must approve? Is there
       a date driving this?
23–27  Fit assessment, out loud, including doubts.
27–30  Next step: workshop, or an honest no.
```

**Qualification — a five-question scorecard, 2 points each; below 6 means disqualify.**
1. Is there a named person whose P&L improves if this works?
2. Is there money identified this financial year?
3. Is the data accessible within 30 days?
4. Is there a date driving urgency?
5. Can we reach the economic buyer inside two meetings?

**Disqualify loudly and early.** For a firm with this little capacity, a bad deal costs
more than no deal — it consumes the quarter that should have produced two good ones.

## 11.8 Proposal structure (max 6 pages)

1. **What you told us** — the problem in the client's own words. One page. This page wins
   more deals than the rest combined.
2. **What we would build** — scope, explicitly bounded, with an out-of-scope list.
3. **How we would know it worked** — success metrics and kill criteria, agreed in advance.
4. **How it deploys** — architecture diagram, where data lives, who can access it.
5. **What it costs** — PoV price, indicative build range, indicative run cost. No hiding.
6. **Who does the work** — named individuals with actual bios.

No company boilerplate. No "About KRYIL was founded…". No stock photos. The proposal is
an engineering document that happens to have a price in it.

## 11.9 The Proof of Value as the core sales instrument

Everything in §11 exists to sell a PoV. It is deliberately small, deliberately priced
(never free), deliberately bounded, and deliberately reversible. It converts KRYIL's
weakness — no track record — into the client's safety: *you do not have to trust us; you
have to spend ₹2.5 lakh and ten days to find out.*

---

# 12. Pricing

## 12.1 Principles

1. **Never compete on hourly rate.** It caps margin at the cost of labour and invites
   comparison with a body shop.
2. **Price the outcome where the outcome is measurable; price the scope otherwise.**
3. **Never work free.** A free PoC is valued at zero and attracts tyre-kickers.
4. **Every project carries a run contract, quoted at the same time as the build.**
   Recurring revenue is not sold separately later; it is designed into the first proposal.
5. **Publish product pricing. Do not publish service pricing** — publish the PoV price
   only, as the entry point.

## 12.2 Services pricing

| Offering | Model | INR | USD (export) |
|---|---|---|---|
| Proof of Value (10 working days) | Fixed | ₹2,00,000 – ₹4,00,000 | $2,400 – $4,800 |
| Data Readiness Assessment (2 wks) | Fixed | ₹3,00,000 – ₹6,00,000 | $3,600 – $7,200 |
| AI system build | Fixed-scope, milestone | ₹15,00,000 – ₹60,00,000 | $18K – $72K |
| Data platform build | Fixed-scope, milestone | ₹12,00,000 – ₹45,00,000 | $14K – $54K |
| Managed AI operations | Monthly retainer | ₹80,000 – ₹4,00,000/mo | $950 – $4,800/mo |
| Embedded senior engineer | Monthly, min 3 months | ₹3,50,000 – ₹5,50,000/mo | $4,200 – $6,600/mo |
| Architecture review | Fixed | ₹1,50,000 – ₹4,00,000 | $1,800 – $4,800 |
| AI governance / security review | Fixed | ₹2,00,000 – ₹5,00,000 | $2,400 – $6,000 |
| T&M (exception only) | Hourly | ₹3,500 – ₹6,500/hr | $45 – $80/hr |

[ASSUMED: these ranges are calibrated to Indian mid-market boutique rates as of Sept 2026.
They are reasoned estimates, not market data. Validate against three lost deals and three
won deals, then reset.]

**Export pricing note:** the same work sold to a US or UK client should be priced at
**2.5–3.5x the INR rate**, not at the INR rate converted. Currency conversion is not a
pricing strategy. See §21.

## 12.3 The margin escape route

This is the central financial question in the business, so state it plainly.

| Revenue type | Gross margin | Scales with | Problem |
|---|---|---|---|
| T&M staffing | 20–30% | Headcount, 1:1 | No leverage. Ever. |
| Fixed-price projects | 40–55% | Headcount, ~1:1 | Better, still linear |
| Productised services (PoV, assessments) | 55–70% | Repetition | Requires disciplined templating |
| Managed services / run contracts | 50–65% | Portfolio, sub-linear | Requires operational maturity |
| SaaS (NextDOOH) | 75–88% | Marketing, decoupled | Requires patience and cash |

**The path, in order:**
1. **Now → M6:** stop all T&M. Everything fixed-scope. *Margin 30% → 45%.*
2. **M3 → M12:** productise the PoV and the readiness assessment so the second one takes
   60% of the effort of the first. *Margin 45% → 52%.*
3. **M6 → M18:** attach a run contract to every build. Target 60% attach rate.
   *Recurring 0% → 20% of revenue.*
4. **M6 → M24:** NextDOOH self-serve. *SaaS becomes 10% of revenue at 80% margin.*
5. **M18 → M36:** productise the most-repeated build into the RAG appliance and licence
   it. *Blended margin 55% → 62%.*

**The discipline that makes this work:** every engagement must produce a reusable
artefact — a template, a component, an evaluation harness, a runbook. An engagement that
leaves nothing behind was priced as labour and should have been declined.

## 12.4 NextDOOH pricing

| Tier | Screens | INR/screen/mo | USD/screen/mo | Included |
|---|---|---|---|---|
| Starter | 1–10 | ₹399 | $9 | Core CMS, multi-zone, 1 user |
| Growth | 11–50 | ₹299 | $7 | + scheduling, proof-of-play, 5 users |
| Scale | 51–200 | ₹199 | $5 | + API, SSO, priority support |
| Enterprise | 200+ | Custom site licence | Custom | + white-label, SLA, dedicated support |
| Reseller | — | 30–40% margin | — | Multi-tenant console |

Annual prepay −20%. Free 30-day trial, no card. Free tier of 1 screen forever (it becomes
the demo unit in every prospect's office, which is the cheapest sales channel available).

## 12.5 Discounting policy

| Situation | Maximum |
|---|---|
| Annual prepay | 20% |
| First reference customer, with a signed case-study agreement | 30% — **the case study is the payment** |
| Multi-workload commitment | 15% |
| "Your competitor is cheaper" | **0%.** Restate scope, or lose it. |
| Anything above 30% | CEO only, documented reason |

Never discount without taking something out of scope. A discount with unchanged scope
teaches the client that the first price was fiction.

---

# 13. Marketing

## 13.1 Strategy

**Authority, not awareness.** KRYIL does not need to be widely known. It needs ~400
specific people in Bangalore, Chennai and Hyderabad to regard it as unusually competent.
That is achievable in twelve months by one founder and one marketer, and it is not
achievable by advertising.

**Budget assumption:** ₹8–15 lakh for the year, of which ~60% is the marketing hire.
[ASSUMED]

## 13.2 Content pillars

| Pillar | Share | Purpose | Example |
|---|---|---|---|
| **1. Measured engineering** | 40% | The proof engine — benchmarks, costs, architectures, with method | "What private LLM inference actually costs in India: measured ₹/1M tokens across four GPU options" |
| **2. Post-mortems** | 20% | Trust through candour | "We tried fine-tuning before retrieval. It cost ₹4 lakh and made things worse." |
| **3. Indian enterprise reality** | 20% | ICP relevance; DPDP, procurement, GCCs, local constraints | "What DPDP actually requires of an AI system, clause by clause" |
| **4. Build logs** | 15% | Product marketing that does not feel like it | "How NextDOOH keeps 500 Android screens in sync under two seconds" |
| **5. Company** | 5% | Hiring, milestones | Kept minimal — nobody cares |

## 13.3 Twelve-month calendar

| Month | Theme | Anchor asset | Cadence |
|---|---|---|---|
| M1 | Foundation | Site relaunch; NextDOOH + Avionix as engineering case studies | 2 blog, 12 LI |
| M2 | Cost transparency | **Benchmark #1:** private vs hosted inference cost in India | 2 blog, 12 LI, 1 video |
| M3 | Data readiness | Whitepaper: *The Data Readiness Checklist* (gated) | 2 blog, 12 LI |
| M4 | DPDP | Whitepaper: *DPDP for AI systems* + webinar #1 | 2 blog, 12 LI, webinar |
| M5 | Retrieval | **Open source #1:** RAG evaluation harness on GitHub | 3 blog, 12 LI, 1 video |
| M6 | First client story | Case study #1 (named or anonymised) | 2 blog, 12 LI |
| M7 | Document AI | **Benchmark #2:** extraction accuracy on Indian document formats | 2 blog, 12 LI, webinar |
| M8 | Deployment | Whitepaper: *Reference architectures for private AI* | 2 blog, 12 LI, 1 video |
| M9 | Case studies | Case studies #2 and #3 | 2 blog, 12 LI |
| M10 | Governance | Trust Center launch + AI governance framework published | 2 blog, 12 LI, webinar |
| M11 | Vertical | Manufacturing-specific content push | 3 blog, 12 LI, 1 video |
| M12 | Year in review | **Benchmark #3** + annual technical review + 2026 predictions | 2 blog, 12 LI, webinar |

## 13.4 Fifty blog ideas

**Measured engineering (1–20)**
1. What private LLM inference actually costs in India — measured ₹/1M tokens, four GPU options
2. Postgres + pgvector vs a dedicated vector DB: benchmarks at 100K, 1M and 10M chunks
3. Open-weight vs frontier models on Indian-language enterprise documents
4. Chunking strategies benchmarked on real SOPs, not on Wikipedia
5. Hybrid retrieval vs pure dense: measured on a 40,000-document corpus
6. Reranking: how much accuracy per millisecond
7. The real cost of a RAG system at 500 queries/day
8. GPU sizing for on-prem inference: a decision table
9. Latency budget for an enterprise copilot, broken down by component
10. Quantisation: what you actually lose at 8-bit and 4-bit
11. Evaluating RAG without a labelled dataset
12. Structured extraction: LLM vs traditional OCR + rules, with error analysis
13. Why we use gradient boosting before deep learning for forecasting
14. Edge inference on ₹15,000 hardware: what is achievable
15. Prompt injection against an internal RAG system — a practical assessment
16. Caching strategies that cut LLM spend 60%
17. Multi-tenant data isolation for AI systems
18. Observability for LLM applications: what to log
19. Model drift in production: detection over 6 months
20. The total cost of ownership of a private AI deployment, over 3 years

**Post-mortems (21–30)**
21. We fine-tuned before we tried retrieval. It cost ₹4 lakh and made it worse
22. A RAG system that scored 92% in evaluation and failed in production
23. Why our first PoV scope was too big — and the rule we adopted
24. The document pipeline that broke on scanned tables
25. We recommended a client not build an AI system. Here is the arithmetic
26. Underestimating data cleaning: a 3x time overrun, analysed
27. Our agent framework failure and the human-approval gate that replaced it
28. Sub-2-second sync: three architectures we discarded first
29. When the boring baseline beat the sophisticated model
30. The WebSocket reconnection bug that took eleven days

**Indian enterprise reality (31–42)**
31. What the DPDP Act actually requires of an AI system, clause by clause
32. Data residency for AI: what "in India" really means
33. Why Indian mid-market AI pilots stall — 5 recurring patterns
34. Getting AI through Indian enterprise procurement
35. Building AI for Indian-language documents: the real problems
36. GCCs vs local vendors: when each is the right choice
37. What an Indian CFO needs to see to approve an AI budget
38. Cloud costs in Indian regions: measured comparison
39. Hiring AI engineers in Bangalore in 2026: the honest market
40. Why your ERP data is not ready and what that costs to fix
41. AI governance for a company with no AI team
42. Reading an AI vendor's security questionnaire response critically

**Build logs (43–50)**
43. How NextDOOH keeps 500 Android screens in sync under two seconds
44. Running aerodynamic analysis in a browser: the Avionix architecture
45. Designing offline-first for unreliable Indian retail connectivity
46. Our CI pipeline, and why the build fails on a critical CVE
47. Multi-zone layout rendering on ₹6,000 Android boxes
48. OTA updates to a device fleet you cannot physically reach
49. Choosing boring technology on purpose
50. The architecture record: our one-page template, published

## 13.5 Thirty LinkedIn post ideas (shapes, not scripts)

Numbers (1–8): a cost figure that surprises · a benchmark result · a latency breakdown ·
"this took 11 days, here is why" · GPU price/perf · token spend before and after caching ·
accuracy vs baseline · TCO over 3 years.
Contrarian (9–14): most AI pilots should be cancelled · you do not need a vector database ·
fine-tuning is usually the wrong first move · agents are not ready for your finance team ·
your data problem is a definitions problem · stop buying AI strategy decks.
Teaching (15–20): how to scope a PoV · the 5 qualification questions · reading a model
card · what to log · data-readiness checklist · questions to ask an AI vendor.
Candour (21–25): a project we declined · an estimate we got wrong · a client who should
not have hired us · a bug that shipped · what we changed after it.
Industry (26–30): DPDP in practice · Bangalore hiring reality · what GCCs actually buy ·
Indian cloud pricing · a public AI failure, analysed without naming.

## 13.6 Videos, whitepapers, webinars

**10 videos** (5–10 min, screen recording, no production budget): private AI in a client
VPC, end to end · NextDOOH sync demonstrated across 20 devices · Avionix walkthrough ·
building a RAG system in 30 minutes · what a PoV deliverable looks like (real one,
redacted) · document extraction on messy scans · the evaluation harness in use ·
architecture record walkthrough · GPU sizing calculator · a live cost comparison.

**5 whitepapers:** The Data Readiness Checklist · DPDP for AI Systems · Reference
Architectures for Private AI in Indian Enterprises · The True Cost of Enterprise AI
(3-year TCO) · AI Governance for Companies Without an AI Team.

**5 webinars** (45 min, ≤30 registrants, real Q&A): Why your AI pilot did not ship · DPDP
and AI, with a data-protection lawyer · Private vs hosted, live benchmark · Document AI
for Indian formats · Building an AI roadmap with no AI team.

**Founder brand:** the CEO's LinkedIn is the highest-value marketing asset the company
owns and costs nothing. Treat 8 hours/week of CEO time as the marketing budget's largest
line item.

---

# 14. SEO

## 14.1 The re-target

The technical foundation is good. It is aimed at a category KRYIL cannot win, does not
serve, and does not want leads from.

| Currently targeting | Problem | Replace with |
|---|---|---|
| UAV manufacturer Bangalore | Untrue; owned by funded hardware firms | AI development company Bangalore |
| drone manufacturer India | Untrue | enterprise AI implementation India |
| robotics company Bangalore | No offering | private LLM deployment India |
| agricultural drones Bangalore | No offering | data engineering services India |
| defense technology India | Actively harmful | DPDP compliance AI |
| digital marketing services | Off-strategy | AI proof of concept cost |

## 14.2 Keyword map

**Primary commercial (build a page for each)**

| Keyword | Intent | Page |
|---|---|---|
| AI development company Bangalore | Commercial | `/` |
| enterprise AI implementation India | Commercial | `/what-we-do/ai-systems` |
| private LLM deployment India | Commercial | `/what-we-do/ai-systems` |
| on premise AI infrastructure India | Commercial | `/what-we-do/ai-systems` |
| data engineering services India | Commercial | `/what-we-do/data-platform` |
| AI proof of concept cost India | **High intent** | `/what-we-do/proof-of-value` |
| enterprise RAG implementation | Commercial | `/what-we-do/ai-systems` |
| digital signage software India | Commercial | `/products/nextdooh` |

**High-value long-tail (blog)** — how much does enterprise AI cost in India · on-premise
vs cloud LLM cost comparison · DPDP Act AI compliance requirements · why AI pilots fail
enterprise · RAG vs fine-tuning enterprise · self-hosted LLM GPU requirements · document
extraction Indian invoices · pgvector vs Pinecone benchmark · AI vendor security
questionnaire · data readiness assessment AI.

**Local** — AI company Bangalore · machine learning company Bangalore · software company
Doorvaninagar · IT consultancy Bangalore North.
**Industry** — AI for manufacturing India · AI in diagnostics India · logistics AI India ·
NBFC document automation.
**International (FY29+)** — offshore AI development India · Indian AI development partner ·
nearshore data engineering.

## 14.3 Technical SEO actions

| Priority | Action | Why |
|---|---|---|
| **P0** | Remove all UAV/drone/defence keywords from title, meta, OG, Twitter, JSON-LD, llms.txt, sitemap | Untrue and off-strategy |
| **P0** | Delete `<meta name="keywords">` entirely | Inert with search engines; signals amateurism |
| **P0** | Fix `twitter:site`/`twitter:creator` → `@kryilinfotech` | Currently `@kaborobotics` |
| **P0** | Remove duplicated DOM text in About/WhoWeAre/Mission | Duplicate content; screen readers read twice |
| **P0** | 301 `/defense` → `/` | §10 |
| **P1** | Add prerendering (`vite-plugin-prerender` or migrate to a static build) | SPA content needs JS; several AI crawlers do not execute it — this directly undermines the GEO intent behind llms.txt |
| **P1** | Replace form `mailto:` with a real endpoint + conversion event | Cannot optimise what you cannot measure |
| **P1** | Remove obsolete meta (`revisit-after`, `distribution`, `rating`, `target`, `coverage`, `skype_toolbar`) | Dead weight |
| **P1** | Rewrite Organization/Service JSON-LD to match the new offering set | Currently describes services being retired |
| **P1** | Add `Person` schema for leadership; `SoftwareApplication` for both products | Entity signals |
| **P2** | Add FAQ schema on PoV and product pages | Rich results |
| **P2** | Add BreadcrumbList | Navigation signals |
| **P2** | Set up Search Console + Bing Webmaster properly; keep the existing IndexNow submission | Measurement |
| **P2** | Remove `dist/` from git; build in CI | Repo hygiene |
| **P3** | Image audit: WebP/AVIF, explicit dimensions, real alt text | CWV + accessibility |

## 14.4 Twelve-month SEO roadmap

| Quarter | Focus | Deliverables | Target |
|---|---|---|---|
| **Q1** | Damage control + foundation | All P0 + P1; new page architecture live; 6 pillar pages | Indexed on new terms; 0 drone impressions |
| **Q2** | Content velocity | 24 posts; 2 whitepapers; open-source repo live | 1,500 organic/mo; 10 ranking keywords top-20 |
| **Q3** | Authority | 24 posts; 3 case studies; guest posts; conference listings | 4,000 organic/mo; 5 keywords top-10; DR 20+ |
| **Q4** | Conversion + GEO | CRO on PoV page; AI-citation optimisation; schema completion | 8,000 organic/mo; 12 SQL/mo from organic |

**On GEO / AI search:** the llms.txt already present is a reasonable signal, but it does
nothing if the underlying pages need JavaScript to render. Prerendering is the actual GEO
work here. Then optimise for citability: self-contained paragraphs that answer a question
completely, tables with clear headers, explicit statistics with sources, and a dated
"last reviewed" line on technical pages.

---

# 15. Organization

## 15.1 Stage 1 — 0 to 25 people (FY27–28, where KRYIL is now)

Flat, no middle management, everyone client-facing or product-facing.

```
                        CEO / Founder
                   (sales, strategy, hiring,
                    partnerships, marketing)
                              │
      ┌───────────────────────┼───────────────────────┐
      │                       │                       │
 Delivery Lead          Product Lead            Ops / Finance
 (principal eng)        (NextDOOH)              (part-time / fractional)
      │                       │
  ┌───┴────┬─────────┐    ┌───┴────┐
  │        │         │    │        │
 Sr AI   Sr Data   Full-  Full-  Designer
 Eng     Eng       stack  stack  (0.5 FTE)
  │        │
 Jr/Intern pool (2–4)
```

| Function | Heads at 25 | Reports to | Primary KPI |
|---|---|---|---|
| CEO | 1 | Board | Revenue, cash, pipeline |
| Delivery | 10 | Delivery Lead | Utilisation 70%, on-time 85%, CSAT 8.5 |
| Product | 5 | Product Lead | ARR, churn, activation |
| Marketing | 2 | CEO | MQL, organic sessions |
| Sales | 1 (+CEO) | CEO | SQL, win rate |
| Design | 1 | Delivery Lead | — |
| Ops/Finance/HR | 2 | CEO | DSO, runway, offer-accept rate |
| Interns | 3 | Delivery Lead | Conversion to FTE |

**Rules for Stage 1.** No managers who do not also deliver. No role that exists only to
coordinate. The CEO sells; if the CEO stops selling the company stops. One weekly
all-hands, everything else asynchronous.

## 15.2 Stage 2 — 25 to 50 (FY29)

Introduce two pod leads and a real finance function. This is where most Indian services
firms break, because the founder is still in every deal.

```
                            CEO
                             │
        ┌──────────┬─────────┼─────────┬──────────┐
        │          │         │         │          │
      CTO       Head of   Head of    Head of    Finance
   (delivery   Products   Growth     People    Controller
    + eng std)     │      (mktg+sales)  │
        │          │         │
   ┌────┴────┐  ┌──┴──┐   ┌──┴───┐
  Pod A    Pod B  NextDOOH  Marketing (2)
  (5-6)    (5-6)  team (6)  Sales (2)
```

**The critical hire at this stage is the CTO/VP Engineering** — the person who owns
delivery quality so the CEO can leave the delivery room. Get this wrong and the company
caps at 30 people.

## 15.3 Stage 3 — 50 to 100 (FY30–31)

Add: a second delivery vertical (industry-aligned pods), a dedicated Customer Success
function, a product P&L owner, and a Head of Talent. Introduce a Security & Compliance
Officer (ISO 27001 by then requires an owner). Delivery organises into 4–6 pods of 6–8,
each with a lead, an architect and a client-facing owner.

## 15.4 Stage 4 — 100 to 250

Business units with their own P&Ls: Services, Products, and (optionally) an International
unit. A real leadership team of 6–8. Formal career ladders (IC track and management track,
equal pay bands to L5). A PMO exists but stays small. Board with at least one external
director.

## 15.5 Stage 5 — 250+

Multi-city or multi-country. Regional MDs. Group functions (legal, IR, corp dev). This is
five-plus years out and planning it now is a waste of time. Note only the trap: at this
size Indian services firms drift into staffing and the margin collapses. The defence
against it is the recurring-revenue mix targeted in §20.

---

# 16. Hiring

## 16.1 Sequencing principle

**Hire behind revenue, not ahead of it** — with exactly two exceptions: the first senior
engineer (without whom nothing can be delivered) and the first marketer (without whom
nothing can be sold). Everything else follows signed contracts.

## 16.2 Roadmap

| # | Role | When | Why now | Type | India salary p.a. [ASSUMED] |
|---|---|---|---|---|---|
| 1 | **Principal AI Engineer / Delivery Lead** | M0–2 | Cannot deliver the positioning without one; also the technical face in every sales call | FT | ₹28–45 L |
| 2 | **Senior Data Engineer** | M2–4 | Half of every AI engagement is data work | FT | ₹18–30 L |
| 3 | **Content / Technical Marketer** | M1–3 | The content engine is the pipeline; CEO cannot write 24 posts | FT | ₹8–15 L |
| 4 | **Full-stack Engineer (NextDOOH)** | M3–5 | Unblocks the V1 that creates recurring revenue | FT | ₹12–20 L |
| 5 | **Senior Full-stack Engineer** | M5–8 | Second delivery capacity | FT | ₹18–28 L |
| 6 | **Ops / Finance Manager** | M6–9 | Invoicing, collections, compliance, payroll — currently CEO time | FT or fractional | ₹8–14 L |
| 7 | **AI Engineer (mid)** | M8–11 | Scale delivery | FT | ₹12–20 L |
| 8 | **Product Designer** | M9–12 | Product and site quality | FT or contract | ₹10–18 L |
| 9 | **Sales / BD (first non-founder seller)** | M12–15 | Only after the founder has closed 10+ deals and the playbook is written | FT | ₹10–18 L + comm |
| 10 | **DevOps / Platform Engineer** | M12–16 | Run contracts need someone who owns uptime | FT | ₹15–25 L |
| 11 | **Customer Success Manager** | M15–18 | Protect and expand the base | FT | ₹8–15 L |
| 12 | **CTO / VP Engineering** | M18–24 | The hire that lets the CEO leave delivery | FT | ₹40–70 L + equity |

**Outsource, do not hire:** company secretary and statutory compliance (CS firm),
accounting and GST (CA firm), legal (retainer), payroll (platform), brand/visual design
(project-based), video editing (freelance).

**Interns:** 3–5 at any time from Bangalore engineering colleges. Structured 6-month
programme, real project ownership, ₹15–30K/month stipend, 30–40% conversion to full-time.
This is the highest-ROI talent channel available to a company at this stage in Bangalore.

## 16.3 Role specification — Hire #1, in full

**Principal AI Engineer / Delivery Lead**

*Why:* KRYIL's entire positioning is "senior engineers deliver your work". Without one
senior engineer of genuine standing, the positioning is another unsupported claim. This
person is also present in every discovery call, which is what makes those calls convert.

*Responsibilities:* own technical delivery across all client engagements; run the
technical workshop in the sales process; define the reference architectures and the
evaluation harness; mentor two to three engineers; own the §8.4 framework artefacts;
co-author KRYIL Labs benchmarks.

*Must have:* 7+ years engineering with 3+ shipping ML/AI to production (not notebooks);
production RAG or document-AI systems; strong Python and cloud infrastructure; has
deployed models in a customer's own environment; can hold a technical conversation with a
CIO without either condescending or hiding.

*Nice:* on-prem GPU experience; consulting background; published or open-source work.

*Interview:* (1) 45-min technical conversation about a system they built, probing the
trade-offs; (2) architecture exercise — design a RAG system for a 40,000-document
manufacturing corpus with an on-prem constraint, whiteboard, 90 min; (3) a paid one-day
scoping exercise on a real anonymised problem (₹15,000 — pay for it, always); (4) founder
conversation on values and ambiguity tolerance. **No LeetCode.** It selects against
exactly the profile needed.

*KPIs:* on-time delivery 85%; client CSAT ≥8.5; 70% PoV→programme conversion; two Labs
artefacts per quarter; zero critical production incidents unreviewed.

*Package:* ₹28–45 L + meaningful equity (0.5–2%). **Equity is not optional for this
hire** — KRYIL cannot outbid a funded startup on cash and should not try.

## 16.4 Hiring principles

1. **Hire for judgement over knowledge.** Frameworks change; judgement compounds.
2. **Every technical hire does a paid work sample.** Never unpaid. Never a take-home over
   4 hours.
3. **Two-week close.** Small companies win on speed. A three-week process loses the
   candidate to a faster offer.
4. **Reference checks are mandatory and done by the CEO**, and the question is always the
   same: *"What would you need to be true to hire them again?"*
5. **No hire without a named revenue justification**, except hires #1 and #3.
6. **Publish salary bands in job posts.** Rare in India; it substantially increases
   applications from senior candidates and costs nothing.

---

# 17. Engineering

## 17.1 The engineering operating system

The whole system is one sentence: **every engagement leaves behind an artefact that makes
the next one cheaper.** Everything below serves that.

| Area | Standard |
|---|---|
| **Git** | Trunk-based. Short-lived branches (<3 days). Squash merge. Conventional commits. Protected `main`. |
| **Code review** | Every change reviewed. <4-hour SLA. Reviewer checks correctness, security, and *whether it should exist at all*. |
| **CI/CD** | Test, lint, type-check, dependency scan, secret scan, build — on every push. Build fails on critical CVE. Deploy on merge to `main` behind a flag. |
| **Testing** | Test the risky things: money, auth, data transforms, parsing. Do not chase coverage percentages. Every bug fix gets a regression test. |
| **Security** | §9.2, non-negotiable, no line item. |
| **Documentation** | One **Architecture Record** per system — one page: context, decision, alternatives rejected, consequences. Updated when the decision changes. This artefact is also a client deliverable, which is why it gets written. |
| **Architecture review** | Any new system or any decision costing >₹2L or >2 weeks gets a 30-minute review with two engineers. Written outcome. |
| **Observability** | Structured logs, traces on request paths, cost tracking on every LLM call, alerting on SLO breach. Cost tracking is not optional — it is what stops a client killing the project in month four. |
| **Incidents** | Severity levels, one owner per incident, blameless review within 48 hours, published internally. Client-affecting incidents summarised to the client within 24 hours. |
| **Technical debt** | 15% of every sprint. Non-negotiable, non-deferrable. Debt registered in a ledger with the ceiling it imposes. |
| **AI-assisted development** | Encouraged and governed: no client code or data in third-party tools without a signed DPA; generated code reviewed at the same standard as written code; never accept generated code you cannot explain in review. |
| **Knowledge** | Architecture records + a runbook per production system + a decision log. Weekly 30-minute internal tech talk, recorded. |

## 17.2 Delivery lifecycle

```
FRAME → GROUND → PROVE → HARDEN → OPERATE      (client-facing, §8.4)
   │        │        │        │         │
   ▼        ▼        ▼        ▼         ▼
Decision  Data     PoV     Prod       Ops
Brief     Report   Report  Runbook    Review
```

**HARDEN, in detail** — six-to-twelve weeks, with weekly demos and no exceptions:
week 1 architecture record + environment; weeks 2–7 build in two-week increments with a
demo at the end of each; week 8 hardening (load, security, failure modes); week 9 UAT with
real users; week 10 production cutover with a written rollback plan; week 11 handover —
runbook, training, monitoring; week 12 review and run-contract start.

**Definition of done** for any engagement: it is in production, it is monitored, there is
a runbook, someone at the client can operate it, the architecture record is current, and
there is a named owner for the run contract. Anything short of this is not done, whatever
the invoice says.

---

# 18. Technology

## 18.1 Recommended stack

Chosen for hiring availability in Bangalore, enterprise acceptability, and operating cost.
Fashion is explicitly not a criterion.

| Layer | Choice | Why | Rejected |
|---|---|---|---|
| **Frontend** | React 19 + TypeScript + Vite + Tailwind | Already in use; largest hiring pool in India; enterprise-familiar | Svelte/Solid (hiring), Angular (velocity) |
| **Marketing site** | Same, **plus prerendering/SSG** | Fixes the crawler problem in §14.3 without a rewrite | Next.js — a full migration is not justified by the benefit |
| **Backend** | Python (FastAPI) for AI/data; Node (TypeScript) for product APIs | Python is non-negotiable for AI; Node keeps one language across the NextDOOH stack | Go (smaller hiring pool), Java (velocity) |
| **Mobile** | React Native, only if genuinely required | Reuses the React skill base | Native (cost), Flutter (Dart hiring) |
| **Cloud** | AWS primary, Azure where the client mandates it | AWS depth; Azure because Indian enterprises on Microsoft licensing will insist | GCP (thinner enterprise pull in this segment) |
| **On-prem / private** | Docker + K3s or single-node Docker Compose | Most client on-prem deployments are one or two machines. **Do not deploy full Kubernetes into a client site you cannot operate.** | Full K8s at small scale |
| **Relational DB** | PostgreSQL | Default for everything | MySQL (no reason), Oracle (cost) |
| **Vector store** | **pgvector inside Postgres** | One system to run and back up. Adequate to ~10M chunks. | Pinecone (cost, data leaves), Weaviate/Milvus (operational burden not yet justified) |
| **Analytics DB** | DuckDB for local; ClickHouse when volume demands | Start small, migrate on evidence | Snowflake/Databricks at this stage |
| **Data pipelines** | Dagster or Airflow + dbt | dbt is the industry default and clients recognise it | Custom orchestration |
| **AI serving** | vLLM for open-weight; provider SDKs for hosted | vLLM is the practical throughput choice for private serving | Custom serving |
| **Models** | Open-weight for private; frontier hosted where quality justifies; per §8.5 | Policy, not preference | Single-vendor lock-in |
| **Queue** | Redis + a simple worker; RabbitMQ if ordering matters | Redis is already there | Kafka — genuinely not needed below very high volume |
| **CI/CD** | GitHub Actions | Already on GitHub | Jenkins |
| **IaC** | Terraform | Standard; portable across AWS/Azure | CloudFormation, Pulumi |
| **Monitoring** | Grafana + Prometheus + Loki self-hosted; Sentry for errors | Cost control matters at this size | Datadog (cost) |
| **LLM observability** | Langfuse (self-hosted) | Self-hostable, so it works in client environments | Hosted-only tools |
| **Secrets** | AWS Secrets Manager / Azure Key Vault; SOPS for on-prem | Standard | Env files |
| **Edge / vision** | NVIDIA Jetson Orin Nano where GPU is needed; Raspberry Pi 5 + Coral where it is not | Cost-appropriate; available in India | Custom silicon |
| **CRM** | HubSpot free → paid | Free tier is genuinely sufficient at this stage | Salesforce (absurd at this size) |
| **Analytics** | Plausible or GA4 + PostHog | Plausible is privacy-clean, which matches the positioning | — |

## 18.2 Standing technology rules

1. **Boring by default.** New technology must displace something or solve a problem the
   current stack demonstrably cannot.
2. **One database until Postgres actually fails.** Most "we need a vector database"
   conversations are premature.
3. **Everything must be deployable into a client environment.** This eliminates
   hosted-only tools from the delivery stack — it is a positioning constraint, not a
   preference.
4. **Cost visible in the architecture record.** Every system states what it costs to run
   at expected volume before it is built.
5. **No technology on the website that is not in production.** The current site's
   technology claims should be auditable.

---

# 19. Financial Model

## 19.1 Read this first

**KRYIL's actual revenue, costs, cash and pipeline were not provided.** What follows is a
model with every assumption labelled, built so that replacing the assumptions with real
numbers produces a real plan. Do not present these figures to a bank, an investor or a
client as forecasts. They are a template.

FY convention: Indian financial year. **FY27 = Apr 2026–Mar 2027 (current).**

## 19.2 Core assumptions

| # | Assumption | Value | Confidence |
|---|---|---|---|
| A1 | Average AI programme value | ₹22,00,000 | Medium |
| A2 | Average PoV value | ₹2,75,000 | Medium |
| A3 | PoV → programme conversion | 70% | Low — **the key sensitivity** |
| A4 | Run-contract attach rate | 60% of programmes | Low |
| A5 | Average run contract | ₹1,20,000/month | Medium |
| A6 | Fully-loaded cost per engineer | ₹1,85,000/month (salary × 1.35) | Medium |
| A7 | Billable utilisation | 68% | Medium |
| A8 | NextDOOH ARPA | ₹3,600/screen/year | Low |
| A9 | NextDOOH net churn | 3%/month Yr1 → 1.5%/month Yr3 | Low |
| A10 | Sales & marketing | 14% of revenue | Medium |
| A11 | G&A (rent, legal, tools, CA) | ₹4,50,000/month at 15 people | Medium |
| A12 | Founder salary drawn | ₹1,50,000/month | Unknown |
| A13 | DSO (collection days) | 55 days | Low — **the cash killer** |

**A13 deserves emphasis.** Indian enterprise clients routinely pay at 60–90 days. A
services firm can be profitable on paper and insolvent in practice. Every contract must
carry 40% advance, milestone billing, and a late-payment clause. This is more important
than any pricing decision in §12.

## 19.3 Three scenarios

**Revenue (₹ Crore)**

| Scenario | FY27 | FY28 | FY29 | FY30 | FY31 |
|---|---|---|---|---|---|
| Conservative | 0.6 | 1.5 | 3.2 | 6.0 | 10.5 |
| **Base** | **0.9** | **2.4** | **6.1** | **12.5** | **22.0** |
| Aggressive | 1.3 | 3.8 | 10.0 | 22.0 | 40.0 |

**Base case, detailed (₹ Lakh)**

| Line | FY27 | FY28 | FY29 | FY30 | FY31 |
|---|---|---|---|---|---|
| Services — projects | 78 | 190 | 420 | 800 | 1,270 |
| Services — run contracts | 8 | 32 | 105 | 250 | 470 |
| NextDOOH ARR | 4 | 18 | 78 | 180 | 420 |
| Licensing (RAG appliance) | 0 | 0 | 7 | 20 | 40 |
| **Total revenue** | **90** | **240** | **610** | **1,250** | **2,200** |
| Delivery cost (COGS) | 54 | 125 | 275 | 525 | 836 |
| **Gross profit** | **36** | **115** | **335** | **725** | **1,364** |
| *Gross margin* | *40%* | *48%* | *55%* | *58%* | *62%* |
| Sales & marketing | 13 | 34 | 85 | 175 | 308 |
| R&D / product | 8 | 30 | 85 | 190 | 350 |
| G&A | 22 | 42 | 90 | 175 | 286 |
| **Total opex** | **43** | **106** | **260** | **540** | **944** |
| **EBITDA** | **(7)** | **9** | **75** | **185** | **420** |
| *EBITDA margin* | *(8%)* | *4%* | *12%* | *15%* | *19%* |
| Headcount (avg) | 7 | 14 | 30 | 55 | 85 |
| Revenue / head (₹L) | 12.9 | 17.1 | 20.3 | 22.7 | 25.9 |
| Recurring % of revenue | 13% | 21% | 30% | 37% | 41% |
| Active clients | 5 | 12 | 26 | 45 | 70 |

**Formulas used**

```
Services project revenue = PoVs_sold × A3 × A1
Run revenue              = cumulative_programmes × A4 × A5 × active_months
NextDOOH ARR             = screens × A8, screens compounding at growth − churn(A9)
Delivery COGS            = billable_heads × A6 × 12
Gross margin             = (Revenue − COGS) / Revenue
Revenue per head         = Revenue / average_headcount   ← the health metric
Cash gap                 = Revenue × (A13 / 365)          ← working capital tied up
Runway (months)          = cash_balance / (monthly_opex − monthly_gross_profit)
```

## 19.4 Cash requirement

| | FY27 | FY28 | FY29 |
|---|---|---|---|
| EBITDA | (₹7 L) | ₹9 L | ₹75 L |
| Working capital absorbed (A13) | ₹14 L | ₹36 L | ₹92 L |
| Capex (equipment, GPU) | ₹6 L | ₹12 L | ₹25 L |
| **Net cash requirement** | **₹27 L** | **₹39 L** | **₹42 L** |

**Cumulative funding gap to FY29: roughly ₹1.1 Crore.** Sources, in order of preference:

1. **Customer advances (40% upfront).** Free, and it is the correct answer. Reduces the
   need by ~40% on its own.
2. **Retained earnings.** Requires the founder to draw modestly through FY27–28.
3. **Working-capital credit line / invoice discounting.** ₹25–50 L against enterprise
   receivables. Available in India but usually needs a year of GST-filed turnover.
4. **Founder capital / increase in paid-up capital.** ₹10,000 paid-up capital fails
   enterprise financial screens. **Increasing paid-up capital to ₹10–25 lakh is a
   credibility action as much as a funding one** and is the single cheapest fix to the
   "vendor financial stability" objection.
5. **Angel round of ₹1–2 Cr.** Only if product traction justifies it. A services business
   should not need it.
6. **Government schemes** — Karnataka Startup Policy, Startup India, SIDBI. Worth
   exploring; slow, and should not be planned around.

**Recommendation: fund with advances and a credit line, raise paid-up capital to ₹10 L+
as a credibility measure, and do not take equity money until a product has revenue that
equity can accelerate.**

## 19.5 Sensitivity — what actually moves the outcome

| Variable | −20% | Base | +20% | FY29 revenue swing |
|---|---|---|---|---|
| PoV → programme conversion (A3) | 56% | 70% | 84% | **±₹1.2 Cr** |
| Average programme value (A1) | ₹17.6 L | ₹22 L | ₹26.4 L | ±₹0.85 Cr |
| Utilisation (A7) | 54% | 68% | 82% | ±₹0.7 Cr (margin) |
| NextDOOH churn (A9) | 1.2%/mo | 1.5%/mo | 1.8%/mo | ±₹0.15 Cr |
| DSO (A13) | 44 days | 55 | 66 days | ±₹18 L cash |

**Conclusion: PoV→programme conversion is the highest-leverage number in the business.**
Instrument it from the first PoV. If it drops below 50% for two consecutive quarters, the
problem is PoV scoping, and everything else should stop until it is fixed.

---

# 20. Business Model

## 20.1 The choices, decided

| Question | Decision | Reasoning |
|---|---|---|
| Services or products? | **Services fund products.** Services majority to FY29, products majority-of-margin by FY31 | No external capital; services are the only self-funding route |
| Recurring or one-time? | **Design recurring into every one-time sale.** Run contract quoted with every build | Recurring is what makes the company valuable, not just profitable |
| Enterprise or SMB? | **Mid-market enterprise for services; SMB/mid-market for NextDOOH** | Two motions, deliberately separate |
| India or international? | **India to FY29**, then one export market (§21) | Cannot build a reference base in a market you cannot visit |
| Direct or partner? | **Direct for services; partner-heavy for NextDOOH** | Signage sells through AV integrators; AI services do not sell through anyone |
| Custom or standardised? | **Standardised delivery, custom outcomes.** Same framework, same artefacts, different problem | This is the entire margin strategy |

## 20.2 Target revenue mix

| Stream | Today | Year 3 (FY29) | Year 5 (FY31) |
|---|---|---|---|
| Custom services (project) | ~100% | 55% | 40% |
| Productised services (PoV, assessments) | 0% | 14% | 12% |
| Managed / run contracts | 0% | 17% | 21% |
| SaaS (NextDOOH) | ~0% | 13% | 19% |
| Licensing (RAG appliance) | 0% | 1% | 8% |
| **Recurring total** | **~0%** | **~30%** | **~41%** |

**The FY29 gate:** if recurring revenue is not ≥25% by end of FY29, KRYIL has become a
staffing company and the strategy has failed regardless of what the top line says. That
is the number to put on the wall.

---

# 21. International Expansion

## 21.1 Should KRYIL expand internationally? Not yet.

**Recommendation: no international expansion before FY29.** The reasoning is
uncomfortable but simple — KRYIL cannot currently win a competitive deal in Bangalore,
where it has a physical presence, a cost advantage and a common timezone. Attempting to
win one in London or Dallas, without references, without a local entity, and against
firms with both, will consume the founder's time at exactly the moment the domestic base
needs building. International expansion is a solution to the problem of running out of
domestic demand. KRYIL does not have that problem.

The exception: **inbound** export work. If a US or UK client approaches (via content,
Avionix, or GitHub), take it, price it at 2.5–3.5x domestic rates, and treat it as a
bonus, not a strategy.

## 21.2 Market ranking, for when the time comes

| Market | Demand | Competition | Ease of entry | Pricing | Regulation | Strategic fit | **Score /30** |
|---|---|---|---|---|---|---|---|
| **UAE / Saudi** | 5 | 3 | 4 | 5 | 4 | 5 | **26** |
| **UK** | 4 | 2 | 4 | 4 | 3 | 4 | **21** |
| **Singapore / SEA** | 4 | 3 | 4 | 3 | 4 | 4 | **22** |
| **USA** | 5 | 1 | 2 | 5 | 3 | 3 | **19** |
| **Australia** | 3 | 3 | 4 | 4 | 4 | 3 | **21** |
| **EU (DE/NL)** | 4 | 2 | 2 | 4 | 2 | 2 | **16** |

## 21.3 First market: the UAE and Saudi Arabia

**Why, specifically:**
- Timezone overlap of 2.5–3 hours with India makes real-time delivery possible; the US
  does not.
- Very large Indian professional diaspora in senior technology positions — warm
  introduction paths that do not exist elsewhere.
- Saudi and UAE data-residency regulation is *tightening*, which makes KRYIL's
  private-deployment positioning more valuable there than almost anywhere else. This is
  the single strongest argument.
- Enterprise budgets are large and buyers are comparatively open to new vendors.
- Government digitisation programmes are actively funding exactly this category of work.
- Indian vendors are an established, accepted category — no need to overcome a "why
  India?" objection.

**Why not the USA first,** despite the pricing: 10.5–13.5 hour timezone gap, the most
competitive AI services market on earth, a buyer expectation of local presence for
enterprise deals, and a reference bar KRYIL cannot clear. The pricing is the best in the
world and it is unreachable without the references.

**Entry sequence (FY29):** attend two GITEX/LEAP cycles as a visitor before spending on a
stand · build 20 diaspora relationships on LinkedIn · land one project remotely ·
establish a Dubai free-zone entity only after two paying clients · consider a local
partner for government work, where local participation is often required.

---

# 22. Partnerships

**Standing rule: never publish a partnership that does not exist.** No logo goes on the
site without a signed agreement. "AWS Partner" means enrolled in the AWS Partner Network,
not "we use AWS." This rule exists because the current website's credibility problems all
share the same root.

## 22.1 Technology partnerships (start here — cheapest, fastest)

| Partner | Programme | Value | Effort | When |
|---|---|---|---|---|
| **AWS Partner Network** | Select/Advanced tier | Co-sell, credits, marketplace listing, a badge that survives procurement | Low | **M1–3** |
| **Microsoft Partner Network** | Solutions Partner (Data & AI) | Essential for Microsoft-shop clients; co-sell motion is real | Medium | M3–6 |
| **NVIDIA Inception** | Free | GPU credits, technical resources, credible badge for private-AI positioning | Low | **M1–2** |
| **HubSpot / Plausible / Langfuse** | Tech partner listings | Directory backlinks, minor | Low | M6+ |

**AWS and NVIDIA Inception in the first quarter.** Both are essentially free, both produce
a verifiable third-party badge, and KRYIL currently has zero third-party validation of any
kind. This is the fastest credibility available.

## 22.2 Channel partnerships

| Category | Who | Model | For |
|---|---|---|---|
| AV integrators & display resellers | Regional AV firms across India/SEA | 30–40% margin on NextDOOH | NextDOOH — **the primary scaling route** |
| ERP implementation partners | SAP/Oracle/Microsoft Dynamics partners in Bangalore | Referral fee 8–12% | AI services — they sit next to the data and the budget |
| CA and consulting firms | Mid-tier Indian firms | Referral | DPDP and data-governance work |
| Cloud resellers | Indian AWS/Azure resellers | Joint delivery | Infrastructure-attached AI |

## 22.3 Research partnerships

IISc Bangalore and IIT-Bombay/IIT-Madras departments (AI systems, aerospace for Avionix);
IIIT-Bangalore for applied ML. **Value is talent pipeline and credibility, not revenue.**
Realistic form: sponsor a student project, co-author one paper, guest lecture, offer
Avionix free to a lab. Cost: near zero. Do not attempt a formal research centre.

## 22.4 Ecosystem

Karnataka Startup Cell / Startup India registration (grants, procurement preferences,
tax benefits — genuinely worth the paperwork); NASSCOM membership (from FY29, when the
fee is justified); TiE Bangalore; a Bangalore CIO network.

## 22.5 Explicitly not pursuing

Defence primes and DRDO (§10) · large system integrators as a subcontractor (margin
destruction and no brand) · white-label delivery for foreign agencies (builds their brand
with your engineers) · any partnership requiring an upfront fee.

---

# 23. Credibility

The central problem, restated: **KRYIL's engineering is better than its evidence.**
Everything here converts capability into proof.

## 23.1 Ranked by impact per rupee

| # | Action | Impact | Cost | Time | Owner |
|---|---|---|---|---|---|
| **1** | **Remove every false claim from the site** | **Critical** | ₹0 | 1 week | CEO |
| **2** | Publish NextDOOH + Avionix as engineering case studies | Very high | ₹0 | 2 weeks | CEO + Eng |
| **3** | Team page with real photos, names, bios | Very high | ₹15 K | 1 week | CEO |
| **4** | AWS Partner + NVIDIA Inception badges | High | ₹0 | 4 weeks | CEO |
| **5** | Trust Center with honest certification roadmap | Very high | ₹0 | 3 weeks | CEO |
| **6** | First named client case study | Very high | ₹0 (30% discount) | 3 months | CEO |
| **7** | KRYIL Labs benchmark #1, reproducible | High | ₹40 K compute | 6 weeks | Eng lead |
| **8** | Open-source the RAG evaluation harness | High | ₹0 | 8 weeks | Eng lead |
| **9** | Raise paid-up capital to ₹10 L+ | High | ₹10 L (retained) | 1 month | CEO + CA |
| **10** | Pre-completed security questionnaire, downloadable | High | ₹0 | 2 weeks | CEO |
| **11** | Two client video testimonials | High | ₹25 K | 4 months | Marketing |
| **12** | Conference talk at an Indian tech event | Medium-high | ₹20 K | 6 months | CEO/Eng |
| **13** | Professional indemnity insurance (₹1–2 Cr cover) | Medium-high | ₹60 K–1.2 L/yr | 1 month | CEO |
| **14** | ISO 27001 certification | Very high | ₹4–8 L | 9–12 months | Ops |
| **15** | Individual cloud/AI certifications (3 engineers) | Medium | ₹60 K | 4 months | Eng |
| **16** | Published customer reference programme | Medium | ₹0 | 6 months | CS |
| **17** | Technical paper / arXiv preprint | Medium | ₹0 | 9 months | Eng lead |
| **18** | Industry award submissions | Low-medium | ₹50 K | 12 months | Marketing |
| **19** | SOC 2 Type II | High (for export) | ₹12–20 L | 18 months | Ops |
| **20** | Analyst listings (Clutch, GoodFirms) with real reviews | Medium | ₹0–1 L | 3 months | Marketing |

**Items 1–5 cost roughly ₹15,000 in total and can be completed in a month.** They address
the single largest gap in the business. There is no reason to sequence them behind
anything.

## 23.2 On the certification roadmap

Publish it. *"ISO 27001 — implementation in progress, certification target Q3 FY28"* is a
credible statement that helps in procurement. *"ISO 27001 certified"* when you are not is
fraud and ends the company. The distinction is worth stating explicitly because the
temptation, on a site that already claims Fortune 500 clients, is obvious.

---

# 24. Customer Success

## 24.1 Why this matters more than sales at this stage

With 5–12 clients, one unhappy client is 10–20% of the reference base. The cost of losing
one is not the revenue — it is the case study, the referral, and the reference call that
would have closed the next three deals. **At this stage, customer success is the sales
strategy.**

## 24.2 The system

| Phase | Timing | What happens | Owner |
|---|---|---|---|
| **Kickoff** | Day 0 | Named team introduced; comms channel agreed; escalation path; success metrics restated in writing | Delivery Lead |
| **Weekly demo** | Every Fri | Working software, 20 min. Never a status slide | Engineer |
| **Written weekly note** | Every Fri | Done / next / blocked / decisions needed. Five lines | Delivery Lead |
| **Mid-point review** | 50% | Are we still solving the right problem? Explicit scope-change opportunity | Delivery Lead + CEO |
| **Handover** | Go-live | Runbook, training session, monitoring access, 30-day hypercare | Delivery Lead |
| **30-day check** | +30 days | Is it being used? Usage data, not opinions | CS / Delivery |
| **QBR** | Quarterly | Value delivered vs baseline; roadmap; expansion conversation | CEO + Delivery |
| **NPS** | Post-project + biannual | One question + one free text | Ops |
| **Reference request** | After first measured win | Case study, logo use, or a reference call — ask for one, specifically | CEO |

## 24.3 SLAs (only commit to what is staffed)

| Tier | Hours | P1 response | P1 resolution target | Uptime | Price |
|---|---|---|---|---|---|
| Standard | 10×5 IST | 4 hrs | Next business day | 99.0% | Included in run contract |
| Priority | 12×6 IST | 1 hr | 8 hrs | 99.5% | +40% |
| Critical | 24×7 | 30 min | 4 hrs | 99.9% | +120%, **only when a rota exists** |

**Do not sell 24×7 until there is a staffed rota.** The current site's "24/7 expert
support" claim is exactly this mistake, made in advance.

## 24.4 One project → a long-term account

```
PoV (₹2.75 L)
   └─▶ Programme (₹22 L)              ← 70% conversion target
          └─▶ Run contract (₹14.4 L/yr)  ← 60% attach target
                 └─▶ Second workload, same client (₹18 L)  ← 45% within 12 months
                        └─▶ Multi-year platform relationship
                               └─▶ Reference + referral to a peer  ← the compounding asset
```

**Expansion mechanics:** the second workload is found during the *first* engagement, not
sold afterwards. Every engineer is instructed to note adjacent problems they observe and
log them. At the QBR, the CEO presents the two best as options. This costs nothing and is
the difference between a ₹22 L client and a ₹1 Cr account.

**Land-and-expand target:** net revenue retention ≥120% by FY29.

---

# 25. Culture

## 25.1 Core values — operational, measurable, few

Four. Each with a behaviour that can be observed and a failure mode that can be called
out. Values that cannot be used to decline a deal or decline a hire are decoration.

**1. Show the work.**
*Behaviour:* every claim carries a number or a name. Architecture records are written
before code. Benchmarks are published with the method. We tell clients what did not work.
*Failure mode it prevents:* the exact behaviour currently on the website.
*Measured by:* architecture records current on 100% of production systems; ≥2 Labs
artefacts per quarter; failure section present in 100% of PoV reports.

**2. Say the uncomfortable thing early.**
*Behaviour:* we tell a client on the first call if we are the wrong fit. We flag a slipping
estimate the day we know, not the week it is due. We decline work we cannot do well.
*Measured by:* zero surprise slips (a slip communicated within 48 hours of being knowable
does not count); ≥15% of qualified opportunities declined.

**3. Leave it cheaper for the next person.**
*Behaviour:* every engagement produces a reusable artefact. Debt is registered with its
ceiling, not hidden. Documentation is part of done.
*Measured by:* second delivery of a repeated offering costs ≤60% of the first; 15% of
sprint capacity on debt, tracked.

**4. Own the outcome, not the ticket.**
*Behaviour:* "it works on my machine" is not a status. The engineer who built it is on the
incident call. Nobody says "that's not my area" inside a 30-person company.
*Measured by:* time-to-first-response on client-affecting incidents; on-time delivery 85%.

**Explicitly rejected values:** "passion", "excellence", "integrity", "customer-centric",
"innovation". They cannot be violated, so they cannot guide a decision.

## 25.2 Leadership principles

1. Decide with 70% of the information. Waiting for 90% costs more than being wrong.
2. Disagree in the room, commit outside it. Silence in the meeting is consent.
3. The person closest to the problem decides, unless it is irreversible or expensive.
4. Bad news travels up in hours. A leader who is surprised by a two-week-old problem has
   a culture problem, not an information problem.
5. Praise publicly, correct privately, never in writing when a conversation will do.
6. If you would not put it in writing to the client, do not do it.

## 25.3 Engineering principles

Boring by default · make it work, then make it right, then make it fast — and usually stop
after "right" · delete more than you add · the simplest thing that could work, then
measure · no clever code without a comment explaining the cleverness · every deliberate
shortcut is registered with its ceiling · you build it, you run it · code review checks
whether it should exist at all, not just whether it works.

## 25.4 People operations

**Performance:** quarterly written self-review + manager review against role KPIs. No
stack ranking, no forced curve at this size — it is corrosive in a 20-person company.
Compensation reviewed annually in April; out-of-cycle raises allowed and encouraged when
warranted.

**Learning:** ₹40,000/person/year budget, no approval needed under ₹10,000. Four hours a
week of protected learning time. One internal tech talk per week, recorded. One conference
per person per year.

**Innovation:** one "Labs Week" per quarter — the whole team, no client work, ship
something. Output goes to KRYIL Labs. **NextDOOH and Avionix are proof this model works;
formalise it.**

**Recognition:** monthly "showed the work" callout tied to value #1 with a real bonus
(₹10,000). Peer-nominated, not manager-chosen.

**Communication:** weekly 30-minute all-hands (metrics, wins, losses, what changed) ·
monthly written CEO update including revenue and runway — **radical financial transparency
is a genuine retention advantage against funded startups that cannot offer it** · async by
default, Slack/Teams not email internally · a decision log anyone can read.

**Remote policy:** hybrid, 2–3 days in office. A team this small learns by proximity, and
the Bangalore commute makes 5 days cruel. Say the policy out loud and stop relitigating it.

---

# 26. CEO Strategy

## 26.1 What only the CEO can do

Ranked by irreplaceability. The rule is simple: if someone else could do it, they should.

| Rank | Activity | Time | Why only the CEO |
|---|---|---|---|
| 1 | **Selling** | 35% | No first seller can be hired until the founder has closed 10+ deals and written the playbook |
| 2 | **Hiring hires #1–#5** | 20% | The first senior engineer sets the quality ceiling for everyone after |
| 3 | **Strategy & capital allocation** | 10% | Genuinely non-delegable |
| 4 | **Founder brand / content** | 15% | Nobody can write the founder's LinkedIn. This *is* the marketing budget |
| 5 | **Key client relationships** | 10% | The top three accounts need a founder relationship |
| 6 | **Partnerships** | 5% | Peer-to-peer only |
| 7 | **Finance oversight** | 5% | Review, not execution — outsource the bookkeeping |

## 26.2 What the CEO must stop doing

Writing production code (except in a genuine emergency) · project management · running
delivery standups · designing the website · bookkeeping and invoicing · answering
first-line support · being the sole approver of decisions under ₹50,000.

**The specific trap for a technical founder:** delivery work feels productive and is
immediately rewarding, while selling feels uncomfortable and pays off in 90 days. The
company dies of comfortable productivity. If the CEO codes more than four hours a week
after month three, the company is not going to grow.

## 26.3 Weekly operating rhythm

| Day | Morning | Afternoon |
|---|---|---|
| **Mon** | Metrics review (30 min) · all-hands (30 min) · pipeline review (60 min) | Outbound block — 20 personalised approaches (2 hrs) · sales calls |
| **Tue** | **Deep work: content.** Write the week's technical post (3 hrs, protected, no meetings) | Discovery calls · technical workshops |
| **Wed** | Hiring — interviews, sourcing, references (3 hrs) | Client calls · QBRs |
| **Thu** | Sales calls · proposals | Partnerships · ecosystem · external meetings |
| **Fri** | Delivery review with the team (60 min) · finance and cash review (60 min) | **Strategy block (2 hrs, protected)** · weekly written update to the team |

**Two non-negotiable blocks:** Tuesday morning content and Friday afternoon strategy. Both
will be the first things sacrificed to a client emergency, and both are the reason the
company will exist in three years. Defend them.

**Monthly:** board/advisor update (even with no board — write it anyway, it forces
clarity) · full financial review with the CA · one customer visit with no agenda · one
"what are we not seeing?" session.

**Quarterly:** OKR setting and scoring · compensation and performance cycle · strategy
review against this document · one full day away from the business.

---

# 27. KPIs and OKRs

## 27.1 The dashboard

Reviewed Monday morning, 30 minutes, no exceptions.

**Tier 1 — the five numbers the CEO checks daily**

| Metric | Definition | FY28 target |
|---|---|---|
| Cash in bank | — | > 6 months opex |
| Qualified pipeline value | Σ (open opportunities × stage probability) | ≥ 3× quarterly revenue target |
| Signed revenue MTD | — | ₹20 L/month by Q4 |
| PoV → programme conversion | Rolling 6 | ≥ 70% |
| Overdue receivables | > 45 days | < 15% of AR |

**Tier 2 — weekly**

| Category | Metrics |
|---|---|
| Sales | New SQLs · discovery calls held · proposals out · win rate · avg deal size · sales cycle days |
| Marketing | Organic sessions · MQLs · content published · LinkedIn impressions and inbound conversations |
| Delivery | Utilisation (target 68%) · on-time % (85%) · open escalations · incidents |
| Product | NextDOOH active screens · MRR · trial→paid · logo and net churn |
| People | Open roles · time-to-hire · offer-accept rate · attrition |

**Tier 3 — monthly / quarterly**

Revenue · MRR/ARR · gross margin by stream · EBITDA · CAC · LTV · LTV:CAC (target >4:1) ·
DSO · runway · NRR (target >120%) · NPS (target >50) · revenue per head · recurring % ·
customer concentration (**no client >30% of revenue — this is a survival metric**) ·
engineering velocity trend · escaped defect rate.

## 27.2 Quarterly OKRs — next twelve months

### Q3 FY27 (Oct–Dec 2026) — "Tell the truth and get findable"

| Objective | Key Results |
|---|---|
| **O1: Eliminate the credibility deficit** | KR1 100% of unverifiable claims removed from all properties · KR2 team page live with 4 real bios · KR3 2 engineering case studies published (NextDOOH, Avionix) · KR4 Trust Center live · KR5 AWS Partner + NVIDIA Inception confirmed |
| **O2: Build a measurable funnel** | KR1 CRM live with every historical contact loaded · KR2 real form + calendar booking replacing `mailto:` · KR3 100 qualified outbound contacts made · KR4 15 discovery calls held · KR5 3 PoVs sold |
| **O3: Establish the content engine** | KR1 12 technical posts published · KR2 Benchmark #1 published with reproducible method · KR3 CEO posting 3×/week for 12 consecutive weeks · KR4 500 relevant new LinkedIn followers |
| **O4: Land the first senior hire** | KR1 Principal AI Engineer signed · KR2 technical marketer signed · KR3 salary bands documented and published |

### Q4 FY27 (Jan–Mar 2027) — "Prove it works"

| Objective | Key Results |
|---|---|
| **O1: Convert PoVs to programmes** | KR1 5 PoVs sold · KR2 ≥3 converted to programmes · KR3 first named client case study published · KR4 ₹35 L booked |
| **O2: NextDOOH becomes a product** | KR1 public pricing live · KR2 self-serve signup + payment · KR3 proof-of-play reporting shipped · KR4 40 paying screens |
| **O3: Organic pipeline** | KR1 1,500 organic sessions/month · KR2 10 keywords in top 20 · KR3 5 inbound qualified leads · KR4 whitepaper #1 with 100 downloads |
| **O4: Operational floor** | KR1 40% advance on 100% of new contracts · KR2 DSO under 60 days · KR3 paid-up capital raised to ₹10 L+ |

### Q1 FY28 (Apr–Jun 2027) — "Repeatable"

| Objective | Key Results |
|---|---|
| **O1: Delivery is a system** | KR1 all 5 framework artefacts templated and used on every engagement · KR2 second delivery of a repeated offering at ≤65% of first-run effort · KR3 on-time 85% · KR4 CSAT ≥8.5 |
| **O2: Recurring revenue begins** | KR1 60% run-contract attach on completed programmes · KR2 ₹3 L MRR from run contracts · KR3 NextDOOH 120 paying screens |
| **O3: Authority** | KR1 open-source harness released, 100+ GitHub stars · KR2 webinar with 30+ live attendees · KR3 conference talk accepted · KR4 4,000 organic sessions/month |
| **O4: Team of 10** | KR1 10 FTE · KR2 3 interns with a structured programme · KR3 attrition zero · KR4 first Labs Week shipped something public |

### Q2 FY28 (Jul–Sep 2027) — "Scale what works"

| Objective | Key Results |
|---|---|
| **O1: ₹60 L quarterly revenue** | KR1 ₹60 L booked · KR2 8 active clients · KR3 no client >30% of revenue · KR4 gross margin ≥48% |
| **O2: Second product motion** | KR1 NextDOOH 300 screens · KR2 2 reseller partners signed and selling · KR3 monthly churn <3% |
| **O3: Compliance foundation** | KR1 ISO 27001 gap assessment complete · KR2 certification programme started with a target date published · KR3 PI insurance in force |
| **O4: Sales beyond the founder** | KR1 playbook documented end to end · KR2 first non-founder seller hired · KR3 40% of discovery calls run without the CEO |

---

# 28. 30 / 60 / 90 Day Plan

## First 30 days — stop the bleeding

| # | Action | Owner | Priority | Cost | Impact | Depends on |
|---|---|---|---|---|---|---|
| 1 | Remove all UAV-manufacturer and defence claims from every property (site, meta, JSON-LD, llms.txt, sitemap, social bios) | CEO | **P0** | ₹0 | Critical | — |
| 2 | Remove the Fortune 500 claim and every unverifiable statement | CEO | **P0** | ₹0 | Critical | — |
| 3 | 301 `/defense` → `/` | CEO | **P0** | ₹0 | Critical | 1 |
| 4 | New homepage copy live (§6.4) | CEO | **P0** | ₹0 | Very high | 1, 2 |
| 5 | Fix DOM-duplicated text, "five/six services", `@kaborobotics` | Eng | P0 | ₹0 | Medium | — |
| 6 | Team page with real photos and bios | CEO | P0 | ₹15 K | Very high | — |
| 7 | Replace `mailto:` with a real form endpoint + calendar booking | Eng | P0 | ₹0 | High | — |
| 8 | HubSpot free CRM live; every past contact loaded | CEO | P0 | ₹0 | High | — |
| 9 | Apply: AWS Partner Network + NVIDIA Inception | CEO | P1 | ₹0 | High | — |
| 10 | Open the Principal AI Engineer role with a published band | CEO | P1 | ₹0 | Critical | — |
| 11 | Build the ICP list — 200 named Bangalore/Chennai companies with contacts | CEO | P1 | ₹0 | High | — |
| 12 | Start the founder LinkedIn cadence, 3×/week | CEO | P1 | ₹0 | High | — |
| 13 | Publish NextDOOH + Avionix as engineering case studies | CEO + Eng | P1 | ₹0 | Very high | 4 |
| 14 | Write the PoV offer: scope template, price, deliverable format | CEO | P1 | ₹0 | Critical | — |
| 15 | Talk to the CA about paid-up capital and the group-lineage question (§2.1) | CEO | P2 | ₹5 K | Medium | — |

**Exit criteria for day 30:** nothing false is published anywhere; a stranger can book a
call in two clicks; the PoV is a documented product with a price; outbound has started;
the first senior role is live.

## Days 31–60 — build the machine

| # | Action | Owner | Priority | Cost | Impact |
|---|---|---|---|---|---|
| 16 | Launch the new page architecture: `/what-we-do/*`, `/work`, `/labs`, `/trust` | Eng | P0 | ₹0 | Very high |
| 17 | **Build `/what-we-do/proof-of-value`** — the highest-converting page on the site | CEO + Eng | P0 | ₹0 | Very high |
| 18 | Trust Center live with an honest certification roadmap | CEO | P0 | ₹0 | Very high |
| 19 | 100 personalised outbound approaches sent | CEO | P0 | ₹0 | High |
| 20 | 15 discovery calls held | CEO | P0 | ₹0 | Critical |
| 21 | Close the Principal AI Engineer | CEO | P0 | Salary | Critical |
| 22 | Hire the technical marketer | CEO | P1 | Salary | High |
| 23 | Add prerendering to the build (fixes SPA crawlability) | Eng | P1 | ₹0 | High |
| 24 | Rewrite all JSON-LD to the new offering set; add Person + SoftwareApplication | Eng | P1 | ₹0 | Medium |
| 25 | Benchmark #1 in progress (private vs hosted inference cost) | Eng lead | P1 | ₹40 K | High |
| 26 | Write the pre-completed security questionnaire | CEO | P1 | ₹0 | High |
| 27 | NextDOOH: public pricing page + self-serve signup started | Product | P1 | ₹0 | High |
| 28 | 8 technical posts published | Marketing | P1 | ₹0 | Medium |
| 29 | Quote PI insurance | CEO | P2 | ₹0 | Medium |
| 30 | Remove `dist/` from git; move builds to GitHub Actions | Eng | P2 | ₹0 | Low |

**Exit criteria for day 60:** the site tells one coherent story with proof; two senior
people hired; 15 real conversations held; the first PoV proposal is out.

## Days 61–90 — launch and sell

| # | Action | Owner | Priority | Cost | Impact |
|---|---|---|---|---|---|
| 31 | **Sell 3 Proofs of Value** | CEO | **P0** | — | **Critical** |
| 32 | Deliver the first PoV to the framework, artefacts and all | Eng lead | P0 | — | Critical |
| 33 | Publish Benchmark #1 with reproducible method | Eng lead | P0 | ₹0 | High |
| 34 | NextDOOH self-serve live; first 20 paying screens | Product | P0 | ₹0 | High |
| 35 | Open-source the RAG evaluation harness | Eng lead | P1 | ₹0 | High |
| 36 | Whitepaper #1 (Data Readiness Checklist) gated and promoted | Marketing | P1 | ₹0 | Medium |
| 37 | First reference-customer agreement signed (30% discount for a case study) | CEO | P1 | Margin | Very high |
| 38 | 3 ERP/cloud partner conversations opened | CEO | P1 | ₹0 | Medium |
| 39 | ISO 27001 gap assessment scoped and quoted | Ops | P2 | ₹50 K | Medium |
| 40 | Q3 FY27 OKRs scored; Q4 set | CEO | P1 | ₹0 | Medium |

**Exit criteria for day 90:** three PoVs sold, one delivered, one benchmark published,
NextDOOH taking money without a human, and a written answer to "why KRYIL?" that a
stranger finds persuasive.

**Total incremental cash cost of the 90-day plan (excluding salaries): approximately
₹1,10,000.** The constraint here is founder attention, not money.

---

# 29. Twelve-Month Roadmap

| Month | Strategic objective | Product | Sales | Marketing | Hiring | Engineering | Partnerships | Financial | Key KPI |
|---|---|---|---|---|---|---|---|---|---|
| **M1** | Truth | — | ICP list of 200 | Site relaunch; LI cadence starts | Open role #1 | Site fixes, CRM, forms | AWS + NVIDIA applied | Cash baseline | 0 false claims |
| **M2** | Findability | NextDOOH pricing drafted | 100 outbound | 4 posts | Interview #1 | New architecture, prerender | AWS confirmed | Advance policy set | 15 discovery calls |
| **M3** | First offer | NextDOOH self-serve started | First PoV proposals | Case studies live; Trust Center | Hire #1 + #3 | PoV template built | NVIDIA confirmed | Paid-up capital filed | 3 PoVs sold |
| **M4** | First delivery | NextDOOH self-serve live | 4 PoVs | Benchmark #1 | Onboard | First PoV delivered | ERP partner talks | 40% advances on all | 1st PoV → programme |
| **M5** | Repeatability | Proof-of-play shipped | 4 PoVs, 2 programmes | Open source released | Hire #2 | Framework artefacts templated | 1 referral partner | DSO < 60 | Repeat cost ≤70% |
| **M6** | First reference | 40 paying screens | ₹35 L booked Q | Case study #1 (named) | Hire #4 | Run-contract tooling | 1 AV reseller | Gross margin 45% | 1 named logo |
| **M7** | Recurring begins | 80 screens | 5 PoVs | Whitepaper #2; webinar #1 | — | First run contract live | Microsoft Partner | MRR ₹1.5 L | Attach rate 50% |
| **M8** | Scale delivery | Offline resilience | 5 PoVs, 3 programmes | Benchmark #2 | Hire #5 | Second pod forming | 2 AV resellers | ₹18 L/month | Utilisation 68% |
| **M9** | Authority | 150 screens | ₹55 L booked Q | Case studies #2, #3; conference talk | Hire #6 | ISO gap assessment | ERP referral live | EBITDA breakeven | 4,000 organic/mo |
| **M10** | Governance | White-label started | 6 PoVs | Trust Center v2; AI governance published | — | Security standard audited | 3 partners active | PI insurance in force | Trust Center used in 3 deals |
| **M11** | Vertical focus | 250 screens | Manufacturing push | Vertical content | Hire #7 | Vertical reference architecture | University MoU | ₹22 L/month | 2 clients in one vertical |
| **M12** | Consolidate | 300 screens | ₹70 L booked Q | Benchmark #3; year in review | Hire #8 | Debt paydown sprint | Reseller #3 | FY27 close; FY28 plan | Recurring ≥15% |

---

# 30. Three-Year Roadmap

## Year 1 (FY27 → Q2 FY28) — Foundation

**Theme: become a company that can be believed.**

| Dimension | Target |
|---|---|
| Revenue | ₹90 L → ₹2.4 Cr run rate |
| Employees | 5 → 14 |
| Products | NextDOOH commercial; Avionix maintained |
| Customers | 12 active, 5 referenceable, 3 public case studies |
| Markets | Bangalore + Chennai |
| Partnerships | AWS, NVIDIA Inception, Microsoft, 2 AV resellers, 1 ERP referral |
| Technology | Reference architectures documented; evaluation harness open-sourced |
| Brand | Positioning coherent; 3 benchmarks published; founder at 5,000 followers |
| Profitability | EBITDA breakeven by M9–12 |
| **The one thing** | **Five named clients who will take a reference call** |

## Year 2 (FY29) — Scale

**Theme: make it work without the founder in every room.**

| Dimension | Target |
|---|---|
| Revenue | ₹6.1 Cr |
| Employees | 30 |
| Products | NextDOOH ₹78 L ARR; RAG appliance v1 licensed to 2 clients |
| Customers | 26 active, 14 referenceable |
| Markets | + Hyderabad, Pune; first inbound export work |
| Partnerships | Microsoft Solutions Partner; 6 resellers; 2 university MoUs |
| Technology | ISO 27001 certified; multi-tenant product platform |
| Brand | Recognised in Bangalore enterprise AI; 2 conference talks/yr; DR 30+ |
| Profitability | 12% EBITDA |
| **The one thing** | **Recurring revenue ≥25% and CEO out of delivery entirely** |

## Year 3 (FY30) — Market position

**Theme: be the default answer to a specific question.**

| Dimension | Target |
|---|---|
| Revenue | ₹12.5 Cr |
| Employees | 55 |
| Products | NextDOOH ₹1.8 Cr ARR, 5,000+ screens; RAG appliance a real product line |
| Customers | 45 active; NRR >120% |
| Markets | Pan-India; UAE/Saudi entry with 2 clients |
| Partnerships | Co-sell motion live with AWS/Microsoft; 12 resellers |
| Technology | SOC 2 Type II underway; edge AI capability proven |
| Brand | *"Private AI in India"* is a question KRYIL is on the shortlist for |
| Profitability | 15% EBITDA; 12 months' cash reserve |
| **The one thing** | **When an Indian mid-market CIO needs AI that cannot leave the building, KRYIL is one of the three names they are given** |

---

# 31. 2030 Vision

## Conservative — "A good small company" (~35% likely)

₹8–12 Cr revenue, 40–50 people, 12–15% EBITDA, one profitable product, strong regional
reputation in Bangalore, no international presence, founder still central to sales.

*What has to be true:* execution is decent but not exceptional; the founder never fully
delegates sales; product investment stays under-funded; competition compresses services
pricing. **This is not failure.** It is a healthy, independent, founder-controlled
business worth ₹15–25 Cr. Many people would take it.

## Strong execution — "A recognised specialist" (~45% likely)

₹35–50 Cr revenue, 130–180 people, 20% EBITDA, 45% recurring revenue, NextDOOH at 15,000+
screens across India and SEA, the RAG appliance as a real product line, offices in
Bangalore and Dubai, ISO 27001 and SOC 2, a professional leadership team, founder focused
on strategy and capital allocation. Enterprise value ₹150–250 Cr. Acquirable by a
mid-tier Indian IT firm or a global consultancy building India AI capability.

*What has to be true:* the CTO hire in Year 2 works · PoV→programme conversion holds above
65% · NextDOOH finds a repeatable channel · three verticals produce reference density ·
recurring crosses 40% · no client ever exceeds 25% of revenue · the founder genuinely
exits delivery by Year 2 and sales leadership by Year 4.

## Exceptional — "A category owner" (~20% likely)

₹120–200 Cr revenue, 400+ people, 25%+ EBITDA, majority of gross profit from products,
the private-AI-deployment category in India substantially defined by KRYIL's published
work, multi-country presence, possibly one funding round taken deliberately to accelerate
product rather than out of need. Enterprise value ₹800 Cr–₹1,500 Cr.

*What has to be true:* everything in the strong case, **plus** the RAG appliance becomes a
genuine product with 100+ enterprise licences · KRYIL Labs becomes a cited authority
(the "we publish the benchmark everyone quotes" position) · one international market
reaches 30% of revenue · KRYIL hires two or three people who are individually better than
the founder at their function and keeps them · the private-AI thesis proves durable rather
than a 24-month window that hyperscalers close.

**The honest probability assessment.** The conservative case is the default outcome of
adequate execution. The strong case requires the founder to make three or four
uncomfortable decisions — delegating sales, spending on a CTO, saying no to revenue that
is off-strategy, and killing the aerospace ambition for at least three years. The
exceptional case additionally requires luck on market timing that nobody controls.

**The one thing that most reliably moves KRYIL from conservative to strong** is not
strategy, funding or market. It is whether the founder builds an organisation that sells
without them by the end of Year 2.

---

# 32. Risks — the twenty biggest, ranked

| # | Risk | Sev | Why it matters | Solution | Owner | Timeline | KPI |
|---|---|---|---|---|---|---|---|
| 1 | **Published false claims** (UAV manufacturer, combat drones, Fortune 500) | **CRITICAL** | Regulatory exposure, misleading-advertisement risk, and it silently kills every enterprise deal | Remove everything unverifiable; adopt the §5.4 evidence rule | CEO | 7 days | 0 unverifiable claims |
| 2 | **Zero third-party proof** | **CRITICAL** | Cannot pass procurement; cannot justify price | §23 credibility plan; 5 referenceable clients | CEO | 6 months | 5 references |
| 3 | **No measurable funnel** | **CRITICAL** | Cannot forecast, cannot improve, cannot plan hiring | CRM + real forms + stage tracking | CEO | 30 days | Weekly pipeline report |
| 4 | **Founder dependency on all revenue** | **CRITICAL** | The company stops if the founder stops | Playbook documented; first seller hired M12 | CEO | 12 months | 40% of calls without CEO |
| 5 | **Cash — ₹10K paid-up, 55-day DSO** | **CRITICAL** | Profitable-but-insolvent is the standard failure mode | 40% advances, milestone billing, credit line, raise capital | CEO | 60 days | Runway > 6 months |
| 6 | **Positioning spread across nine offerings** | **HIGH** | Nothing is credible; SEO, sales and hiring all diluted | §4 — three pillars, publicly | CEO | 30 days | 3 offerings on site |
| 7 | **Client concentration** | **HIGH** | With 5 clients, losing one is 20% of revenue | Cap any client at 30%; 12 clients by FY28 | CEO | Ongoing | Max client < 30% |
| 8 | **Cannot hire the senior engineer** | **HIGH** | The entire positioning depends on one hire | Equity, published bands, Avionix as the magnet | CEO | 60 days | Signed |
| 9 | **No certifications** | **HIGH** | Hard procurement blocker above ₹50 L deal size | Trust Center now; ISO 27001 by FY28 | CEO/Ops | 12 months | ISO started |
| 10 | **Private-AI window closes** | **HIGH** | Hyperscalers ship easy private deployment; differentiation evaporates | Move up-stack into vertical products before FY29 | CEO | 24 months | Recurring ≥25% |
| 11 | **PoV→programme conversion below 50%** | **HIGH** | The whole model breaks (§19.5) | Instrument from PoV #1; review monthly; re-scope | CEO | Ongoing | ≥70% |
| 12 | **Fixed-price scope overruns** | **HIGH** | Fixed price with weak scoping destroys margin | Written scope + out-of-scope list + change control | Delivery | Ongoing | Margin ≥45% |
| 13 | **NextDOOH support cost exceeds revenue** | **MEDIUM** | Small customers, cheap Android hardware, high touch | Self-serve, docs, minimum tier, certified device list | Product | 6 months | Support cost <15% of MRR |
| 14 | **Key engineer leaves** | **MEDIUM** | At 10 people, one exit is a crisis | Documentation as culture; no single-owner systems; equity | CEO | Ongoing | Bus factor ≥2 per system |
| 15 | **A delivery failure becomes public** | **MEDIUM** | Small firms do not survive a bad reference | Weekly demos, mid-point reviews, escalate early | Delivery | Ongoing | CSAT ≥8.5 |
| 16 | **Founder splits attention with aerospace** | **MEDIUM** | The most likely self-inflicted failure in this document | §10 — written commitment, revisit FY31 | CEO | Now | 0 aerospace spend |
| 17 | **Price compression from larger firms** | **MEDIUM** | Race to the bottom on undifferentiated work | Differentiate on private deployment + proof; never discount without scope change | CEO | Ongoing | Avg deal value rising |
| 18 | **AI dependency on external model providers** | **MEDIUM** | Pricing, availability, terms all outside KRYIL's control | Open-weight capability is the hedge — and it is also the positioning | Eng | Ongoing | 50% of deployments private |
| 19 | **DPDP / regulatory change** | **LOW-MED** | Rules shift and compliance work changes shape | Legal partner; treat regulation as a product input, not a threat | CEO | Ongoing | — |
| 20 | **Two-entity structure confuses buyers** | **LOW** | Infotech vs Infosolutions | Clarify with the CA; one public-facing brand | CEO | 90 days | Single clear entity story |

**Risks 1, 3 and 5 are all fixable within 30 days for effectively no money.** That is
unusual and it should be acted on immediately.

---

# 33. Opportunities — the twenty biggest

| # | Opportunity | Impact | Difficulty | Cost | Time to revenue | Strategic |
|---|---|---|---|---|---|---|
| 1 | Private/on-prem AI for DPDP-constrained Indian enterprises | Very high | Medium | Low | 3 months | Very high |
| 2 | NextDOOH self-serve + public pricing | High | Low | Very low | 2 months | High |
| 3 | Productised Proof of Value as the entry offer | Very high | Low | Very low | 1 month | Very high |
| 4 | KRYIL Labs — benchmarks as credibility | High | Low | Low | 6 months | Very high |
| 5 | Document AI for Indian formats (invoices, KYC, lab reports) | High | Medium | Low | 4 months | High |
| 6 | Run contracts attached to every build | High | Low | Very low | 6 months | Very high |
| 7 | Bangalore GCC overflow work | Medium-high | Low | Very low | 2 months | Medium |
| 8 | DPDP readiness assessments | Medium-high | Medium | Low | 4 months | High |
| 9 | NextDOOH reseller channel (AV integrators) | High | Medium | Low | 6 months | High |
| 10 | Open-source evaluation harness as a lead magnet | Medium | Low | Very low | 6 months | High |
| 11 | RAG appliance productised from repeated builds | Very high | High | Medium | 18 months | Very high |
| 12 | Avionix as a recruiting and top-of-funnel asset | Medium | Very low | Very low | Immediate | Medium |
| 13 | AI security & governance reviews (a genuine white space) | Medium | Low | Very low | 4 months | High |
| 14 | Vertical reference density in manufacturing | High | Medium | Low | 9 months | High |
| 15 | ERP-implementer referral partnerships | Medium-high | Medium | Very low | 6 months | Medium |
| 16 | Edge/vision inspection for manufacturing lines | Medium-high | Medium-high | Medium | 9 months | Medium |
| 17 | ISO 27001 as a procurement unlock | High | Medium | ₹4–8 L | 12 months | High |
| 18 | UAE/Saudi expansion on the data-residency thesis | High | High | Medium | 24 months | Medium |
| 19 | Karnataka/Startup India schemes and preferences | Low-medium | Medium | Very low | 6 months | Low |
| 20 | University research partnerships for talent | Low-medium | Low | Very low | 12 months | Medium |

## The five to start this quarter

1. **Productise the Proof of Value.** One document, one price, one deliverable format. It
   is the entry point for the entire sales strategy, it costs a week of writing, and
   nothing else in the plan works without it.
2. **Publish honest positioning around private AI.** The claim is defensible, the market
   need is real and regulator-driven, and the correction removes a liability at the same
   time.
3. **NextDOOH self-serve with public pricing.** Roughly two engineer-weeks to start
   taking money from strangers, on the only asset that generates revenue while nobody is
   working.
4. **KRYIL Labs benchmark #1.** The fastest route from "no case studies" to "published
   research", requiring zero client permission.
5. **Attach a run contract to every proposal from now on.** Zero cost, changes the shape
   of the business permanently, and it is the difference between a services firm and an
   asset.

---

# 34. THE KRYIL BLUEPRINT

**1. Vision** — By 2030, when an Indian enterprise needs AI working on data that cannot
leave its own infrastructure, KRYIL is one of the three names it is given.

**2. Mission** — Build AI systems that reach production inside the customer's own
environment, and publish the evidence that they work.

**3. Positioning** — Applied AI engineering for the Indian mid-market. Private and
on-premise by default. Proof before invoice.

**4. Target customers** — Indian enterprises, ₹100–2,000 Cr revenue, 200–3,000 people,
with an IT team and no ML team, in manufacturing, healthcare, logistics, BFSI operations
and professional services. Bangalore and Chennai first. Separately, for NextDOOH:
multi-site operators with 15–500 screens in India and SEA.

**5. Three pillars** — (i) Applied AI & Automation · (ii) Data & Cloud Engineering ·
(iii) Products (NextDOOH, then the RAG appliance). Security is a delivery standard, not a
fourth pillar. Aerospace is parked until FY31.

**6. Product portfolio** — NextDOOH (commercial priority) · Avionix (free; brand,
recruiting, top-of-funnel) · Private RAG appliance (productised from repeated builds,
FY29) · nothing else.

**7. Revenue model** — Productised entry (PoV) → fixed-price build → attached run
contract → SaaS underneath. Target 30% recurring by FY29, 41% by FY31.

**8. Sales strategy** — Founder-led outbound and content for 12 months, converting into a
fixed-price ₹2–4 L Proof of Value with written kill criteria; 70% conversion into
₹22 L programmes; 60% attach of run contracts; expansion found during delivery.

**9. Marketing strategy** — Authority, not awareness. Measured engineering content,
published post-mortems, KRYIL Labs benchmarks, open source, and the founder's LinkedIn as
the primary channel. No paid advertising.

**10. Technology strategy** — Boring by default. React/TypeScript, Python/FastAPI,
PostgreSQL with pgvector, AWS with Azure where mandated, vLLM for private serving, open
weights where they suffice. Everything must be deployable into a client environment.

**11. Hiring strategy** — Behind revenue, except the Principal AI Engineer and the
technical marketer. Twelve roles over 24 months. Paid work samples, two-week close,
published salary bands, equity for the senior hires.

**12. Organisation** — Flat to 25 with no non-delivering managers; two pods and a CTO at
50; industry-aligned pods and a real leadership team at 100.

**13. Financial targets** — FY28 ₹2.4 Cr / 4% EBITDA · FY29 ₹6.1 Cr / 12% · FY31 ₹22 Cr /
19%. Recurring ≥25% by FY29. No client above 30% of revenue. DSO under 55 days.

**14. Ninety-day priorities** — Remove every false claim · relaunch the site on honest
positioning · build a measurable funnel · hire the Principal AI Engineer · sell three
Proofs of Value · ship NextDOOH self-serve.

**15. Twelve-month priorities** — Five referenceable clients · three published
benchmarks · ₹2.4 Cr run rate · 14 people · recurring revenue started · EBITDA breakeven.

**16. Three-year objectives** — ₹12.5 Cr revenue · 55 people · 30%+ recurring · ISO 27001 ·
NextDOOH at 5,000 screens · the founder out of delivery and out of most of sales.

**17. Biggest risks** — The published false claims (immediate and existential to
credibility) · no third-party proof · founder dependency · cash and DSO · the private-AI
window closing before KRYIL moves up-stack.

**18. Competitive advantage** — Not speed, not price, not breadth. It is: *we deploy
inside your walls, we show the measurement including the failures, and the engineer who
scoped it is the one who builds it.* Every one of those three is provable, and none of
them is currently claimed on the website.

---

## IF I WERE APPOINTED CEO OF KRYIL TOMORROW — THE FIRST TEN THINGS

**1. Take down every false claim before lunch.** The UAV manufacturer title, the combat
drone page, the Fortune 500 line, the jet propulsion slide. Not rewritten, not softened —
removed, and `/defense` redirected. This is not a marketing decision; it is a legal and
credibility decision, and every day it stays up costs deals I cannot see.

**2. Ask the CA two questions.** Can we raise paid-up capital to ₹10–25 lakh this quarter?
And can the group legitimately present continuity from KRYIL Infosolutions (2022)? Answers
to both change how many procurement filters we clear.

**3. Write the Proof of Value in one sitting.** Scope template, ten-day schedule, ₹2.75
lakh, deliverable format, kill criteria. Everything in the sales strategy is downstream of
this one document, and it takes a day.

**4. Call every person who ever enquired.** They are in an inbox somewhere. Load them into
a CRM and call them. This is the cheapest pipeline in the company and it is currently
being ignored.

**5. Open the Principal AI Engineer role with the salary band published.** ₹28–45 L plus
real equity. Do not compromise on this hire and do not wait for revenue to justify it —
the positioning is fiction without this person.

**6. Publish NextDOOH and Avionix as engineering case studies this week.** We have no
client case studies. We have two products. They are real, they are ours, they need
nobody's permission, and they demonstrate exactly the engineering we are selling.

**7. Put my face and my team's faces on the website with real bios.** Enterprise buyers
buy people. Right now the site has no people on it, and a company with no visible humans
making claims about combat drones reads as a shell.

**8. Start writing publicly, three times a week, and never stop.** Tuesday morning is
blocked for it permanently. In twelve months this is the largest source of qualified
pipeline in the business, and it costs nothing but the discipline to protect the block.

**9. Ship NextDOOH pricing and self-serve signup.** Two engineer-weeks to make the company
capable of earning money without a human in the loop. It is the only thing in the
portfolio that can do that, and it has been sitting behind a dropdown.

**10. Write down that we are not doing aerospace until FY31, and tell the team.** This is
the hardest one, because it is the founder's genuine interest and it produced the best
engineering in the company. It is also the thing most likely to consume the attention that
the business needs to survive. Avionix stays, free, as a tool and a recruiting magnet.
Everything else in that domain waits until there is a balance sheet that can afford it.

---

## What I would need from you to make this ten times more useful

Give me actual revenue, current pipeline, headcount and salaries, the client list, monthly
burn and cash balance, and I will replace §19 with a real financial model, §15 with a real
org plan against a real payroll, and §11 with real conversion rates instead of targets.
Everything above is built to be corrected by data, and it is worth substantially less
until it is.

---

# 35. Sources

**Registry and company data**
- Tofler — KRYIL Infotech Private Limited: https://www.tofler.in/kryil-infotech-private-limited/company/U62099KA2025PTC201071
- Tracxn — KRYIL Infotech company profile: https://tracxn.com/d/legal-entities/india/kryil-infotech-private-limited/__Fxauad-qx60PmR00yMgqlFENSZdpriv5n5hcC2PbUUc
- IndiaFilings — CIN U62099KA2025PTC201071: https://www.indiafilings.com/search/kryil-infotech-private-limited-cin-U62099KA2025PTC201071
- FalconEbiz — KRYIL Infotech: https://www.falconebiz.com/company/KRYIL-INFOTECH-PRIVATE-LIMITED-U62099KA2025PTC201071
- Zauba Corp — KRYIL Infosolutions Private Limited: https://www.zaubacorp.com/company/KRYIL-INFOSOLUTIONS-PRIVATE-LIMITED/U72900KA2022PTC167337
- LinkedIn — Sarojini K N: https://in.linkedin.com/in/sarojini-md

**Bangalore market comparators**
- IT companies in Bangalore, 2026 list: https://opsiocloud.com/in/blogs/list-of-it-companies-in-bangalore/
- Top service-based IT companies in Bangalore: https://www.foundit.in/career-advice/top-it-service-companies-in-bangalore/
- Tredence: https://www.tredence.com/ and https://www.linkedin.com/company/tredence
- Sigmoid: https://www.sigmoid.com/
- Top data engineering companies in Bangalore: https://techenhance.com/top-10-best-it-data-engineering-companies/


**Regulatory**
- Drone type certification process in India: https://thinkrobotics.com/blogs/learn/complete-guide-to-drone-dgca-type-certification-process-in-india-2025
- Drone certification rules and process: https://www.diligencecertification.com/drone-certification/
- DPIIT clarity on defence manufacturing (Press Note 1 of 2019) — Shardul Amarchand Mangaldas: https://www.amsshardul.com/insight/dpiit-provides-clarity-on-defence-manufacturing/
- New opportunities in India's defence sector — S&R Associates: https://www.snrlaw.in/new-opportunities-in-indias-defence-sector/
- Drone import/export rules, DGFT & SCOMET: https://www.sigmachambers.in/post/import-export-regulations-for-drones-in-india
- Regulatory framework governing export of munitions in India — Spice Route Legal: https://spiceroutelegal.com/publications/regulatory-framework-governing-export-of-munitions-in-india/

**Primary**
- kryil.com (live site, retrieved 8 September 2026)
- The repository at `~/02 Projects/kryil` (source of record for all site-defect findings)
