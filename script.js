// Code description:
// The game is a number guessing game where the user has to guess a random number between 1 and 20.
// The user has 5 attempts to guess the number. If the user guesses the number, they win. If they run out of attempts, they lose.
// The game will display a message indicating whether the guess was too high, too low, or correct.
// The game will also display a message indicating the number of attempts remaining.
// The game will also display a message indicating whether the user has won or lost.

// Function generates random number between 1 and 20
function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

// Function to display message
function displayGameMessage (message){
    document.getElementById("gameMessage").innerText = message;
}

function attemptDisplay(message){
    document.getElementById("attemptsMessage").innerHTML = message;
}

// Create a global variable
let generatedRandomNumber = generateRandomNumber();
console.log(generatedRandomNumber);
let guessInputCount = 0;
// Add event listener for resetButton
document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("guessInput").value = "";
    generatedRandomNumber = generateRandomNumber();
    guessInputCount++;
    displayGameMessage("Game reset! Please enter a number between 1 and 20");
    attemptDisplay("Attempts remaining: 5");
    console.log("I am the number generated when you pressed reset (delete me for production):", generatedRandomNumber);
    //when reset button is clicked a new random number is generated 
    //click wont be valid twice in a row
})

document.getElementById("startButton").addEventListener("click", function() {
    // hide the input, submitButton, resetButton button
    document.querySelector(".guessInput").style.display = "block";
    document.querySelector(".submitButton").style.display = "inline-block";
    document.querySelector(".resetButton").style.display = "inline-block";
    // hide start button
    document.getElementById("startButton").disabled = true;
})
// add event listener for submitButton
document.getElementById("submitButton").addEventListener("click", function() {
    // get the input value from html
    let guessInputValue = parseInt(document.getElementById("guessInput").value);
    guessInputCount = 0;
    // check if input is empty
    if (document.getElementById("guessInput").value.trim() === "") {
        displayGameMessage ("Please enter a number between 1 and 20")
        return ;
    }
    // check if input is a number
    if (isNaN(guessInputValue)) {
        displayGameMessage ("Please enter a valid number");
        return ;
    }
    // check if input is between 1 and 20
    if (guessInputValue < 1 || guessInputValue > 20) {
        displayGameMessage ("Read instructions carefully! otherwise we tell your mom!")
        return ;
    }
    // limit the number of guesses to 5
    guessInputCount++;
    attemptDisplay(`Attempts remaining  : ${5 - guessInputCount}`);
    if (guessInputCount > 5) {
        displayGameMessage("Out of guesses! The number was: " + generatedRandomNumber);
        return ;
    }
    // check if input is equal to random number
    if (guessInputValue === generatedRandomNumber) {
        displayGameMessage ("Congratulations! Winner winner chicken dinner: " + generatedRandomNumber);
        return ;
    } if (guessInputValue < generatedRandomNumber) {
        displayGameMessage ("Guess is to low");
        return ;
    } else if (guessInputValue > generatedRandomNumber) {
        displayGameMessage ("Guess is to high");
        return ;
    }
    // clear the input value
    document.getElementById("guessInput").value = "";
})