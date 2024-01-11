import { DeserializedSearchResult } from "./types";

type Props = {
  searchResult: DeserializedSearchResult;
  isSelected?: boolean;
  shouldOpenInNewWindow?: boolean;
};

export const SearchResult = ({
  searchResult,
  isSelected = false,
  shouldOpenInNewWindow = false,
}: Props) => {
  const {
    title,
    url,
    snippet: { text },
  } = searchResult;

  return (
    <a
      className={`searchResult${isSelected ? " isSelected" : ""}`}
      href={url}
      target={shouldOpenInNewWindow ? "_blank" : "_self"}
    >
      <p className="searchResultTitle">{title}</p>
      <p className="searchResultSnippet">{text}</p>
    </a>
  );
};
