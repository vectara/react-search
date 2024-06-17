import { RerankingConfiguration } from "../../../lib/types";
import {
  VuiButtonPrimary,
  VuiDrawer,
  VuiLink,
  VuiSpacer,
  VuiText,
  VuiTitle,
  VuiFormGroup,
  VuiTextInput,
  VuiToggle,
  VuiTextArea
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
  isShortcutEnabled: boolean;
  setIsShortcutEnabled: (isShortcutEnabled: boolean) => void;
  buttonLabel: string;
  setButtonLabel: (buttonLabel: string) => void;
  placeholder: string;
  setPlaceholder: (placeholder: string) => void;
  isDeepLinkable: boolean;
  setIsDeepLinkable: (isDeepLinkable: boolean) => void;
  openResultsInNewTab: boolean;
  isOnToggleSummaryHandled: boolean;
  setIsOnToggleSummaryHandled: (isOnToggleSummaryHandled: boolean) => void;
  setOpenResultsInNewTab: (openResultsInNewTab: boolean) => void;
  isSummaryToggleVisible: boolean;
  setIsSummaryToggleVisible: (isSummaryToggleVisible: boolean) => void;
  isSummaryToggleInitiallyEnabled: boolean;
  setIsSummaryToggleInitiallyEnabled: (isSummaryToggleInitiallyEnabled: boolean) => void;
  rerankingConfigurationString?: string;
  setRerankingConfigurationString: (configurationString: string) => void;
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
  isShortcutEnabled,
  setIsShortcutEnabled,
  buttonLabel,
  setButtonLabel,
  placeholder,
  setPlaceholder,
  isDeepLinkable,
  setIsDeepLinkable,
  openResultsInNewTab,
  setOpenResultsInNewTab,
  isOnToggleSummaryHandled,
  setIsOnToggleSummaryHandled,
  isSummaryToggleVisible,
  setIsSummaryToggleVisible,
  isSummaryToggleInitiallyEnabled,
  setIsSummaryToggleInitiallyEnabled,
  rerankingConfigurationString,
  setRerankingConfigurationString
}: Props) => {
  const rerankingConfigPlaceholder = `{
  "rerankerId": 272725718,
  "mmrConfig": {
    "diversityBias": 0
  }
}`;
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
        <h3 className="header">Search button</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Open modal with keyboard shortcut" labelFor="isKeyboardShortcutEnabled">
        <VuiToggle
          checked={isShortcutEnabled}
          onChange={(e) => setIsShortcutEnabled(e.target.checked)}
          id="isKeyboardShortcutEnabled"
        />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="Button label text" labelFor="buttonLabelText">
        <VuiTextInput value={buttonLabel} onChange={(e) => setButtonLabel(e.target.value)} fullWidth />
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
        <h3 className="header">Search behavior</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Enable deep-linking to a search" labelFor="isDeepLinkable">
        <VuiToggle checked={isDeepLinkable} onChange={(e) => setIsDeepLinkable(e.target.checked)} id="isDeepLinkable" />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

      <VuiFormGroup label="Open a search result's link in a new tab" labelFor="openResultsInNewTab">
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

      <VuiFormGroup label="Handle summary toggle change" labelFor="summaryToggleHandler">
        <VuiToggle
          checked={isOnToggleSummaryHandled}
          onChange={(e) => setIsOnToggleSummaryHandled(e.target.checked)}
          id="summaryToggleHandler"
        />
      </VuiFormGroup>

      <VuiSpacer size="xs" />

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

      <VuiTitle size="s">
        <h3 className="header">Reranking</h3>
      </VuiTitle>

      <VuiSpacer size="s" />

      <VuiFormGroup label="Reranking Configuration" labelFor="rerankingConfiguration">
        <VuiTextArea
          fullWidth={true}
          placeholder={rerankingConfigPlaceholder}
          value={rerankingConfigurationString}
          onChange={(e) => setRerankingConfigurationString(e.target.value)}
          id="rerankingConfiguration"
        />
      </VuiFormGroup>

      <VuiSpacer size="l" />

      <VuiButtonPrimary color="primary" onClick={() => setIsOpen(false)}>
        Close
      </VuiButtonPrimary>
    </VuiDrawer>
  );
};
