import Link from "next/link";
import { StrategyFrame } from "@/components/strategy/StrategyFrame";
import { getPageByUrl } from "@/lib/content";
export default function NotFound() {
  const page = getPageByUrl("/about")!;
  return <StrategyFrame page={page}><section className="strategy-article"><p>404</p><h1>Page not found</h1><p>This guide could not be found.</p><Link href="/">Back to the guide</Link></section></StrategyFrame>;
}
