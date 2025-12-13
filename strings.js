// This function runs when the user presses the Submit button
function checkEverything() {

    // Getting the first name the user typed
    var first = document.getElementById("firstBox").value;

    // Getting the last name the user typed
    var last = document.getElementById("lastBox").value;

    // Putting the full name together
    var fullName = first + " " + last;

    // Getting the zip code
    var zip = document.getElementById("zipBox").value;

    // Clearing any old messages
    document.getElementById("message").innerHTML = "";
    document.getElementById("secretSpot").innerHTML = "";

    // Checking if the full name is too long
    if (fullName.length > 20) {
        document.getElementById("message").innerHTML =
            "Your full name is too long. It must be 20 characters or less.";
        return; // stops the function here
    }

    // Checking if the zip code is exactly 5 digits AND actually numbers
    if (zip.length != 5 || isNaN(zip)) {
        document.getElementById("message").innerHTML =
            "Zip code must be exactly 5 numbers long.";
        return; // stops the function here
    }

    // If everything is correct, show the secret message
    document.getElementById("secretSpot").innerHTML =
        "You unlocked the secret message! Great job!";
}
// This function runs when the user presses the Check Palindrome button
function checkPalindrome() {

    // Grab user input
    let text = document.getElementById("palInput").value;

    // Clean it: remove spaces, make lowercase
    let clean = text.replace(/\s+/g, "").toLowerCase();

    // Reverse it
    let reverse = clean.split("").reverse().join("");

    // Area where message goes
    let box = document.getElementById("palResult");

    // Compare
    if (clean === reverse) {
        box.innerHTML = "\"" + text + "\" IS a palindrome!";
    } else {
        box.innerHTML = "\"" + text + "\" is NOT a palindrome.";
    }

    // Clear input for next attempt
    document.getElementById("palInput").value = "";
}

function playSound() {
    let sound = document.getElementById("spaceSound");
    sound.play();


}