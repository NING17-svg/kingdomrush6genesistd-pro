import { site } from "@/data/site";
export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}
const item = (href: string, label: string): LocalizedNavigationItem => ({ href, labels: { "en-US": label } });
export const primaryNavigation: LocalizedNavigationItem[] = [
  { ...item("/heroes", "Heroes, towers & spells"), children: [item("/heroes", "Heroes"), item("/towers", "Towers"), item("/controls#spell-roster", "Spells")] },
  { ...item("/campaign", "Campaign & encounters"), children: [item("/campaign", "Campaign"), item("/enemies", "Enemies"), item("/bosses", "Bosses")] },
  { ...item("/beginners-guide", "Getting started"), children: [item("/beginners-guide", "Beginner guide"), item("/controls", "Controls & mechanics"), item("/known-issues", "Known issues"), item("/guides", "All guides")] },
  { ...item("/wiki", "Game information"), children: [item("/release-date", "Release status"), item("/demo", "Demo"), item("/price", "Price & editions"), item("/platforms", "Platforms"), item("/system-requirements", "System requirements"), item("/vs-frontiers", "Compared with Frontiers"), item("/wiki", "Wiki & FAQ"), item("/faq", "FAQ")] },
];
export const footerNavigation: LocalizedNavigationItem[] = [item("/about", "About"), item("/contact", "Contact"), item("/privacy-policy", "Privacy"), item("/terms", "Terms")];
export function navigationLabel(item: LocalizedNavigationItem, locale: string) {
  return item.labels[locale] || item.labels[site.primaryLocale] || Object.values(item.labels)[0];
}
