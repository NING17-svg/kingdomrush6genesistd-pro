import Link from "next/link";
import { AnswerSummary } from "@/components/content/AnswerSummary";
import { FAQBlock } from "@/components/content/FAQBlock";
import { ModuleRenderer } from "@/components/content/ModuleRenderer";
import { PageContents } from "@/components/content/PageContents";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { KeyFacts } from "@/components/content/KeyFacts";
import { AssetMedia } from "@/components/media/AssetMedia";
import { AdSlot } from "@/components/ads/AdSlot";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, collectionPageSchema, faqSchema } from "@/lib/schema";
import { getFaqsForPage, getRelatedPages } from "@/lib/content";
import { getLocaleUiLabels } from "@/lib/localization";
import { ReferenceDirectory } from "@/components/strategy/ReferenceDirectory";
import type { PageContent } from "@/types/content";
import type { GuideModule } from "@/types/modules";

function ArticleModules({ modules, page }: { modules: GuideModule[]; page: PageContent }) {
  return <div className="strategy-article-modules">{modules.map(module => module.type === "entity-grid" ? <ReferenceDirectory key={module.id} guideModule={module} currentUrl={page.url}/> : <ModuleRenderer key={module.id} modules={[module]}/>)}</div>;
}
export function StrategyArticle({ page }: { page: PageContent }) {
  const faqs=getFaqsForPage(page), related=getRelatedPages(page);
  const reference=["/heroes","/towers","/controls"].includes(page.url);
  const plain=page.pageType==="site";
  const layout=plain ? "strategy-trust" : reference ? "strategy-reference" : "strategy-guide";
  const assetId=page.id==="heroes-list" ? "linirea-battle" : page.id==="towers-list" ? "tower-defense" : page.id==="campaign-stages" ? "campaign-scene" : undefined;
  const leadingModules=page.modules.slice(0,2), remainingModules=page.modules.slice(2);
  const localeUi=getLocaleUiLabels(page.locale);
  const date = new Intl.DateTimeFormat(page.locale,{dateStyle:'medium',timeZone:'UTC'}).format(new Date(page.lastReviewed+'T00:00:00Z'));
  return <article className={`strategy-article ${plain ? 'strategy-plain' : ''}`} data-v4-layout={layout}>
    <JsonLd data={breadcrumbSchema(page)}/><JsonLd data={page.pageType==='wiki'||page.pageType==='guides'?collectionPageSchema(page):articleSchema(page)}/>{faqs.length ? <JsonLd data={faqSchema(faqs)}/> : null}
    <header className="strategy-article-heading" data-v4-region="heading"><nav className="strategy-breadcrumb" aria-label="Breadcrumb"><Link href="/">Kingdom Rush 6</Link><span aria-hidden="true">/</span><span>{page.hero.eyebrow || 'Guide'}</span></nav><h1>{page.h1}</h1><p className="page-review">{localeUi.lastReviewed}: <time dateTime={page.lastReviewed}>{date}</time></p>{!plain ? <p className="strategy-review-note">Reference snapshot from this date. Balance and availability may have changed.</p> : null}</header>
    <div className="strategy-answer" data-v4-region="answer"><AnswerSummary answer={page.quickAnswer} context={page.quickAnswerContext} locale={page.locale}/></div>
    {page.keyFacts.length ? <div className="strategy-facts" data-v4-region="facts"><KeyFacts facts={page.keyFacts}/></div> : null}
    {assetId ? <div className="strategy-context-scene" data-v4-region="scene"><AssetMedia assetId={assetId} sizes="(max-width: 1000px) 100vw, 75vw"/><span>Official gameplay scene · Ironhide Game Studio</span></div> : null}
    {page.modules.filter(module => module.type === "callout" ? module.title : module.heading).length >= 2 ? <div className="strategy-contents" data-v4-region="contents"><PageContents page={page} collapsible/></div> : null}
    <AdSlot placement="responsive-banner"/>
    <div className="strategy-body" data-v4-region="body"><ArticleModules modules={leadingModules} page={page}/><AdSlot placement="native-banner"/>{remainingModules.length ? <ArticleModules modules={remainingModules} page={page}/> : null}</div>
    {faqs.length ? <div data-v4-region="faq"><FAQBlock faqs={faqs}/></div> : null}
    {related.length ? <div data-v4-region="related"><RelatedLinks pages={related}/></div> : null}
  </article>;
}
