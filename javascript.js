const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

const playerPaper = document.querySelector('.paper');
playerPaper.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

const playerScissors = document.querySelector('.scissors');
playerScissors.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 99) % 3;
  return choices[randomNum];
}

let textResult = document.querySelector('.roundResults');
let compWin = 0, userWin = 0;
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      textResult.textContent = "Tie! Both are Rock";
    } else if (computerSelection == "paper") {
      textResult.textContent = "You Lose! Paper beats Rock";
      compWin++;
      result = "computer";
    } else {
      textResult.textContent = "You win! Rock beats Scissors";
      userWin++;
      result = "user";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      textResult.textContent = "You Win! Paper beats Rock";
      userWin++;
      result = "user";
    } else if (computerSelection == "paper") {
      textResult.textContent = "Tie! Both are Paper";
    } else {
      textResult.textContent = "You Lose! Scissor beats Paper";
      compWin++;
      result = "computer";
    }
  } else {
    if (computerSelection == "rock") {
      textResult.textContent = "You Lose! Rock beats Scissor";
      compWin++;
      result = "computer";
    } else if (computerSelection == "paper") {
      textResult.textContent = "You Win! Scissor beats Paper";
      userWin++;
      result = "user";
    } else {
      textResult.textContent = "Tie! Both are Scissor";
    }
  }
  // return result;
  let runningScore = document.querySelector('.runningScore');
  runningScore.textContent = `Computer: ${compWin} User: ${userWin}`;

  if (compWin == 5) {
    textResult.textContent = "The computer wins!";
  }
  else if (userWin == 5) {
    textResult.textContent = "The user wins!";
  }
}





// function game() {
//   let userWins = 0, computerWins = 0, winner;
//   for (let i = 0; i < 5; i++) {
//     let userInput = prompt("Choose rock, paper, or scissors", "rock");
//     winner = playRound(userInput, getComputerChoice());
//     if (winner == "user")
//       userWins++;
//     else if (winner == "computer")
//       computerWins++;
//   }
//   if (userWins > computerWins)
//     console.log("You won the game!")
//   else if (userWins < computerWins)
//     console.log("You lost the game!")
//   else
//     console.log("The game is tied!")
// }