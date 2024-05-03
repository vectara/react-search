import { removeCitations } from "./removeCitations";

describe("removeCitations", () => {
  test("removes single citations", () => {
    const summary =
      "[1] Beginning of summary. [2][3] Multiple at beginning[2] of sentence, and before comma [4], single at middle [5] of sentence. At end of sentence [6].";

    expect(removeCitations(summary)).toEqual(
      "Beginning of summary. Multiple at beginning of sentence, and before comma, single at middle of sentence. At end of sentence."
    );
  });

  test("removes multiple comma-delimited citations", () => {
    const summary = "Two citations [1, 2] and seven citations[1, 2, 3, 4, 5, 6, 7] and without spaces [1,2,3].";

    expect(removeCitations(summary)).toEqual("Two citations and seven citations and without spaces.");
  });
});
