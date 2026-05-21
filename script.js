let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const computerChoice = Math.random();
  
    if (computerChoice < 1/3) {
        return "rock";
    } else if (computerChoice < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getComputerChoice());


function getHumanChoice() {
    const result = prompt("Choose your fighter! Rock, Paper, or Scissors.", " ");

     if (result == "rock") {
        return "rock";
    } else if (result == "paper") {
        return "paper";
    } else if (result == "scissors") {
        return "scissors";
    } else {
        return "Invalid";
    }
}
console.log(getHumanChoice());


function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock") 
    ) {
        return "You win! " + human + " beats " + computer;
    } else {
        return "You lose! " + computer + " beats " + human;
    }
}

