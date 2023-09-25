import { checkOfAKind } from "./checkOfAKind.mjs";
import { check1sAnd5s } from "./check1sAnd5s.mjs";
import { checkStraight } from "./checkStraight.mjs";
import { checkCombos } from "./checkCombos.mjs";

export function getValue(roll) {
  //call recursive calls
  const subcalls = [];
  if (roll.length > 1) {
    roll.forEach((_, rollIndex) =>
      subcalls.push(
        getValue(roll.filter((_, i) => i != rollIndex)) +
          getValue([roll[rollIndex]])
      )
    );
  }
  const valueMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  roll.forEach((num) =>
    valueMap[num] ? (valueMap[num] += 1) : (valueMap[num] = 1)
  );

  subcalls.push(check1sAnd5s(valueMap));
  subcalls.push(checkOfAKind(valueMap));
  // base case
  if (roll.length === 6) {
    subcalls.push(checkStraight(valueMap));
    subcalls.push(checkCombos(valueMap));
  }
  // console.log(roll, Math.max(...subcalls));
  return Math.max(...subcalls);
}
