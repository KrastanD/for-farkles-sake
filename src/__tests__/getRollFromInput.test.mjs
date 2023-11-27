import { describe, it } from "node:test";
import assert from "assert/strict";
import { getRollFromInput } from "../getRollFromInput.mjs";

describe("getRollFromInput", () => {
  it("returns roll from single digit input", () => {
    assert.deepEqual(getRollFromInput("1"), [1]);
  });

  it("returns roll from multiple digit input", () => {
    assert.deepEqual(getRollFromInput("1,2,3"), [1, 2, 3]);
  });
});
