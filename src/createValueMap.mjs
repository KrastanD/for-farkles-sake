export function createValueMap(roll) {
  const valueMap = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  roll.forEach((num) =>
    valueMap[num] ? (valueMap[num] += 1) : (valueMap[num] = 1)
  );
  return valueMap;
}
