let humanScore = 0;
let computerScore = 0;

//Computer selects rock, paper, or scissor
function getComputerChoice() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const computerChoice = getRandomInt(3);
    let choice;
    if (computerChoice == 0) {
        choice = "Rock";
    } else if (computerChoice == 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return String(choice).toLowerCase();
}

//Prompt user for choice
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return String(choice).toLowerCase();
}

//function to play a single round
function playRound(computerChoice, humanChoice) {
    //Loop that ends game after 5 rounds
    let result = "";
    if (humanChoice == computerChoice) {
        result = "It's a tie.";
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        result = "Rock beats Scissors! You Win!";
        humanScore += 1;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        result = "Paper beats Rock... You lose...";
        computerScore += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        result = "Paper beats Rock! You win!";
        humanScore += 1;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        result = "Scissors beats Paper... You lose...";
        computerScore += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        result = "Scissors beat Paper! You Win!";
        humanScore += 1;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        result = "Rock beats Scissors... You lose...";
        computerScore += 1;
    }
    return result;
}

//Function to play a game of 5 rounds
function playGame() {

    //Declare human and computer scores, initialized to 0

    for (let step = 0; step < 5; step++) {
        console.log("ROUND " + (step + 1));
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        console.log("User chooses " + humanSelection
            + " | Computer chooses " + computerSelection);
        console.log(playRound(computerSelection, humanSelection));
        console.log("Human Score: "
            + humanScore + " | Computer score: "
            + computerScore);
    }
}

console.log(playGame());
