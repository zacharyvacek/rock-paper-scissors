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

console.log(getComputerChoice());

