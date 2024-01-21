let computerChoice = Math.floor(Math.random() * 3) + 1;
let playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();

function getComputerChoice(computerChoice) {
    if (computerChoice === 1) {
        computerChoice = "rock";
    }
    else if (computerChoice === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

console.log(playerChoice);
console.log(getComputerChoice(computerChoice));

function playRound(playerChoice, computerChoice) {

    while (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
        console.log("Please type a valid option");
        playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
    }
    

    if (playerChoice === "rock" && getComputerChoice(computerChoice) === "rock") {
        console.log("It's a tie");
    }
    else if (playerChoice === "rock" && getComputerChoice(computerChoice) === "scissors") {
        console.log("You win! Rock beats scissors");
    }
    else if (playerChoice === "rock" && getComputerChoice(computerChoice) === "paper") {
        console.log("You loose! Paper beats rock");
    }

    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "paper") {
        console.log("It's a tie");
    }
    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "rock") {
        console.log("You win! Paper beats rock.");
    }
    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "scissors") {
        console.log("You loose! Scissors beat paper.");
    }

    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "scissors") {
        console.log("It's a tie");
    }
    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "paper") {
        console.log("You win! Scissors beat paper.");
    }
    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "rock") {
        console.log("You loose! Rock beats scissors.");
    }








}

console.log(playRound(playerChoice, computerChoice));