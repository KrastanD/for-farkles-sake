import { describe, it } from "node:test";
import assert from "assert/strict";
import { getValue } from "../getValue.mjs";

describe("getValue", () => {
  it("returns 50 for a single 5", () => {
    assert.strictEqual(getValue([5]), 50);
  });

  it("returns 150 for a 1 and 5", () => {
    assert.strictEqual(getValue([1, 5]), 150);
  });

  it("returns 350 for a 2 triplet, 1 and 5", () => {
    assert.strictEqual(getValue([1, 2, 2, 2, 5]), 350);
  });

  it("returns 1500 for a straight", () => {
    assert.strictEqual(getValue([1, 2, 3, 4, 5, 6]), 1500);
  });

  it("returns 400 for a 3 triple and 2 5s", () => {
    assert.strictEqual(getValue([5, 5, 3, 3, 3, 4]), 400);
  });
});
