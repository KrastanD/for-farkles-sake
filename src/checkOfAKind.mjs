import { check1sAnd5s } from "./check1sAnd5s.mjs";
export function checkOfAKind(valueMap) {
  for (const value in valueMap) {
    if (valueMap[value] === 3) {
      const updatedValueMap = { ...valueMap };
      updatedValueMap[value] = 0;
      const remainder = check1sAnd5s(updatedValueMap);
      return Number(value) * 100 + remainder;
    }
    if (valueMap[value] === 4) {
      const updatedValueMap = { ...valueMap };
      updatedValueMap[value] = 0;
      const remainder = check1sAnd5s(updatedValueMap);
      return 1000 + remainder;
    }
    if (valueMap[value] === 5) {
      const updatedValueMap = { ...valueMap };
      updatedValueMap[value] = 0;
      const remainder = check1sAnd5s(updatedValueMap);
      return 2000 + remainder;
    }
    if (valueMap[value] === 6) {
      const updatedValueMap = { ...valueMap };
      updatedValueMap[value] = 0;
      const remainder = check1sAnd5s(updatedValueMap);

      return 3000 + remainder;
    }
  }
  return 0;
}
