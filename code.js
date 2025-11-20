// This is the main game function
function playGame() {

    // Get what the user typed
    var userGuess = document.getElementById("guess").value;

    // Make a random number from 1 to 10
    var randomNumber = Math.floor(Math.random() * 10) + 1;

    // Message we will show
    var message = "";

    // If user typed high
    if (userGuess === "high") {
        if (randomNumber > 5) {
            message = "You win! The number was " + randomNumber;
        } else {
            message = "You lose! The number was " + randomNumber;
        }
    }
    // If user typed low
    else if (userGuess === "low") {
        if (randomNumber <= 5) {
            message = "You win! The number was " + randomNumber;
        } else {
            message = "You lose! The number was " + randomNumber;
        }
    }
    // If they typed something else
    else {
        message = "Type only high or low!";
    }

    // Show the message on the page
    document.getElementById("output").innerHTML = message;
}

// This function doubles a number
function doubleNumber(num) {
    return num * 2; // multiply number by 2
}

// This function gets user number and shows double
function showDouble() {
    var userValue = document.getElementById("userNumber").value;
    var number = Number(userValue);
    var result = doubleNumber(number);
    document.getElementById("doubleOutput").innerHTML = "Double your number is: " + result;
}