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
    return computerChoice;
}

const computerChoice = getComputerChoice();
console.log("Computer chose " + computerChoice);

function getHumanChoice() {
    const humanChoice = prompt("Choose your fighter! Rock, Paper, or Scissors.", " ").toLowerCase();

    if (humanChoice == "rock") {
        return "rock";
    } else if (humanChoice == "paper") {
        return "paper";
    } else if (humanChoice == "scissors") {
        return "scissors";
    }
    return humanChoice;
}

const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    
    if (human === computer) {
        return "It's a tie!";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock") 
    ) {
        return "You win! " + human + " beats " + computer;
    } else if (
        (computer === "rock" && human === "scissors") ||
        (computer === "scissors" && human === "paper") ||
        (computer === "paper" && human === "rock")
    ) {
        return "You lose! " + computer + " beats " + human;
    }
}

const human = humanChoice;
const computer = computerChoice;

console.log(playRound(human, computer));
