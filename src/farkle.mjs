import { getValue } from "./getValue.mjs";
import { generateRoll } from "./generateRoll.mjs";

// tests
const roll = generateRoll();

console.log(roll, getValue(roll));
// console.log(getValue([1, 2, 2, 2, 5]) === 350, getValue([1, 2, 2, 2, 5]));
