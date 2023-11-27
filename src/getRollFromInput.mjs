export function getRollFromInput(dice) {
  return dice.split(",").map((num) => Number(num));
}
