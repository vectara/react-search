import React from "react";
import { screen, render } from "@testing-library/react";
import { SearchResult } from "./SearchResult";
import { DeserializedSearchResult } from "./types";

const MOCK_SEARCH_RESULT: DeserializedSearchResult = {
  id: "mock-id",
  snippet: {
    pre: "mock-pre-snippet",
    text: "mock-text-snippet",
    post: "mock-post-snippet",
  },
  source: "mock-source",
  url: "mock-url",
  title: "mock-title",
  metadata: {
    "mock-metadata-key-1": "mock-metadata-value-1",
  },
};

describe("SearchResult", () => {
  it("should render text content", () => {
    render(
      <SearchResult searchResult={MOCK_SEARCH_RESULT} isSelected={false} />
    );
    const text = screen.getByText(MOCK_SEARCH_RESULT.snippet.text);

    expect(text).toBeInTheDocument();
  });

  it("should render the title if provided", () => {
    render(
      <SearchResult searchResult={MOCK_SEARCH_RESULT} isSelected={false} />
    );
    const title = screen.getByText(MOCK_SEARCH_RESULT.title!);

    expect(title).toBeInTheDocument();
  });

  it("should not render the title if not provided", () => {
    const searchResultNoTitle = { ...MOCK_SEARCH_RESULT, title: undefined };
    const { container } = render(
      <SearchResult searchResult={searchResultNoTitle} isSelected={false} />
    );
    const pElements = container.querySelectorAll("p");

    // There should only be one <p> tag - the one containing the text.
    // The <p> tag for the title should not be rendered.
    expect(pElements.length).toEqual(1);
  });

  describe("with URL", () => {
    it("should render an anchor tag that opens in the same window by default", () => {
      render(
        <SearchResult searchResult={MOCK_SEARCH_RESULT} isSelected={false} />
      );
      const anchor = screen
        .getByText(MOCK_SEARCH_RESULT.snippet.text)
        .closest("a");

      expect(anchor).toHaveAttribute("href", MOCK_SEARCH_RESULT.url);
      expect(anchor).toHaveAttribute("target", "_self");
    });

    it("should render an anchor tag that opens in a new tab if configured", () => {
      render(
        <SearchResult
          searchResult={MOCK_SEARCH_RESULT}
          isSelected={false}
          shouldOpenInNewWindow={true}
        />
      );
      const anchor = screen
        .getByText(MOCK_SEARCH_RESULT.snippet.text)
        .closest("a");

      expect(anchor).toHaveAttribute("href", MOCK_SEARCH_RESULT.url);
      expect(anchor).toHaveAttribute("target", "_blank");
    });

    it("should have the right class name if selected or not selected", () => {
      render(
        <SearchResult
          searchResult={MOCK_SEARCH_RESULT}
          isSelected={true}
          shouldOpenInNewWindow={true}
        />
      );
      let anchor = screen
        .getByText(MOCK_SEARCH_RESULT.snippet.text)
        .closest("a");

      expect(anchor).toHaveClass("isSelected");
    });
  });

  describe("without URL", () => {
    const searchResultNoUrl = {
      ...MOCK_SEARCH_RESULT,
      url: undefined,
    };
    it("should render a div if no URL was provided", () => {
      render(
        <SearchResult searchResult={searchResultNoUrl} isSelected={false} />
      );
      const divWithTextContent = screen.getByText(
        MOCK_SEARCH_RESULT.snippet.text
      );
      const anchor = divWithTextContent.closest("a");
      const wrappingDiv = divWithTextContent.closest("div");

      expect(anchor).not.toBeInTheDocument();
      expect(wrappingDiv).toBeInTheDocument();
    });
  });
});
