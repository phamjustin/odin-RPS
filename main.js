const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER = "player";
const COMPUTER = "computer";
const VALIDCHOICE = [ROCK, PAPER, SCISSORS]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    let choice = VALIDCHOICE[randNum];
    return choice;
}

/*function getPlayerChoice() {
    let choice;
    while (true){
        choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (VALIDCHOICE.includes(choice)) break;
        console.log("INVALID INPUT: Please Enter: rock, paper, or scissors")
    }
    switch(choice){
        case ROCK:
            return ROCK;
        case PAPER:
            return PAPER;
        case SCISSORS:
            return SCISSORS;        
    }
} */



function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    console.log("Player Chooses: " + playerChoice.toUpperCase() + "\nComputer Chooses: " + computerChoice.toUpperCase());

    if (playerChoice === computerChoice) 
    {
        console.log("It's a tie round! \nScore: \n   Player " + playerScore + "\n   Computer " + computerScore); 
    }
    else if (playerChoice === ROCK && computerChoice === SCISSORS ||
        playerChoice === PAPER && computerChoice === ROCK ||
        playerChoice === SCISSORS && computerChoice === PAPER) {
            playerScore++;
            console.log("Player wins the round! \nScore: \n   Player " + playerScore + "\n   Computer " + computerScore);
        }
    else {
        computerScore++
        console.log("Computer wins the round! \nScore: \n   Player " + playerScore + "\n   Computer " + computerScore);
    }
} 

function playGame(){


    if (playerScore === computerScore){
        console.log("IT'S A TIE GAME THERE'S NO WINNER!!!!!!");
    }
    else if (playerScore > computerScore){
        console.log("PLAYER WINS THE GAME!!!!!!");
    }
    else{
        console.log("COMPUTER WINS THE GAME!!!!!!")
    }
}

playGame();