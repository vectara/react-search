import React from "react";
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

  const content = (
    <>
      {title && <p className="searchResultTitle">{title}</p>}
      <p className="searchResultSnippet">{text}</p>
    </>
  );

  if (url) {
    return (
      <a
        className={`searchResult searchResult-isLink ${
          isSelected ? "isSelected" : ""
        }`}
        href={url}
        target={shouldOpenInNewWindow ? "_blank" : "_self"}
      >
        {content}
      </a>
    );
  }

  return <div className="searchResult">{content}</div>;
};
