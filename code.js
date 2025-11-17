function updateText(){
    document.getElementById("heading").innerHTML = "Welcome to Quarks Casino!";
}
// Function to roll dice for two players and show the winner
function playDiceDuel() {
    const playerName = document.getElementById('playerName').value || "Player 1";

    // Roll dice for Player 1 and Player 2 (random 1–6)
    const player1Roll = Math.floor(Math.random() * 6) + 1;
    const player2Roll = Math.floor(Math.random() * 6) + 1;

    // Determine the winner
    let result;
    if (player1Roll > player2Roll) {
        result = `${playerName} wins! 🎉 (${player1Roll} vs ${player2Roll})`;
    } else if (player2Roll > player1Roll) {
        result = `Player 2 wins! 😎 (${player1Roll} vs ${player2Roll})`;
    } else {
        result = `It's a tie! 🤝 (${player1Roll} vs ${player2Roll})`;
    }

    // Display the result
    document.getElementById('gameResult').textContent = result;
}

// Function to check if a number is "lucky"
function checkLuckyNumber(number) {
    const num = parseInt(number);

    if (isNaN(num)) {
        document.getElementById('luckyResult').textContent = "Please enter a valid number!";
        return;
    }

    if (num % 7 === 0) {
        document.getElementById('luckyResult').textContent = `🎉 ${num} is a lucky number!`;
    } else {
        document.getElementById('luckyResult').textContent = `${num} is not so lucky. 😅`;
    }
}