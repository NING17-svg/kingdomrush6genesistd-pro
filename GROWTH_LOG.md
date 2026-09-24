# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-25 - Known issues & workarounds page added

- Task: Build a new Known Issues & Workarounds page mirroring Ironhide's News/Details/527 post.
- Files changed: `src/data/pages/kr6-pages.ts`, `src/data/faq.ts`, `CONTENT_INDEX.md`.
- URLs affected: `/known-issues/` (new) and `/wiki/`, `/release-date/`, `/platforms/`, `/price/`, `/system-requirements/`, `/` cross-links updated.
- Sources: Ironhide News/Details/527 'Known Issues & Workarounds' published 2026-09-23; Steam Community Hub for AppID 4259190.
- Content changed: New `known-issues` page lists 5 Steam bugs (0kb CD Key patched, 30Hz / VSYNC, screen-resolution, in-stage keybinding, hero drag-line) and 2 mobile bugs (tutorial-bypass, blue-screen save-file crash awaiting hotfix); each Ironhide-confirmed bug has a step-by-step mitigation. Steam Community heading separately tracks ultra-wide 21:9 and first-level crashes until Ironhide acknowledges them. FAQs `kr6-known-issues`, `kr6-known-issues-steam`, `kr6-known-issues-mobile` added.
- Verification: `npm run verify` on the target site.

### 2026-09-25 - Post-launch status, platforms, and pricing flipped to released

- Task: Flip launch status, platforms, and pricing from pre-launch framing to the Sep 24, 2026 released reality across home, /release-date, /price, /platforms, and /wiki.
- Files changed: `src/data/pages/home.ts`, `src/data/pages/kr6-pages.ts` (release-date-status, price-editions, platforms-faq, wiki), `src/data/faq.ts`.
- URLs affected: `/`, `/release-date/`, `/price/`, `/platforms/`, `/wiki/` — keyFacts, modules, metaDescription, quickAnswer, and relatedPageIds refreshed in place.
- Sources: Steam store AppID 4259190 (Released Sep 24, 2026, $17.99, 10% intro offer ending Oct 8), iOS App Store id6759664029, Google Play com.ironhidegames.android.kingdomrush6.genesis, Ironhide News/Details/523 launch post, Steam Community Hub.
- Content changed: Home, release-date-status, price-editions, platforms-faq, and wiki pages now quote the $17.99 / 10% intro offer (was $19.99) ending Oct 8, the $6.99 mobile premium with in-app purchases, and the new iOS / Android listings. Console / Steam Deck / Switch remain explicitly unannounced. Existing FAQs updated for the new release / price / platform reality; new known-issues FAQs added.
- Verification: `npm run verify` on the target site.

### 2026-09-20 - Steam Next Fest demo scope enumerated

- Task: Replace the /demo page's "Unannounced for demo" block and "Iron mode" label with the actual Steam Next Fest demo scope (4 stages, 5 towers, 2 heroes Gerald + Zefira, 3 spells Reinforcements + Rain of Fire + Royal Edict, Iron Challenge mode).
- Files changed: `src/data/pages/kr6-pages.ts`, `src/data/faq.ts`.
- URLs affected: `/demo/` — keyFacts, modules, FAQ answers refreshed in place.
- Sources: Steam demo AppID 4669880 store page; Ironhide Jun 15, 2026 gamespress.com press release; Steam store AppID 4259190 + changelog.gg Classic Mode reference.
- Content changed: New `demo-subset` entity-grid module, a `demo-vs-launch` prose module with the 4-of-18 / 5-of-15 / 2-of-12 / 3-of-9 framing, corrected mode name to Iron Challenge throughout, FAQ `kr6-demo-content` and `kr6-demo-link` answers restated to the published scope.
- Verification: `npm run verify` on the target site.

### 2026-09-19 - Hero, spell, and tower rosters enumerated

- Task: Enumerate the 11 publicly revealed heroes, the 9 named spells, and the 15 publicly named towers on the existing /heroes, /controls, and /towers pages.
- Files changed: `src/data/pages/kr6-pages.ts`.
- URLs affected: `/heroes/`, `/controls/`, `/towers/` — content expanded within existing routes.
- Sources: Steam Community Hub Devlog #27 (Sept 4, 2026) introduced Oni; Devlog #29 'The Full Lineup' revealed Rhodes, Gemina, and Illiana; the Devlog #29 lineup also revealed all 9 spell names and the 15 tower names. Source links are the Steam Community Hub and Steam store page for AppID 4259190.
- Content changed: Added named-roster `entity-grid` modules to the heroes and towers pages, a 9-spell `entity-grid` module to the controls page, plus short prose modules for the 12th-hero placeholder and the Dwarven Culverin balance-watch note.
- Verification: `npm run verify` on the target site.

### 2026-09-18 - Adsterra fixed six-unit integration

- Task: Populate the fixed Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, and Smartlink values in `src/data/ads.ts` for the new kingdomrush6genesistd.pro launch.
- Files changed: `src/data/ads.ts`.
- URLs affected: No URL changes; only the empty ad-config placeholders were filled with the platform-issued codes.
- Ad baseline: Six platform-issued Active ad units are wired into the existing fixed ad slots; no new component or layout added.
- Verification: `npm run verify` on the target site.

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
