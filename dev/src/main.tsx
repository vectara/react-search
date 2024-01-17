import React, { useCallback, useState, ChangeEvent } from "react";
import ReactDOM from "react-dom/client";
import { BiLogoGithub } from "react-icons/bi";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  VuiAppContent,
  VuiAppHeader,
  VuiAppLayout,
  VuiButtonSecondary,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiIconButton,
  VuiTitle
} from "./ui";
import { ReactSearch } from "../../src";
import { HeaderLogo } from "./components/HeaderLogo";
import "./ui/_index.scss";

const DEFAULT_CORPUS_ID = "1";
const DEFAULT_CUSTOMER_ID = "1366999410";
const DEFAULT_API_KEY = "zqt_UXrBcnI2UXINZkrv4g1tQPhzj02vfdtqYJIDiA";
const DEFAULT_PLACEHOLDER = 'Try searching for "vectara" or "grounded generation"';

const App = () => {
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
            <Route
              path="/"
              element={
                <ReactSearch
                  corpusId={corpusId === "" ? DEFAULT_CORPUS_ID : corpusId}
                  customerId={customerId === "" ? DEFAULT_CUSTOMER_ID : customerId}
                  apiKey={apiKey === "" ? DEFAULT_API_KEY : apiKey}
                  placeholder={placeholder}
                />
              }
            />
          </Routes>
        </VuiAppContent>
      </VuiAppLayout>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
