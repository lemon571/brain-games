const { generateGeometricProgression } = require("./progress.js");
const {checkAnswer} = require("./check-answer.js");
const prompt = require("prompt-sync")();

function playProgressionGame(userName) {
    console.log("You selected 'What number is missing in the progression'.");
    
    for (let round = 0; round < 3; round++) {
        const { progression, missingValue } = generateGeometricProgression();
        
        console.log(`Round: ${round + 1}\n Question: ${progression.join(" ")}`);
        const userAnswer = parseInt(prompt());
        
        if (checkAnswer(userAnswer, missingValue)) {
            console.log("Correct!");
        } else {
            console.log(`Your answer: ${userAnswer}. It is wrong answer ;( Correct answer was ${missingValue}. Let's try again, ${userName}!`);
        }
    }
}

module.exports = { playProgressionGame };