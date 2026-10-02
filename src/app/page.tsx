import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { getPageByUrl } from "@/lib/content";
import { metadataForPage } from "@/lib/seo";

const page = getPageByUrl("/");

if (!page) {
  throw new Error("Primary-locale homepage is missing");
}

export const metadata = metadataForPage(page);

export default function Page() {
  if (!page) notFound();

  return (
    <PageRenderer page={page} />
  );
}
