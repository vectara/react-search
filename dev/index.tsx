import React, { ChangeEvent, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { BiLogoGithub } from "react-icons/bi";
import { ReactSearch } from "../";
import {
  VuiAppContent,
  VuiAppHeader,
  VuiAppLayout,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiIconButton,
  VuiTitle
} from "./src/ui";
import { HeaderLogo } from "./src/components/HeaderLogo";
import "./src/ui/_index.scss";

const DEFAULT_CORPUS_ID = "1";
const DEFAULT_CUSTOMER_ID = "1366999410";
const DEFAULT_API_KEY = "zqt_UXrBcnI2UXINZkrv4g1tQPhzj02vfdtqYJIDiA";
const DEFAULT_PLACEHOLDER = 'Try searching for "vectara" or "grounded generation"';

const Content = () => {
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
    <>
      <div className="pageContentWrapper">
        <h1 id="title">@vectara/react-search</h1>
        <div>
          <div className="subsection">
            <p>
              ReactSearch is the easiest way to add Vectara semantic search to your React apps. With just a few lines of
              code, you can add a Vectara-powered search UI to your React applications.
            </p>
            <p>
              Try it out below! By default, this search UI connects to our documentation, so you can search for anything
              docs-related here. If you would like to change this, please see the <strong>Configuration</strong>{" "}
              section.
            </p>
          </div>
          <div className="searchOuterWrapper">
            <div className="searchInnerWrapper">
              {/**
               * Here we ensure that if the field is blank, we use the default props that point to the docs page.
               * This ensures that we don't voluntarily display the docs corpus details in the text fields.
               */}
              <ReactSearch
                corpusId={corpusId === "" ? DEFAULT_CORPUS_ID : corpusId}
                customerId={customerId === "" ? DEFAULT_CUSTOMER_ID : customerId}
                apiKey={apiKey === "" ? DEFAULT_API_KEY : apiKey}
                placeholder={placeholder}
              />
            </div>
          </div>
          <div></div>
          <div className="subsection">
            <h2 className="header">CONFIGURATION</h2>
            <div className="propSet">
              <h3 className="header">REQUIRED PROPS</h3>
              <p>
                These props determine the datastore that the component connects to.{" "}
                <em>
                  If you have already have a Vectara datastore, you can enter values here to have the ReactSearch
                  component search your own datastore.
                </em>
              </p>
              <form>
                <div className="configurationField">
                  <label htmlFor="corpusId">Vectara Corpus ID: </label>
                  <input id="corpusId" value={corpusId} onChange={onUpdateCorpusId} />
                </div>

                <div className="configurationField">
                  <label htmlFor="customerId">Vectara Customer ID: </label>
                  <input id="customerId" value={customerId} onChange={onUpdateCustomerId} />
                </div>

                <div className="configurationField">
                  <label htmlFor="apiKey">Vectara Query API Key: </label>
                  <input id="apiKey" value={apiKey} className="longInput" onChange={onUpdateApiKey} />
                </div>
              </form>
            </div>
            <div className="propSet">
              <h3 className="header">OPTIONAL PROPS</h3>
              <p>These props determine the look and feel of the component.</p>
              <form>
                <div className="configurationField">
                  <label htmlFor="placeholer">Placeholder: </label>
                  <input id="placeholder" value={placeholder} className="longInput" onChange={onUpdatePlaceholder} />
                </div>
              </form>
            </div>
          </div>
          <div className="subsection">
            <h2 className="header">USAGE</h2>
            <p>First, install the ReactSearch component:</p>
            <code>npm install @vectara/react-search</code>
            <p>Then, in your code, import ReactSearch and integrate it into any component:</p>
            <code>{codeSnippet}</code>
          </div>

          <div className="subsection">
            <h2 className="header">GITHUB REPOSITORY</h2>
            <p>
              Source code and full documentation are available{" "}
              <a href="https://github.com/vectara/react-search" target="_blank">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
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
