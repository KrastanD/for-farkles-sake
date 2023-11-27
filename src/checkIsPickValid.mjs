import { getScore } from "./getScore.mjs";

// Can't allow user to pick non-scoring dice
export function checkIsPickValid(roll, choice) {
  const rollCopy = [...roll];
  for (let i = 0; i < choice.length; i++) {
    const index = rollCopy.indexOf(choice[i]);
    if (index !== -1) {
      rollCopy.splice(index, 1);
    } else {
      return false;
    }
  }

  let noInvalidChoices = true;
  const choiceScore = getScore(choice);
  choice.forEach((_, index) => {
    const choiceCopy = [...choice];
    choiceCopy.splice(index, 1);
    const copyScore = getScore(choiceCopy);
    if (copyScore === choiceScore) {
      noInvalidChoices = false;
    }
  });

  return noInvalidChoices;
}
