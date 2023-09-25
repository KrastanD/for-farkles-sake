import { describe, it } from "node:test";
import assert from "assert/strict";
import { checkCombos } from "../checkCombos.mjs";

describe("checkCombos", () => {
  it("returns 1500 if 3 pairs", () => {
    assert.strictEqual(checkCombos({ 1: 2, 2: 2, 3: 2 }), 1500);
  });

  it("returns 2500 if 2 triplets", () => {
    assert.strictEqual(checkCombos({ 1: 3, 3: 3 }), 2500);
  });

  it("returns 0 if no pairs", () => {
    assert.strictEqual(checkCombos({ 1: 1, 2: 1, 3: 1, 4: 1 }), 0);
  });

  it("returns 1500 if 1 pair and 1 quadruplet", () => {
    assert.strictEqual(checkCombos({ 2: 2, 4: 4 }), 1500);
  });
});
