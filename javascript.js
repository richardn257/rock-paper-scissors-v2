function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNum = Math.floor(Math.random() * 99) % 3;
  return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
        textResult.textContent = "Tie! Both are Rock";
    }
    else if (computerSelection == "paper") {
        textResult.textContent = "You Lose! Paper beats Rock";
        compWin++;
    }
    else {
        textResult.textContent = "You win! Rock beats Scissors"
        userWin++;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
        textResult.textContent = "You Win! Paper beats Rock";
        userWin++;
    }
    else if (computerSelection == "paper") {
        textResult.textContent = "Tie! Both are Paper";
    }
    else {
        textResult.textContent = "You Lose! Scissor beats Paper";
        compWin++;
    }
  } else {
    if (computerSelection == "rock") {
        textResult.textContent = "You Lose! Rock beats Scissor";
        compWin++;
    }
    else if (computerSelection == "paper") {
        textResult.textContent = "You Win! Scissor beats Paper";
        userWin++;
    }
    else {
        textResult.textContent = "Tie! Both are Scissor";
    }
  }
}