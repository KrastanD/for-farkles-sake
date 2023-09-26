import { checkOfAKind } from "./checkOfAKind.mjs";
import { check1sAnd5s } from "./check1sAnd5s.mjs";
import { checkStraight } from "./checkStraight.mjs";
import { checkCombos } from "./checkCombos.mjs";

const cache = {};

export function getValue(roll) {
  const valueMap = createValueMap(roll);
  const valueMapString = JSON.stringify(valueMap);

  if (cache[valueMapString]) {
    return cache[valueMapString];
  }

  const subcalls = [];
  if (roll.length > 1) {
    roll.forEach((_, rollIndex) =>
      subcalls.push(
        getValue(roll.filter((_, i) => i != rollIndex)) +
          getValue([roll[rollIndex]])
      )
    );
  }

  subcalls.push(check1sAnd5s(valueMap));
  if (roll.length > 2) {
    subcalls.push(checkOfAKind(valueMap));
  }
  if (roll.length === 6) {
    subcalls.push(checkStraight(valueMap));
    subcalls.push(checkCombos(valueMap));
  }
  const ans = Math.max(...subcalls);
  cache[valueMapString] = ans;
  return ans;
}

function createValueMap(roll) {
  const valueMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  roll.forEach((num) =>
    valueMap[num] ? (valueMap[num] += 1) : (valueMap[num] = 1)
  );
  return valueMap;
}
