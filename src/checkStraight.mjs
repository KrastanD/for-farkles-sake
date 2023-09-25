export function checkStraight(valueMap) {
  for (let value in valueMap) {
    if (valueMap[value] !== 1) {
      return 0;
    }
  }
  return 1500;
}
