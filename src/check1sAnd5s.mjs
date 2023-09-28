export function check1sAnd5s(valueMap) {
  let sum = 0;
  if (valueMap?.[1]) {
    sum += valueMap?.[1] * 100;
  }
  if (valueMap?.[5]) {
    sum += valueMap?.[5] * 50;
  }
  return sum;
}
