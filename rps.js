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

    if (a == "ROCK") {
        if (b == "SCISSORS") {
            console.log ("You win! Computer threw scissors!");
            humanScore += 1;
            return;
        }

        if (b == "PAPER") {
            console.log("You lose! Computer threw paper!");
            computerScore += 1;
            return;
        }

        if (b == "ROCK") {
            console.log("You drew! Computer threw rock!");
            computerScore += 1;
            return;
        }


    } 

    if (a == "PAPER") {
        if (b == "ROCK") {
            console.log ("You win! Computer threw rock!");
            humanScore += 1;
            return;
        }

        if (b == "SCISSORS") {
            console.log("You lose! Computer threw scissors!");
            computerScore += 1;
            return;
        }

        if (b == "PAPER") {
            console.log("You drew! Computer threw paper!");
            computerScore += 1;
            return;
        }



    }

    if (a == "SCISSORS") {
        if (b == "PAPER") {
            console.log ("You win! Computer threw paper!");
            humanScore += 1;
            return;
        }

        if (b == "ROCK") {
            console.log("You lose! Computer threw rock!");
            computerScore += 1;
            return;
        }

        if (b == "SCISSORS") {
            console.log("You drew! Computer threw scissors!");
            computerScore += 1;
            return;
        }



    }

}

function playGame() {
 
    
    for (let i = 0; i < 5; i++){
        let x = getHumanChoice();
        playRound(x, getComputerChoice());

    }



}

playGame();


