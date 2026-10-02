export function GuideSymbol({ kind }: { kind: "heroes" | "towers" | "campaign" | "spells" }) {
  const paths = {
    heroes: <><path d="M8 5h8v8l-4 5-4-5z"/><path d="M12 5v11M6 21h12M12 18v3"/></>,
    towers: <><path d="M6 4v5h12V4M6 6h4V3h4v3h4M8 9v12h8V9M11 21v-5h2v5"/></>,
    campaign: <><path d="m3 6 6-2 6 2 6-2v15l-6 2-6-2-6 2zM9 4v15M15 6v15"/><path d="m6 10 2 3 4-4 4 6 2-2"/></>,
    spells: <><path d="m14 2-9 12h6l-1 8 9-12h-6z"/></>,
  };
  return <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}
