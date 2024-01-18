import { DeserializedSearchResult } from "./types";

type Props = {
  searchResult: DeserializedSearchResult;
  isSelected?: boolean;
  opensInNewTab?: boolean;
};

export const SearchResult = ({ searchResult, isSelected = false, opensInNewTab = false }: Props) => {
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
        data-testid="vrsResultLink"
        className={`vrsSearchResult vrsSearchResult-isLink ${isSelected ? "isSelected" : ""}`}
        href={url}
        target={opensInNewTab ? "_blank" : "_self"}
      >
        {content}
      </a>
    );
  }

  return (
    <div data-testid="vrsResultWrapper" className="vrsSearchResult">
      {content}
    </div>
  );
};
