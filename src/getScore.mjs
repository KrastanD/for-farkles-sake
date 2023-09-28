import { checkOfAKind } from "./checkOfAKind.mjs";
import { checkStraight } from "./checkStraight.mjs";
import { checkCombos } from "./checkCombos.mjs";
import { createValueMap } from "./createValueMap.mjs";
import { check1sAnd5s } from "./check1sAnd5s.mjs";
export function getScore(roll) {
  const subcalls = [];
  const valueMap = createValueMap(roll);
  subcalls.push(check1sAnd5s(valueMap));
  if (roll.length > 2) {
    subcalls.push(checkOfAKind(valueMap));
  }
  if (roll.length === 6) {
    subcalls.push(checkStraight(valueMap));
    subcalls.push(checkCombos(valueMap));
  }
  return Math.max(...subcalls);
}
