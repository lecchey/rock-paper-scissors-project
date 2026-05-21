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
    const result = prompt("Choose your fighter! Rock, Paper, or Scissors.", " ").toLowerCase();

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
    
}