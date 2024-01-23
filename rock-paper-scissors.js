let computerChoice = Math.floor(Math.random() * 3) + 1;
let playerChoice;
let computerWin = 0;
let playerWin = 0;

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



function playRound(playerChoice, computerChoice) {

    while (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
        console.log("Please type a valid option");
        playerChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();

    }


    if (playerChoice === "rock" && getComputerChoice(computerChoice) === "rock") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("It's a tie");
        //playRound();
    }
    else if (playerChoice === "rock" && getComputerChoice(computerChoice) === "scissors") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You win! Rock beats scissors");
        playerWin++;
    }
    else if (playerChoice === "rock" && getComputerChoice(computerChoice) === "paper") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You loose! Paper beats rock");
        computerWin++;
    }

    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "paper") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("It's a tie");
        //playRound();

    }
    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "rock") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You win! Paper beats rock.");
        playerWin++;
    }
    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "scissors") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You loose! Scissors beat paper.");
        computerWin++;
    }

    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "scissors") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("It's a tie");
        //playRound();

    }
    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "paper") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You win! Scissors beat paper.");
        playerWin++;
    }
    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "rock") {
        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You loose! Rock beats scissors.");
        computerWin++;
    }



}


function game() {
    if (playerWin < 3 && computerWin < 3) {
        playerChoice = prompt("Please choose Rock, Paper or Scissors").toLowerCase();
        getComputerChoice(computerChoice = Math.floor(Math.random() * 3) + 1);
        playRound(playerChoice, computerChoice);
        game();
    }
}

console.log(game());
playerWin === 3 ? console.log("It's your game!") : console.log("Better luck next time!");
