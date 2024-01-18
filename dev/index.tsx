import { ChangeEvent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { BiLogoGithub } from "react-icons/bi";
import { ReactSearch } from "../";
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
} from "./src/ui";
import { HeaderLogo } from "./src/components/HeaderLogo";
import { ConfigurationDrawer } from "components/ConfigurationDrawer";
import "./src/ui/_index.scss";
import "./index.scss";

const DEFAULT_CORPUS_ID = "1";
const DEFAULT_CUSTOMER_ID = "1366999410";
const DEFAULT_API_KEY = "zqt_UXrBcnI2UXINZkrv4g1tQPhzj02vfdtqYJIDiA";
const DEFAULT_PLACEHOLDER = 'Try searching for "vectara" or "grounded generation"';

const Content = () => {
  const [isConfigurationDrawerOpen, setIsConfigurationDrawerOpen] = useState(false);
  const [corpusId, setCorpusId] = useState<string>("");
  const [customerId, setCustomerId] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(DEFAULT_PLACEHOLDER);

  const onUpdateCorpusId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCorpusId(e.target.value);
  }, []);

  const onUpdateCustomerId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCustomerId(e.target.value);
  }, []);

  const onUpdateApiKey = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  }, []);

  const onUpdatePlaceholder = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPlaceholder(e.target.value);
  }, []);

  return (
    <div className="content">
      <VuiTitle size="l">
        <h1>Vectara React-Search</h1>
      </VuiTitle>

      <VuiSpacer size="m" />

      <VuiText>
        <p>
          React-Search adds a Vectara-powered semantic search UI to your React applications with a few lines of code.
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

      <VuiSpacer size="s" />

      <VuiText>
        <p>
          For help, <VuiLink href="https://github.com/vectara/react-search">read the docs.</VuiLink>
        </p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiCode>npm install @vectara/react-search</VuiCode>

      <VuiSpacer size="s" />

      <VuiCode language="tsx">{codeSnippet}</VuiCode>

      <ConfigurationDrawer
        isOpen={isConfigurationDrawerOpen}
        setIsOpen={setIsConfigurationDrawerOpen}
        corpusId={corpusId}
        onUpdateCorpusId={onUpdateCorpusId}
        customerId={customerId}
        onUpdateCustomerId={onUpdateCustomerId}
        apiKey={apiKey}
        onUpdateApiKey={onUpdateApiKey}
        placeholder={placeholder}
        onUpdatePlaceholder={onUpdatePlaceholder}
      />
    </div>
  );
};

const codeSnippet = `
import { ReactSearch } from "@vectara/react-search";

export const App = () => (
  <div>
    <ReactSearch
      corpusId="<Your Vectara corpus ID>"
      customerId="<Your Vectara customer ID>"
      apiKey="<Your Vectara query key>"
      placeholder="What would you like to search for?"
    />
  </div>
);
`;

const App = () => {
  return (
    <BrowserRouter>
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
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
        </VuiAppContent>
      </VuiAppLayout>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
