import {
  ChangeEvent,
  FC,
  useCallback,
  useState,
  KeyboardEvent as ReactKeyboardEvent,
  useRef,
  useEffect,
  useMemo
} from "react";
import getUuid from "uuid-by-string";
import { VuiFlexContainer, VuiFlexItem, VuiSpinner, VuiText } from "./vui";
import { DeserializedSearchResult, Props } from "./types";
import { useSearch } from "./useSearch";
import { SearchResult } from "./SearchResult";
import { SearchModal } from "./SearchModal";
import { useSearchHistory } from "./useSearchHistory";
import "./_index.scss";
import { SearchInput } from "./SearchInput";

const getQueryParam = (urlParams: URLSearchParams, key: string) => {
  const value = urlParams.get(key);
  if (value) return decodeURIComponent(value);
  return undefined;
};

/**
 * A client-side search component that queries a specific corpus with a user-provided string.
 */
export const ReactSearch: FC<Props> = ({
  customerId,
  apiKey,
  corpusId,
  apiUrl,
  historySize = 10,
  placeholder = "Search",
  isDeeplinkable = false,
  openResultsInNewTab = false
}) => {
  // Compute a unique ID for this search component.
  // This creates a namespace, and ensures that stored search results
  // for one search box don't appear for another.
  // NOTE: This is an implementation for what's historically been found to be
  // an issue with persistent search history: overlap between the histories
  // of different search boxes.
  const searchId = useMemo(() => getUuid(`${customerId}-${corpusId}-${apiKey}`), [customerId, corpusId, apiKey]);
  const { addPreviousSearch } = useSearchHistory(searchId, historySize);
  const { fetchSearchResults, isLoading } = useSearch(customerId, corpusId, apiKey, apiUrl);

  const [selectedResultIndex, setSelectedResultIndex] = useState<number | null>(null);
  const [searchResults, setSearchResults] = useState<DeserializedSearchResult[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const buttonRef = useRef<HTMLDivElement | null>(null);
  const selectedResultRef = useRef<HTMLDivElement | null>(null);
  const searchCount = useRef<number>(0);

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
    const results = await fetchSearchResults(query);

    if (searchId === searchCount.current) {
      setSearchResults(results);
      setSelectedResultIndex(null);
      selectedResultRef.current = null;
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      sendSearchQuery(searchValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue]);

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

        if (selectedResultIndex !== null) {
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
          return prevValue === null || prevValue === searchResults.length - 1 ? 0 : prevValue + 1;
        });
      }

      if (key === "ArrowUp") {
        setSelectedResultIndex((prevValue) => {
          return prevValue === null || prevValue === 0 ? searchResults.length - 1 : prevValue - 1;
        });
      }
    },
    [searchResults, selectedResultIndex]
  );

  const resetResults = () => {
    setSearchResults([]);
    setSelectedResultIndex(null);
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
      ? null
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
      <div className="vrsStyleWrapper">
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
        <SearchModal isOpen={isOpen} onClose={closeModalAndResetResults}>
          <form>
            <div className="vrsSearchForm">
              <SearchInput value={searchValue} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} />
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
