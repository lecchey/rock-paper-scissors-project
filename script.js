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
    const humanChoice = prompt("Choose your fighter! Rock, Paper, or Scissors.", " ").toLowerCase();

    if (humanChoice == "rock") {
        return "rock";
    } else if (humanChoice == "paper") {
        return "paper";
    } else if (humanChoice == "scissors") {
        return "scissors";
    }
}
console.log(getHumanChoice());


function playRound(humanChoice, computerChoice) {
    const human = humanChoice;
    const computer = computerChoice;
    if (human === computer) {
        return "It's a tie!";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock") 
    ) {
        return "You win! " + human + " beats " + computer;
    } else {
        return "You lose! " + computer + " beats " + human;
    }
}
console.log(playRound(human, computer));
