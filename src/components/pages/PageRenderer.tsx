import { StrategyFrame } from "@/components/strategy/StrategyFrame";
import { StrategyHome } from "@/components/strategy/StrategyHome";
import { StrategyArticle } from "@/components/strategy/StrategyArticle";
import type { PageContent } from "@/types/content";
export function PageRenderer({ page }: { page: PageContent }) {
  return <StrategyFrame page={page}>{page.url==='/' ? <StrategyHome page={page}/> : <StrategyArticle page={page}/>}</StrategyFrame>;
}
