import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

// Shared Steam official source links reused across pages
const officialSources = site.officialSources;

export const kr6Pages: PageContent[] = [
  {
    id: "release-date-status",
    translationKey: "release-date-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release-date",
    url: "/release-date",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD release date and launch status",
    seoTitle: "Kingdom Rush 6: Genesis TD Release Date: Sep 24, 2026 Status",
    metaDescription:
      "Kingdom Rush 6: Genesis TD release date is planned for September 24, 2026 on Steam. Check the live pre-launch status, demo availability, and timing notes.",
    summary:
      "Planned Sep 24, 2026 ship on Steam with pre-order open and a Steam Next Fest demo live. Status as of research date 2026-09-18.",
    hero: {
      eyebrow: "Launch status",
      subtitle:
        "Confirm the planned Sep 24, 2026 release, pre-order, and demo availability before buying.",
      ctas: [
        { label: "Demo download", href: "/demo/" },
        { label: "Price & pre-order", href: "/price/" },
        { label: "System requirements", href: "/system-requirements/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD is planned for release on Steam on September 24, 2026, per the Steam store page for AppID 4259190 and the Ironhide press release. As of September 18, 2026 the title is in pre-launch: pre-order is open with a -30% launch discount and the Steam Next Fest demo is downloadable.",
    keyFacts: [
      { label: "Planned release", value: "Sep 24, 2026 (Steam)" },
      { label: "Pre-order", value: "Open at -30%" },
      { label: "Demo", value: "Steam Next Fest live" },
      { label: "Status window", value: "Pre-launch as of 2026-09-18" },
    ],
    modules: [
      {
        id: "ship-date",
        type: "prose",
        heading: "Planned Sep 24, 2026 ship",
        body:
          "The September 24, 2026 release date is the authoritative planned ship date for Kingdom Rush 6: Genesis TD on Steam. The Steam store page for AppID 4259190 lists Sep 24, 2026 as the planned release date, and SteamDB's AppID 4259190 metadata snapshot mirrors the same date. The Ironhide Kingdom Rush 6: Genesis TD press release on irondune.com confirms the Sep 24 window as the planned launch.",
      },
      {
        id: "pre-launch-status",
        type: "prose",
        heading: "Status as of research date (2026-09-18)",
        body:
          "Kingdom Rush 6: Genesis TD is currently in the pre-launch / pre-order / demo-available window on Steam. Pre-order is open with a -30% launch discount, the Steam Next Fest demo is downloadable from the Steam store page, and the Steam Community Hub for AppID 4259190 is open for launch-day announcements. The Steam store release widget still shows the planned Sep 24, 2026 date, not a final released status.",
      },
      {
        id: "confirm-live",
        type: "prose",
        heading: "How to confirm the live release date",
        body:
          "Open the Steam store page for AppID 4259190 and look at the right-rail release widget. As of research date the widget shows Sep 24, 2026 as the planned release. SteamDB AppID 4259190 mirrors that date and is the second-best confirmation. Any shift would surface first on the Ironhide newsroom and the Steam Community Hub announcements.",
        links: officialSources,
      },
      {
        id: "legacy-mobile",
        type: "prose",
        heading: "Legacy Kingdom Rush mobile release dates",
        body:
          "Some autocomplete clusters surface 'Kingdom Rush 6 mobile release date' or 'Kingdom Rush 6 Android release date.' Those refer to the legacy Kingdom Rush mobile series (the iOS and Android titles Ironhide shipped before the Steam prequel line), not Kingdom Rush 6: Genesis TD. Kingdom Rush 6: Genesis TD ships first on Steam with a Sep 24, 2026 planned ship.",
      },
    ],
    faqIds: ["kr6-release-date", "kr6-release-shift", "kr6-ios-android"],
    relatedPageIds: ["demo-download", "price-editions", "system-requirements", "platforms-faq"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD System Requirements",
    seoTitle: "Kingdom Rush 6: Genesis TD System Requirements (PC & Mac)",
    metaDescription:
      "Confirmed Kingdom Rush 6: Genesis TD system requirements for Windows 10 and macOS 10.13, with Apple M1 and Intel Core M coverage and a Steam store verify reminder.",
    summary:
      "Windows 10 minimum and macOS 10.13 minimum with Apple M1 and Intel Core M coverage. Verify the live Steam store for any updates before installing.",
    hero: {
      eyebrow: "PC & Mac specs",
      subtitle:
        "Check the Windows and macOS minimum specs before installing, and verify the live Steam store listing for updates.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Price & pre-order", href: "/price/" },
        { label: "Platforms matrix", href: "/platforms/" },
      ],
    },
    quickAnswer:
      "The official Kingdom Rush 6: Genesis TD system requirements list Windows 10 as the minimum PC OS and macOS 10.13 as the minimum Mac OS, with Apple M1 silicon or an Intel Core M processor supported. The Steam store page is the authoritative source for both minimum and recommended specs.",
    keyFacts: [
      { label: "Windows minimum", value: "Windows 10" },
      { label: "macOS minimum", value: "macOS 10.13" },
      { label: "Apple silicon", value: "Apple M1 supported" },
      { label: "Intel Mac", value: "Intel Core M supported" },
      { label: "Graphics", value: "OpenGL 3.0 baseline" },
    ],
    modules: [
      {
        id: "windows",
        type: "prose",
        heading: "Windows minimum specs",
        body:
          "Kingdom Rush 6: Genesis TD system requirements for Windows are intentionally modest, matching the 2D tower-defense genre and Ironhide's history of lightweight PC ports. The Steam store page lists Windows 10 as the supported minimum OS for launch. The GPU bar is set for hardware that was mainstream a decade ago. The recommended tier typically doubles available memory and storage headroom. If your laptop is on the edge of the minimum tier, close background apps like browser tabs, Discord, and OBS before launching a long stage in the 18-stage campaign.",
      },
      {
        id: "macos",
        type: "prose",
        heading: "macOS minimum specs and Apple Silicon support",
        body:
          "The Kingdom Rush 6: Genesis TD system requirements for macOS list macOS 10.13 as the minimum version, with Apple M1 silicon or an Intel Core M processor supported. Apple M1 buyers can launch the title through the macOS client with native performance, while Intel Core M owners get a supported path on the same OpenGL 3.0 baseline. Ironhide has not announced a separate Metal-accelerated build, so the macOS tier relies on the same graphics interface used by Kingdom Rush 5: Alliance TD.",
      },
      {
        id: "console-deck",
        type: "prose",
        heading: "Console and Steam Deck status",
        body:
          "Console support for Kingdom Rush 6: Genesis TD is not announced as of 2026-09-18. The Steam store page lists Windows and macOS only. Steam Deck verification status is also not announced; given the modest Windows minimum tier and the controller-friendly input model, the title is a reasonable candidate for handheld play, but Ironhide has not formally verified the build for Steam Deck. Treat the device as a portable PC and benchmark the Windows minimum tier.",
      },
      {
        id: "verify",
        type: "prose",
        heading: "Verify the live Steam store before installing",
        body:
          "The Steam store listing for AppID 4259190 is the source of truth for the Kingdom Rush 6: Genesis TD system requirements. Ironhide can change the minimum or recommended spec list between this research date and the launch window. Re-open the Steam store page the day you install to confirm the published minimum OS, processor, memory, storage, and graphics tier still match the values quoted on this page. SteamDB AppID 4259190 mirrors the Steam store metadata and updates in near real time.",
        links: officialSources,
      },
    ],
    faqIds: ["kr6-windows-11", "kr6-old-mac", "kr6-console", "kr6-steam-deck", "kr6-storage"],
    relatedPageIds: ["release-date-status", "price-editions", "platforms-faq"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "price-editions",
    translationKey: "price-editions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "price",
    url: "/price",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD Steam price and pre-order terms",
    seoTitle: "Kingdom Rush 6: Genesis TD Price & Pre-Order: -30% Launch Discount",
    metaDescription:
      "Kingdom Rush 6: Genesis TD price is shown live on the Steam store page. Pre-order -30% launch discount is published by Ironhide; check the live Steam regional price before buying.",
    summary:
      "Live Steam regional price with -30% launch pre-order discount. Price may change post-launch; check the live Steam store before purchase.",
    hero: {
      eyebrow: "Price & pre-order",
      subtitle:
        "Confirm the live Steam regional price and Ironhide's -30% pre-order launch discount.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Demo download", href: "/demo/" },
        { label: "System requirements", href: "/system-requirements/" },
      ],
    },
    quickAnswer:
      "The Steam store page lists the current regional price for Kingdom Rush 6: Genesis TD. Ironhide's published pre-order terms include a -30% launch discount that holds through the planned September 24, 2026 ship; price may change post-launch.",
    keyFacts: [
      { label: "Price source", value: "Live Steam store page" },
      { label: "Pre-order", value: "-30% launch discount" },
      { label: "Discount window", value: "Through planned Sep 24, 2026 ship" },
      { label: "Editions", value: "Single Steam edition at launch" },
    ],
    modules: [
      {
        id: "live-price",
        type: "prose",
        heading: "Live Steam regional price",
        body:
          "The Steam store page for Kingdom Rush 6: Genesis TD lists the current regional price as the authoritative source. Final regional pricing varies by Steam region and currency. The Ironhide press release on irondune.com restates the pre-order discount terms but does not list specific regional prices — always check the live Steam store page in your region before purchase.",
      },
      {
        id: "preorder",
        type: "prose",
        heading: "Pre-order -30% launch discount",
        body:
          "Ironhide's published pre-order terms include a -30% launch discount that holds through the planned September 24, 2026 ship. Pre-order is open on the Steam store page for AppID 4259190. Once the title launches, the discount is expected to expire on the schedule published by Ironhide; price may change post-launch. There is no public edition tier or DLC bundle announced as of research date.",
      },
      {
        id: "verify",
        type: "prose",
        heading: "Verify the live Steam price before buying",
        body:
          "Before purchase, open the Steam store page in your region and confirm the displayed price, the pre-order discount badge, and the planned Sep 24, 2026 release widget. If the price has changed between this page and the live Steam listing, the live Steam store is authoritative. SteamDB AppID 4259190 mirrors package-level pricing but does not replace the regional store view.",
        links: officialSources,
      },
    ],
    faqIds: ["kr6-price-now", "kr6-preorder-window", "kr6-editions"],
    relatedPageIds: ["release-date-status", "demo-download", "system-requirements"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "demo-download",
    translationKey: "demo-download",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo",
    url: "/demo",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD demo: Steam Next Fest download",
    seoTitle: "Kingdom Rush 6: Genesis TD Demo: Steam Next Fest Download",
    metaDescription:
      "The Kingdom Rush 6: Genesis TD demo is downloadable from the Steam store page via the Steam Next Fest build. Find the demo access path and what to expect from the pre-purchase trial.",
    summary:
      "Steam Next Fest demo is downloadable from the Steam store page for AppID 4259190 ahead of the planned Sep 24, 2026 launch.",
    hero: {
      eyebrow: "Demo access",
      subtitle:
        "Download the Steam Next Fest demo from the Steam store page for AppID 4259190 before the planned Sep 24, 2026 launch.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Price & pre-order", href: "/price/" },
        { label: "Platforms matrix", href: "/platforms/" },
      ],
    },
    quickAnswer:
      "Yes — the Kingdom Rush 6: Genesis TD Steam Next Fest demo is downloadable from the Steam store page for AppID 4259190 ahead of the planned September 24, 2026 launch. Demo content may differ from the launch build.",
    keyFacts: [
      { label: "Demo source", value: "Steam store AppID 4259190" },
      { label: "Build", value: "Steam Next Fest" },
      { label: "Pre-purchase", value: "Trial remains after launch" },
      { label: "Content scope", value: "Unannounced for demo" },
    ],
    modules: [
      {
        id: "demo-access",
        type: "prose",
        heading: "How to download the demo",
        body:
          "Open the Steam store page for Kingdom Rush 6: Genesis TD (AppID 4259190) and look for the Steam Next Fest demo access button on the right rail. Steam demos download through the regular Steam client once the demo is added to your library. The demo is also surfaced through the Steam Next Fest hub on Steam for the duration of the festival window.",
      },
      {
        id: "demo-scope",
        type: "prose",
        heading: "What to expect from the demo",
        body:
          "The Kingdom Rush 6: Genesis TD demo gives buyers a hands-on look at the pre-launch build before committing to the -30% pre-order. Demo content may differ from the launch build — Ironhide has not announced the exact scope of the demo. Expect early Linirea stages, a slice of the 12-hero pair-deployment roster, and access to the revamped four-family tower upgrade system. The demo remains available as a pre-purchase trial after the planned September 24, 2026 launch.",
      },
      {
        id: "post-launch",
        type: "prose",
        heading: "Post-launch demo status",
        body:
          "After the planned September 24, 2026 launch, the Steam Next Fest demo window closes, but the demo usually remains available as a pre-purchase trial on the Steam store page. If you skip pre-order and want to try before buying, check the live Steam store page near ship day for the post-launch demo availability badge.",
        links: officialSources,
      },
    ],
    faqIds: ["kr6-demo-link", "kr6-demo-content", "kr6-demo-after-launch"],
    relatedPageIds: ["release-date-status", "price-editions", "platforms-faq"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "heroes-list",
    translationKey: "heroes-list",
    locale: "en-US",
    routeKind: "fixed",
    slug: "heroes",
    url: "/heroes",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Kingdom Rush 6: Genesis TD heroes: 12-hero roster and pair deployment",
    seoTitle: "Kingdom Rush 6: Genesis TD Heroes: 12 Roster & Pair Deployment",
    metaDescription:
      "Kingdom Rush 6: Genesis TD launches with 12 epic heroes. Browse the 11 publicly named heroes with lore tags, the pair-deployment mechanic, and the Steam store ability scope.",
    summary:
      "12 epic heroes drive the pair-deployment mechanic. 11 are publicly named; per-hero HP and ability numbers are unannounced.",
    hero: {
      eyebrow: "Hero roster",
      subtitle:
        "Browse the 12-hero pair-deployment roster and the official ability scope from the Steam store.",
      ctas: [
        { label: "Tower roster", href: "/towers/" },
        { label: "Controls & mechanics", href: "/controls/" },
        { label: "Beginners guide", href: "/beginners-guide/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD launches with 12 epic heroes selected per stage as a pair, per the Ironhide press release. 11 heroes are publicly named through Steam Community Devlogs #27 and #29; the 12th hero has not been announced as of research date.",
    keyFacts: [
      { label: "Hero count", value: "12 epic heroes" },
      { label: "Publicly named", value: "11 of 12" },
      { label: "Deployment", value: "Pick 2 heroes per stage" },
      { label: "Per-hero numbers", value: "Not announced" },
    ],
    modules: [
      {
        id: "named-roster",
        type: "entity-grid",
        heading: "The 11 publicly revealed heroes",
        items: [
          {
            title: "Gerald",
            summary: "Frontline knight anchor from the Linirean Order.",
            badge: "Knight",
            href: "/heroes/",
          },
          {
            title: "Zefira",
            summary: "Archer scout tied to the Silveroak rangers.",
            badge: "Archer",
            href: "/heroes/",
          },
          {
            title: "Bolin",
            summary: "Dwarven defender recruited from the Valardul holds.",
            badge: "Barracks",
            href: "/heroes/",
          },
          {
            title: "Connor",
            summary: "Knights Order captain with shield-and-blade melee.",
            badge: "Knight",
            href: "/heroes/",
          },
          {
            title: "Ignus",
            summary: "Fire-wielding mage from the Stormcloud Sorcerers.",
            badge: "Mage",
            href: "/heroes/",
          },
          {
            title: "Malik",
            summary: "Desert skirmisher paired with blade and dune tactics.",
            badge: "Scout",
            href: "/heroes/",
          },
          {
            title: "Oni",
            summary: "Demonic champion introduced in Steam Devlog #27.",
            badge: "Champion",
            href: "/heroes/",
          },
          {
            title: "Drakkan",
            summary: "Dragon-rider frontline with Wyvern-flying mobility.",
            badge: "Dragon",
            href: "/heroes/",
          },
          {
            title: "Ashbite",
            summary: "Draconic bruiser anchoring the dragon-frontline role.",
            badge: "Dragon",
            href: "/heroes/",
          },
          {
            title: "Rhodes the Earth Bastion",
            summary: "Earth-bastion defender revealed in Steam Devlog #29.",
            badge: "Bastion",
            href: "/heroes/",
          },
          {
            title: "Gemina the Arcane Illusionist",
            summary: "Arcane Illusionist from the Arcania Order, revealed in Devlog #29.",
            badge: "Illusionist",
            href: "/heroes/",
          },
          {
            title: "Illiana the Dragon Tamer",
            summary: "Dragon Tamer from the Linirean riding corps, revealed in Devlog #29.",
            badge: "Tamer",
            href: "/heroes/",
          },
        ],
      },
      {
        id: "twelfth-placeholder",
        type: "prose",
        heading: "The 12th hero is still to be announced",
        body:
          "The Steam store and the Ironhide press release list 12 epic heroes, but only 11 are publicly named as of research date. Ironhide has not confirmed the identity of the 12th hero. Treat any third-party roster or count that lists a 12th named hero as unverified until Ironhide or the Steam Community Hub publishes the reveal.",
      },
      {
        id: "pair-deployment",
        type: "prose",
        heading: "How pair deployment works",
        body:
          "Pair deployment is the headline hero mechanic for Kingdom Rush 6: Genesis TD: each stage lets the player pick 2 of the 12 epic heroes. The pair rotates between stages, so choosing complementary roles — frontline tank plus backline damage, scout versus zone control — is part of the launch-week meta. Per-hero HP, ability cooldowns, and unlock tree details are not announced; treat any third-party 'best heroes ranked' list as unverified until Ironhide or the Steam Community Hub confirms per-hero numbers.",
        links: [
          { label: "Controls & mechanics", href: "/controls/", description: "Pair flow and 9-spell kit." },
        ],
      },
      {
        id: "reveal-sources",
        type: "prose",
        heading: "Where the roster was revealed",
        body:
          "The hero count and pair-deployment mechanic come from the Steam store page for AppID 4259190 and the Ironhide press release on irondune.com. Steam Community Hub Devlog #27 (Sept 4, 2026) introduced Oni with a dedicated character post. Devlog #29 'The Full Lineup' revealed Rhodes, Gemina, and Illiana as the final three named heroes. Cross-reference the live Steam Community Hub threads under AppID 4259190 for launch-day additions.",
      },
    ],
    faqIds: ["kr6-hero-count", "kr6-hero-abilities", "kr6-hero-pair-meta"],
    relatedPageIds: ["towers-list", "controls-mechanics", "beginners-guide"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },
  {
    id: "towers-list",
    translationKey: "towers-list",
    locale: "en-US",
    routeKind: "fixed",
    slug: "towers",
    url: "/towers",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Kingdom Rush 6: Genesis TD towers: 15-tower roster and revamped upgrade system",
    seoTitle: "Kingdom Rush 6: Genesis TD Towers: 15 Roster & Upgrade System",
    metaDescription:
      "Kingdom Rush 6: Genesis TD ships with 15 towers across the 4 classic families (Barracks, Archer, Mage, Artillery) and the revamped upgrade system. Browse all 15 publicly named towers with family tags and lore sources.",
    summary:
      "15 towers across 4 classic families with the revamped upgrade system. Dwarven Culverin is the live balance-watch surface.",
    hero: {
      eyebrow: "Tower roster",
      subtitle:
        "Walk the 15-tower roster and the revamped upgrade system across the 4 classic families.",
      ctas: [
        { label: "Hero roster", href: "/heroes/" },
        { label: "Controls & mechanics", href: "/controls/" },
        { label: "Beginners guide", href: "/beginners-guide/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD ships with 15 publicly named towers across the 4 classic families (Barracks, Archer, Mage, Artillery) and the revamped upgrade system. Specific per-tower DPS, cost, and exact upgrade path numbers are not announced as of research date.",
    keyFacts: [
      { label: "Tower count", value: "15 towers" },
      { label: "Families", value: "Barracks / Archer / Mage / Artillery" },
      { label: "Upgrade system", value: "Revamped" },
      { label: "Balance watch", value: "Dwarven Culverin" },
      { label: "Per-tower numbers", value: "Not announced" },
    ],
    modules: [
      {
        id: "named-roster",
        type: "entity-grid",
        heading: "The 15 publicly revealed towers",
        items: [
          {
            title: "Archer Garrison",
            summary: "Basic Archer family tower for steady lane DPS.",
            badge: "Archer",
            href: "/towers/",
          },
          {
            title: "Knights Order",
            summary: "Basic Barracks family tower anchoring the Linirean frontline.",
            badge: "Barracks",
            href: "/towers/",
          },
          {
            title: "Royal Catapult",
            summary: "Basic Artillery family tower for single-target burst.",
            badge: "Artillery",
            href: "/towers/",
          },
          {
            title: "Scholar Mage",
            summary: "Basic Mage family tower from the Stormcloud Sorcerers.",
            badge: "Mage",
            href: "/towers/",
          },
          {
            title: "Dwarven Culverin",
            summary: "Advanced Artillery family tower. Balance watch — community threads flag it as the live balance surface.",
            badge: "Artillery · Balance watch",
            href: "/towers/",
          },
          {
            title: "Elven Elite Ranger",
            summary: "Advanced Archer family tower recruited from the Silveroak rangers.",
            badge: "Archer",
            href: "/towers/",
          },
          {
            title: "Wildcat Huntresses",
            summary: "Advanced Barracks family unit from the Valardul war-cats.",
            badge: "Barracks",
            href: "/towers/",
          },
          {
            title: "Ironbark Treant",
            summary: "Elite Barracks family anchor from the Linirean treants.",
            badge: "Barracks",
            href: "/towers/",
          },
          {
            title: "Gold Prospectors",
            summary: "Elite Barracks family support that pays for itself in gold.",
            badge: "Barracks",
            href: "/towers/",
          },
          {
            title: "Sunray Master",
            summary: "Elite Mage family turret from the Church of Light.",
            badge: "Mage",
            href: "/towers/",
          },
          {
            title: "Light Priestess",
            summary: "Elite Mage family healer from the Church of Light.",
            badge: "Mage",
            href: "/towers/",
          },
          {
            title: "Cursed Crossbows",
            summary: "Elite Archer family turret with a cursed-arc volleypayload.",
            badge: "Archer",
            href: "/towers/",
          },
          {
            title: "Alchemist Shack",
            summary: "Elite Artillery family alchemist firing acid flasks.",
            badge: "Artillery",
            href: "/towers/",
          },
          {
            title: "Arcane Forger",
            summary: "Elite Mage family support from the Arcania Order.",
            badge: "Mage",
            href: "/towers/",
          },
          {
            title: "Sentry Watchtower",
            summary: "Elite Archer family watchtower for long-lane coverage.",
            badge: "Archer",
            href: "/towers/",
          },
        ],
      },
      {
        id: "families",
        type: "prose",
        heading: "The 4 classic tower families",
        body:
          "Kingdom Rush 6: Genesis TD uses the four classic tower families that have anchored the Ironhide Kingdom Rush series since the 2011 launch — Barracks (frontline melee), Archer (lane DPS), Mage (area-of-effect damage), and Artillery (high single-target burst). The Steam store page lists these family labels verbatim, and the Saving Content Classic Mode article restates the same four families for the Classic Mode run.",
      },
      {
        id: "balance-watch",
        type: "prose",
        heading: "Dwarven Culverin balance-watch note",
        body:
          "Community threads on the Steam Community Hub flag Dwarven Culverin as the current balance-watch surface. If the launch build lands over- or under-tuned, expect this tower to receive the first hotfix. Watch the Steam Community Hub under AppID 4259190 for launch-day patch notes before locking a meta around it.",
      },
      {
        id: "upgrade-system",
        type: "prose",
        heading: "The revamped upgrade system",
        body:
          "The Ironhide press release on irondune.com describes a revamped upgrade system for Kingdom Rush 6: Genesis TD. The system changes the way players progress each tower across the 18 stages but the exact per-tower upgrade path numbers are not announced as of research date. Treat any third-party guide that lists specific upgrade costs as unverified until it is checked against the launch build or the Steam Community Hub announcements.",
      },
    ],
    faqIds: ["kr6-tower-families", "kr6-tower-upgrade", "kr6-tower-meta"],
    relatedPageIds: ["heroes-list", "controls-mechanics", "beginners-guide"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },
  {
    id: "campaign-stages",
    translationKey: "campaign-stages",
    locale: "en-US",
    routeKind: "fixed",
    slug: "campaign",
    url: "/campaign",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Kingdom Rush 6: Genesis TD campaign: 18 stages across 3 Linirea regions",
    seoTitle: "Kingdom Rush 6: Genesis TD Campaign: 18 Stages in 3 Linirea Regions",
    metaDescription:
      "Kingdom Rush 6: Genesis TD ships with an 18-stage campaign across 3 Linirea regions. Stage order and unlock tree are unannounced as of research date.",
    summary:
      "18 stages across 3 Linirea regions. Stage order and unlock tree are not announced; check the Steam Community Hub for launch-day walkthroughs.",
    hero: {
      eyebrow: "Campaign stages",
      subtitle:
        "Walk the 18-stage campaign across 3 Linirea regions and the boss-encounter framing.",
      ctas: [
        { label: "Enemy races", href: "/enemies/" },
        { label: "Boss roster", href: "/bosses/" },
        { label: "Beginners guide", href: "/beginners-guide/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD ships with 18 campaign stages across 3 Linirea regions, per the Steam store page and the Ironhide press release. Stage order and unlock tree are not announced as of research date.",
    keyFacts: [
      { label: "Stages", value: "18 campaign stages" },
      { label: "Regions", value: "3 Linirea regions" },
      { label: "Stage order", value: "Not announced" },
      { label: "Unlock tree", value: "Not announced" },
    ],
    modules: [
      {
        id: "campaign-overview",
        type: "prose",
        heading: "Campaign scope",
        body:
          "Kingdom Rush 6: Genesis TD ships with 18 campaign stages across 3 Linirea regions. The Linirea setting is the fantasy-medieval kingdom that frames the prequel story. The Steam store page describes the campaign as the narrative bridge between the older Kingdom Rush timeline and the Genesis prequel. Region names and individual stage titles are not announced as of research date — Ironhide has not published a campaign walkthrough.",
      },
      {
        id: "classic-mode",
        type: "prose",
        heading: "Classic Mode path",
        body:
          "Classic Mode, announced on the 15-year anniversary of the original Kingdom Rush, offers a single-hero run through the campaign with the four original tower families and the Rain of Fire and Reinforcements spells. Classic Mode is the Kingdom Rush 6: Genesis TD take on the 2011 Kingdom Rush formula and is described in the Saving Content article.",
      },
      {
        id: "boss-encounters",
        type: "prose",
        heading: "Boss encounters inside the campaign",
        body:
          "The 6 colossal boss fights in Kingdom Rush 6: Genesis TD map across the campaign. The Steam store description frames the bosses as the encounter climax for the campaign, and the Ironhide press release restates the 6-boss count. Specific boss HP and counter-tactic detail are unannounced as of research date.",
        links: [
          { label: "Boss roster", href: "/bosses/", description: "6 colossal boss fights." },
          { label: "Enemy races", href: "/enemies/", description: "5 races and 40+ units." },
        ],
      },
    ],
    faqIds: ["kr6-campaign-length", "kr6-classic-mode", "kr6-region-names"],
    relatedPageIds: ["enemies-races", "bosses-list", "beginners-guide"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "enemies-races",
    translationKey: "enemies-races",
    locale: "en-US",
    routeKind: "fixed",
    slug: "enemies",
    url: "/enemies",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Kingdom Rush 6: Genesis TD enemies: 5 races and 40+ units",
    seoTitle: "Kingdom Rush 6: Genesis TD Enemies: 5 Races & 40+ Units",
    metaDescription:
      "Kingdom Rush 6: Genesis TD ships with 40+ unique enemies across 5 races. Race identity and unit counts are confirmed; per-unit stats are unannounced.",
    summary:
      "5 races and 40+ unique enemy units. Per-unit HP, damage, and resistance numbers are unannounced as of research date.",
    hero: {
      eyebrow: "Enemy races",
      subtitle:
        "Browse the 5 races and 40+ enemy units that anchor the Kingdom Rush 6: Genesis TD wave roster.",
      ctas: [
        { label: "Boss roster", href: "/bosses/" },
        { label: "Campaign stages", href: "/campaign/" },
        { label: "Wiki hub", href: "/wiki/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD ships with 40+ unique enemy units across 5 races, per the Steam store page and the Ironhide press release. Per-unit HP, damage, and resistance numbers are not announced as of research date.",
    keyFacts: [
      { label: "Unit count", value: "40+ unique enemies" },
      { label: "Race count", value: "5 races" },
      { label: "Per-unit stats", value: "Not announced" },
      { label: "Boss set", value: "Subset of 6 colossal bosses" },
    ],
    modules: [
      {
        id: "race-scope",
        type: "prose",
        heading: "Race and unit counts",
        body:
          "Kingdom Rush 6: Genesis TD launches with 5 races and 40+ unique enemy units, per the Steam store page and the Ironhide press release on irondune.com. The race identities follow the Kingdom Rush series tradition of fantasy archetypes (Linirea kingdom-aligned defenders, woodland creatures, mountain trolls, dark fantasy corruption, and other launch-week reveals). Specific race names are not announced at the per-race level as of research date.",
      },
      {
        id: "boss-subset",
        type: "prose",
        heading: "Bosses as a subset",
        body:
          "The 6 colossal boss fights are a subset of the enemy roster — each boss represents the encounter-framing climax for a campaign stage. The Steam store description frames the bosses as the antagonist face of the corruption arc; specific per-boss HP and counter-tactic detail are unannounced.",
        links: [
          { label: "Boss roster", href: "/bosses/", description: "6 colossal boss fights." },
        ],
      },
    ],
    faqIds: ["kr6-enemy-races", "kr6-enemy-stats"],
    relatedPageIds: ["bosses-list", "campaign-stages", "wiki"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "bosses-list",
    translationKey: "bosses-list",
    locale: "en-US",
    routeKind: "fixed",
    slug: "bosses",
    url: "/bosses",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Kingdom Rush 6: Genesis TD bosses: 6 colossal encounters",
    seoTitle: "Kingdom Rush 6: Genesis TD Bosses: 6 Colossal Encounters",
    metaDescription:
      "Kingdom Rush 6: Genesis TD ships with 6 colossal boss encounters. Boss HP and counter-tactic detail are unannounced as of research date.",
    summary:
      "6 colossal bosses map across the campaign. Boss HP and counter-tactic detail are unannounced as of research date.",
    hero: {
      eyebrow: "Boss roster",
      subtitle:
        "Find the 6 colossal boss fights that anchor the Kingdom Rush 6: Genesis TD campaign.",
      ctas: [
        { label: "Enemy races", href: "/enemies/" },
        { label: "Campaign stages", href: "/campaign/" },
        { label: "Wiki hub", href: "/wiki/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD ships with 6 colossal boss encounters, per the Steam store page and the Ironhide press release. Boss HP, counter-tactic detail, and per-boss unlock are not announced as of research date.",
    keyFacts: [
      { label: "Boss count", value: "6 colossal bosses" },
      { label: "Framing", value: "Corruption-arc antagonist" },
      { label: "Per-boss HP", value: "Not announced" },
      { label: "Counter tactics", value: "Not announced" },
    ],
    modules: [
      {
        id: "boss-framing",
        type: "prose",
        heading: "How the bosses fit the campaign",
        body:
          "The 6 colossal bosses map across the 18-stage campaign as the encounter-framing climax for selected stages. The Steam store description frames the bosses as the antagonist face of the corruption arc, and the Ironhide press release restates the 6-boss count. Specific per-boss HP and unlock paths are not announced as of research date.",
      },
      {
        id: "boss-counter",
        type: "prose",
        heading: "Counter-strategy scope",
        body:
          "Specific boss counter-strategy detail — which towers and heroes break a particular boss encounter — is not announced as of research date. Use the launch-week Steam Community Hub threads under AppID 4259190 for the post-launch counter-strategy writeups. Pre-launch, plan around the general pair-deployment + four-family tower framework described on the heroes and towers pages.",
        links: [
          { label: "Hero roster", href: "/heroes/", description: "12-hero pair deployment." },
          { label: "Tower roster", href: "/towers/", description: "15 towers + revamped upgrade system." },
        ],
      },
    ],
    faqIds: ["kr6-boss-count", "kr6-boss-counter"],
    relatedPageIds: ["enemies-races", "campaign-stages", "wiki"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "platforms-faq",
    translationKey: "platforms-faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms",
    url: "/platforms",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD platforms: Windows, macOS, and the legacy mobile line",
    seoTitle: "Kingdom Rush 6: Genesis TD Platforms: Windows, macOS & Legacy Mobile",
    metaDescription:
      "Kingdom Rush 6: Genesis TD launches on Windows and macOS on Steam. Steam Deck verification, console, iOS, and Android support are not announced as of research date.",
    summary:
      "Windows and macOS only at launch. iOS, Android, console, and Steam Deck verification are not announced; legacy Kingdom Rush mobile titles are a separate product line.",
    hero: {
      eyebrow: "Platform matrix",
      subtitle:
        "Clarify Windows, macOS, and the legacy Kingdom Rush mobile series before buying.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "System requirements", href: "/system-requirements/" },
        { label: "Demo download", href: "/demo/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD launches on Windows and macOS only, per the Steam store page for AppID 4259190. Steam Deck verification, console, iOS, and Android support are not announced as of research date. iOS and Android release-date queries refer to the legacy Kingdom Rush mobile series, a separate Ironhide product line.",
    keyFacts: [
      { label: "Launch platforms", value: "Windows + macOS" },
      { label: "Steam Deck", value: "Verification not announced" },
      { label: "Console", value: "Not announced" },
      { label: "iOS / Android", value: "Refers to legacy mobile series" },
      { label: "Controller", value: "Partial Controller Support" },
    ],
    modules: [
      {
        id: "launch-platforms",
        type: "prose",
        heading: "Launch platforms: Windows and macOS",
        body:
          "The Steam store page for Kingdom Rush 6: Genesis TD (AppID 4259190) lists Windows and macOS as the launch platforms. The Steam store also lists Partial Controller Support and Steam Achievements. Steam Cloud and Family Sharing are listed in the Steam store tags for the title. Buyers looking for Kingdom Rush 6 on PlayStation, Xbox, or Switch should treat those results as legacy Kingdom Rush mobile titles, not the current Steam release.",
      },
      {
        id: "legacy-mobile",
        type: "prose",
        heading: "Legacy Kingdom Rush mobile titles",
        body:
          "The 'kingdom rush 6 ios' autocomplete cluster refers to the legacy Kingdom Rush mobile series — the iOS and Android titles Ironhide shipped before the Steam prequel line. Kingdom Rush 6: Genesis TD on Steam is a separate product line from the mobile legacy; the Steam launch is the planned September 24, 2026 ship on Windows and macOS. If a reader asks about Kingdom Rush 6 on iOS or Android, point them at the mobile legacy product line.",
      },
      {
        id: "deck-console",
        type: "prose",
        heading: "Steam Deck and console status",
        body:
          "Steam Deck verification status for Kingdom Rush 6: Genesis TD is not announced as of 2026-09-18. Console support for PlayStation, Xbox, and Switch is not announced as of 2026-09-18. The Steam store page does not list a console badge. Given the modest Windows minimum tier and the controller-friendly input model, Steam Deck handheld play is feasible but unverified.",
        links: officialSources,
      },
    ],
    faqIds: ["kr6-platforms-launch", "kr6-ios-android", "kr6-steam-deck", "kr6-controller"],
    relatedPageIds: ["release-date-status", "system-requirements", "demo-download"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "vs-frontiers",
    translationKey: "vs-frontiers",
    locale: "en-US",
    routeKind: "fixed",
    slug: "vs-frontiers",
    url: "/vs-frontiers",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD vs Kingdom Rush Frontiers and earlier Ironhide TD titles",
    seoTitle: "Kingdom Rush 6: Genesis TD vs Frontiers: Series Comparison",
    metaDescription:
      "Compare Kingdom Rush 6: Genesis TD with Kingdom Rush Frontiers, Origins, Vengeance, and Alliance. Prequel framing, pair-deployment, revamped upgrade system, and Classic Mode.",
    summary:
      "Series-entry comparison: prequel framing, pair-deployment mechanic, revamped upgrade system, Classic Mode, and where Frontiers / Origins / Vengeance / Alliance fit.",
    hero: {
      eyebrow: "Series comparison",
      subtitle:
        "Reconcile Kingdom Rush 6: Genesis TD with Frontiers, Origins, Vengeance, and Alliance.",
      ctas: [
        { label: "Hero roster", href: "/heroes/" },
        { label: "Tower roster", href: "/towers/" },
        { label: "Wiki hub", href: "/wiki/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD is the seventh main entry in the Ironhide Kingdom Rush series, set as a prequel to the original Kingdom Rush. It pairs a 12-hero pair-deployment mechanic with a revamped tower upgrade system across 18 stages and 3 Linirea regions, plus a Classic Mode that mirrors the 2011 formula.",
    keyFacts: [
      { label: "Series entry", value: "7th main entry; prequel" },
      { label: "Hero mechanic", value: "12-hero pair deployment" },
      { label: "Tower system", value: "Revamped upgrade system" },
      { label: "Classic Mode", value: "Single hero + 4 classic families" },
      { label: "Stages", value: "18 across 3 Linirea regions" },
    ],
    modules: [
      {
        id: "series-timeline",
        type: "prose",
        heading: "Series timeline",
        body:
          "Ironhide Kingdom Rush series timeline: Kingdom Rush (2011) → Kingdom Rush Frontiers (2013) → Kingdom Rush Origins (2014) → Kingdom Rush Vengeance (2018) → Kingdom Rush Alliance (2021) → Kingdom Rush 5: Alliance TD (2024) → Kingdom Rush 6: Genesis TD (planned Sep 24, 2026). Kingdom Rush 6: Genesis TD is framed as the prequel, returning to 'the early days of the Kingdom.'",
      },
      {
        id: "frontiers-vs-genesis",
        type: "prose",
        heading: "Frontiers vs Genesis TD",
        body:
          "Kingdom Rush Frontiers (2013) was the second main entry in the series and introduced the Kingdom Rush frontier setting. Kingdom Rush 6: Genesis TD is the prequel, set earlier in the Kingdom Rush timeline, and uses a 12-hero pair-deployment mechanic plus a revamped tower upgrade system that Frontiers did not have. Frontiers buyers looking for the next chapter should expect a different core loop and a prequel framing rather than a direct sequel.",
      },
      {
        id: "earlier-entries",
        type: "prose",
        heading: "Origins, Vengeance, Alliance",
        body:
          "Kingdom Rush Origins (2014) was the third main entry; Kingdom Rush Vengeance (2018) was the fourth and introduced the antagonist-led framing; Kingdom Rush Alliance (2021) and Kingdom Rush 5: Alliance TD (2024) continued the series through the 2020s. Kingdom Rush 6: Genesis TD pulls the series back to the prequel setting, returning to the Linirea kingdom framing and adding the pair-deployment + revamped upgrade mechanic.",
      },
      {
        id: "classic-mode",
        type: "prose",
        heading: "Classic Mode",
        body:
          "Classic Mode, announced on the 15-year anniversary of the original Kingdom Rush, runs the campaign with only one hero, the four original tower families (Barracks / Archer / Mage / Artillery), and the classic Rain of Fire and Reinforcements spells. Classic Mode is the bridge for series-fan buyers who want the Kingdom Rush 6: Genesis TD campaign framing without the new pair-deployment scope.",
      },
    ],
    faqIds: ["kr6-vs-frontiers", "kr6-vs-origins", "kr6-classic-mode-compare"],
    relatedPageIds: ["heroes-list", "towers-list", "wiki"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "controls-mechanics",
    translationKey: "controls-mechanics",
    locale: "en-US",
    routeKind: "fixed",
    slug: "controls",
    url: "/controls",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD controls and mechanics",
    seoTitle: "Kingdom Rush 6: Genesis TD Controls & Mechanics: Pair, Heroes, Towers",
    metaDescription:
      "Kingdom Rush 6: Genesis TD uses mouse + partial controller support, hero-pair combat, tower placement and upgrades, and 9 named spells. Mechanics scope from the Steam store description.",
    summary:
      "Mouse + partial controller, hero-pair combat, tower placement and upgrades, and 9 named spells. Per-spell cooldown and cost numbers are unannounced.",
    hero: {
      eyebrow: "Controls & mechanics",
      subtitle:
        "Understand the mouse + partial controller flow, hero-pair combat, and the 9 named spells.",
      ctas: [
        { label: "Beginners guide", href: "/beginners-guide/" },
        { label: "Hero roster", href: "/heroes/" },
        { label: "Tower roster", href: "/towers/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD uses mouse plus Partial Controller Support, a 2-of-12 hero pair-deployment flow per stage, the four-family tower placement + upgrade system, and 9 named spells. Specific key bindings, advanced controller mappings, and per-spell cooldown or cost numbers are not announced as of research date.",
    keyFacts: [
      { label: "Input", value: "Mouse + Partial Controller" },
      { label: "Hero flow", value: "Pick 2 of 12 heroes per stage" },
      { label: "Towers", value: "Place + upgrade, 4 families" },
      { label: "Spells", value: "9 spells on cooldown" },
    ],
    modules: [
      {
        id: "input",
        type: "prose",
        heading: "Mouse and controller input",
        body:
          "The Steam store page lists Partial Controller Support for Kingdom Rush 6: Genesis TD. Mouse is the primary input on Windows and macOS. Specific key bindings, advanced shortcut mappings, and Steam Input macros are not announced as of research date — Ironhide has not published a binding reference. Treat any third-party controller layout as unverified until it is checked against the launch build or the Steam Community Hub.",
      },
      {
        id: "hero-pair",
        type: "prose",
        heading: "Hero-pair combat flow",
        body:
          "Each stage lets the player pick 2 of the 12 epic heroes. The pair rotates between stages, and the choice shapes the encounter path through the 18-stage campaign. The Ironhide press release describes pair deployment as the headline hero mechanic for Kingdom Rush 6: Genesis TD.",
        links: [
          { label: "Hero roster", href: "/heroes/", description: "12-hero pair-deployment breakdown." },
        ],
      },
      {
        id: "tower-upgrade",
        type: "prose",
        heading: "Tower placement and upgrade flow",
        body:
          "Tower placement follows the classic Kingdom Rush lane-defense loop: pick a tower from the 4 families, place it on the lane, and spend gold to upgrade it through the revamped upgrade system. Per-tower upgrade path numbers are not announced as of research date.",
        links: [
          { label: "Tower roster", href: "/towers/", description: "15 towers + revamped upgrade system." },
        ],
      },
      {
        id: "spell-roster",
        type: "entity-grid",
        heading: "The 9 named spells",
        items: [
          {
            title: "Reinforcements",
            summary: "Summon allied soldiers from the Linirean ranks.",
            badge: "Classic Mode",
            href: "/controls/",
          },
          {
            title: "Rain of Fire",
            summary: "Scorched-earth volley; named in the Classic Mode spell list.",
            badge: "Classic Mode",
            href: "/controls/",
          },
          {
            title: "Royal Edict",
            summary: "Royal decree buff from the Linirean crown.",
            badge: "Buff",
            href: "/controls/",
          },
          {
            title: "Gnome's Shop",
            summary: "Gnomish vendor fires back a surprise support pack.",
            badge: "Support",
            href: "/controls/",
          },
          {
            title: "Thunder Zapper",
            summary: "Lightning zapper from the Stormcloud Sorcerers.",
            badge: "Storm",
            href: "/controls/",
          },
          {
            title: "Teleportation Sigil",
            summary: "Sigil-based tactical reposition for the active lane.",
            badge: "Utility",
            href: "/controls/",
          },
          {
            title: "Wintersong's Wrath",
            summary: "Elora Wintersong's signature winter blast.",
            badge: "Hero",
            href: "/controls/",
          },
          {
            title: "Aspect of Sol",
            summary: "Lightbringer paladin invocation from the Church of Light.",
            badge: "Holy",
            href: "/controls/",
          },
          {
            title: "Ace Musketeers",
            summary: "Linirean gunpowder riflemen called in for a focused volley.",
            badge: "Volley",
            href: "/controls/",
          },
        ],
      },
      {
        id: "spells",
        type: "prose",
        heading: "Spell usage and 9-spell kit",
        body:
          "Spend the 9 spells on cooldown to soften tough waves and boss encounters. Reinforcements and Rain of Fire are the explicit Classic Mode spells, so they will be available in any Classic Mode run. Per-spell cooldown seconds, gold cost, and damage numbers are not announced as of research date — treat them as unannounced until the launch build or the Steam Community Hub confirms them.",
        links: [
          { label: "Beginners guide", href: "/beginners-guide/", description: "Spend the 9 spells on cooldown in the launch-week path." },
        ],
      },
    ],
    faqIds: ["kr6-controller-support", "kr6-key-bindings", "kr6-spell-cooldown"],
    relatedPageIds: ["beginners-guide", "heroes-list", "towers-list"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },
  {
    id: "beginners-guide",
    translationKey: "beginners-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "beginners-guide",
    url: "/beginners-guide",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD beginners guide: launch-week path",
    seoTitle: "Kingdom Rush 6: Genesis TD Beginners Guide: Launch-Week Path",
    metaDescription:
      "A step-by-step beginners guide for Kingdom Rush 6: Genesis TD: install the demo, pick 2 of 12 heroes, place towers from the 4 classic families, spend the 9 spells, and progress through the 18 stages.",
    summary:
      "Step-by-step launch-week path: install demo, place towers, pick 2 of 12 heroes, spend the 9 spells, progress through the 18 stages, and check the Steam Community Hub for updates.",
    hero: {
      eyebrow: "New player guide",
      subtitle:
        "Step-by-step onboarding for first-time Kingdom Rush 6: Genesis TD tower-defense players.",
      ctas: [
        { label: "Controls & mechanics", href: "/controls/" },
        { label: "Hero roster", href: "/heroes/" },
        { label: "Tower roster", href: "/towers/" },
        { label: "Campaign stages", href: "/campaign/" },
      ],
    },
    quickAnswer:
      "The launch-week beginner path is: install the Steam Next Fest demo, pick 2 of the 12 heroes per stage, place towers from the 4 classic families (Barracks, Archer, Mage, Artillery), spend the 9 spells on cooldown, and progress through the 18 stages in 3 Linirea regions.",
    keyFacts: [
      { label: "Step 1", value: "Install the Steam Next Fest demo" },
      { label: "Step 2", value: "Pick 2 of 12 heroes per stage" },
      { label: "Step 3", value: "Place towers from 4 classic families" },
      { label: "Step 4", value: "Spend the 9 spells on cooldown" },
      { label: "Step 5", value: "Progress through 18 stages in 3 Linirea regions" },
    ],
    modules: [
      {
        id: "step-1",
        type: "steps",
        heading: "Launch-week path step-by-step",
        items: [
          {
            title: "Install the Steam Next Fest demo",
            body: "Download the Steam Next Fest demo from the Steam store page for AppID 4259190 and launch it from your Steam library.",
          },
          {
            title: "Learn the controls and mechanics",
            body: "Open the controls and mechanics page to learn mouse + partial controller input, hero-pair flow, tower placement, and upgrade flow.",
          },
          {
            title: "Walk the hero roster",
            body: "Walk the hero roster page to learn the 12-hero pair-deployment mechanic and the pair rotation between stages.",
          },
          {
            title: "Walk the tower roster",
            body: "Walk the tower roster page to learn the 15-tower lineup and the 4 classic families (Barracks, Archer, Mage, Artillery).",
          },
          {
            title: "Pick your first pair of heroes",
            body: "Pick 2 of the 12 heroes per stage, then place towers from the 4 families to anchor the lane-defense loop.",
          },
          {
            title: "Spend the 9 spells on cooldown",
            body: "Use the 9 spells on cooldown to soften tough waves and boss encounters.",
          },
          {
            title: "Progress through the 18 stages",
            body: "Progress through the 18 stages across 3 Linirea regions, then check the Steam Community Hub for launch-day hotfixes and balance updates.",
          },
        ],
      },
      {
        id: "control-tour",
        type: "prose",
        heading: "Where to spend your first hour",
        body:
          "Use the first hour to confirm the controls, walk the demo's first Linirea stages, and find a comfortable hero-pair rotation. The 12-hero pair-deployment slot means switching pairs between stages is the core meta decision. Don't chase a perfect pair — Ironhide has not published per-hero HP or ability numbers, so treat pair selection as a feel-based choice until the launch build and Steam Community Hub threads confirm specific pair bonuses.",
        links: [
          { label: "Controls & mechanics", href: "/controls/", description: "Input and combat flow." },
          { label: "Campaign stages", href: "/campaign/", description: "18 stages in 3 Linirea regions." },
        ],
      },
    ],
    faqIds: ["kr6-first-pair", "kr6-first-tower", "kr6-first-spell"],
    relatedPageIds: ["controls-mechanics", "heroes-list", "towers-list", "campaign-stages"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-18",
  },
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Kingdom Rush 6: Genesis TD guides hub",
    seoTitle: "Kingdom Rush 6: Genesis TD Guides Hub",
    metaDescription:
      "Guide hub for Kingdom Rush 6: Genesis TD. Browse the hero roster, tower roster, controls and mechanics, beginners guide, and campaign stages.",
    summary:
      "Launch-week guide hub: heroes, towers, controls, beginners path, and campaign stages.",
    hero: {
      eyebrow: "Guides hub",
      subtitle:
        "Find the right Kingdom Rush 6: Genesis TD guide for your current question.",
      ctas: [
        { label: "Hero roster", href: "/heroes/" },
        { label: "Tower roster", href: "/towers/" },
        { label: "Beginners guide", href: "/beginners-guide/" },
      ],
    },
    quickAnswer:
      "Pick the guide that matches your question: hero roster, tower roster, controls and mechanics, beginners path, or campaign stages.",
    keyFacts: [
      { label: "Guides", value: "5 hub guides" },
      { label: "Latest update", value: "Hero / spell / tower rosters" },
      { label: "Sources", value: "Steam store + Community Hub" },
    ],
    modules: [
      {
        id: "guide-list",
        type: "entity-grid",
        heading: "Pick a guide",
        items: [
          {
            title: "Hero roster",
            summary: "12-hero pair-deployment breakdown with the 11 publicly named heroes.",
            badge: "Heroes",
            href: "/heroes/",
          },
          {
            title: "Tower roster",
            summary: "15 towers across the 4 classic families with Dwarven Culverin balance-watch flag.",
            badge: "Towers",
            href: "/towers/",
          },
          {
            title: "Controls & mechanics",
            summary: "Mouse + partial controller, hero-pair flow, tower placement, and the 9 named spells.",
            badge: "Mechanics",
            href: "/controls/",
          },
          {
            title: "Beginners guide",
            summary: "Step-by-step launch-week path: demo, heroes, towers, spells, campaign.",
            badge: "Onboarding",
            href: "/beginners-guide/",
          },
          {
            title: "Campaign stages",
            summary: "18 stages across 3 Linirea regions and Classic Mode framing.",
            badge: "Campaign",
            href: "/campaign/",
          },
        ],
      },
    ],
    faqIds: [],
    relatedPageIds: ["heroes-list", "towers-list", "controls-mechanics", "beginners-guide", "campaign-stages"],
    schemaTypes: ["CollectionPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-19",
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Kingdom Rush 6: Genesis TD wiki: launch-week community FAQ surface",
    seoTitle: "Kingdom Rush 6: Genesis TD Wiki: Launch-Week Community FAQ",
    metaDescription:
      "Kingdom Rush 6: Genesis TD does not yet have a third-party wiki. The launch-week FAQ surface is the Steam Community Hub, r/KingdomRush, and the Ironhide newsroom.",
    summary:
      "No third-party wiki yet. The launch-week FAQ surface is the Steam Community Hub, r/KingdomRush, and the Ironhide newsroom.",
    hero: {
      eyebrow: "Wiki & FAQ hub",
      subtitle:
        "Find the launch-week FAQ surface for Kingdom Rush 6: Genesis TD.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Hero roster", href: "/heroes/" },
        { label: "Tower roster", href: "/towers/" },
      ],
    },
    quickAnswer:
      "No third-party Kingdom Rush 6: Genesis TD wiki has indexed the title yet. The launch-week FAQ surface is the Steam Community Hub for AppID 4259190, the r/KingdomRush subreddit, and the Ironhide newsroom on irondune.com.",
    keyFacts: [
      { label: "Third-party wiki", value: "Not yet indexed" },
      { label: "Steam hub", value: "AppID 4259190" },
      { label: "Reddit", value: "r/KingdomRush" },
      { label: "Newsroom", value: "irondune.com / Ironhide" },
    ],
    modules: [
      {
        id: "primary-surfaces",
        type: "prose",
        heading: "Primary FAQ surfaces",
        body:
          "The launch-week Kingdom Rush 6: Genesis TD FAQ surface is the Steam Community Hub for AppID 4259190, the r/KingdomRush subreddit, and the Ironhide newsroom on irondune.com. The Steam Community Hub carries launch-day player discussions, screenshots, and update announcements. r/KingdomRush carries community-demand signals and ambiguity disambiguation. The Ironhide newsroom carries official press releases and timing-shift announcements.",
        links: [
          { label: "Steam Community Hub", href: "https://steamcommunity.com/app/4259190", description: "Launch-day player discussions." },
          { label: "r/KingdomRush", href: "https://www.reddit.com/r/KingdomRush/", description: "Community demand signals." },
          { label: "Ironhide newsroom", href: "https://www.irondune.com/news/kingdom-rush-6-genesis-td-official-press-release", description: "Official press releases." },
        ],
      },
      {
        id: "wiki-status",
        type: "prose",
        heading: "Wiki status as of research date",
        body:
          "As of research date (2026-09-18) no third-party wiki has indexed Kingdom Rush 6: Genesis TD. Treat any third-party wiki claim that lists specific hero HP, ability numbers, or post-launch roadmap as unverified — Ironhide has not published those numbers. Use the Steam store page and the Ironhide press release as the authoritative sources for current-game facts.",
      },
      {
        id: "topic-pointers",
        type: "prose",
        heading: "Topic pointers",
        body:
          "For specific topics, follow the relevant internal page rather than the third-party wiki gaps:",
        links: [
          { label: "Release date status", href: "/release-date/", description: "Sep 24, 2026 ship confirmation." },
          { label: "Hero roster", href: "/heroes/", description: "12-hero pair-deployment roster." },
          { label: "Tower roster", href: "/towers/", description: "15 towers + revamped upgrade system." },
        ],
      },
    ],
    faqIds: ["kr6-wiki-status", "kr6-faq-surface"],
    relatedPageIds: ["release-date-status", "heroes-list", "towers-list", "vs-frontiers"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-18",
  },
];