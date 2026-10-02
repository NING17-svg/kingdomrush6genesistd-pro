import { RichText } from "@/components/content/RichText";
import { getLocaleUiLabels } from "@/lib/localization";

export function AnswerSummary({
  answer,
  context,
  locale,
}: {
  answer: string;
  context?: string;
  locale: string;
}) {
  const contextLabel = getLocaleUiLabels(locale).answerContext ?? "More context";

  return (
    <div className="quick-answer">
      <RichText text={answer} />
      {context?.trim() ? (
        <details className="quick-answer__context">
          <summary>{contextLabel}</summary>
          <RichText text={context} />
        </details>
      ) : null}
    </div>
  );
}
