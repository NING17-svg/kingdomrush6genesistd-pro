import Link from "next/link";
import { AssetMedia } from "@/components/media/AssetMedia";
import { GuideIndex } from "@/components/content/GuideIndex";
import { ModuleRenderer } from "@/components/content/ModuleRenderer";
import { FAQBlock } from "@/components/content/FAQBlock";
import { KeyFacts } from "@/components/content/KeyFacts";
import { AnswerSummary } from "@/components/content/AnswerSummary";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { websiteSchema, faqSchema } from "@/lib/schema";
import { getFaqsForPage, getPageById, getRecentUpdates } from "@/lib/content";
import { primaryNavigation, navigationLabel } from "@/data/navigation";
import { GuideSymbol } from "@/components/strategy/GuideSymbol";
import type { PageContent } from "@/types/content";
import type { EntityGridModule, GuideIndexModule } from "@/types/modules";

const entries = [
  { kind: "heroes" as const, href: "/heroes", title: "Heroes", text: "Browse names and roles" },
  { kind: "towers" as const, href: "/towers", title: "Towers", text: "Explore the tower families" },
  { kind: "campaign" as const, href: "/campaign", title: "Campaign", text: "Stages, enemies and bosses" },
  { kind: "spells" as const, href: "/controls#spell-roster", title: "Spells", text: "Understand your spell kit" },
];
export function StrategyHome({ page }: { page: PageContent }) {
  const faqs = getFaqsForPage(page);
  const heroes = getPageById("heroes-list")?.modules.find(module => module.type === "entity-grid") as EntityGridModule | undefined;
  const directory: GuideIndexModule = { id: "complete-guide-directory", type: "guide-index", heading: "Find the guide you need", columns: 2, groups: primaryNavigation.map(group => ({ title: navigationLabel(group, page.locale), items: (group.children ?? [group]).map(item => ({ label: navigationLabel(item, page.locale), href: item.href })) })) };
  const recent = getRecentUpdates(page.locale).filter(item => item.url !== "/" && item.pageType !== "site").slice(0, 4);
  return <article className="strategy-home" data-v4-layout="strategy-home">
    <JsonLd data={websiteSchema()} />{faqs.length ? <JsonLd data={faqSchema(faqs)} /> : null}
    <section className="strategy-cover" data-v4-region="identity">
      <div className="strategy-cover-copy"><h1>{page.h1}</h1><p>Find heroes, understand tower families, and plan your next defense.</p><div className="cover-actions"><Link href="/beginners-guide" className="action-primary">Start with the basics</Link><Link href="#complete-guide-directory" className="action-secondary">Browse all guides</Link></div><span className="cover-note">An independent reference for Genesis TD</span></div>
      <AssetMedia assetId="linirea-battle" priority className="strategy-cover-scene" sizes="(max-width: 760px) 100vw, 65vw" />
    </section>
    <nav className="strategy-task-entries" aria-label="Choose a guide topic" data-v4-region="task-entries">{entries.map(entry=><Link key={entry.href} href={entry.href}><GuideSymbol kind={entry.kind}/><span><strong>{entry.title}</strong><small>{entry.text}</small></span></Link>)}</nav>
    <section className="strategy-roster-section" data-v4-region="roster">
      <div className="section-title"><div><h2>Know your roster</h2><p>Heroes and towers shape the defense. Find the reference for each.</p></div><Link href="/controls">How the mechanics work</Link></div>
      <div className="strategy-roster-panels"><section className="roster-hero-panel"><div className="roster-panel-heading"><GuideSymbol kind="heroes"/><h3>Meet the heroes</h3></div><div className="roster-name-preview">{heroes?.items.slice(0, 6).map(item=><Link href={`/heroes#${heroes.id}-${item.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}`} key={item.title}><strong>{item.title}</strong><span>{item.badge}</span></Link>)}</div><Link href="/heroes" className="section-link">Open the hero reference</Link></section>
      <section className="roster-tower-panel"><AssetMedia assetId="tower-defense" sizes="(max-width: 760px) 100vw, 45vw"/><div><h3>Build around your towers</h3><p>Find family tags and the upgrade-system reference.</p><Link href="/towers" className="section-link">Open the tower reference</Link></div></section></div>
    </section>
    <section className="strategy-encounters" data-v4-region="encounters"><div className="section-title"><div><h2>Prepare for the campaign</h2><p>Campaign structure and encounter references, together in one place.</p></div></div><div className="encounter-links">{[{href:'/campaign',title:'Campaign',text:'Stages and Classic Mode'}, {href:'/enemies',title:'Enemies',text:'Races and roster scope'}, {href:'/bosses',title:'Bosses',text:'Boss encounters and source notes'}].map(item=><Link href={item.href} key={item.href}><h3>{item.title}</h3><p>{item.text}</p><span>Read the reference</span></Link>)}</div></section>
    <AdSlot placement="responsive-banner" />
    <div className="strategy-directory" data-v4-region="directory"><GuideIndex guideModule={directory}/></div>
    <section className="strategy-recent" data-v4-region="recent"><h2>Recently reviewed</h2><div>{recent.map(item=><Link key={item.id} href={item.url}><span>{item.hero.eyebrow || item.h1}</span><time dateTime={item.lastReviewed}>{item.lastReviewed}</time></Link>)}</div></section>
    <details className="strategy-home-context" data-v4-region="context"><summary>Launch details, original reference notes and FAQ</summary><p className="page-review">Last reviewed: <time dateTime={page.lastReviewed}>{page.lastReviewed}</time></p><AnswerSummary answer={page.quickAnswer} context={page.quickAnswerContext} locale={page.locale}/><KeyFacts facts={page.keyFacts}/><ModuleRenderer modules={page.modules}/><FAQBlock faqs={faqs}/></details>
  </article>;
}
