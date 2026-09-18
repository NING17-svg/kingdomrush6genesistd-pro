import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Kingdom Rush 6: Genesis TD Hub",
  brandMark: "KR6",
  gameName: "Kingdom Rush 6: Genesis TD",
  domain: "kingdomrush6genesistd.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://kingdomrush6genesistd.pro").replace(/\/$/, ""),
  description:
    "Launch-week reference hub for Kingdom Rush 6: Genesis TD — release date, demo, price, system requirements, heroes, towers, campaign, enemies, bosses, and platform support.",
  tagline:
    "Release status, demo, and roster reference for Kingdom Rush 6: Genesis TD — the next chapter in the Ironhide tower-defense series.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Kingdom Rush 6: Genesis TD Hub",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Kingdom Rush 6: Genesis TD on Steam (AppID 4259190)",
      href: "https://store.steampowered.com/app/4259190/Kingdom_Rush_6_Genesis_TD/",
      description:
        "Authoritative source for release date, system requirements, description, supported languages, demo availability, and pre-order terms.",
    },
    {
      label: "Kingdom Rush 6: Genesis TD Steam Community Hub",
      href: "https://steamcommunity.com/app/4259190",
      description: "Launch-day player discussions, screenshots, and update announcements.",
    },
    {
      label: "SteamDB listing for AppID 4259190",
      href: "https://steamdb.info/app/4259190/",
      description: "Cross-check for release status, package ids, system requirements, and supported languages.",
    },
    {
      label: "Ironhide Kingdom Rush 6: Genesis TD official press release",
      href: "https://www.irondune.com/news/kingdom-rush-6-genesis-td-official-press-release",
      description: "Media/interview tier; restates officially announced features for the launch.",
    },
  ],
  disclaimer:
    "Unofficial fan reference hub. Game data is drawn from the Steam store page, SteamDB, and Ironhide announcements. Launch-window facts may shift; verify the live Steam page for purchase decisions.",
};