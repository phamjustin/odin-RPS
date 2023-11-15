const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER = "player";
const COMPUTER = "computer";
const VALIDCHOICE = [ROCK, PAPER, SCISSORS]

function getComputerChoice() {

    let randNum = Math.floor(Math.random() * 3);
    let choice = VALIDCHOICE[randNum];
    return choice;
}

function getPlayerChoice() {
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

}



let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
console.log("Player Chooses: " + playerChoice.toUpperCase() + "\nComputer Chooses: " + computerChoice.toUpperCase());

function playRound(playerChoice, computerSelection) {

} 