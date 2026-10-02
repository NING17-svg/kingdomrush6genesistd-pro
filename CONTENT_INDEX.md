# CONTENT_INDEX.md

## How To Use This File

Use this inventory to find each real route's content record and current metadata before editing. The rows reflect `getAllPages()` in `src/lib/content.ts`; they record authored metadata and do not imply keyword-demand research.

## Page Inventory

The current primary-locale site resolves 22 routes. `pageType`, `routeKind`, H1, SEO title, and review date below come from each `PageContent` record. Locale alternates, if added, must retain their declared `translationKey` and be checked in the route manifest, canonical, hreflang, and sitemap output.

| URL | ID | Page type | Route kind | H1 | SEO title | Last reviewed |
|---|---|---|---|---|---|---|
| `/` | `home` | home | home | Kingdom Rush 6: Genesis TD | Kingdom Rush 6: Genesis TD Guides, Heroes & Towers | 2026-09-25 |
| `/about` | `about` | site | fixed | About Kingdom Rush 6: Genesis TD Hub | About Kingdom Rush 6: Genesis TD Hub | 2026-06-18 |
| `/beginners-guide` | `beginners-guide` | guides | fixed | Kingdom Rush 6: Genesis TD beginners guide: launch-week path | Kingdom Rush 6: Genesis TD Beginners Guide: Launch-Week Path | 2026-09-18 |
| `/bosses` | `bosses-list` | wiki | fixed | Kingdom Rush 6: Genesis TD bosses: 6 colossal encounters | Kingdom Rush 6: Genesis TD Bosses: 6 Colossal Encounters | 2026-09-18 |
| `/campaign` | `campaign-stages` | wiki | fixed | Kingdom Rush 6: Genesis TD campaign: 18 stages across 3 Linirea regions | Kingdom Rush 6: Genesis TD Campaign: 18 Stages in 3 Linirea Regions | 2026-09-18 |
| `/contact` | `contact` | site | fixed | Contact | Contact \| Kingdom Rush 6: Genesis TD Hub | 2026-06-18 |
| `/controls` | `controls-mechanics` | guides | fixed | Kingdom Rush 6: Genesis TD controls and mechanics | Kingdom Rush 6: Genesis TD Controls & Mechanics: Pair, Heroes, Towers | 2026-09-19 |
| `/demo` | `demo-download` | release | fixed | Kingdom Rush 6: Genesis TD demo: Steam Next Fest download | Kingdom Rush 6: Genesis TD Demo: Steam Next Fest Download | 2026-09-20 |
| `/enemies` | `enemies-races` | wiki | fixed | Kingdom Rush 6: Genesis TD enemies: 5 races and 40+ units | Kingdom Rush 6: Genesis TD Enemies: 5 Races & 40+ Units | 2026-09-18 |
| `/faq` | `faq` | faq | fixed | Kingdom Rush 6: Genesis TD FAQ | Kingdom Rush 6: Genesis TD FAQ \| Common Questions | 2026-06-18 |
| `/guides` | `guides` | guides | fixed | Kingdom Rush 6: Genesis TD guides hub | Kingdom Rush 6: Genesis TD Guides Hub | 2026-09-19 |
| `/heroes` | `heroes-list` | wiki | fixed | Kingdom Rush 6: Genesis TD heroes: 12-hero roster and pair deployment | Kingdom Rush 6: Genesis TD Heroes: 12 Roster & Pair Deployment | 2026-09-19 |
| `/known-issues` | `known-issues` | wiki | fixed | Kingdom Rush 6: Genesis TD known issues and workarounds | Kingdom Rush 6: Genesis TD Known Issues & Workarounds | 2026-09-25 |
| `/platforms` | `platforms-faq` | release | fixed | Kingdom Rush 6: Genesis TD platforms: Steam, iOS, Android, and console status | Kingdom Rush 6: Genesis TD Platforms: Steam, iOS, Android | 2026-09-25 |
| `/price` | `price-editions` | release | fixed | Kingdom Rush 6: Genesis TD Steam price and mobile editions | Kingdom Rush 6: Genesis TD Price: $17.99 Steam, $6.99 Mobile | 2026-09-25 |
| `/privacy-policy` | `privacy-policy` | site | fixed | Privacy Policy | Privacy Policy \| Kingdom Rush 6: Genesis TD Hub | 2026-06-18 |
| `/release-date` | `release-date-status` | release | fixed | Kingdom Rush 6: Genesis TD release date and launch status | Kingdom Rush 6: Genesis TD Release Date: Released Sep 24, 2026 | 2026-09-25 |
| `/system-requirements` | `system-requirements` | wiki | fixed | Kingdom Rush 6: Genesis TD System Requirements | Kingdom Rush 6: Genesis TD System Requirements (PC & Mac) | 2026-09-25 |
| `/terms` | `terms` | site | fixed | Terms of Use | Terms of Use \| Kingdom Rush 6: Genesis TD Hub | 2026-06-18 |
| `/towers` | `towers-list` | wiki | fixed | Kingdom Rush 6: Genesis TD towers: 15-tower roster and revamped upgrade system | Kingdom Rush 6: Genesis TD Towers: 15 Roster & Upgrade System | 2026-09-19 |
| `/vs-frontiers` | `vs-frontiers` | guides | fixed | Kingdom Rush 6: Genesis TD vs Kingdom Rush Frontiers and earlier Ironhide TD titles | Kingdom Rush 6: Genesis TD vs Frontiers: Series Comparison | 2026-09-18 |
| `/wiki` | `wiki` | wiki | fixed | Kingdom Rush 6: Genesis TD wiki: launch-week FAQ and known issues hub | Kingdom Rush 6: Genesis TD Wiki: Launch FAQ & Known Issues | 2026-09-25 |

## Route And Content Sources

- Fixed page records live in `src/data/pages/home.ts`, `src/data/pages/kr6-pages.ts`, and `src/data/pages/site-pages.ts`; FAQs live in `src/data/faq.ts`.
- The rendered route inventory is `getAllPages()` in `src/lib/content.ts`; `npm run routes:manifest` prints the final route and alternate mapping.
- Module IDs, FAQs, key facts, source references, and related-page IDs remain in their page records. Visual composition is defined by `src/components/pages/PageRenderer.tsx` and the site-owned strategy components.
- This site currently resolves 22 routes and no entity-hub or entity-detail route family.

## V4 Shared Components

The verbatim shared V4 component files copied from `game-guide-site-template` and their source commit/hash are listed in `V4_COMPONENTS.json`. Site-owned visual composition remains outside that shared-file manifest. A visual redesign alone does not refresh content review dates.
