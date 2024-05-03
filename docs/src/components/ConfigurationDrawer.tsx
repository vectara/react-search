import {
  VuiButtonPrimary,
  VuiDrawer,
  VuiLink,
  VuiSpacer,
  VuiText,
  VuiTitle,
  VuiFormGroup,
  VuiTextInput,
  VuiToggle
} from "../ui";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  corpusId: string;
  setCorpusId: (corpusId: string) => void;
  customerId: string;
  setCustomerId: (customerId: string) => void;
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  placeholder: string;
  setPlaceholder: (placeholder: string) => void;
  isDeeplinkable: boolean;
  setIsDeeplinkable: (isDeepLinkable: boolean) => void;
  openResultsInNewTab: boolean;
  setOpenResultsInNewTab: (openResultsInNewTab: boolean) => void;
  isSummaryToggleVisible: boolean;
  setIsSummaryToggleVisible: (isSummaryToggleVisible: boolean) => void;
  isSummaryToggleInitiallyEnabled: boolean;
  setIsSummaryToggleInitiallyEnabled: (isSummaryToggleInitiallyEnabled: boolean) => void;
};

export const ConfigurationDrawer = ({
  isOpen,
  setIsOpen,
  corpusId,
  setCorpusId,
  customerId,
  setCustomerId,
  apiKey,
  setApiKey,
  placeholder,
  setPlaceholder,
  isDeeplinkable,
  setIsDeeplinkable,
  openResultsInNewTab,
  setOpenResultsInNewTab,
  isSummaryToggleVisible,
  setIsSummaryToggleVisible,
  isSummaryToggleInitiallyEnabled,
  setIsSummaryToggleInitiallyEnabled
}: Props) => {
  return (
    <VuiDrawer
      color="primary"
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={
        <VuiTitle size="s">
          <h2>Search configuration</h2>
        </VuiTitle>
      }
    >
      <VuiTitle size="s">
        <h3 className="header">Connect to Vectara data</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiText>
        <p>
          <VuiLink isAnchor href="https://github.com/vectara/react-search?tab=readme-ov-file#set-up-your-search-data">
            How to set up your Vectara data
          </VuiLink>
        </p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Customer ID" labelFor="customerId">
        <VuiTextInput value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="Corpus ID" labelFor="corpusId">
        <VuiTextInput value={corpusId} onChange={(e) => setCorpusId(e.target.value)} />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="API key" labelFor="apiKey">
        <VuiTextInput value={apiKey} onChange={(e) => setApiKey(e.target.value)} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiTitle size="s">
        <h3 className="header">Search input</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Placeholder text" labelFor="placeholderText">
        <VuiTextInput value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} fullWidth />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiTitle size="s">
        <h3 className="header">Link behavior</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Allow deeplinking" labelFor="isDeepLinkable">
        <VuiToggle checked={isDeeplinkable} onChange={(e) => setIsDeeplinkable(e.target.checked)} id="isDeeplinkable" />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="Open results in a new tab" labelFor="openResultsInNewTab">
        <VuiToggle
          checked={openResultsInNewTab}
          onChange={(e) => setOpenResultsInNewTab(e.target.checked)}
          id="openResultsInNewTab"
        />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiTitle size="s">
        <h3 className="header">Summarization</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Is summary toggle visible" labelFor="summaryToggleVisible">
        <VuiToggle
          checked={isSummaryToggleVisible}
          onChange={(e) => setIsSummaryToggleVisible(e.target.checked)}
          id="summaryToggleVisible"
        />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="Is summary toggle initially enabled" labelFor="summaryToggleInitiallyEnabled">
        <VuiToggle
          checked={isSummaryToggleInitiallyEnabled}
          onChange={(e) => setIsSummaryToggleInitiallyEnabled(e.target.checked)}
          id="summaryToggleInitiallyEnabled"
        />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiButtonPrimary color="primary" onClick={() => setIsOpen(false)}>
        Close
      </VuiButtonPrimary>
    </VuiDrawer>
  );
};
