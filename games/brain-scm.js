const { lcmOfArray } = require("./nok");
const {checkAnswer} = require("./check-answer.js");
const prompt = require("prompt-sync")();

function playLCMGame(userName) {
    console.log("You selected 'Find the smallest common multiple of given numbers'.");

    for (let round = 0; round < 3; round++) {
        const numbers = [];
        
        while (numbers.length < 3) {
            const num = Math.floor(Math.random() * 100) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        
        console.log(`Round: ${round + 1}\nQuestion: ${numbers.join(", ")}`);
        const userAnswer = parseInt(prompt());
        const correctAnswer = lcmOfArray(numbers);

        if (checkAnswer(userAnswer, correctAnswer)) {
            console.log("Correct!");
        } else {
            console.log(`Your answer: ${userAnswer}.\n It is wrong answer ;(\n Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
        }
    }
}

module.exports = { playLCMGame };
