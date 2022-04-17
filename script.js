function getRandomNum() {
    const randNum = Math.floor(Math.random() * 3);
}

// computerSelection Function returns either Rock, Paper, or Scissors
function computerSelection() {
    const computerChoice = getRandomNum();
    let selection;
    // console.log(computerChoice);
    if (computerChoice === 0) {
        selection = "rock";
    } else if (computerChoice === 1) {
        selection = "paper";
    } else {
        selection = "scissors";
    };
    return selection;
}

// playerSelection function
function playerSelection() {
    let playerInput = prompt("Please choose 'Rock', 'Paper', or 'Scissors': ");
    playerInput = playerInput.toLowerCase();
    while (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
        playerInput = prompt("Not an Option. Please choose 'Rock', 'Paper', or 'Scissors': ");
        playerInput = playerInput.toLowerCase();
    }
    return playerInput;
}

// rpsRound function takes computerSelection and playerSelection argument and returns string that declares the winner
function rpsRound(player, computer) {
    let winner;
    if (player === "rock") {
        if (computer === "rock") {
            winner = "tie";
        } else if (computer === "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (player === "paper") {
        if (computer === "paper") {
            winner = "tie";
        } else if (computer === "rock") {
            winner = "player";
        } else {
            winner = "computer";
        }
    } else {
        if (computer === "scissors") {
            winner = "tie";
        } else if (computer === "rock") {
            winner = "computer";
        } else {
            winner = "player";
        }
    }
    return winner;
}

//rematch function
function rematch() {
    let wantRematch = prompt("Do you want a rematch? Y/n");
    wantRematch = wantRematch.toLowerCase();
    while (wantRematch !== "y" && wantRematch !== "n") {
        wantRematch = prompt("Not an Option. Y/n");
        wantRematch = wantRematch.toLowerCase();
    }
    if (wantRematch === "y") {
        game();
    } else {
        console.log("Thanks for playing!");
    }
}

// game function
//loops through five rounds and keeps score of the winner
function game() {
    let message;
    playerScore = 0;
    computerScore = 0
    for (let i = 0; i < 5; i++) {
        let message;
        let computerChoice = computerSelection();
        let playerChoice = playerSelection();
        let winner = rpsRound(playerChoice, computerChoice);
        let winnerCapitalized = winner.charAt(0).toUpperCase() + winner.slice(1);
        if (winner === "player") {
            playerScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
        message = `Round ${i + 1}:\n`;
        message += `Player chose ${playerChoice}.\n`;
        message += `Computer chose ${computerChoice}.\n`
        if (winner === "player") {
            message += `${winnerCapitalized} Wins!\n`;
        } else if (winner === "computer") {
            message += `${winnerCapitalized} Wins!\n`;
        } else {
            message += "It's a Tie!\n";
        }
        message += `Player has ${playerScore} points.\n`;
        message += `Computer has ${computerScore} points.\n`;
        console.clear();
        console.log(message);
    }
    if (playerScore > computerScore) {
        console.log("PLAYER WINS!");
    } else if (computerScore > playerScore) {
        console.log("COMPUTER WINS!");
    } else {
        console.log("It's a Tie...");
    }
    rematch();
}

game();
