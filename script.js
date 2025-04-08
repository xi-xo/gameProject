function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

// Add event listener for resetButton
document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("resetButton").value = "";
    
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

document.getElementById("submitButton").addEventListener("click", function() {
    // get the input value from html
    let guessInputValue = document.getElementById("guessInput").value;
    // check if input is empty
    if (guessInputValue === "") {
        alert("Please enter a number between 1 and 20");
        return;
    }
    // check if input is a number
    if (isNaN(guessInputValue)) {
        alert("Please enter a valid number");
        return;
    }
    // check if input is between 1 and 20
    if (guessInputValue < 1 || guessInputValue > 20) {
        alert("Read instructions carefully! otherwise we tell your mom!");
        return;
    }
    
    // generate random number
    let randomNumber = generateRandomNumber();
    
    // check if input is equal to random number
    if (guessInputValue === randomNumber) {
        alert("Congratulations! You guessed the correct number: " + randomNumber);
    } else {
        alert("Sorry! The correct number was: " + randomNumber);
    }
});1