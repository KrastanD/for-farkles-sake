import test from "node:test";
import assert from "assert/strict";
import { getValue } from "./getValue.mjs";

// tests
const roll = generateRoll();

console.log(roll, getValue(roll));
// console.log(getValue([1, 2, 2, 2, 5]) === 350, getValue([1, 2, 2, 2, 5]));
