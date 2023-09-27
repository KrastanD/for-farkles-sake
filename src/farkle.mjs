import { getScore } from "./getScore.mjs";
import { generateRoll } from "./generateRoll.mjs";

const roll = generateRoll();

console.log(roll, getScore(roll));
