import { getPossibleScores } from "./getPossibleScores.mjs";
import { getSingleScore } from "./getSingleScore.mjs";

export function getScore(roll) {
  const stack = [{ roll: roll, remainder: 0 }];
  const relativeMaxScores = [];
  while (stack.length > 0) {
    const iter = stack.pop();
    if (iter.roll.length === 1) {
      const singleScore = getSingleScore(iter.roll[0]);
      relativeMaxScores.push(singleScore + iter.remainder);
      continue;
    }
    iter.roll.forEach((_, rollIndex) => {
      let newRemainder = getSingleScore(iter.roll[rollIndex]) + iter.remainder;
      const newIter = {
        roll: iter.roll.filter((_, i) => i != rollIndex),
        remainder: newRemainder,
      };
      stack.unshift(newIter);
    });
    const possibleScores = getPossibleScores(iter.roll);
    relativeMaxScores.push(Math.max(...possibleScores) + iter.remainder);
  }
  return Math.max(...relativeMaxScores);
}
