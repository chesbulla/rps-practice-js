let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let x = Math.random();

    if (x < 0.33) return "rock";
    if ( x > 0.66) return "paper";
    else return "scissors";

}

function getHumanChoice(){
    let x = prompt("Enter choice");
    return x;

}

function playRound(humanChoice, computerChoice) {
    let a = humanChoice.toUpperCase();
    let b = computerChoice.toUpperCase();
    let resultRoundText = document.querySelector('.result-round');
    let humanScoreText = document.querySelector('.player-score');
    let computerScoreText = document.querySelector('.computer-score');

    if (a == "ROCK") {
        if (b == "SCISSORS") {
            console.log ("You win! Computer threw scissors!");
            resultRoundText.textContent = "You win! Computer threw scissors!";
            humanScore += 1;
            humanScoreText.textContent = `Player Score: ${humanScore}`;
            
        }

        if (b == "PAPER") {
            console.log("You lose! Computer threw paper!");
            resultRoundText.textContent = "You lose! Computer threw paper!";
            computerScore += 1;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
            
        }

        if (b == "ROCK") {
            console.log("You drew! Computer threw rock!");
            resultRoundText.textContent = "You drew! Computer threw rock!";
            
        }


    } 

    if (a == "PAPER") {
        if (b == "ROCK") {
            console.log ("You win! Computer threw rock!");
            resultRoundText.textContent = "You win! Computer threw rock!";
            humanScore += 1;
            humanScoreText.textContent = `Player Score: ${humanScore}`;
            
        }

        if (b == "SCISSORS") {
            console.log("You lose! Computer threw scissors!");
            resultRoundText.textContent = "You lose! Computer threw scissors!";
            computerScore += 1;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
            
        }

        if (b == "PAPER") {
            console.log("You drew! Computer threw paper!");
            resultRoundText.textContent = "You drew! Computer threw paper!";
            
        }



    }

    if (a == "SCISSORS") {
        if (b == "PAPER") {
            console.log ("You win! Computer threw paper!");
            resultRoundText.textContent = "You win! Computer threw paper!";
            humanScore += 1;
            humanScoreText.textContent = `Player Score: ${humanScore}`;
            
        }

        if (b == "ROCK") {
            console.log("You lose! Computer threw rock!");
            resultRoundText.textContent = "You lose! Computer threw rock!";
            computerScore += 1;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
            
            
        }

        if (b == "SCISSORS") {
            console.log("You drew! Computer threw scissors!");
            resultRoundText.textContent = "You drew! Computer threw scissors!";
            
        }



    }
    displayWinner();
    

}

function displayWinner() {
    if (humanScore !== 5 && computerScore !== 5) return;

    let body = document.querySelector('body');
    let winner = document.createElement('div');
    if (humanScore === 5){
        winner.textContent = "Player Wins!";

    }
    if (computerScore === 5){
        winner.textContent = "Computer Wins!";

    }
    body.appendChild(winner);
} 





function playGame() {
    let body = document.querySelector('body');
    let scissorsBtn = document.createElement('button');
    let rockBtn = document.createElement('button');
    let paperBtn = document.createElement('button');
    
    

    scissorsBtn.addEventListener("click", () => { playRound("scissors", getComputerChoice()) });
    rockBtn.addEventListener("click", () => { playRound("rock", getComputerChoice()) });
    paperBtn.addEventListener("click",() => { playRound("paper", getComputerChoice()) });

    scissorsBtn.textContent = "Scissors";
    rockBtn.textContent = "Rock";
    paperBtn.textContent = "Paper";

    body.appendChild(scissorsBtn);
    body.appendChild(rockBtn);
    body.appendChild(paperBtn);

}

playGame();

