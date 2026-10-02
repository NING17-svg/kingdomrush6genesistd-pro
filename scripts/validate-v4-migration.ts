import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { PageRenderer } from "../src/components/pages/PageRenderer";
import { getAllPages, getFaqsForPage } from "../src/lib/content";

const baseline = "4e0f87aabf8b7e420c7e999d1bf8f1ec5c0f5016";
const expectedHomeH1 = "Kingdom Rush 6: Genesis TD";
const expectedHomeSeoTitle = "Kingdom Rush 6: Genesis TD Guides, Heroes & Towers";
const expectedUrls = [
  "/",
  "/about",
  "/beginners-guide",
  "/bosses",
  "/campaign",
  "/contact",
  "/controls",
  "/demo",
  "/enemies",
  "/faq",
  "/guides",
  "/heroes",
  "/known-issues",
  "/platforms",
  "/price",
  "/privacy-policy",
  "/release-date",
  "/system-requirements",
  "/terms",
  "/towers",
  "/vs-frontiers",
  "/wiki",
];

function fail(message: string): never {
  console.error(`V4 migration validation failed: ${message}`);
  process.exit(1);
}

function sourceAtBaseline(path: string): string {
  return execFileSync("git", ["show", `${baseline}:${path}`], {
    cwd: process.cwd(),
    encoding: "utf8",
    maxBuffer: 8 * 1024 * 1024,
  });
}

function normalizeHomeSource(source: string): string {
  let h1Count = 0;
  let seoTitleCount = 0;
  const normalized = source
    .replace(/(^\s*h1:\s*)"[^"]*"/m, (_match, prefix: string) => {
      h1Count += 1;
      return `${prefix}"<allowed-home-h1>"`;
    })
    .replace(/(^\s*seoTitle:\s*)"[^"]*"/m, (_match, prefix: string) => {
      seoTitleCount += 1;
      return `${prefix}"<allowed-home-seo-title>"`;
    });
  if (h1Count !== 1 || seoTitleCount !== 1) {
    fail("home source must expose exactly one top-level H1 and SEO title field");
  }
  return normalized;
}

function htmlText(markup: string): string {
  return markup
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeText(value: string): string {
  return value
    .replace(/!?\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*|__|~~|[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en-US");
}

function countExactId(markup: string, id: string): number {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (markup.match(new RegExp(`\\bid="${escaped}"`, "g")) ?? []).length;
}

function normalizeUrl(path: string): string {
  const trimmed = path.replace(/\/$/, "");
  return trimmed || "/";
}

for (const preservedPath of [
  "src/data/pages/kr6-pages.ts",
  "src/data/pages/site-pages.ts",
  "src/data/faq.ts",
]) {
  const actual = readFileSync(resolve(process.cwd(), preservedPath), "utf8");
  if (actual !== sourceAtBaseline(preservedPath)) {
    fail(`${preservedPath} differs from ${baseline}; non-home authored content must remain byte-for-byte unchanged`);
  }
}

const baselineHome = sourceAtBaseline("src/data/pages/home.ts");
const currentHome = readFileSync(resolve(process.cwd(), "src/data/pages/home.ts"), "utf8");
if (normalizeHomeSource(currentHome) !== normalizeHomeSource(baselineHome)) {
  fail("home data changed outside the specifically allowed H1 and SEO title fields");
}

const pages = getAllPages();
const actualUrls = pages.map((page) => page.url).sort();
if (
  pages.length !== expectedUrls.length ||
  new Set(actualUrls).size !== pages.length ||
  actualUrls.join("\n") !== [...expectedUrls].sort().join("\n")
) {
  fail(`expected the 22 existing routes, found ${actualUrls.length}: ${actualUrls.join(", ")}`);
}

const homePage = pages.find((page) => page.url === "/");
if (!homePage) fail("homepage route is missing");
if (homePage.h1 !== expectedHomeH1 || homePage.seoTitle !== expectedHomeSeoTitle) {
  fail("homepage H1 and SEO title do not match the approved labels");
}

const rendered = new Map<string, string>();
for (const page of pages) {
  const markup = renderToStaticMarkup(createElement(PageRenderer, { page }));
  rendered.set(page.url, markup);

  for (const guideModule of page.modules) {
    const occurrences = countExactId(markup, guideModule.id);
    if (occurrences !== 1) {
      fail(`page ${page.url} must render module anchor ${guideModule.id} once; found ${occurrences}`);
    }
  }

  const text = normalizeText(htmlText(markup));
  if (!text.includes(normalizeText(page.h1))) {
    fail(`page ${page.url} does not visibly render its source H1`);
  }
  if (!page.quickAnswer.trim() || !text.includes(normalizeText(page.quickAnswer))) {
    fail(`page ${page.url} does not visibly render its source quick answer`);
  }
  for (const fact of page.keyFacts) {
    if (!text.includes(normalizeText(fact.label)) || !text.includes(normalizeText(fact.value))) {
      fail(`page ${page.url} does not visibly render key fact ${fact.label}`);
    }
  }

  const reviewDateCount = (
    markup.match(new RegExp(`dateTime="${page.lastReviewed}"`, "g")) ?? []
  ).length;
  if (reviewDateCount < 1) {
    fail(`page ${page.url} does not visibly render its source review date`);
  }

  for (const faq of getFaqsForPage(page)) {
    if (
      !text.includes(normalizeText(faq.question)) ||
      !text.includes(normalizeText(faq.answer))
    ) {
      fail(`page ${page.url} does not visibly render FAQ ${faq.id}`);
    }
  }
}

const homeMarkup = rendered.get("/");
if (!homeMarkup) fail("homepage did not render");
if (
  !homeMarkup.includes('class="strategy-home-context"') ||
  !homeMarkup.includes('data-v4-region="directory"')
) {
  fail("homepage must keep its preserved source material in the lower disclosure and render its guide directory");
}

const routeByNormalizedUrl = new Map(
  pages.map((page) => [normalizeUrl(page.url), page] as const),
);
const homepageHrefs = [...homeMarkup.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map((match) =>
  match[1].replace(/&amp;/g, "&"),
);
for (const href of homepageHrefs) {
  if (!href.startsWith("/") || href.startsWith("//")) continue;
  const [pathAndQuery, hash] = href.split("#", 2);
  const path = normalizeUrl(pathAndQuery.split("?", 1)[0] || "/");
  const targetPage = routeByNormalizedUrl.get(path);
  if (!targetPage) fail(`homepage directory links to an unknown route: ${href}`);
  if (hash) {
    const targetMarkup = rendered.get(targetPage.url);
    if (!targetMarkup || countExactId(targetMarkup, decodeURIComponent(hash)) !== 1) {
      fail(`homepage directory link points to a missing section: ${href}`);
    }
  }
}

const obsoleteVisualFiles = [
  "src/components/pages/HomePage.tsx",
  "src/components/pages/HubPage.tsx",
  "src/components/pages/ContentPage.tsx",
  "src/components/pages/WorkspacePage.tsx",
  "src/components/pages/PageHero.tsx",
  "src/components/layout/PageShell.tsx",
  "src/components/layout/Header.tsx",
  "src/components/layout/Footer.tsx",
  "src/components/layout/RightRail.tsx",
  "src/styles/shells.css",
  "src/styles/theme.css",
];
for (const path of obsoleteVisualFiles) {
  if (existsSync(resolve(process.cwd(), path))) {
    fail(`obsolete visual shell remains: ${path}`);
  }
}

const pageRenderer = readFileSync(
  resolve(process.cwd(), "src/components/pages/PageRenderer.tsx"),
  "utf8",
);
for (const requiredEntrypoint of ["StrategyFrame", "StrategyHome", "StrategyArticle"]) {
  if (!pageRenderer.includes(requiredEntrypoint)) {
    fail(`PageRenderer is missing V4 entrypoint ${requiredEntrypoint}`);
  }
}

for (const page of pages) {
  const markup = rendered.get(page.url);
  if (!markup) fail(`page ${page.url} is missing rendered output`);
  const entityModules = page.modules.filter((guideModule) => guideModule.type === "entity-grid");
  for (const guideModule of entityModules) {
    if (!markup.includes('class="reference-directory')) {
      fail(`entity-grid module ${guideModule.id} on ${page.url} was not rendered by ReferenceDirectory`);
    }
    if (guideModule.type !== "entity-grid") continue;
    for (const item of guideModule.items) {
      const anchor = `${guideModule.id}-${item.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`;
      if (countExactId(markup, anchor) !== 1 || !htmlText(markup).includes(item.title)) {
        fail(`entity-grid module ${guideModule.id} did not preserve source item ${item.title}`);
      }
    }
  }
}

console.log(
  `V4 migration validation passed: ${pages.length} routes, preserved non-home page and FAQ files, rendered module anchors, review dates, FAQs, and homepage links`,
);
