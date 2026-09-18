import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "split-panel" },
  h1: "Kingdom Rush 6: Genesis TD Launch Hub: Status, Demo, and Roster",
  seoTitle: "Kingdom Rush 6: Genesis TD Launch Hub: Status, Demo & Roster",
  metaDescription:
    "Plan for Kingdom Rush 6: Genesis TD: Sep 24, 2026 release, Steam Next Fest demo, -30% pre-order, Windows and macOS support, plus the 12-hero roster.",
  summary:
    "A first-launch reference hub for Kingdom Rush 6: Genesis TD — release status, demo and pre-order paths, platform matrix, and roster reference points for the launch week.",
  hero: {
    eyebrow: "Launch week hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Release date", href: "/release-date/" },
      { label: "Download demo", href: "/demo/" },
      { label: "Hero roster", href: "/heroes/" },
    ],
  },
  quickAnswer:
    "Kingdom Rush 6: Genesis TD launches on Steam on September 24, 2026, with pre-orders open and a Steam Next Fest demo live ahead of ship day. The Ironhide tower-defense prequel pairs a 12-hero roster with the revamped four-family tower upgrade system across 18 stages in three Linirea regions.",
  keyFacts: [
    { label: "Planned release", value: "Sep 24, 2026 (Steam)" },
    { label: "Pre-order", value: "-30% launch discount" },
    { label: "Demo", value: "Steam Next Fest live" },
    { label: "Platforms", value: "Windows + macOS" },
    { label: "Heroes", value: "12 epic heroes, pair-deploy" },
    { label: "Towers", value: "15 towers, 4 families" },
  ],
  modules: [
    {
      id: "launch-status",
      type: "prose",
      heading: "Launch & Status",
      body:
        "The September 24, 2026 release date is set on the Steam store page for AppID 4259190 and confirmed in the Ironhide press release on irondune.com. As of September 18, 2026 the title is in pre-launch: the Steam store lists pre-order with a -30% launch discount, the Steam Next Fest demo is downloadable, and the Steam Community Hub is open for launch-day announcements.",
      links: [
        { label: "Release date status", href: "/release-date/", description: "Confirm the planned Sep 24, 2026 ship." },
        { label: "Demo download", href: "/demo/", description: "Access the Steam Next Fest build." },
        { label: "Price and pre-order", href: "/price/", description: "Live Steam regional price and pre-order terms." },
        { label: "Platforms matrix", href: "/platforms/", description: "Windows vs macOS vs the legacy mobile series." },
      ],
    },
    {
      id: "roster",
      type: "prose",
      heading: "Roster: Heroes and Towers",
      body:
        "Kingdom Rush 6: Genesis TD launches with 27 upgradeable characters, 9 spells, and the revamped four-family tower upgrade system across 15 towers. The 12 epic heroes drive the pair-deployment mechanic; the four classic tower families (Barracks, Archer, Mage, Artillery) anchor the lane-defense loop.",
      links: [
        { label: "Hero roster", href: "/heroes/", description: "12-hero pair-deployment breakdown." },
        { label: "Tower roster", href: "/towers/", description: "15 towers + revamped upgrade system." },
      ],
    },
    {
      id: "campaign",
      type: "prose",
      heading: "Campaign, Enemies, and Bosses",
      body:
        "Kingdom Rush 6: Genesis TD ships with 18 stages across three Linirea regions, 40+ enemy units across 5 races, and 6 colossal bosses. Classic Mode (announced for the 15-year anniversary of the original Kingdom Rush) offers a single-hero run with the four original tower families and the Rain of Fire and Reinforcements spells.",
      links: [
        { label: "Campaign stages", href: "/campaign/", description: "18 stages across 3 Linirea regions." },
        { label: "Enemy races", href: "/enemies/", description: "5 races and 40+ units." },
        { label: "Boss roster", href: "/bosses/", description: "6 colossal boss fights." },
      ],
    },
    {
      id: "new-player",
      type: "prose",
      heading: "New Player Path",
      body:
        "If you are new to the Kingdom Rush series, the launch-week path is: install the Steam Next Fest demo, pick two of the 12 heroes, place towers from the four classic families, spend the 9 spells on cooldown, and replay the early Linirea stages until the pair rotation clicks.",
      links: [
        { label: "Beginners guide", href: "/beginners-guide/", description: "Step-by-step onboarding." },
        { label: "Controls and mechanics", href: "/controls/", description: "Hero-pair combat and tower placement." },
      ],
    },
    {
      id: "series",
      type: "prose",
      heading: "Series and Wiki Surfaces",
      body:
        "Kingdom Rush 6: Genesis TD is the seventh main entry in the Ironhide Kingdom Rush tower-defense series, set as a prequel to the original Kingdom Rush. The wiki hub currently points at the Steam Community Hub, r/KingdomRush, and the Ironhide newsroom as the launch-week FAQ surface.",
      links: [
        { label: "Kingdom Rush 6 wiki", href: "/wiki/", description: "Launch-week FAQ hub." },
        { label: "KR6 vs Frontiers", href: "/vs-frontiers/", description: "Series-fan comparison." },
      ],
    },
  ],
  faqIds: ["kr6-release-date", "kr6-demo", "kr6-price", "kr6-platforms"],
  relatedPageIds: [
    "release-date-status",
    "demo-download",
    "price-editions",
    "platforms-faq",
    "heroes-list",
    "towers-list",
    "campaign-stages",
    "enemies-races",
    "bosses-list",
    "controls-mechanics",
    "beginners-guide",
    "vs-frontiers",
    "wiki-faq",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-18",
};