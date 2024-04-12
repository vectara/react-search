<p align="center">
  <img style="max-width: 100%;" alt="Welcome to Create UI" src="https://raw.githubusercontent.com/vectara/react-search/main/images/projectLogo.png"/>
</p>

# React-Search

React-Search is a UI widget for adding [Vectara](https://vectara.com/)-powered semantic search to your React apps with a few lines of code.

> [!TIP]
>
> Looking for something else? Try another open-source project:
>
> - **[React-Chatbot](https://github.com/vectara/react-chatbot)**: Add a compact Vectara-powered chatbot widget chat to your React apps.
> - **[Create-UI](https://github.com/vectara/create-ui)**: The fastest way to generate a working React codebase for a range of generative and semantic search UIs.
> - **[Vectara Answer](https://github.com/vectara/vectara-answer)**: Demo app for Summarized Semantic Search with advanced configuration options.
> - **[Vectara Ingest](https://github.com/vectara/vectara-ingest)**: Sample templates and crawlers for pulling data from many popular data sources.

## Demo

**[Try out the demo!](https://vectara.github.io/react-search/)**

## UI

The search input looks like this:

![React-Search input](https://raw.githubusercontent.com/vectara/react-search/main/images/searchInput.jpg)

When the user clicks the search input, they get a search prompt like this:

![React-Search prompt](https://raw.githubusercontent.com/vectara/react-search/main/images/searchPrompt.jpg)

Search results look like this:

![React-Search results](https://raw.githubusercontent.com/vectara/react-search/main/images/searchResults.jpg)

## Use it in your application

### Use the search component directly

Install React-Search:

```shell
npm install --save @vectara/react-search
```

Then use it in your application like this:

```js
import { ReactSearch } from "@vectara/react-search";

/* snip */

<ReactSearch
  customerId="CUSTOMER_ID"
  corpusId="CORPUS_ID"
  apiKey="API_KEY"
  placeholder="Placeholder" // Optional search input placeholder
  isDeeplinkable={true} // Optional boolean determining if search results will be deeplinked
  openResultsInNewTab={true} // Optional boolean determining if links will open in a new tab
  zIndex={5} // Optional number assigned to the z-index of the search modal
/>;
```

#### <u>Configuration options</u>

##### `customerId` (required)

Every Vectara account is associated with a customer ID. You can find your customer ID by logging into the [Vectara Console](https://console.vectara.com/) and opening your account dropdown in the top-right corner.

##### `corpusId` (required)

After you [create a corpus](https://docs.vectara.com/docs/console-ui/creating-a-corpus), you can find its ID by navigating to the corpus and looking in the top-left corner, next to the corpus name.

##### `apiKey` (required)

API keys enable applications to access data inside of corpora. Learn how to [create a **QueryService** API key](https://docs.vectara.com/docs/console-ui/manage-api-access#create-an-api-key).

##### `apiUrl` (optional)

By default, React-Search sends query requests to the Vectara servers. If you want to use a proxy server, you can configure this option with the URL of your proxy.

##### `placeholder` (optional)

Configure the placeholder text in the search modal's input.

##### `isDeeplinkable` (optional)

Defaults to `false`. Set this option if you want to persist a search query to a URL parameter. This will enable users to share or bookmark the URL. Loading the URL will automatically open the search modal and search for the query that's stored in the URL.

##### `openResultsInNewTab` (optional)

Defaults to `false`. Set this option if you want a search result to open in a new tab.

##### `zIndex` (optional)

Customize the z-index of the search modal

### Power your own search UI with the useSearch hook

Install React-Search:

```shell
npm install --save @vectara/react-search
```

Then use the `useSearch` hook in your application like this:

```js
import { useSearch } from "@vectara/react-search/lib/useSearch";

/* snip */

const { fetchSearchResults, isLoading } = useSearch("CUSTOMER_ID", "CORPUS_ID", "API_KEY");
```

The values returned by the hook can be passed on to your custom components as props or used in any way you wish.

#### <u>Hook Values</u>

##### fetchSearchResults: `async (query: string) => Promise<DeserializedSearchResult[]>`

This is used to send a message to the search API. When the search succeeds, an array of search results is returned. Each search result is a `DeserializedSearchResult` object. More information on types can be found [here](src/types.ts).

##### isLoading: `boolean`

A boolean value indicating whether or not a search request is still pending

### Usage with SSR Frameworks

Using React-Search with SSR frameworks may require additional infrastructure. Here are some common gotchas:

#### Next.js

React-Search offers a `ReactSearchNext` variant that is compatible with Next.js. It accepts the same props that `ReactSearch` does.

It can be imported as:

```js
import { ReactSearchNext } from "@vectara/react-search/lib/ReactSearchNext";
```

**In addition to using this Next.js-compatible component, you will also need to use the `"use client"` directive in the file that imports `ReactSearchNext`.**

### Set up your search data

React-Search pulls data from your Vectara corpus. To set this up:

1. [Create a free Vectara account](https://console.vectara.com/signup).
2. [Create a corpus and add data to it](https://docs.vectara.com/docs/console-ui/creating-a-corpus).
3. [Create a **QueryService** API key](https://docs.vectara.com/docs/console-ui/manage-api-access#create-an-api-key).

**Pro-tip:** After you create an API key, navigate to your corpus and click on the "Access control" tab. Find your API key on the bottom and select the "Copy all" option to copy your customer ID, corpus ID, and API key. This gives you all the data you need to configure your `<ReactSearch />` instance.

![Copy all option](https://raw.githubusercontent.com/vectara/react-search/main/images/copyAll.jpg)

#### How to use metadata

Vectara enables you to define [metadata](https://docs.vectara.com/docs/learn/document-data-structuring#metadata) on your documents. React-Search behaves differently based on the presence of specific metadata fields:

- `title`: If this field is defined it will be rendered as the title of a search result. Typically this is something like the title of the document or webpage.
- `url`: If this field is defined, React-Search will render the search result as a link to the defined URL.

## Maintenance

This codebase comes with a development environment to facilitate enhancements and bug fixes. It allows maintainers to quickly iterate on the code and verify changes instantly.

### Running the development environment

From the root directory, run:

```
npm install
```

This will install all dependencies necessary for building the component and running the dev environment. Once this completes, run:

```
npm run docs
```

This spins up an application running at `http://localhost:8080/`. Your latest changes will be reflected here.

### Making changes to the component

Once the development environment is running, any changes made to .ts and .tsx files in the `/src` directory will trigger a rebuild of the component and a reload of the webpage.

Additionally, any changes to the development app source code at `/docs/index.tsx` will also trigger a rebuild + reload.

## License

Vectara React-Search is an open-sourced software licensed under the [Apache 2.0 license](/LICENSE).

_This repository contains sample code that can help you build UIs powered by Vectara, and is licensed under the Apache 2.0 License. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License._
