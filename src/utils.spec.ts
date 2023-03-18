import { it, describe, expect } from "@jest/globals";
import { mergeRanges } from "./utils";

describe("mergeRanges", () => {
  it("a abcde b -> a b cde", () => {
    expect(
      mergeRanges([
        [0, 1, 1],
        [0, 5, 2],
        [1, 2, 3],
      ])
    ).toEqual([
      [0, 1, new Set([1, 2])],
      [1, 2, new Set([2, 3])],
      [2, 5, new Set([2])],
    ]);
  });
  it("a abcde b f -> a b cde f", () => {
    expect(
      mergeRanges([
        [0, 1, 1],
        [0, 5, 2],
        [1, 2, 3],
        [5, 6, 4],
      ])
    ).toEqual([
      [0, 1, new Set([1, 2])],
      [1, 2, new Set([2, 3])],
      [2, 5, new Set([2])],
      [5, 6, new Set([4])],
    ]);
  });
});
