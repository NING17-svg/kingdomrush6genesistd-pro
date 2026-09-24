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
  h1: "Kingdom Rush 6: Genesis TD Launch Hub: Released, Platforms, and Roster",
  seoTitle: "Kingdom Rush 6: Genesis TD Launch Hub: Released, Platforms & Roster",
  metaDescription:
    "Kingdom Rush 6: Genesis TD launched Sep 24, 2026 on Steam, iOS App Store, and Google Play. Steam price $17.99 (10% intro offer ending Oct 8); mobile $6.99 with in-app purchases.",
  summary:
    "Launch-week reference hub for Kingdom Rush 6: Genesis TD — release status, Steam + mobile pricing, platform matrix, and roster reference points.",
  hero: {
    eyebrow: "Launch hub",
    subtitle: site.tagline,
    ctas: [
      { label: "Release date", href: "/release-date/" },
      { label: "Price", href: "/price/" },
      { label: "Platforms", href: "/platforms/" },
      { label: "Known issues", href: "/known-issues/" },
    ],
  },
  quickAnswer:
    "Kingdom Rush 6: Genesis TD released on September 24, 2026 on Steam (Windows + macOS), the iOS App Store, and Google Play. Steam is $17.99 with a 10% launch intro offer ending Oct 8, 2026 (was $19.99); iOS and Android are $6.99 with in-app purchases. The Ironhide tower-defense prequel ships with a 12-hero pair-deployment roster and a revamped four-family tower upgrade system across 18 stages in three Linirea regions.",
  keyFacts: [
    { label: "Released", value: "Sep 24, 2026 (Steam + iOS + Android)" },
    { label: "Steam price", value: "$17.99 (10% intro, was $19.99)" },
    { label: "Intro offer", value: "Ends Oct 8, 2026" },
    { label: "Mobile price", value: "$6.99 + in-app purchases" },
    { label: "Platforms", value: "Steam, iOS, Android" },
    { label: "Steam reviews", value: "153 (Mixed)" },
  ],
  modules: [
    {
      id: "launch-status",
      type: "prose",
      heading: "Launch & Status",
      body:
        "Kingdom Rush 6: Genesis TD is out on Steam (AppID 4259190), the iOS App Store (id6759664029), and Google Play (com.ironhidegames.android.kingdomrush6.genesis). The Ironhide News/Details/523 launch post confirms the same-day PC + mobile ship. Steam is $17.99 with a 10% launch intro offer (was $19.99) running through Oct 8, 2026; iOS and Android are $6.99 with in-app purchases. The Steam Community Hub for AppID 4259190 is the day-one surface for bugs and balance notes.",
      links: [
        { label: "Release date status", href: "/release-date/", description: "Confirm the Sep 24, 2026 launch across PC and mobile." },
        { label: "Price and editions", href: "/price/", description: "Live Steam regional price and mobile premium." },
        { label: "Platforms matrix", href: "/platforms/", description: "Steam vs iOS vs Android vs unannounced consoles." },
        { label: "Known issues", href: "/known-issues/", description: "Ironhide's post-launch bug list and workarounds." },
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
  faqIds: ["kr6-release-date", "kr6-price", "kr6-platforms", "kr6-known-issues"],
  relatedPageIds: [
    "release-date-status",
    "price-editions",
    "platforms-faq",
    "known-issues",
    "heroes-list",
    "towers-list",
    "campaign-stages",
    "enemies-races",
    "bosses-list",
    "controls-mechanics",
    "beginners-guide",
    "vs-frontiers",
    "wiki",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-25",
};