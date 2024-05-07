import React, { ReactNode } from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import { ReactSearch } from ".";
import { Props as ReactSearchProps } from "./types";
import * as SearchInput from "./SearchInput";
import { SearchResult } from "./SearchResult";
import { useSearch } from "./useSearch";

import { screen } from "shadow-dom-testing-library";

jest.useFakeTimers();

jest.mock("./SearchModal", () => {
  return {
    SearchModal: ({ children }: { children: ReactNode[] }) => <div>{children}</div>
  };
});

jest.mock("./SearchResult", () => {
  return {
    SearchResult: jest.fn().mockImplementation(({ children }: { children: ReactNode[] }) => {
      return <div>{children}</div>;
    })
  };
});

jest.mock("./useSearch", () => ({
  useSearch: jest.fn()
}));

afterAll(() => jest.useRealTimers());

const MOCK_SEARCH_RESULT = {
  id: "mock-id",
  snippet: {
    pre: "mock-pre-snippet",
    text: "mock-text-snippet",
    post: "mock-post-snippet"
  },
  source: "mock-source",
  url: "mock-url",
  title: "mock-title",
  metadata: {
    "mock-metadata-key-1": "mock-metadata-value-1"
  }
};

const renderSearch = (customProps: Partial<ReactSearchProps> = {}) => {
  const props = {
    corpusId: "mock-corpus-id",
    customerId: "mock-customer-id",
    apiKey: "mock-api-key",
    placeholder: "mock-placeholder",
    ...customProps
  };

  render(<ReactSearch {...props} />);
};

describe("ReactSearch", () => {
  it("should render a SearchInput", () => {
    (useSearch as jest.Mock).mockImplementation(() => ({
      fetchSearchResults: jest.fn(),
      isLoading: false
    }));
    const searchInputSpy = jest.spyOn(SearchInput, "SearchInput");

    renderSearch();

    expect(searchInputSpy).toHaveBeenCalledTimes(1);
  });

  describe("Search Results", () => {
    it("should render SearchResults", async () => {
      (useSearch as jest.Mock).mockImplementation(() => ({
        fetchSearchResults: async () => Promise.resolve({ searchResults: [MOCK_SEARCH_RESULT] }),
        isLoading: false
      }));

      renderSearch();

      act(() => {
        const input = screen.getByShadowTestId("searchInput");
        fireEvent.change(input, { target: { value: "mock-value" } });
        jest.runAllTimers();
      });

      await waitFor(() => {
        expect(SearchResult).toHaveBeenCalled();
      });
    });

    it("should render SearchResults that are configured to open in a new tab", async () => {
      renderSearch({ openResultsInNewTab: true });

      act(() => {
        const input = screen.getByShadowTestId("searchInput");
        fireEvent.change(input, { target: { value: "mock-value" } });
        jest.runAllTimers();
      });

      await waitFor(() => {
        expect(SearchResult).toHaveBeenCalled();
      });
    });

    it("should render input value and make request for a deeplinked search", () => {
      const mockFetchSearchResults = jest.fn().mockImplementation(async () => Promise.resolve({ searchResults: [] }));
      (useSearch as jest.Mock).mockImplementation(() => ({
        fetchSearchResults: mockFetchSearchResults,
        isLoading: false
      }));

      act(() => {
        window.history.pushState({}, "Page With Deeplinked Search", "?search=mock-search");
        renderSearch();
      });

      const input = screen.getByShadowTestId("searchInput");

      expect(input.getAttribute("value")).toEqual("mock-search");
      expect(mockFetchSearchResults).toHaveBeenCalledTimes(1);
    });
  });
});
