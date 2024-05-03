import { removeCitations } from "vui/utils/citations";
import { VuiFlexContainer, VuiFlexItem, VuiSpacer, VuiSpinner, VuiText, VuiToggle } from "./vui";

type Props = {
  isSummaryEnabled: boolean;
  setIsSummaryEnabled: (isShowAnswer: boolean) => void;
  isLoading: boolean;
  summary?: string;
};

export const SummaryContainer = ({ isSummaryEnabled, setIsSummaryEnabled, isLoading, summary }: Props) => {
  const sanitizedSummary = summary ? removeCitations(summary) : undefined;

  let summaryContent;

  if (isSummaryEnabled) {
    if (isLoading) {
      summaryContent = (
        <VuiFlexContainer spacing="s">
          <VuiFlexItem>
            <VuiSpinner size="s" />
          </VuiFlexItem>

          <VuiFlexItem>
            <VuiText>Summarizing…</VuiText>
          </VuiFlexItem>
        </VuiFlexContainer>
      );
    } else if (sanitizedSummary) {
      summaryContent = (
        <VuiText>
          <p>{sanitizedSummary}</p>
        </VuiText>
      );
    }
  }

  return (
    <div className="vrsAnswerContainer">
      <VuiToggle
        checked={isSummaryEnabled}
        onChange={(e) => setIsSummaryEnabled(e.target.checked)}
        label="Summarize seach results"
      />

      {summaryContent && (
        <>
          <VuiSpacer size="m" />
          {summaryContent}
        </>
      )}
    </div>
  );
};
