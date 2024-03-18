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


    let player = document.querySelector('.playerChoice');
    let computer = document.querySelector('.computerChoice');
    let result = document.querySelector('.result');
    let score = document.querySelector('.score');


    if (playerChoice === "rock" && getComputerChoice(computerChoice) === "rock") {

        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "It's a tie!";
        result.classList.remove('player-win');
        result.classList.remove('player-loose');


        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("It's a tie");
    }
    else if (playerChoice === "rock" && getComputerChoice(computerChoice) === "scissors") {
        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "You win! Rock beats scissors";
        result.classList.remove('player-win');
        result.classList.remove('player-loose');
        result.classList.add('player-win');



        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You win! Rock beats scissors");
        playerWin++;
    }
    else if (playerChoice === "rock" && getComputerChoice(computerChoice) === "paper") {
        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "You loose! Paper beats rock";
        result.classList.add('player-loose');

        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You loose! Paper beats rock");
        computerWin++;
    }

    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "paper") {

        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "It's a tie";
        result.classList.remove('player-win');
        result.classList.remove('player-loose');


        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("It's a tie");

    }
    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "rock") {

        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "You win! Paper beats rock.";
        result.classList.remove('player-win');
        result.classList.remove('player-loose');
        result.classList.add('player-win');
        




        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You win! Paper beats rock.");
        playerWin++;
    }
    else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "scissors") {

        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "You loose! Scissors beat paper.";
        result.classList.remove('player-win');
        result.classList.remove('player-loose');
        result.classList.add('player-loose');




        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You loose! Scissors beat paper.");
        computerWin++;
    }

    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "scissors") {


        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "It's a tie";
        result.classList.remove('player-win');
        result.classList.remove('player-loose');    

        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("It's a tie");

    }
    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "paper") {


        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "You win! Scissors beat paper.";
        result.classList.remove('player-win');
        result.classList.remove('player-loose');
        result.classList.add('player-win');
        

        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You win! Scissors beat paper.");
        playerWin++;
    }
    else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "rock") {

        player.textContent = `Your choice is: ${playerChoice}`;
        computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
        result.textContent = "You loose! Rock beats scissors.";
        result.classList.remove('player-win');
        result.classList.remove('player-loose');
        result.classList.add('player-loose');




        console.log(playerChoice);
        console.log(getComputerChoice(computerChoice));
        console.log("You loose! Rock beats scissors.");
        computerWin++;
    }

    score.textContent = `Your score is ${playerWin}   Computer score is ${computerWin}`;

}


document.addEventListener('click', (e) => {
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    if (e.target === rock) {
        playerChoice = 'rock';
        computerChoice = Math.floor(Math.random() * 3) + 1;
    }
    else if (e.target === paper) {
        playerChoice = 'paper';
        computerChoice = Math.floor(Math.random() * 3) + 1;
    }
    else if (e.target === scissors) {
        playerChoice = 'scissors';
        computerChoice = Math.floor(Math.random() * 3) + 1;
    }

    playRound(playerChoice, computerChoice);
})








