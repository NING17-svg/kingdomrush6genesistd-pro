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
    seoTitle: "Kingdom Rush 6: Genesis TD Release Date: Released Sep 24, 2026",
    metaDescription:
      "Kingdom Rush 6: Genesis TD released September 24, 2026 on Steam, iOS App Store, and Google Play. Steam is $17.99 with a 10% intro offer ending Oct 8; mobile is $6.99.",
    summary:
      "Released Sep 24, 2026 on Steam + iOS + Android with active post-launch pricing. Status as of research date 2026-09-25.",
    hero: {
      eyebrow: "Launch status",
      subtitle:
        "Confirm the Sep 24, 2026 release across Steam, iOS, and Android, plus current pricing.",
      ctas: [
        { label: "Price & editions", href: "/price/" },
        { label: "Platforms matrix", href: "/platforms/" },
        { label: "Known issues", href: "/known-issues/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD released on September 24, 2026 on Steam (AppID 4259190), the iOS App Store (id6759664029), and Google Play (com.ironhidegames.android.kingdomrush6.genesis), per the Ironhide News/Details/523 launch post and the live Steam store page. Steam is $17.99 with a 10% intro offer (was $19.99) running through Oct 8, 2026; iOS and Android are $6.99 with in-app purchases.",
    keyFacts: [
      { label: "Released", value: "Sep 24, 2026" },
      { label: "Steam price", value: "$17.99 (10% intro, was $19.99)" },
      { label: "Intro offer ends", value: "Oct 8, 2026" },
      { label: "Mobile price", value: "$6.99 + in-app purchases" },
    ],
    modules: [
      {
        id: "ship-date",
        type: "prose",
        heading: "Released Sep 24, 2026 on Steam, iOS, and Android",
        body:
          "Kingdom Rush 6: Genesis TD shipped September 24, 2026 across Steam (AppID 4259190), the iOS App Store (id6759664029), and Google Play (com.ironhidegames.android.kingdomrush6.genesis). The Steam store now shows 'Released Sep 24, 2026' with 153 reviews (Mixed) and the Ironhide News/Details/523 launch post quotes 'OUT RIGHT NOW on Google Play, the App Store, and Steam!' as the same-day ship confirmation.",
      },
      {
        id: "pre-launch-status",
        type: "prose",
        heading: "Current post-launch status (2026-09-25)",
        body:
          "As of September 25, 2026 the title is in active post-launch: Steam is $17.99 with a 10% launch intro offer that ends Oct 8, 2026 (was $19.99); the iOS App Store and Google Play listings are $6.99 with in-app purchases. The Steam Community Hub for AppID 4259190 carries day-one player discussions and the Steam launch review tally is 153 reviews at Mixed (56%). Check the Known Issues page for Ironhide's published bug list and workarounds.",
      },
      {
        id: "confirm-live",
        type: "prose",
        heading: "How to confirm the live status yourself",
        body:
          "Open the Steam store page for AppID 4259190 and look at the right-rail release widget. The widget now reads 'Released Sep 24, 2026' rather than the pre-launch placeholder. SteamDB AppID 4259190 mirrors that release state in near real time. For mobile, open the iOS App Store entry id6759664029 or the Google Play entry com.ironhidegames.android.kingdomrush6.genesis and confirm the published price.",
        links: officialSources,
      },
      {
        id: "legacy-mobile",
        type: "prose",
        heading: "Legacy Kingdom Rush mobile titles",
        body:
          "Some autocomplete clusters still surface 'Kingdom Rush 6 iOS' or 'Kingdom Rush 6 Android' as legacy Kingdom Rush mobile searches. Those point at the older Kingdom Rush mobile series Ironhide shipped before the Genesis TD prequel. Kingdom Rush 6: Genesis TD is the new 2026 mobile entry at $6.99 with in-app purchases; legacy mobile titles are a separate product line.",
      },
    ],
    faqIds: ["kr6-release-date", "kr6-ios-android", "kr6-known-issues"],
    relatedPageIds: ["price-editions", "platforms-faq", "known-issues"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
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
    relatedPageIds: ["release-date-status", "price-editions", "platforms-faq", "known-issues"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
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
    h1: "Kingdom Rush 6: Genesis TD Steam price and mobile editions",
    seoTitle: "Kingdom Rush 6: Genesis TD Price: $17.99 Steam, $6.99 Mobile",
    metaDescription:
      "Kingdom Rush 6: Genesis TD is $17.99 on Steam with a 10% intro offer ending Oct 8, 2026 (was $19.99). iOS and Android are $6.99 with in-app purchases.",
    summary:
      "Steam $17.99 with a 10% intro offer ending Oct 8, 2026; iOS and Android $6.99 with in-app purchases. Confirm the live Steam regional price before buying.",
    hero: {
      eyebrow: "Price & editions",
      subtitle:
        "Confirm the current Steam regional price and the mobile $6.99 premium with in-app purchases.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Platforms matrix", href: "/platforms/" },
        { label: "Known issues", href: "/known-issues/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD is $17.99 on Steam with a 10% launch intro offer (was $19.99) running through Oct 8, 2026, and $6.99 on iOS App Store (id6759664029) and Google Play (com.ironhidegames.android.kingdomrush6.genesis) with in-app purchases. Confirm the live Steam regional price before purchase — final pricing varies by region and currency.",
    keyFacts: [
      { label: "Steam price", value: "$17.99 (10% intro, was $19.99)" },
      { label: "Intro offer ends", value: "Oct 8, 2026" },
      { label: "iOS price", value: "$6.99 + in-app purchases" },
      { label: "Android price", value: "$6.99 + in-app purchases" },
      { label: "Editions", value: "Single Steam edition at launch" },
    ],
    modules: [
      {
        id: "live-price",
        type: "prose",
        heading: "Live Steam regional price",
        body:
          "The Steam store page for Kingdom Rush 6: Genesis TD (AppID 4259190) now shows $17.99 with a 10% launch intro offer (was $19.99) running through Oct 8, 2026. Final regional pricing varies by Steam region and currency — open the Steam store page in your region before purchase to confirm the displayed price.",
      },
      {
        id: "preorder",
        type: "prose",
        heading: "Steam intro offer window",
        body:
          "The 10% launch intro offer on Steam runs through Oct 8, 2026 (14 days from release). After Oct 8 the price returns to the standard $19.99 tier. There is no separate pre-order tier; pre-orders are open at the $17.99 intro price through the offer window. The Ironhide press release on irondune.com restates the intro offer terms. There is no public edition tier or DLC bundle announced at launch.",
      },
      {
        id: "mobile-price",
        type: "prose",
        heading: "iOS and Android pricing",
        body:
          "The iOS App Store (id6759664029) and Google Play (com.ironhidegames.android.kingdomrush6.genesis) listings are $6.99 with in-app purchases. Mobile users pay the $6.99 base price for the Genesis TD premium release; the in-app purchase catalog is the same across iOS and Android. Mobile pricing is separate from the Steam intro offer and is not affected by the Oct 8, 2026 Steam offer window.",
        links: [
          { label: "iOS App Store listing", href: "https://apps.apple.com/us/app/kingdom-rush-6-genesis-td/id6759664029", description: "Official iOS listing at $6.99 + IAP." },
          { label: "Google Play listing", href: "https://play.google.com/store/apps/details?id=com.ironhidegames.android.kingdomrush6.genesis", description: "Official Android listing at $6.99 + IAP." },
        ],
      },
      {
        id: "verify",
        type: "prose",
        heading: "Verify the live Steam price before buying",
        body:
          "Before purchase, open the Steam store page in your region and confirm the displayed price, the 10% intro offer badge, and the 'Released Sep 24, 2026' release widget. If the price has changed between this page and the live Steam listing, the live Steam store is authoritative. SteamDB AppID 4259190 mirrors package-level pricing but does not replace the regional store view.",
        links: officialSources,
      },
    ],
    faqIds: ["kr6-price-now", "kr6-intro-offer", "kr6-mobile-price", "kr6-editions"],
    relatedPageIds: ["release-date-status", "platforms-faq", "known-issues"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
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
      "Yes — the Kingdom Rush 6: Genesis TD Steam Next Fest demo is downloadable from the Steam store page for AppID 4669880 ahead of the planned September 24, 2026 launch. The demo ships with 4 stages, 5 towers, 2 heroes (Gerald + Zefira), 3 spells (Reinforcements, Rain of Fire, Royal Edict), and the Iron Challenge mode.",
    keyFacts: [
      { label: "Demo source", value: "Steam store AppID 4669880" },
      { label: "Build", value: "Steam Next Fest" },
      { label: "Stages", value: "4 (of 18 in launch build)" },
      { label: "Towers", value: "5 (of 15 in launch build)" },
      { label: "Heroes", value: "Gerald + Zefira (2 of 12)" },
      { label: "Spells", value: "Reinforcements + Rain of Fire + Royal Edict (3 of 9)" },
      { label: "Mode", value: "Iron Challenge" },
      { label: "Pre-purchase", value: "Trial remains after launch" },
    ],
    modules: [
      {
        id: "demo-access",
        type: "prose",
        heading: "How to download the demo",
        body:
          "Open the Kingdom Rush 6: Genesis TD Demo store page for AppID 4669880 (or the main AppID 4259190 right-rail during the festival window) and use the Steam Next Fest demo access button. Steam demos install through the regular Steam client once added to your library. The demo is also surfaced through the Steam Next Fest hub on Steam for the duration of the festival window.",
      },
      {
        id: "demo-scope",
        type: "prose",
        heading: "What the demo includes",
        body:
          "The Steam Next Fest demo ships with a curated subset of the launch build: 4 of the 18 stages, 5 of the 15 towers, 2 of the 12 heroes (Gerald and Zefira), 3 of the 9 spells (Reinforcements, Rain of Fire, Royal Edict), and the Iron Challenge mode. Per the Steam demo store page (AppID 4669880) and the Ironhide Jun 15, 2026 gamespress.com release, this is the official pre-purchase trial scope. Use it to confirm the pair-deployment feel, the revamped four-family tower upgrade path, and the Iron Challenge difficulty before committing to the -30% pre-order.",
      },
      {
        id: "demo-subset",
        type: "entity-grid",
        heading: "Demo subset at a glance",
        items: [
          {
            title: "4 stages",
            summary: "4 of the 18 launch stages — early Linirea slice for first-pair placement practice.",
            badge: "Stages",
            href: "/campaign/",
          },
          {
            title: "5 towers",
            summary: "5 of the 15 launch towers across the Barracks, Archer, Mage, and Artillery families.",
            badge: "Towers",
            href: "/towers/",
          },
          {
            title: "2 heroes: Gerald + Zefira",
            summary: "Gerald (Linirean knight anchor) and Zefira (Silveroak archer scout) form the fixed demo pair.",
            badge: "Heroes",
            href: "/heroes/",
          },
          {
            title: "3 spells",
            summary: "Reinforcements, Rain of Fire, and Royal Edict — the demo subset of the 9-spell launch kit.",
            badge: "Spells",
            href: "/controls/",
          },
          {
            title: "Iron Challenge mode",
            summary: "Iron Challenge is the named demo mode; tougher waves on the demo stages.",
            badge: "Mode",
            href: "/demo/",
          },
        ],
      },
      {
        id: "demo-vs-launch",
        type: "prose",
        heading: "Demo vs launch build",
        body:
          "The demo is a 4-of-18, 5-of-15, 2-of-12, 3-of-9 slice — early Linirea stages, a tower sample across the 4 classic families, the Gerald + Zefira pair, and a 3-spell subset. The Iron Challenge mode is the demo's named difficulty path. The launch build expands each axis: 18 stages across 3 Linirea regions, 15 towers, the full 12-hero pair-deployment roster, and all 9 spells. Treat the demo as a feel check; treat the Steam store page for AppID 4259190 as the launch-build reference.",
        links: [
          { label: "Hero roster", href: "/heroes/", description: "Full 12-hero pair-deployment roster." },
          { label: "Tower roster", href: "/towers/", description: "All 15 towers across 4 families." },
        ],
      },
      {
        id: "post-launch",
        type: "prose",
        heading: "Post-launch demo status",
        body:
          "After the planned September 24, 2026 launch, the Steam Next Fest demo window closes, but the demo usually remains available as a pre-purchase trial on the Steam store page. If you skip pre-order and want to try before buying, check the live Steam store page near ship day for the post-launch demo availability badge.",
        links: [
          { label: "Steam demo (AppID 4669880)", href: "https://store.steampowered.com/app/4669880/Kingdom_Rush_6_Genesis_TD_Demo/", description: "Official Steam Next Fest demo page." },
          { label: "Ironhide demo press release", href: "https://www.gamespress.com/IRONHIDE-ANNOUNCES-KINGDOM-RUSH-6-GENESIS-TD-STEAM-DEMO-MOBILE-PRE-ORD", description: "Jun 15, 2026 gamespress.com release restating demo scope." },
        ],
      },
    ],
    faqIds: ["kr6-demo-link", "kr6-demo-content", "kr6-demo-after-launch"],
    relatedPageIds: ["release-date-status", "price-editions", "platforms-faq"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-20",
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
    h1: "Kingdom Rush 6: Genesis TD platforms: Steam, iOS, Android, and console status",
    seoTitle: "Kingdom Rush 6: Genesis TD Platforms: Steam, iOS, Android",
    metaDescription:
      "Kingdom Rush 6: Genesis TD released Sep 24, 2026 on Steam (Windows + macOS), the iOS App Store, and Google Play. Steam Deck verification, PlayStation, Xbox, and Switch are unannounced.",
    summary:
      "Released on Steam (Windows + macOS), iOS App Store, and Google Play. Steam Deck verification, PlayStation, Xbox, and Switch support are unannounced.",
    hero: {
      eyebrow: "Platform matrix",
      subtitle:
        "Confirm the Steam, iOS, and Android launch matrix and what's still unannounced for console and Steam Deck.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Price & editions", href: "/price/" },
        { label: "Known issues", href: "/known-issues/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD launched September 24, 2026 on Steam (Windows + macOS, AppID 4259190), the iOS App Store (id6759664029), and Google Play (com.ironhidegames.android.kingdomrush6.genesis). Steam Deck verification, PlayStation, Xbox, and Switch support are not announced. Search hits for 'Kingdom Rush 6 iOS' or 'Kingdom Rush 6 Android' return the new Genesis TD listing — not legacy Kingdom Rush mobile titles.",
    keyFacts: [
      { label: "Released platforms", value: "Steam (Win/macOS), iOS, Android" },
      { label: "Steam Deck", value: "Verification unannounced" },
      { label: "PlayStation", value: "Unannounced" },
      { label: "Xbox", value: "Unannounced" },
      { label: "Switch", value: "Unannounced" },
      { label: "Controller", value: "Partial Controller Support on Steam" },
    ],
    modules: [
      {
        id: "launch-platforms",
        type: "prose",
        heading: "Released: Steam + iOS + Android",
        body:
          "Kingdom Rush 6: Genesis TD launched the same day, Sep 24, 2026, across Steam (AppID 4259190, Windows + macOS), the iOS App Store (id6759664029), and Google Play (com.ironhidegames.android.kingdomrush6.genesis). The Ironhide News/Details/523 launch post quotes 'OUT RIGHT NOW on Google Play, the App Store, and Steam!' confirming the same-day PC + mobile ship. Steam listings show Partial Controller Support and Steam Achievements.",
        links: [
          { label: "Steam store page", href: "https://store.steampowered.com/app/4259190/Kingdom_Rush_6_Genesis_TD/", description: "Released Sep 24, 2026 on Windows + macOS." },
          { label: "iOS App Store", href: "https://apps.apple.com/us/app/kingdom-rush-6-genesis-td/id6759664029", description: "$6.99 with in-app purchases." },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.ironhidegames.android.kingdomrush6.genesis", description: "$6.99 with in-app purchases." },
        ],
      },
      {
        id: "legacy-mobile",
        type: "prose",
        heading: "Legacy Kingdom Rush mobile titles",
        body:
          "Some autocomplete clusters surface 'Kingdom Rush 6 iOS' or 'Kingdom Rush 6 Android' as legacy Kingdom Rush mobile searches. With Genesis TD now shipped, those searches return the new iOS App Store and Google Play listings (id6759664029 and com.ironhidegames.android.kingdomrush6.genesis) above any older Kingdom Rush mobile entries. Legacy Kingdom Rush mobile titles remain a separate Ironhide product line.",
      },
      {
        id: "deck-console",
        type: "prose",
        heading: "Steam Deck, PlayStation, Xbox, and Switch: unannounced",
        body:
          "Steam Deck verification status for Kingdom Rush 6: Genesis TD is not announced. Console support for PlayStation, Xbox, and Switch is not announced; the Steam store page does not list a console badge. Given the modest Windows minimum tier and the Partial Controller Support flag, Steam Deck handheld play is feasible but unverified — wait for the verified badge on the Steam store before buying for Steam Deck. Console releases will surface first on the Ironhide newsroom and the Steam Community Hub announcements.",
        links: officialSources,
      },
    ],
    faqIds: ["kr6-platforms-launch", "kr6-ios-android", "kr6-steam-deck", "kr6-console", "kr6-controller"],
    relatedPageIds: ["release-date-status", "price-editions", "known-issues"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
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
    h1: "Kingdom Rush 6: Genesis TD wiki: launch-week FAQ and known issues hub",
    seoTitle: "Kingdom Rush 6: Genesis TD Wiki: Launch FAQ & Known Issues",
    metaDescription:
      "Kingdom Rush 6: Genesis TD launched Sep 24, 2026. The launch FAQ surface is the Steam Community Hub, r/KingdomRush, the Ironhide newsroom, and our Known Issues page.",
    summary:
      "Launch FAQ surface: Steam Community Hub, r/KingdomRush, Ironhide newsroom, and our Known Issues page.",
    hero: {
      eyebrow: "Wiki & FAQ hub",
      subtitle:
        "Find the launch FAQ surface for Kingdom Rush 6: Genesis TD and the published known-issues list.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Known issues", href: "/known-issues/" },
        { label: "Hero roster", href: "/heroes/" },
      ],
    },
    quickAnswer:
      "Kingdom Rush 6: Genesis TD launched September 24, 2026 on Steam (AppID 4259190), the iOS App Store (id6759664029), and Google Play (com.ironhidegames.android.kingdomrush6.genesis). The launch FAQ surface is the Steam Community Hub, the r/KingdomRush subreddit, the Ironhide newsroom, and our /known-issues page that summarizes Ironhide's News/Details/527 bug list.",
    keyFacts: [
      { label: "Launched", value: "Sep 24, 2026 (Steam + iOS + Android)" },
      { label: "Steam hub", value: "AppID 4259190" },
      { label: "Reddit", value: "r/KingdomRush" },
      { label: "Newsroom", value: "Ironhide News/Details/523 + 527" },
    ],
    modules: [
      {
        id: "primary-surfaces",
        type: "prose",
        heading: "Primary FAQ surfaces",
        body:
          "The launch Kingdom Rush 6: Genesis TD FAQ surface is the Steam Community Hub for AppID 4259190, the r/KingdomRush subreddit, the Ironhide newsroom (News/Details/523 launch post and News/Details/527 known-issues post), and our internal /known-issues page that mirrors Ironhide's published bug list.",
        links: [
          { label: "Steam Community Hub", href: "https://steamcommunity.com/app/4259190", description: "Launch-day player discussions." },
          { label: "r/KingdomRush", href: "https://www.reddit.com/r/KingdomRush/", description: "Community demand signals." },
          { label: "Ironhide launch post", href: "https://www.ironhidegames.com/News/Details/523", description: "Official Sep 24, 2026 launch confirmation." },
          { label: "Ironhide known-issues post", href: "https://www.ironhidegames.com/News/Details/527", description: "Authoritative known-issues list." },
        ],
      },
      {
        id: "wiki-status",
        type: "prose",
        heading: "Third-party wiki status",
        body:
          "No third-party wiki has fully indexed Kingdom Rush 6: Genesis TD as of 2026-09-25. Treat any third-party wiki claim that lists specific hero HP, ability numbers, or post-launch roadmap as unverified until Ironhide or the Steam Community Hub confirms them. Use the Steam store page, the iOS / Android listings, and the Ironhide newsroom as the authoritative sources for current-game facts.",
      },
      {
        id: "topic-pointers",
        type: "prose",
        heading: "Topic pointers",
        body:
          "For specific topics, follow the relevant internal page rather than the third-party wiki gaps:",
        links: [
          { label: "Release date status", href: "/release-date/", description: "Sep 24, 2026 launch confirmation." },
          { label: "Known issues", href: "/known-issues/", description: "Ironhide's post-launch bug list and workarounds." },
          { label: "Hero roster", href: "/heroes/", description: "12-hero pair-deployment roster." },
          { label: "Tower roster", href: "/towers/", description: "15 towers + revamped upgrade system." },
        ],
      },
    ],
    faqIds: ["kr6-wiki-status", "kr6-faq-surface", "kr6-known-issues"],
    relatedPageIds: ["release-date-status", "known-issues", "heroes-list", "towers-list", "vs-frontiers"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-25",
  },
  {
    id: "known-issues",
    translationKey: "known-issues",
    locale: "en-US",
    routeKind: "fixed",
    slug: "known-issues",
    url: "/known-issues",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Kingdom Rush 6: Genesis TD known issues and workarounds",
    seoTitle: "Kingdom Rush 6: Genesis TD Known Issues & Workarounds",
    metaDescription:
      "Day-one known issues for Kingdom Rush 6: Genesis TD on Steam and mobile, plus Ironhide's published workarounds. Last updated 2026-09-25.",
    summary:
      "Last updated 2026-09-25. Ironhide's News/Details/527 lists 5 Steam bugs and 2 mobile bugs with workarounds; player-reported Steam Community issues are tracked separately.",
    hero: {
      eyebrow: "Known issues",
      subtitle:
        "Post-launch bugs Ironhide has acknowledged, the official workaround for each, and the player-reported Steam Community surface.",
      ctas: [
        { label: "Release date", href: "/release-date/" },
        { label: "Steam Community Hub", href: "https://steamcommunity.com/app/4259190" },
        { label: "Ironhide known-issues post", href: "https://www.ironhidegames.com/News/Details/527" },
      ],
    },
    quickAnswer:
      "Ironhide's News/Details/527 lists 5 Steam bugs (0kb CD Key reset, 30Hz / VSYNC stutter, screen-resolution detection, custom keybinding limited to in-stage, hero drag-line freezing at path corners) and 2 mobile bugs (tutorial-bypass purchase bug, blue-screen save-file crash awaiting hotfix). Each Ironhide-confirmed bug has a step-by-step workaround below. Player-reported Steam Community issues (ultra-wide 21:9 unsupported, first-level crashes) are tracked in a separate section until Ironhide acknowledges them.",
    keyFacts: [
      { label: "Last updated", value: "2026-09-25" },
      { label: "Source", value: "Ironhide News/Details/527" },
      { label: "Steam bugs", value: "5 Ironhide-confirmed" },
      { label: "Mobile bugs", value: "2 (1 awaiting hotfix)" },
      { label: "Player-reported", value: "Steam Community threads" },
    ],
    modules: [
      {
        id: "steam-bugs",
        type: "prose",
        heading: "Steam bugs (Ironhide-confirmed)",
        body:
          "Ironhide has published step-by-step workarounds for the 5 launch-window Steam bugs below. The 0kb CD Key issue is already patched in the launch build; the others require a player-side action until a hotfix ships.",
      },
      {
        id: "steam-0kb-cdkey",
        type: "prose",
        heading: "0kb missing executable / CD Key",
        body:
          "Some Steam installs report a 0kb executable or an empty CD Key field at launch. Ironhide has patched this in the launch build; if you still see the issue, restart Steam (right-click the Steam tray icon → Exit, then relaunch) so the client re-validates the build, then verify the game files via Steam → Properties → Installed Files → Verify. This was the highest-visibility launch bug and is fixed for the majority of installs.",
      },
      {
        id: "steam-30hz-vsync",
        type: "prose",
        heading: "30Hz display stutter / VSYNC fix",
        body:
          "Players on 30Hz displays (or laptops running at a capped refresh rate) report input lag and frame stutter. Close any active frame cap or VSYNC override in your GPU control panel (NVIDIA Control Panel, AMD Software, Intel Arc Control) and set the in-game display to the native panel rate. The launch build defaults VSYNC to ON; if your panel is 30Hz, leave VSYNC on. If stutter persists, edit the in-game settings file to force a fixed 30 FPS cap until the next hotfix.",
      },
      {
        id: "steam-resolution",
        type: "prose",
        heading: "Wrong screen-resolution detection",
        body:
          "On some multi-monitor setups the launch build picks the wrong primary display and renders the window at an off-screen resolution. Quit the game, delete the `settings.lua` and `global.lua` files from `%USERPROFILE%\\AppData\\LocalLow\\Ironhide\\Kingdom Rush 6 Genesis TD\\` (Windows) or `~/Library/Application Support/Ironhide/Kingdom Rush 6 Genesis TD/` (macOS), and relaunch. The game rebuilds fresh config files and re-detects your primary display.",
      },
      {
        id: "steam-keybinding",
        type: "prose",
        heading: "Custom keybinding limited to in-stage",
        body:
          "Custom keybindings currently persist only for the active stage and reset on return to the world map. Ironhide has confirmed the limitation; a hotfix is expected to make bindings persistent across stages. As a workaround, rebind keys at the start of each stage until the hotfix lands, and track your preferred layout in a note app.",
      },
      {
        id: "steam-drag-line",
        type: "prose",
        heading: "Hero drag-line freeze at path corners",
        body:
          "If a hero's drag-line (the live movement indicator) freezes at a lane corner, click anywhere on the lane to clear the path indicator, then reissue the move order. Ironhide has flagged this as a known UI rendering issue; the underlying hero pathing still works, only the visual indicator gets stuck.",
      },
      {
        id: "mobile-bugs",
        type: "prose",
        heading: "Mobile bugs (Ironhide-confirmed)",
        body:
          "Two mobile bugs are confirmed in the News/Details/527 post. The tutorial-bypass purchase bug is fixable in-app; the blue-screen save-file crash is awaiting a hotfix.",
      },
      {
        id: "mobile-tutorial-bypass",
        type: "prose",
        heading: "Mobile tutorial-bypass purchase bug",
        body:
          "Some iOS and Android users report being able to skip the in-game tutorial while the store prompts for a starter pack purchase. Ironhide has confirmed the bug and reverted the bypass in the current mobile build — the tutorial is mandatory again until the next mobile hotfix. If you already skipped the tutorial, the regular campaign walkthrough remains available from the world map.",
      },
      {
        id: "mobile-blue-screen",
        type: "prose",
        heading: "Mobile blue-screen save-file crash (awaiting hotfix)",
        body:
          "Some iOS and Android users report a blue-screen crash on launch that wipes the local save file. Ironhide has acknowledged the bug in News/Details/527 but a fix is not yet in the current mobile build. Do not delete and reinstall the app on a hunch — that compounds the save-loss. Wait for the next mobile hotfix and back up your campaign progress via the in-game cloud-sync option if it is available.",
      },
      {
        id: "community-issues",
        type: "prose",
        heading: "Steam Community player-reported issues",
        body:
          "Two Steam Community threads have surfaced repeatedly in launch-day discussions. Ironhide has not formally acknowledged either one yet; they are tracked here so players can find the active threads and add corroborating reports.",
      },
      {
        id: "community-ultrawide",
        type: "prose",
        heading: "Ultra-wide 21:9 unsupported",
        body:
          "Players on 21:9 ultra-wide monitors report letterboxed rendering or stretched HUD. The launch build targets 16:9 and 16:10; 21:9 is not in the verified list. Try a 16:9 virtual resolution via your GPU control panel or wait for a HUD-scaling patch. Track the active Steam Community thread under AppID 4259190 for the latest player workaround notes.",
        links: [
          { label: "Steam Community Hub", href: "https://steamcommunity.com/app/4259190", description: "Player-reported issues and threads." },
        ],
      },
      {
        id: "community-first-level-crash",
        type: "prose",
        heading: "First-level crashes on Steam",
        body:
          "Some Steam players report hard crashes on the first campaign stage. The launch build's 0kb CD Key fix has reduced but not eliminated these reports; remaining instances tend to coincide with overlay software (Discord, MSI Afterburner, RTSS) injecting into the launch process. Disable overlay software and any frame-capture overlays, relaunch Steam, and retry the first stage. Report reproducible crashes on the Steam Community Hub so Ironhide can capture logs.",
        links: [
          { label: "Steam Community Hub", href: "https://steamcommunity.com/app/4259190", description: "Report reproducible crash logs." },
        ],
      },
      {
        id: "patch-watch",
        type: "prose",
        heading: "How to track the next patch",
        body:
          "The authoritative upstream for every bug and workaround on this page is Ironhide's News/Details/527 post. Re-stamp this page from that post when Ironhide publishes updates; the Steam Community Hub for AppID 4259190 carries the day-of patch announcements and the official Steam patch notes. We do not invent bugs the research did not enumerate; only entries with concrete public evidence appear above.",
        links: [
          { label: "Ironhide News/Details/527", href: "https://www.ironhidegames.com/News/Details/527", description: "Authoritative upstream for known issues." },
          { label: "Steam Community Hub", href: "https://steamcommunity.com/app/4259190", description: "Day-of patch announcements." },
        ],
      },
    ],
    faqIds: ["kr6-known-issues", "kr6-known-issues-steam", "kr6-known-issues-mobile"],
    relatedPageIds: ["release-date-status", "platforms-faq", "system-requirements", "wiki"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-25",
  },
];