import { describe, it } from "node:test";
import assert from "assert/strict";
import { checkOfAKind } from "../checkOfAKind.mjs";

describe("checkOfAKind", () => {
  it("returns 200 when 3 2s", () => {
    assert.strictEqual(checkOfAKind({ 2: 3 }), 200);
  });

  it("returns 500 when 3 5s", () => {
    assert.strictEqual(checkOfAKind({ 5: 3 }), 500);
  });

  it("returns 1000 when 4 3s", () => {
    assert.strictEqual(checkOfAKind({ 3: 4 }), 1000);
  });

  it("returns 2000 when 5 1s ", () => {
    assert.strictEqual(checkOfAKind({ 1: 5, 3: 1 }), 2000);
  });

  it("returns 3000 when 6 6s", () => {
    assert.strictEqual(checkOfAKind({ 6: 6 }), 3000);
  });

  it("returns 0 if none of a kind", () => {
    assert.strictEqual(checkOfAKind({ 1: 1, 2: 1, 3: 2, 4: 1, 5: 1 }), 0);
  });
});
