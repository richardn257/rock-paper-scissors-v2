function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 99) % 3;
  return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      // textResult.textContent = "Tie! Both are Rock";
      console.log("Tie! Both are Rock");
    }
    else if (computerSelection == "paper") {
      // textResult.textContent = "You Lose! Paper beats Rock";
      // compWin++;
      console.log("You Lose! Paper beats Rock");
      result = "computer";
    }
    else {
      // textResult.textContent = "You win! Rock beats Scissors"
      // userWin++;
      console.log("You win! Rock beats Scissors");
      result = "user";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      // textResult.textContent = "You Win! Paper beats Rock";
      // userWin++;
      console.log("You Win! Paper beats Rock");
      result = "user";
    }
    else if (computerSelection == "paper") {
      // textResult.textContent = "Tie! Both are Paper";
      console.log("Tie! Both are Paper")
    }
    else {
      // textResult.textContent = "You Lose! Scissor beats Paper";
      // compWin++;
      console.log("You Lose! Scissor beats Paper");
      result = "computer";
    }
  } else {
    if (computerSelection == "rock") {
      // textResult.textContent = "You Lose! Rock beats Scissor";
      // compWin++;
      console.log("You Lose! Rock beats Scissor");
      result = "computer";
    }
    else if (computerSelection == "paper") {
      // textResult.textContent = "You Win! Scissor beats Paper";
      // userWin++;
      console.log("You Win! Scissor beats Paper");
      result = "user";
    }
    else {
      // textResult.textContent = "Tie! Both are Scissor";
      console.log("Tie! Both are Scissor");
    }
  }
  return result;
}

const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

const playerPaper = document.querySelector('.paper');
playerRock.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

const playerScissors = document.querySelector('.scissors');
playerRock.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});


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