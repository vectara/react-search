import {
  ChangeEvent,
  useCallback,
  useState,
  KeyboardEvent as ReactKeyboardEvent,
  useRef,
  useEffect,
  useMemo
} from "react";
import * as ReactDOM from "react-dom";
import getUuid from "uuid-by-string";
import { VuiFlexContainer, VuiFlexItem, VuiSpinner, VuiText } from "./vui";
import { DeserializedSearchResult, Props } from "./types";
import { useSearch } from "./useSearch";
import { SearchResult } from "./SearchResult";
import { SearchModal } from "./SearchModal";
import { useSearchHistory } from "./useSearchHistory";

// @ts-ignore
import cssText from "./_index.scss";
import "./globals.scss";

import { SearchInput } from "./SearchInput";
import { SummaryContainer } from "./SummaryContainer";

const getQueryParam = (urlParams: URLSearchParams, key: string) => {
  const value = urlParams.get(key);
  if (value) return decodeURIComponent(value);
  return undefined;
};

/**
 * A client-side search component that queries a specific corpus with a user-provided string.
 */
const ReactSearchInternal = ({
  customerId,
  apiKey,
  corpusId,
  apiUrl,
  historySize = 10,
  placeholder = "Search",
  isDeeplinkable = false,
  openResultsInNewTab = false,
  zIndex = 9999,
  onToggleSummary,
  isSummaryToggleVisible = false,
  isSummaryToggleInitiallyEnabled = false
}: Props) => {
  // Compute a unique ID for this search component.
  // This creates a namespace, and ensures that stored search results
  // for one search box don't appear for another.
  // NOTE: This is an implementation for what's historically been found to be
  // an issue with persistent search history: overlap between the histories
  // of different search boxes.
  const searchId = useMemo(() => getUuid(`${customerId}-${corpusId}-${apiKey}`), [customerId, corpusId, apiKey]);
  const { addPreviousSearch } = useSearchHistory(searchId, historySize);
  const { fetchSearchResults, isLoading } = useSearch(customerId, corpusId, apiKey, apiUrl);

  const [selectedResultIndex, setSelectedResultIndex] = useState<number>();
  const [searchResults, setSearchResults] = useState<DeserializedSearchResult[]>([]);
  const [summary, setSummary] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSummaryEnabled, setIsSummaryEnabled] = useState<boolean>(isSummaryToggleInitiallyEnabled);

  const buttonRef = useRef<HTMLDivElement | null>(null);
  const selectedResultRef = useRef<HTMLDivElement | null>(null);
  const searchCount = useRef<number>(0);

  useEffect(() => {
    setIsSummaryEnabled(isSummaryToggleInitiallyEnabled);
  }, [isSummaryToggleInitiallyEnabled]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const deeplinkedSearch = getQueryParam(queryParams, "search");

    if (deeplinkedSearch) {
      setIsOpen(true);
      setSearchValue(deeplinkedSearch);
      sendSearchQuery(deeplinkedSearch);
    }
  }, []);

  const sendSearchQuery = async (query: string) => {
    if (query.length === 0) {
      return;
    }

    if (isDeeplinkable) {
      // Persist search.
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set("search", query);
      history.replaceState(null, "", "?" + queryParams.toString());
    }

    addPreviousSearch(query);
    const searchId = ++searchCount.current;
    const { searchResults, summary } = await fetchSearchResults(query, isSummaryEnabled);

    if (searchId === searchCount.current) {
      setSearchResults(searchResults);
      setSummary(summary);
      setSelectedResultIndex(undefined);
      selectedResultRef.current = null;
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      sendSearchQuery(searchValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  useEffect(() => {
    sendSearchQuery(searchValue);
  }, [isSummaryEnabled]);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const currentQuery = evt.target.value;
    setSearchValue(currentQuery);

    if (currentQuery.length === 0) {
      resetResults();
    }
  };

  const onKeyDown = useCallback(
    (evt: ReactKeyboardEvent) => {
      const key = evt.key;

      if (key === "Enter") {
        evt.preventDefault();

        if (selectedResultIndex !== undefined) {
          window.open(searchResults[selectedResultIndex].url, openResultsInNewTab ? "_blank" : "_self");
        } else {
          sendSearchQuery(searchValue);
        }
      }

      if (searchResults.length === 0) {
        return;
      }

      if (key === "ArrowDown") {
        setSelectedResultIndex((prevValue) => {
          return prevValue === undefined || prevValue === searchResults.length - 1 ? 0 : prevValue + 1;
        });
      }

      if (key === "ArrowUp") {
        setSelectedResultIndex((prevValue) => {
          return prevValue === undefined || prevValue === 0 ? searchResults.length - 1 : prevValue - 1;
        });
      }
    },
    [searchResults, selectedResultIndex]
  );

  const resetResults = () => {
    setSummary(undefined);
    setSearchResults([]);
    setSelectedResultIndex(undefined);
    selectedResultRef.current = null;
  };

  const closeModalAndResetResults = () => {
    setIsOpen(false);
    setSearchValue("");
    resetResults();

    if (isDeeplinkable) {
      // Clear persisted search.
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.delete("search");
      history.replaceState(null, "", "?" + queryParams.toString());
    }
  };

  const resultsList =
    searchResults.length === 0
      ? undefined
      : searchResults.map((searchResult, index) => {
          const {
            snippet: { pre, text, post }
          } = searchResult;

          return (
            <div ref={selectedResultIndex === index ? selectedResultRef : undefined} key={`${pre}${text}${post}`}>
              <SearchResult
                searchResult={searchResult}
                isSelected={selectedResultIndex === index}
                opensInNewTab={openResultsInNewTab}
              />
            </div>
          );
        });

  useEffect(() => {
    if (selectedResultRef.current) {
      selectedResultRef.current.scrollIntoView({
        behavior: "instant",
        block: "nearest"
      });
    }
  }, [selectedResultRef.current]);

  useEffect(() => {
    const openSearchOnKeyStroke = (e: KeyboardEvent) => {
      if (e.key === "k" && e.ctrlKey) {
        setIsOpen(true);
      }
    };

    document.addEventListener("keyup", openSearchOnKeyStroke);

    return () => {
      document.removeEventListener("keyup", openSearchOnKeyStroke);
    };
  }, []);

  return (
    <>
      <div>
        <div ref={buttonRef}>
          <button className="vrsSearchButton" onClick={() => setIsOpen(true)}>
            <VuiFlexContainer
              alignItems="center"
              spacing="none"
              justifyContent="spaceBetween"
              className="vrsSearchButton__inner"
            >
              <VuiFlexItem>
                <VuiFlexContainer alignItems="center" spacing="xs">
                  <VuiFlexItem>
                    <SearchIcon />
                  </VuiFlexItem>

                  <VuiFlexItem>
                    <VuiText>
                      <div>Search</div>
                    </VuiText>
                  </VuiFlexItem>
                </VuiFlexContainer>
              </VuiFlexItem>

              <div className="vrsSearchButtonShortcut">Ctrl + K</div>
            </VuiFlexContainer>
          </button>
        </div>

        <SearchModal isOpen={isOpen} onClose={closeModalAndResetResults} zIndex={zIndex}>
          <form>
            <div className="vrsSearchForm">
              <div className="vrsCloseButtonWrapper">
                <button
                  className="vrsSubmitButton"
                  aria-label="Close"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    closeModalAndResetResults();
                  }}
                >
                  <CloseIcon size="12px" />
                </button>
              </div>

              <SearchInput
                value={searchValue}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                autoFocus={true}
              />

              {isLoading ? (
                <div className="vrsSubmitButtonWrapper">
                  <VuiSpinner size="xs" />
                </div>
              ) : (
                <div className="vrsSubmitButtonWrapper">
                  <button
                    className="vrsSubmitButton"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault();
                      sendSearchQuery(searchValue);
                    }}
                  >
                    <SearchIcon />
                  </button>
                </div>
              )}
            </div>
          </form>

          {isSummaryToggleVisible && (
            <SummaryContainer
              isSummaryEnabled={isSummaryEnabled}
              setIsSummaryEnabled={(isSummaryEnabled: boolean) => {
                setIsSummaryEnabled(isSummaryEnabled);
                onToggleSummary?.(isSummaryEnabled);
              }}
              isLoading={isLoading}
              summary={summary}
            />
          )}

          {resultsList && <div className="vrsSearchModalResults">{resultsList}</div>}
        </SearchModal>
      </div>
    </>
  );
};

const SearchIcon = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      height="17px"
      width="17px"
      version="1.1"
      viewBox="-24.52 -24.52 539.44 539.44"
      xmlSpace="preserve"
      stroke="currentColor"
      strokeWidth="12"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z" />{" "}
        </g>
      </g>
    </svg>
  </div>
);

export const CloseIcon = ({ size }: { size: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329.26933 329" width={size} height={size} fill="currentColor">
    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
  </svg>
);

let _props = {};

class ReactSearchWebComponent extends HTMLElement {
  sheet!: CSSStyleSheet;
  sr!: ShadowRoot;
  mountPoint!: HTMLDivElement;

  static get observedAttributes() {
    // We use the stringified version of the React props to trigger a re-render.
    return ["props"];
  }

  constructor() {
    super();
    this.sr = this.attachShadow({ mode: "open" });

    // If the CSSStyleSheet constructor isn't supported, default to creating a style element.
    // We prefer the CSSStyleSheet approach as it's a recommended way to style web components, and growing in support:
    // https://webcomponents.guide/learn/components/styling/
    try {
      this.sheet = new CSSStyleSheet();
      this.sheet.replaceSync(cssText);
      this.sr.adoptedStyleSheets = [this.sheet];
    } catch {
      const styleElement = document.createElement("style");
      styleElement.innerText = cssText;
      this.sr.appendChild(styleElement);
    }

    this.mountPoint = document.createElement("div");
    this.sr.appendChild(this.mountPoint);
  }

  public connectedCallback() {
    ReactDOM.render(<ReactSearchInternal {...(_props as Props)} />, this.mountPoint);
  }

  attributeChangedCallback() {
    this.connectedCallback();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint);
  }
}

window.customElements.get("react-search") || window.customElements.define("react-search", ReactSearchWebComponent);

export const ReactSearch = (props: Props) => {
  _props = props;

  // @ts-ignore
  return <react-search props={JSON.stringify(props)} />;
};
