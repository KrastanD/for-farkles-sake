import { getSubcalls } from "./getSubcalls.mjs";

export function getValue(roll) {
  const stack = [{ roll: roll, remainder: 0 }];
  const checkedIters = [];
  while (stack.length > 0) {
    const iter = stack.pop();
    if (iter.roll.length === 1) {
      const last = iter.roll[0] === 1 ? 100 : iter.roll[0] === 5 ? 50 : 0;
      checkedIters.push(last + iter.remainder);
      continue;
    }
    iter.roll.forEach((_, rollIndex) => {
      let newRemainder = iter.remainder;
      if (iter.roll[rollIndex] === 1) {
        newRemainder += 100;
      } else if (iter.roll[rollIndex] === 5) {
        newRemainder += 50;
      }
      const newIter = {
        roll: iter.roll.filter((_, i) => i != rollIndex),
        remainder: newRemainder,
      };
      stack.unshift(newIter);
    });
    const subcalls = getSubcalls(iter.roll);
    checkedIters.push(Math.max(...subcalls) + iter.remainder);
  }
  return Math.max(...checkedIters);
}
