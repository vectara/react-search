import { DeserializedSearchResult } from "./types";

type Props = {
  searchResult: DeserializedSearchResult;
  isSelected?: boolean;
  shouldOpenInNewTab?: boolean;
};

export const SearchResult = ({ searchResult, isSelected = false, shouldOpenInNewTab = false }: Props) => {
  const {
    title,
    url,
    snippet: { text }
  } = searchResult;

  const content = (
    <>
      {title && <p className="vrsSearchResultTitle">{title}</p>}
      <p className="vrsSearchResultSnippet">{text}</p>
    </>
  );

  if (url) {
    return (
      <a
        data-testid="vectara-react-search-result-link"
        className={`vrsSearchResult vrsSearchResult-isLink ${isSelected ? "isSelected" : ""}`}
        href={url}
        target={shouldOpenInNewTab ? "_blank" : "_self"}
      >
        {content}
      </a>
    );
  }

  return (
    <div data-testid="vectara-react-search-result-div" className="vrsSearchResult">
      {content}
    </div>
  );
};
