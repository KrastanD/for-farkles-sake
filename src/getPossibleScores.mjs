import { checkOfAKind } from "./checkOfAKind.mjs";
import { checkStraight } from "./checkStraight.mjs";
import { checkCombos } from "./checkCombos.mjs";
import { createValueMap } from "./createValueMap.mjs";

export function getPossibleScores(roll) {
  const subcalls = [];
  const valueMap = createValueMap(roll);
  if (roll.length > 2) {
    subcalls.push(checkOfAKind(valueMap));
  }
  if (roll.length === 6) {
    subcalls.push(checkStraight(valueMap));
    subcalls.push(checkCombos(valueMap));
  }
  return subcalls;
}
