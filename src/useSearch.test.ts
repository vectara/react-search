import { useSearch } from "./useSearch";
import { act, renderHook } from "@testing-library/react-hooks";

window.fetch = jest.fn();

describe("useSearch", () => {
  it("should send search requests to the API", async () => {
    (window.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        json: () => []
      })
    );

    const { result } = renderHook(() =>
      useSearch("mock-customer-id", "mock-corpus-id", "mock-api-key", undefined, {
        rerankerId: 272725718,
        mmrConfig: {
          diversityBias: 0.3
        }
      })
    );
    const requestBody = JSON.stringify({
      query: [
        {
          query: "mock-query",
          rerankingConfig: {
            rerankerId: 272725718,
            mmrConfig: {
              diversityBias: 0.3
            }
          },
          start: 0,
          numResults: 20,
          corpusKey: [
            {
              corpusId: "mock-corpus-id"
            }
          ]
        }
      ]
    });

    await act(async () => {
      await result.current.fetchSearchResults("mock-query");
    });

    expect(window.fetch).toHaveBeenCalledWith(
      "https://api.vectara.io/v1/query",
      expect.objectContaining({ body: requestBody })
    );
  });

  it("should reflect loading state", async () => {
    (window.fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));
    const { result } = renderHook(() => useSearch("mock-customer-id", "mock-corpus-id", "mock-api-key"));

    await act(async () => {
      result.current.fetchSearchResults("mock-query");
    });

    expect(result.current.isLoading).toEqual(true);
  });
});
