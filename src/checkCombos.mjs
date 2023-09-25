export function checkCombos(valueMap) {
  let pairCount = 0;
  let tripletCount = 0;
  let quadrupletCount = 0;
  for (let value in valueMap) {
    if (valueMap[value] === 2) {
      pairCount += 1;
    }
    if (valueMap[value] === 3) {
      tripletCount += 1;
    }
    if (valueMap[value] === 4) {
      quadrupletCount += 1;
    }
  }
  if (pairCount === 3) {
    return 1500;
  }
  if (tripletCount === 2) {
    return 2500;
  }
  if (pairCount === 1 && quadrupletCount === 1) {
    return 1500;
  }
  return 0;
}
