import { describe, it } from "node:test";
import assert from "assert/strict";
import { checkStraight } from "../checkStraight.mjs";
describe("checkStraight", () => {
  it("returns 1500 if straight", () => {
    assert.strictEqual(
      checkStraight({ 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 }),
      1500
    );
  });
  it("returns 0 if not a straight", () => {
    assert.strictEqual(
      checkStraight({ 1: 0, 2: 1, 3: 5, 4: 3, 5: 1, 6: 1 }),
      0
    );
  });
});
