import { describe, it } from "node:test";
import assert from "assert/strict";
import { checkIsPickValid } from "../checkIsPickValid.mjs";

describe("checkIsPickValid", () => {
  it("returns true if all scoring dice chosen", () => {
    assert(checkIsPickValid([1, 2, 1, 3, 4, 4], [1, 1]));
  });

  it("returns true if not all scoring dice chosen", () => {
    assert(checkIsPickValid([1, 2, 1, 1, 5, 6], [1, 1, 1]));
  });

  it("retuns false if die not in roll chosen", () => {
    assert.strictEqual(checkIsPickValid([1, 2, 1, 3, 4, 4], [5, 5]), false);
  });

  it("returns false if die in roll not scoring", () => {
    assert.strictEqual(checkIsPickValid([1, 2, 1, 3, 4, 4], [1, 2]), false);
  });
});
