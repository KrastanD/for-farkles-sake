export function generateRoll(length = 6) {
  return new Array(length).fill(0).map(() => Math.ceil(Math.random() * 6));
}
