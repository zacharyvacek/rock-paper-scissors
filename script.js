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


// rpsRound function takes computerSelection and playerSelection argument
    //returns string that declares the winner

// game function
    //loops through five rounds and keeps score of the winner