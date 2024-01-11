import {
  ChangeEvent,
  FC,
  useCallback,
  useState,
  KeyboardEvent as ReactKeyboardEvent,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { BiSearch } from "react-icons/bi";
import getUuid from "uuid-by-string";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiSpinner,
  VuiText,
} from "./vui";
import { DeserializedSearchResult } from "./types";
import { useSearch } from "./useSearch";
import { SearchResult } from "./SearchResult";
import { SearchModal } from "./SearchModal";
import { useSearchHistory } from "./useSearchHistory";
import "./_index.scss";
import { BrowserRouter } from "react-router-dom";
import { SearchInput } from "SearchInput";

const getQueryParam = (urlParams: URLSearchParams, key: string) => {
  const value = urlParams.get(key);
  if (value) return decodeURIComponent(value);
  return undefined;
};

interface Props {
  // Vectara customer ID
  customerId: string;

  // Vectara API key
  apiKey: string;

  // Vectara corpus ID
  corpusId: string;

  // An optional API url to direct requests toward
  apiUrl?: string;

  // The number of previous searches to cache.
  // Default is 0.
  historySize?: number;

  // The search input placeholder.
  placeholder?: string;
}

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
}) => {
  // Compute a unique ID for this search component.
  // This creates a namespace, and ensures that stored search results
  // for one search box don't appear for another.
  // NOTE: This is an implementation for what's historically been found to be
  // an issue with persistent search history: overlap between the histories
  // of different search boxes.
  const searchId = useMemo(
    () => getUuid(`${customerId}-${corpusId}-${apiKey}`),
    [customerId, corpusId, apiKey]
  );
  const { addPreviousSearch } = useSearchHistory(searchId, historySize);
  const { fetchSearchResults, isLoading } = useSearch(
    customerId,
    corpusId,
    apiKey,
    apiUrl
  );

  const [selectedResultIndex, setSelectedResultIndex] = useState<number | null>(
    null
  );
  const [searchResults, setSearchResults] = useState<
    DeserializedSearchResult[]
  >([]);
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

    // Persist search.
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("search", query);
    history.replaceState(null, "", "?" + queryParams.toString());

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
          window.open(searchResults[selectedResultIndex].url, "_self");
        } else {
          sendSearchQuery(searchValue);
        }
      }

      if (searchResults.length === 0) {
        return;
      }

      if (key === "ArrowDown") {
        setSelectedResultIndex((prevValue) => {
          return prevValue === null || prevValue === searchResults.length - 1
            ? 0
            : prevValue + 1;
        });
      }

      if (key === "ArrowUp") {
        setSelectedResultIndex((prevValue) => {
          return prevValue === null || prevValue === 0
            ? searchResults.length - 1
            : prevValue - 1;
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

    // Clear persisted search.
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.delete("search");
    history.replaceState(null, "", "?" + queryParams.toString());
  };

  const resultsList =
    searchResults.length === 0
      ? null
      : searchResults.map((searchResult, index) => {
          const {
            snippet: { pre, text, post },
          } = searchResult;

          return (
            <div
              ref={
                selectedResultIndex === index ? selectedResultRef : undefined
              }
              key={`${pre}${text}${post}`}
            >
              <SearchResult
                searchResult={searchResult}
                isSelected={selectedResultIndex === index}
              />
            </div>
          );
        });

  useEffect(() => {
    if (selectedResultRef.current) {
      selectedResultRef.current.scrollIntoView({
        behavior: "instant",
        block: "nearest",
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
      <BrowserRouter>
        <div className="styleWrapper">
          <div ref={buttonRef}>
            <button className="searchButton" onClick={() => setIsOpen(true)}>
              <VuiFlexContainer
                alignItems="center"
                spacing="none"
                justifyContent="spaceBetween"
                className="searchButton__inner"
              >
                <VuiFlexItem>
                  <VuiFlexContainer alignItems="center" spacing="xs">
                    <VuiFlexItem>
                      <VuiIcon>
                        <BiSearch />
                      </VuiIcon>
                    </VuiFlexItem>

                    <VuiFlexItem>
                      <VuiText>
                        <div>{placeholder}</div>
                      </VuiText>
                    </VuiFlexItem>
                  </VuiFlexContainer>
                </VuiFlexItem>

                <div className="searchButtonShortcut">Ctrl + K</div>
              </VuiFlexContainer>
            </button>
          </div>

          <SearchModal isOpen={isOpen} onClose={closeModalAndResetResults}>
            <form>
              <div className="searchForm">
                <SearchInput
                  isLoading={isLoading}
                  value={searchValue}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                  placeholder={placeholder}
                />
                {isLoading ? (
                  <div className="submitButtonWrapper">
                    <VuiSpinner size="xs" />
                  </div>
                ) : (
                  <div className="submitButtonWrapper">
                    <button
                      className="submitButton"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        sendSearchQuery(searchValue);
                      }}
                    >
                      <BiSearch size="20px" />
                    </button>
                  </div>
                )}
              </div>
            </form>

            {resultsList && (
              <div className="searchModalResults">{resultsList}</div>
            )}
          </SearchModal>
        </div>
      </BrowserRouter>
    </>
  );
};
