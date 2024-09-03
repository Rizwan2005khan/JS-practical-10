function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playingGuessGame() {
    let numberToGuess = getRandomNumber(1, 100);
    let guess = null;
    let attempt = 0;

    do {
        guess = parseInt(prompt("Guess a number between 1 and 100"));
            attempt++;

            if (guess > numberToGuess) {
                alert("Too high!");
            } else if (guess < numberToGuess) {
                alert("Too low!");
            }
        }
     while (guess !== numberToGuess);

    alert(`Congratulations! You guessed the right number (${numberToGuess}) in ${attempt} attempts.`);
}

playingGuessGame();
