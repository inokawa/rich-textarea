import { it, describe, expect } from "@jest/globals";
import { merge } from "./utils";

describe("merge", () => {
  it("ipsum", () => {
    expect(
      merge([
        [0, 1, 1],
        [0, 5, 2],
        [1, 2, 3],
      ])
    ).toEqual([
      [0, 1, { 1: true, 2: true }],
      [1, 2, { 2: true, 3: true }],
      [2, 5, { 2: true }],
    ]);
  });
  it("ipsumi", () => {
    expect(
      merge([
        [0, 1, 1],
        [0, 5, 2],
        [1, 2, 3],
        [5, 6, 4],
      ])
    ).toEqual([
      [0, 1, { 1: true, 2: true }],
      [1, 2, { 2: true, 3: true }],
      [2, 5, { 2: true }],
      [5, 6, { 4: true }],
    ]);
  });
});
