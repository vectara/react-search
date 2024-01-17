import React, { ReactNode } from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import { ReactSearch } from ".";
import * as SearchInput from "./SearchInput";
import * as SearchResult from "./SearchResult";
import { useSearch } from "./useSearch";

jest.useFakeTimers();

jest.mock("./SearchModal", () => {
  return {
    SearchModal: ({ children }: { children: ReactNode[] }) => <div>{children}</div>
  };
});
jest.mock("./useSearch", () => ({
  useSearch: jest.fn()
}));

afterAll(() => jest.useRealTimers());

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

  it("should render SearchResults if there are any", async () => {
    (useSearch as jest.Mock).mockImplementation(() => ({
      fetchSearchResults: async () =>
        Promise.resolve([
          {
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
          }
        ]),
      isLoading: false
    }));
    const searchResultSpy = jest.spyOn(SearchResult, "SearchResult");
    const container = renderSearch();

    await act(() => {
      const input = container.querySelectorAll("input");
      fireEvent.change(input[0], { target: { value: "mock-value" } });
      jest.runAllTimers();
    });

    expect(searchResultSpy).toHaveBeenCalledTimes(1);
  });

  it("should render input value and make request for a deeplinked search", async () => {
    const mockFetchSearchResults = jest.fn().mockImplementation(async () => Promise.resolve([]));
    (useSearch as jest.Mock).mockImplementation(() => ({
      fetchSearchResults: mockFetchSearchResults,
      isLoading: false
    }));

    await act(() => {
      window.history.pushState({}, "Page With Deeplinked Search", "?search=mock-search");
      renderSearch();
    });

    const input = screen.getByPlaceholderText<HTMLInputElement>("mock-placeholder");
    expect(input.value).toEqual("mock-search");
    expect(mockFetchSearchResults).toHaveBeenCalledTimes(1);
  });
});

const renderSearch = () => {
  const { container } = render(
    <ReactSearch
      corpusId="mock-corpus-id"
      customerId="mock-customer-id"
      apiKey="mock-api-key"
      placeholder="mock-placeholder"
    />
  );

  return container;
};
