import { getScore } from "./getScore.mjs";
import { generateRoll } from "./generateRoll.mjs";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { getRollFromInput } from "./getRollFromInput.mjs";
import { checkIsPickValid } from "./checkIsPickValid.mjs";

const rl = readline.createInterface({ input, output });

const question = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

async function main() {
  let score = 0;
  let diceToRoll = 6;
  let endGame = false;
  while (!endGame) {
    const roll = generateRoll(diceToRoll);
    console.log("You've rolled: ", roll);
    let rollScore = getScore(roll);
    if (rollScore === 0) {
      console.log("Farkle!");
      rl.close();
      return;
    }
    const recursivePickQuestion = async () => {
      const dice = await question("Pick dice to save: ");
      const formattedRoll = getRollFromInput(dice);
      let chosenScore = getScore(formattedRoll);
      if (chosenScore === 0 || !checkIsPickValid(roll, formattedRoll)) {
        console.log("Invalid choice, try again!");
        await recursivePickQuestion();
        return;
      }
      score += chosenScore;
      diceToRoll -= formattedRoll.length;
      if (diceToRoll === 0) {
        diceToRoll = 6;
      }
    };
    await recursivePickQuestion();
    const ans = await question(
      `You have ${diceToRoll} dice left with a score of ${score}, would you like to roll (y/n) `
    );

    if (ans === "n") {
      console.log(`Ending score: ${score}`);
      rl.close();
      endGame = true;
    }
  }
}

main();
