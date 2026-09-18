import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release-date/", labels: { "en-US": "Launch & Status" } },
  { href: "/heroes/", labels: { "en-US": "Roster" } },
  { href: "/campaign/", labels: { "en-US": "Campaign" } },
  { href: "/beginners-guide/", labels: { "en-US": "New Player" } },
  { href: "/vs-frontiers/", labels: { "en-US": "Series" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}