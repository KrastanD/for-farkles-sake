export function checkOfAKind(valueMap) {
  for (const value in valueMap) {
    if (valueMap[value] === 3) {
      return Number(value) * 100;
    }
    if (valueMap[value] === 4) {
      return 1000;
    }
    if (valueMap[value] === 5) {
      return 2000;
    }
    if (valueMap[value] === 6) {
      return 3000;
    }
  }
  return 0;
}
