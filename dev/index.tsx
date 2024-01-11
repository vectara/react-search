import React from "react";
import ReactDOM from "react-dom";
import { ReactSearch } from "../";

const App = () => (
  <div id="app">
    <h1>@vectara/react-search</h1>
    <div id="searchWrapper">
      <ReactSearch
        corpusId="1"
        customerId="1366999410"
        apiKey="zqt_UXrBcnI2UXINZkrv4g1tQPhzj02vfdtqYJIDiA"
        placeholder="What would you like to search for?"
      />
    </div>
    <code>{codeSnippet}</code>
  </div>
);

const codeSnippet = `
import { ReactSearch } from "@vectara/react-search";

export const App = () => (
  <div>
    <ReactSearch
      corpusId="<Your Vectara corpus ID>"
      customerId="<Your Vectara customer ID>"
      apiKey="<Your Vectara query key>"
      placeholder="What would you like to search for?"
    />
  </div>
);

`;

ReactDOM.render(<App />, document.getElementById("root"));
