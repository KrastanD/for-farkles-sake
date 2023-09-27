import { getValue } from "./getValue.mjs";
import { generateRoll } from "./generateRoll.mjs";

const roll = generateRoll();

console.log(roll, getValue(roll));
