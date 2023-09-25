import { describe, it } from "node:test";
import assert from "assert/strict";
import { check1sAnd5s } from "../check1sAnd5s.mjs";

describe("check1sAnd5s", () => {
  it("returns 100 if a single 1", () => {
    assert.strictEqual(check1sAnd5s({ 1: 1 }), 100);
  });

  it("returns 50 if a single 5", () => {
    assert.strictEqual(check1sAnd5s({ 5: 1 }), 50);
  });

  it("returns 0 if no 1s or 5s", () => {
    assert.strictEqual(check1sAnd5s({ 2: 2, 3: 3, 4: 1 }), 0);
  });

  it("returns 100 if two 5s", () => {
    assert.strictEqual(check1sAnd5s({ 5: 2 }), 100);
  });

  it("returns 0 if no values at all", () => {
    assert.strictEqual(check1sAnd5s({}), 0);
  });
});
