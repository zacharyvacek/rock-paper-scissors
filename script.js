const computer = computerSelection();
const player = playerSelection();

// computerSelection Function returns either Rock, Paper, or Scissors
function computerSelection() {
    const computerChoice = Math.floor(Math.random() * 3);
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
// console.log(computerSelection());

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
// console.log(playerSelection());

// rpsRound function takes computerSelection and playerSelection argument and returns string that declares the winner
function rpsRound(player, computer) {
    console.log("Player Chooses: " + player);
    console.log("Computer Chooses: " + computer);

    let message;

    if (player === "rock") {
        if (computer === "rock") {
            message = "It's a Tie!";
        } else if (computer === "paper") {
            message = "Paper beats Rock! Computer Wins!";
        } else {
            message = "Rock beats scissors! Player wins!";
        }
    } else if (player === "paper") {
        if (computer === "paper") {
            message = "It's a Tie!";
        } else if (computer === "rock") {
            message = "Paper beats Rock! Player Wins!";
        } else {
            message = "Scissors beat Paper! Computer Wins!";
        }
    } else {
        if (computer === "scissors") {
            message = "It's a Tie!";
        } else if (computer === "rock") {
            message = "Rock beats Scissors! Computer Wins!";
        } else {
            message = "Scissors beat Paper! Player Wins!";
        }
    }

    return message;
}

console.log(rpsRound(player, computer));

// game function
    //loops through five rounds and keeps score of the winner