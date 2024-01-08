import React from "react";
import { AllowedStyleOverrides, DeserializedSearchResult } from "./types";

type Props = {
  searchResult: DeserializedSearchResult;
  isSelected?: boolean;
  shouldOpenInNewWindow?: boolean;
  styles?: AllowedStyleOverrides;
};

export const SearchResult = ({
  searchResult,
  isSelected = false,
  shouldOpenInNewWindow = false,
  styles = {},
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
      style={styles}
    >
      <p className="searchResultTitle" style={{ fontSize: styles.fontSize }}>
        {title}
      </p>
      <p className="searchResultSnippet" style={{ fontSize: styles.fontSize }}>
        {text}
      </p>
    </a>
  );
};
