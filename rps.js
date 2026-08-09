/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */




function rps() {

    let userChoice = prompt("Enter your choice");

    let randomNumber = Math.floor(Math.random() * 3);
    
    let computerChoice = "";

    if (randomNumber === 0){
        computerChoice = "rock";
    }
    else if (randomNumber === 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissor";
    }

    console.log(userChoice)
    console.log(computerChoice)
    console.log(randomNumber)

    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ){
        alert("You win");
    }
    else if (userChoice === computerChoice) {
        alert("The game is tie");
    }
    else if (
        (userChoice === "scissor" && computerChoice === "rock") ||
        (userChoice === "paper" && computerChoice === "scissor") ||
        (userChoice === "rock" && computerChoice === "paper")
    ){
        alert("Oh No, Computer Wins");
    }else{
        alert("Please provide valid input");
    }

}

rps()


