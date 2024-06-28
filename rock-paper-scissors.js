let computerWin = 0;
let playerWin = 0;
let score;
let result;
let player;
let computer;




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


document.addEventListener('click', (e) => {

    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');
    let winnerMessage = document.createElement('div');
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (e.target === rock) {
        playerChoice = 'rock';
    }
    else if (e.target === paper) {
        playerChoice = 'paper';
    }
    else if (e.target === scissors) {
        playerChoice = 'scissors';
    }

    if (playerWin < 5 && computerWin < 5) {
        playRound(playerChoice, computerChoice);
    }




    function playRound(playerChoice, computerChoice) {


        player = document.querySelector('.playerChoice');
        computer = document.querySelector('.computerChoice');
        result = document.querySelector('.result');
        score = document.querySelector('.score');


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
            playerWin++;




            console.log(playerChoice);
            console.log(getComputerChoice(computerChoice));
            console.log("You win! Rock beats scissors");

        }
        else if (playerChoice === "rock" && getComputerChoice(computerChoice) === "paper") {
            player.textContent = `Your choice is: ${playerChoice}`;
            computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
            result.textContent = "You loose! Paper beats rock";
            result.classList.remove('player-win');
            result.classList.remove('player-loose');
            result.classList.add('player-loose');
            computerWin++;



            console.log(playerChoice);
            console.log(getComputerChoice(computerChoice));
            console.log("You loose! Paper beats rock");
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
            playerWin++;



            console.log(playerChoice);
            console.log(getComputerChoice(computerChoice));
            console.log("You win! Paper beats rock.");
        }
        else if (playerChoice === "paper" && getComputerChoice(computerChoice) === "scissors") {

            player.textContent = `Your choice is: ${playerChoice}`;
            computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
            result.textContent = "You loose! Scissors beat paper.";
            result.classList.remove('player-win');
            result.classList.remove('player-loose');
            result.classList.add('player-loose');
            computerWin++;



            console.log(playerChoice);
            console.log(getComputerChoice(computerChoice));
            console.log("You loose! Scissors beat paper.");
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
            playerWin++;



            console.log(playerChoice);
            console.log(getComputerChoice(computerChoice));
            console.log("You win! Scissors beat paper.");
        }
        else if (playerChoice === "scissors" && getComputerChoice(computerChoice) === "rock") {

            player.textContent = `Your choice is: ${playerChoice}`;
            computer.textContent = `Computer choice is: ${getComputerChoice(computerChoice)}`;
            result.textContent = "You loose! Rock beats scissors.";
            result.classList.remove('player-win');
            result.classList.remove('player-loose');
            result.classList.add('player-loose');
            computerWin++;



            console.log(playerChoice);
            console.log(getComputerChoice(computerChoice));
            console.log("You loose! Rock beats scissors.");
        }

        score.textContent = `Your score is ${playerWin}   Computer score is ${computerWin}`;


    }


    if (playerWin === 5 || computerWin === 5) {
        const newGame = document.createElement('button');
        newGame.classList.add('newGame');
        newGame.textContent = 'New Game';

        if (playerWin === 5) {
            winnerMessage.textContent = "You win!!!"
            winnerMessage.classList.add('textMessage', 'winner');

        }

        else {
            winnerMessage.textContent = "You Loose";
            winnerMessage.classList.add('textMessage', 'looser');

        }


        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        document.body.appendChild(winnerMessage);
        document.body.appendChild(newGame);



        newGame.addEventListener('click', () => {
            playerWin = 0;
            computerWin = 0;
            score.textContent = "";
            result.textContent = "";
            player.textContent = "";
            computer.textContent = "";
            playerChoice = undefined;
            computerChoice = undefined;
            winnerMessage.remove();
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
            newGame.remove();

        });

    }

})



