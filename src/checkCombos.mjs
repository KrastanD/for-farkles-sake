import { check1sAnd5s } from "./check1sAnd5s.mjs";
export function checkCombos(valueMap) {
  let pairCount = [];
  let tripletCount = [];
  let quadrupletCount = [];
  for (let value in valueMap) {
    if (valueMap[value] === 2) {
      pairCount.push(value);
    }
    if (valueMap[value] === 3) {
      tripletCount.push(value);
    }
    if (valueMap[value] === 4) {
      quadrupletCount.push(value);
    }
  }
  if (pairCount.length === 3) {
    const updatedValueMap = { ...valueMap };
    pairCount.forEach((element) => {
      updatedValueMap[element] = 0;
    });
    const remainder = check1sAnd5s(updatedValueMap);

    return 1500 + remainder;
  }
  if (tripletCount.length === 2) {
    const updatedValueMap = { ...valueMap };
    tripletCount.forEach((element) => {
      updatedValueMap[element] = 0;
    });
    const remainder = check1sAnd5s(updatedValueMap);

    return 2500 + remainder;
  }
  if (pairCount.length === 1 && quadrupletCount.length === 1) {
    return 1500;
  }
  return 0;
}
