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
