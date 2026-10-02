"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AssetMedia } from "@/components/media/AssetMedia";
import type { EntityGridModule } from "@/types/modules";

export function referenceAnchor(moduleId: string, title: string) {
  return `${moduleId}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}

/** Browse only the existing module's names and tags; no inferred stats or ranking. */
export function ReferenceDirectory({ guideModule, currentUrl }: { guideModule: EntityGridModule; currentUrl: string }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const tags = [...new Set(guideModule.items.flatMap(item => item.badge ? [item.badge] : []))];
  const matches = useMemo(() => guideModule.items.filter(item => (!tag || item.badge === tag) && `${item.title} ${item.badge ?? ""} ${item.summary}`.toLowerCase().includes(query.trim().toLowerCase())), [guideModule.items, query, tag]);
  const matchSet = new Set(matches);
  return <section id={guideModule.id} className="content-module reference-directory" aria-labelledby={`${guideModule.id}-heading`}>
    <div className="reference-directory-heading"><h2 id={`${guideModule.id}-heading`}>{guideModule.heading}</h2><p>{guideModule.items.length} entries in this reference</p></div>
    <div className="reference-controls">
      <label htmlFor={`${guideModule.id}-search`}>Find a name or role</label>
      <input id={`${guideModule.id}-search`} type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search this list" />
      {tags.length > 1 ? <div className="reference-filters" role="group" aria-label="Filter by role or family">
        {["", ...tags].map(value => <button key={value} type="button" aria-pressed={tag === value} onClick={() => setTag(value)}>{value || "All"}</button>)}
      </div> : null}
      <p className="reference-result-count" aria-live="polite">{matches.length} of {guideModule.items.length} entries shown</p>
    </div>
    <div className="reference-entries">
      {guideModule.items.map(item => {
        const anchor = referenceAnchor(guideModule.id, item.title);
        const isSelf = item.href?.replace(/\/$/, "") === currentUrl.replace(/\/$/, "");
        return <article id={anchor} key={anchor} className="reference-entry" hidden={!matchSet.has(item)}>
          <div className="reference-entry-name"><h3>{item.title}</h3>{item.badge ? <span>{item.badge}</span> : null}</div>
          <p>{item.summary}</p>
          {item.assetId ? <AssetMedia assetId={item.assetId} /> : null}
          {item.href ? <Link href={isSelf ? `#${anchor}` : item.href} aria-label={`${item.title} reference link`} className="reference-entry-link">{isSelf ? "Link to this entry" : "View guide"}</Link> : null}
        </article>;
      })}
    </div>
    {!matches.length ? <p className="reference-empty">No entries match. <button type="button" onClick={() => { setQuery(""); setTag(""); }}>Clear filters</button></p> : null}
  </section>;
}
