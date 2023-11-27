import { describe, it } from "node:test";
import assert from "assert/strict";
import { getScore } from "../getScore.mjs";

describe("getScore", () => {
  it("returns 50 for a single 5", () => {
    assert.strictEqual(getScore([5]), 50);
  });

  it("returns 150 for a 1 and 5", () => {
    assert.strictEqual(getScore([1, 5]), 150);
  });

  it("returns 350 for a 2 triplet, 1 and 5", () => {
    assert.strictEqual(getScore([1, 2, 2, 2, 5, 3]), 350);
  });

  it("returns 1500 for a straight", () => {
    assert.strictEqual(getScore([1, 2, 3, 4, 5, 6]), 1500);
  });

  it("returns 400 for a 3 triple and 2 5s", () => {
    assert.strictEqual(getScore([5, 5, 3, 3, 3, 4]), 400);
  });

  it("returns 1100 for a 4 of a kind and a 1", () => {
    assert.strictEqual(getScore([4, 1, 4, 4, 4, 3]), 1100);
  });

  it("returns 1500 for a 4 of a kind and a 2 pair", () => {
    assert.strictEqual(getScore([4, 1, 4, 4, 4, 1]), 1500);
  });

  it("returns 0 for a farkle", () => {
    assert.strictEqual(getScore([4, 3, 6, 6, 2, 3]), 0);
  });

  it("returns 500, for 3 of a kind and two 5s", () => {
    assert.strictEqual(getScore([5, 4, 4, 4, 5]), 500);
  });
});
