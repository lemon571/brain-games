const { greetUser } = require("../scr/cli.js")
const { playLCMGame } = require("../games/brain-scm.js")
const { playProgressionGame } = require("../games/brain-progression.js")
const prompt = require("prompt-sync")();

function main() {
    const userName = greetUser();
    while (true) {
        console.log("Choose a game:\n1. Find the smallest common multiple of given numbers.\n2. What number is missing in the progression?");
        const defense = prompt();
        
        if (defense === '1') {
            playLCMGame(userName);
        } else if (defense === '2') {
            playProgressionGame(userName);
        } else if (defense === 'exit') {
            console.log(`Goodbye, ${userName}!`);
            process.exit();
        } else {
            console.log("Invalid choice. Please select again.");
        }
    }
}

main();
