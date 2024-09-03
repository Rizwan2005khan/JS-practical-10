function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max)) + min;
}

function playGuessingGame() {
    const randomNumber = getRandomNumber(1, 100);
    let guess = null;
    let attempts = 0;

    while (guess !== randomNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 100:"));
        attempts++;

        if (guess > randomNumber) {
            alert("Too high! Try again.");
        } else if (guess < randomNumber) {
            alert("Too low! Try again.");
        } else if (isNaN(guess)) {
            alert("Invalid input! Please enter a number between 1 and 100.");
        }
    }

    alert(`Congratulations! You guessed the right number (${randomNumber}) in ${attempts} attempts.`);
}

playGuessingGame();
