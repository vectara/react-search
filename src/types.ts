export interface Props {
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

  // Whether to enable deeplinking to a particular search.
  isDeeplinkable?: boolean;

  // Whether to open selected results in a new browser tab.
  openResultsInNewTab?: boolean;

  // Used to control the search modal's z-index. Defaults to 9999.
  zIndex?: number;

  // A callback that's called when the "Summarize search results" toggle is toggled.
  onToggleSummary?: (isSummaryEnabled: boolean) => void;

  // Whether users will be able to summarize search results or not.
  isSummaryToggleVisible?: boolean;

  // If users can toggle summarization, whether the toggle should be enabled by defualt.
  isSummaryToggleInitiallyEnabled?: boolean;
}

export type DeserializedSearchResult = {
  id: string;
  snippet: {
    pre: string;
    text: string;
    post: string;
  };
  source: string;
  url?: string;
  title?: string;
  metadata: Record<string, unknown>;
};

export type DocMetadata = {
  name: string;
  value: string;
};

export type SearchResponse = {
  document: SearchResponseDoc[];
  response: SearchResponseResult[];
  summary: SearchResponseSummary[];
};

type SearchResponseDoc = {
  id: string;
  metadata: DocMetadata[];
};

type SearchResponseResult = {
  corpusKey: {
    corpusId: string;
    customerId: string;
    dim: string[];
  };
  documentIndex: string;
  resultLength: number;
  resultOffset: number;
  score: number;
  text: string;
};

type SearchResponseSummary = {
  text?: string;
  status?: string;
};
