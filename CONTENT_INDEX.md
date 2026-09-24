# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Kingdom Rush 6: Genesis TD hub | Find launch status, pricing, and the most current pages | Release date / Price / Platforms / Known issues | Hub | Reflects post-launch status (Steam + iOS + Android Sep 24, 2026). |
| `/wiki` | `src/data/pages/kr6-pages.ts` (wiki) | Guide | Kingdom Rush 6: Genesis TD wiki | Find launch FAQ surfaces and the known-issues pointer | Release date / Known issues / Hero roster | Hub | Mirrors Ironhide News/Details/523 + 527. |
| `/guides` | `src/data/pages/kr6-pages.ts` (guides) | Guide | Kingdom Rush 6: Genesis TD guides hub | Pick the guide that matches the question | Heroes / Towers / Controls / Beginners / Campaign | Hub | Do not invent walkthroughs before reliable details exist. |
| `/release-date` | `src/data/pages/kr6-pages.ts` (release-date-status) | Guide | Kingdom Rush 6: Genesis TD release date | Confirm Sep 24, 2026 launch across PC and mobile | Price / Platforms / Known issues | Supporting hub | Now reflects released status with intro offer window. |
| `/price` | `src/data/pages/kr6-pages.ts` (price-editions) | Guide | Kingdom Rush 6: Genesis TD price | Confirm Steam $17.99 (10% intro) and mobile $6.99 | Release date / Platforms / Known issues | Supporting hub | Live Steam regional price is the authoritative source. |
| `/platforms` | `src/data/pages/kr6-pages.ts` (platforms-faq) | Guide | Kingdom Rush 6: Genesis TD platforms | Confirm Steam + iOS + Android launch matrix | Release date / Price / Known issues | Supporting hub | Steam Deck / PlayStation / Xbox / Switch remain unannounced. |
| `/known-issues` | `src/data/pages/kr6-pages.ts` (known-issues) | Guide | Kingdom Rush 6: Genesis TD known issues and workarounds | Find the post-launch bug list and the official workaround for each | Release date / Platforms / System requirements / Wiki | Supporting hub | Mirrors Ironhide News/Details/527; re-stamps on every update. |
| `/demo` | `src/data/pages/kr6-pages.ts` (demo-download) | Guide | Kingdom Rush 6: Genesis TD demo | Find the Steam Next Fest demo download | Release date / Price / Platforms | Supporting hub | Demo remains available as a pre-purchase trial. |
| `/system-requirements` | `src/data/pages/kr6-pages.ts` (system-requirements) | Guide | Kingdom Rush 6: Genesis TD system requirements | Confirm Windows 10 / macOS 10.13 minimums | Release date / Price / Platforms / Known issues | Supporting hub | Live Steam store page is authoritative. |
| `/heroes` | `src/data/pages/kr6-pages.ts` (heroes-list) | Guide | Kingdom Rush 6: Genesis TD heroes | Browse the 12-hero pair-deployment roster | Towers / Controls / Beginners | Supporting hub | 11 publicly named heroes. |
| `/towers` | `src/data/pages/kr6-pages.ts` (towers-list) | Guide | Kingdom Rush 6: Genesis TD towers | Browse the 15 towers and revamped upgrade system | Heroes / Controls / Beginners | Supporting hub | Dwarven Culverin is the balance-watch surface. |
| `/campaign` | `src/data/pages/kr6-pages.ts` (campaign-stages) | Guide | Kingdom Rush 6: Genesis TD campaign | Walk the 18-stage campaign across 3 Linirea regions | Enemies / Bosses / Beginners | Supporting hub | Stage order and unlock tree are unannounced. |
| `/controls` | `src/data/pages/kr6-pages.ts` (controls-mechanics) | Guide | Kingdom Rush 6: Genesis TD controls | Understand mouse + partial controller and the 9 spells | Beginners / Heroes / Towers | Supporting hub | Per-spell cooldown numbers unannounced. |
| `/beginners-guide` | `src/data/pages/kr6-pages.ts` (beginners-guide) | Guide | Kingdom Rush 6: Genesis TD beginners guide | Step-by-step launch-week path | Controls / Heroes / Towers / Campaign | Supporting hub | Lead with the launch-week first-hour checklist. |
| `/enemies` | `src/data/pages/kr6-pages.ts` (enemies-races) | Guide | Kingdom Rush 6: Genesis TD enemies | Browse the 5 races and 40+ units | Campaign / Bosses / Wiki | Supporting hub | Per-unit stats unannounced. |
| `/bosses` | `src/data/pages/kr6-pages.ts` (bosses-list) | Guide | Kingdom Rush 6: Genesis TD bosses | Browse the 6 colossal boss fights | Campaign / Enemies / Wiki | Supporting hub | Boss counter-tactics unannounced. |
| `/vs-frontiers` | `src/data/pages/kr6-pages.ts` (vs-frontiers) | Guide | Kingdom Rush 6: Genesis TD vs Frontiers | Reconcile the prequel with Frontiers / Origins / Vengeance / Alliance | Heroes / Towers / Wiki | Supporting hub | Series-fan comparison. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Kingdom Rush 6: Genesis TD FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Kingdom Rush 6: Genesis TD Guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Kingdom Rush 6: Genesis TD Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/price`, `/platforms`, `/known-issues`, `/system-requirements`, `/demo`
- Official facts and safe guide structure: `/wiki`, `/guides`
- Gameplay references: `/heroes`, `/towers`, `/controls`, `/campaign`, `/enemies`, `/bosses`, `/beginners-guide`, `/vs-frontiers`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage links to the most current high-demand pages (Release date, Price, Platforms, Known issues).
- Wiki links to release date, known issues, heroes, towers, vs-frontiers.
- Guides links to heroes, towers, controls, beginners, campaign.
- Release Date links to Price, Platforms, Known issues.
- FAQ includes all current high-demand answer pages including the new known-issues entries.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
