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
    return choice;
}

//Prompt user for choice
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

//console.log tests
console.log(getComputerChoice());
console.log(getHumanChoice());


