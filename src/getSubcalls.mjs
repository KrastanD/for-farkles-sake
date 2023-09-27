import { checkOfAKind } from "./checkOfAKind.mjs";
import { check1sAnd5s } from "./check1sAnd5s.mjs";
import { checkStraight } from "./checkStraight.mjs";
import { checkCombos } from "./checkCombos.mjs";
import { createValueMap } from "./createValueMap.mjs";

export function getSubcalls(roll) {
  const subcalls = [];
  const valueMap = createValueMap(roll);

  subcalls.push(check1sAnd5s(valueMap));
  subcalls.push(checkOfAKind(valueMap));
  if (roll.length === 6) {
    subcalls.push(checkStraight(valueMap));
    subcalls.push(checkCombos(valueMap));
  }
  return subcalls;
}
