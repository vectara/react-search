import { ChangeEvent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { BiLogoGithub } from "react-icons/bi";
import { ReactSearch } from "@vectara/react-search";
import {
  VuiAppContent,
  VuiAppHeader,
  VuiAppLayout,
  VuiButtonSecondary,
  VuiCode,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiIconButton,
  VuiLink,
  VuiSpacer,
  VuiText,
  VuiTitle
} from "./ui";
import { HeaderLogo } from "./components/HeaderLogo";
import { ConfigurationDrawer } from "components/ConfigurationDrawer";
import "./ui/_index.scss";
import "./index.scss";
import { set } from "lodash";

const generateCodeSnippet = (
  customerId?: string,
  corpusId?: string,
  apiKey?: string,
  placeholder?: string,
  isDeepLinkable: boolean = false,
  openResultsInNewTab: boolean = false,
  isSummaryToggleVisible: boolean = false,
  isSummaryToggleInitiallyEnabled: boolean = false
) => {
  let quotedPlaceholder = placeholder;

  if (placeholder) {
    if (placeholder.match('"')) {
      quotedPlaceholder = `'${placeholder}'`;
    } else {
      quotedPlaceholder = `"${placeholder}"`;
    }
  }

  const props = [
    `customerId="${customerId === "" ? "<Your Vectara customer ID>" : customerId}"`,
    `corpusId="${corpusId === "" ? "<Your Vectara corpus ID>" : corpusId}"`,
    `apiKey="${apiKey === "" ? "<Your Vectara API key>" : apiKey}"`
  ];

  if (placeholder) {
    props.push(`placeholder=${quotedPlaceholder}`);
  }

  if (isDeepLinkable) {
    props.push(`isDeeplinkable={${isDeepLinkable}}`);
  }

  if (openResultsInNewTab) {
    props.push(`openResultsInNewTab={${openResultsInNewTab}}`);
  }

  if (isSummaryToggleVisible) {
    props.push(`isSummaryToggleVisible={${isSummaryToggleVisible}}`);
  }

  if (isSummaryToggleInitiallyEnabled) {
    props.push(`isSummaryToggleInitiallyEnabled={${isSummaryToggleInitiallyEnabled}}`);
  }

  props.push(`zIndex={ /* (optional) number representing the z-index the search modal should have */ }`);

  return `import { ReactSearch } from "@vectara/react-search";

export const App = () => (
  <div>
    <ReactSearch
      ${props.join("\n      ")}
    />
  </div>
);`;
};

const DEFAULT_CORPUS_ID = "1";
const DEFAULT_CUSTOMER_ID = "1366999410";
const DEFAULT_API_KEY = "zqt_UXrBcnI2UXINZkrv4g1tQPhzj02vfdtqYJIDiA";
const DEFAULT_PLACEHOLDER = 'Try searching for "vectara" or "RAG"';

const App = () => {
  const [isConfigurationDrawerOpen, setIsConfigurationDrawerOpen] = useState(false);
  const [corpusId, setCorpusId] = useState<string>("");
  const [customerId, setCustomerId] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(DEFAULT_PLACEHOLDER);
  const [isDeeplinkable, setIsDeeplinkable] = useState<boolean>(false);
  const [openResultsInNewTab, setOpenResultsInNewTab] = useState<boolean>(false);
  const [isSummaryToggleVisible, setIsSummaryToggleVisible] = useState<boolean>(false);
  const [isSummaryToggleInitiallyEnabled, setIsSummaryToggleInitiallyEnabled] = useState<boolean>(false);

  return (
    <>
      <VuiAppHeader
        left={
          <VuiFlexContainer spacing="m" alignItems="center">
            <VuiFlexItem grow={false} shrink={false}>
              <HeaderLogo />
            </VuiFlexItem>

            <VuiFlexItem grow={false} shrink={false}>
              <VuiTitle size="xs">
                <h1>
                  <strong>Vectara React-Search</strong>
                </h1>
              </VuiTitle>
            </VuiFlexItem>
          </VuiFlexContainer>
        }
        right={
          <VuiIconButton
            isAnchor
            href="https://github.com/vectara/react-search"
            target="_blank"
            color="neutral"
            size="l"
            icon={
              <VuiIcon>
                <BiLogoGithub />
              </VuiIcon>
            }
          />
        }
      />

      <VuiAppLayout>
        <VuiAppContent className="appExampleContent" padding="xl">
          <div className="content">
            <VuiTitle size="l">
              <h1>Vectara React-Search</h1>
            </VuiTitle>

            <VuiSpacer size="m" />

            <VuiText>
              <p>
                React-Search adds a Vectara-powered semantic search UI to your React applications with a few lines of
                code.
              </p>
            </VuiText>

            <VuiSpacer size="m" />

            {/**
             * Here we ensure that if the field is blank, we use the default props that point to the docs page.
             * This ensures that we don't voluntarily display the docs corpus details in the text fields.
             */}
            <div className="reactSearchContainer">
              <ReactSearch
                corpusId={corpusId === "" ? DEFAULT_CORPUS_ID : corpusId}
                customerId={customerId === "" ? DEFAULT_CUSTOMER_ID : customerId}
                apiKey={apiKey === "" ? DEFAULT_API_KEY : apiKey}
                placeholder={placeholder}
                isDeeplinkable={isDeeplinkable}
                openResultsInNewTab={openResultsInNewTab}
                isSummaryToggleVisible={isSummaryToggleVisible}
                isSummaryToggleInitiallyEnabled={isSummaryToggleInitiallyEnabled}
              />
            </div>

            <VuiSpacer size="m" />

            <VuiButtonSecondary color="primary" onClick={() => setIsConfigurationDrawerOpen(true)}>
              Edit configuration
            </VuiButtonSecondary>

            <VuiSpacer size="xxl" />

            <VuiTitle size="m">
              <h2>Use it in your code</h2>
            </VuiTitle>

            <VuiSpacer size="m" />

            <VuiText>
              <p>
                For help,{" "}
                <VuiLink isAnchor href="https://github.com/vectara/react-search">
                  read the docs.
                </VuiLink>
              </p>
            </VuiText>

            <VuiSpacer size="m" />

            <VuiCode>npm install @vectara/react-search</VuiCode>

            <VuiSpacer size="s" />

            <VuiCode language="tsx">
              {generateCodeSnippet(customerId, corpusId, apiKey, placeholder, isDeeplinkable, openResultsInNewTab)}
            </VuiCode>

            <VuiSpacer size="xxl" />

            <VuiTitle size="m">
              <h2>Create your own view</h2>
            </VuiTitle>

            <VuiSpacer size="m" />

            <VuiText>
              <p>
                React-Search also exposes a useSearch hook that sends and receives data to/from the search API. This is
                perfect for creating your own components that are powered by Vectara's search functionality.
              </p>
              <p>Check out the example below.</p>
            </VuiText>

            <VuiSpacer size="s" />

            <VuiCode language="tsx">
              {`
import { useSearch } from "@vectara/react-search/lib/useSearch";

export const App = () => {
  const { fetchSearchResults, isLoading } = useSearch(
    "CUSTOMER_ID",
    "CORPUS_ID",
    "API_KEY"
  );

  /* You can pass the values returned by the hook to your custom components as props, or use them
  however you wish. */
};
`}
            </VuiCode>

            <VuiSpacer size="m" />

            <VuiText>
              <p></p>
              <p>The hook returns:</p>
              <ul>
                <li>fetchSearchResults - a function that sends a search string to the search endpoint</li>
                <li>isLoading - a boolean value indicating whether or not a search request is pending</li>
              </ul>
            </VuiText>

            <VuiSpacer size="m" />

            <VuiText>
              For more details, including return value types,{" "}
              <VuiLink isAnchor href="https://github.com/vectara/react-search">
                read the docs.
              </VuiLink>
            </VuiText>

            <ConfigurationDrawer
              isOpen={isConfigurationDrawerOpen}
              setIsOpen={setIsConfigurationDrawerOpen}
              corpusId={corpusId}
              setCorpusId={setCorpusId}
              customerId={customerId}
              setCustomerId={setCustomerId}
              apiKey={apiKey}
              setApiKey={setApiKey}
              placeholder={placeholder}
              setPlaceholder={setPlaceholder}
              isDeeplinkable={isDeeplinkable}
              setIsDeeplinkable={setIsDeeplinkable}
              openResultsInNewTab={openResultsInNewTab}
              setOpenResultsInNewTab={setOpenResultsInNewTab}
              isSummaryToggleVisible={isSummaryToggleVisible}
              setIsSummaryToggleVisible={setIsSummaryToggleVisible}
              isSummaryToggleInitiallyEnabled={isSummaryToggleInitiallyEnabled}
              setIsSummaryToggleInitiallyEnabled={setIsSummaryToggleInitiallyEnabled}
            />
          </div>
        </VuiAppContent>
      </VuiAppLayout>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
