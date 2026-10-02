import Link from "next/link";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { WikiNavigation } from "@/components/layout/WikiNavigation";
import { AdSlot, Smartlink } from "@/components/ads/AdSlot";
import { footerNavigation, navigationLabel } from "@/data/navigation";
import { site } from "@/data/site";
import { theme } from "@/data/theme";
import { themeStyle } from "@/lib/theme";
import { GuideSymbol } from "@/components/strategy/GuideSymbol";
import { getLocaleUiLabels } from "@/lib/localization";
import { getSearchIndexUrl } from "@/lib/search";
import type { PageContent } from "@/types/content";

export function StrategyFrame({ page, children }: { page: PageContent; children: React.ReactNode }) {
  const isHome = page.url === "/";
  return <div className="strategy-site" style={themeStyle(theme)} data-locale={page.locale} data-v4-site="kingdom-rush">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="strategy-header">
      <Link href="/" className="strategy-brand"><span className="strategy-crest"><GuideSymbol kind="towers" /></span><span>Kingdom Rush 6<small>Independent guide</small></span></Link>
      <nav className="strategy-topnav" aria-label="Main navigation">
        {[['/heroes','Roster'],['/campaign','Campaign'],['/beginners-guide','Getting started'],['/guides','All guides']].map(([href,label])=><Link href={href} key={href} aria-current={page.url===href?'page':undefined}>{label}</Link>)}
      </nav>
      <SearchDialog locale={page.locale} labels={getLocaleUiLabels(page.locale)} indexUrl={getSearchIndexUrl(page.locale)} />
    </header>
    <div className={isHome ? "strategy-home-workspace" : "strategy-workspace"}>
      {!isHome ? <div className="strategy-guide-nav"><WikiNavigation locale={page.locale} currentUrl={page.url} desktopMinWidth={1001} /><div className="strategy-rail-ad"><AdSlot placement="right-rail" /></div></div> : null}
      <main id="main-content" lang={page.locale}>{children}</main>
    </div>
    <footer className="strategy-footer"><p>{site.disclaimer}</p><nav aria-label="Footer">{footerNavigation.map(item=><Link key={item.href} href={item.href}>{navigationLabel(item,page.locale)}</Link>)}<Smartlink /></nav></footer>
  </div>;
}
