const prompt = require("prompt-sync")();

function greetUser() {
    const WELCOME_TEXT = "Welcome to the Brain Games!\nMay I have your name?";
    console.log(WELCOME_TEXT);
    const name = prompt(); // Запрашиваем имя пользователя
    console.log(`Your name: ${name}\nHello, ${name}!`);
    return name; // Возвращаем имя для дальнейшего использования
}

module.exports = { greetUser };
