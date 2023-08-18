const player = document.getElementById("player");
const computerOption = document.getElementById("computer-option");
const roundGame = document.getElementById("round");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
let rounds = 1;
let winCount = 0;
function getPlayerOption(e) {
  if (e.target.classList.contains("option")) {
    let optionPlayer = e.target.id;
    let optionComputer = getComputerOption();
    drawComputerOption(optionComputer);
    rules(optionPlayer, optionComputer);
    round();
  }
}

function getComputerOption() {
  let option = Math.floor(Math.random() * 3 + 1);
  switch (option) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}
function drawComputerOption(option) {
  switch (option) {
    case "scissors":
      computerOption.src = "/assets/scissors.png";
      break;
    case "rock":
      computerOption.src = "/assets/rock.png";
      break;
    case "paper":
      computerOption.src = "/assets/paper.png";
      break;
  }
}
function rules(computer, player) {
  if (computer === player) {
    result.textContent = "The game is a Tie";
  } else if (
    (computer === "rock" && player === "scissors") ||
    (computer === "scissors" && player === "paper") ||
    (computer === "paper" && player === "rock")
  ) {
    result.textContent = "You lost";
  } else {
    winCount += 1;
    result.textContent = "You win! " + winCount;
  }
}
function round() {
  if (rounds > 5) {
    rounds = 0;
    winCount = 0;
  }

  roundGame.textContent = "Round: " + rounds;
  rounds += 1;
}
function restartGame() {
  computerOption.src = "/assets/question.png";
  result.textContent = "Result";
  rounds = 0;
  winCount = 0;
  roundGame.textContent = "Round: " + rounds;
}
player.addEventListener("click", getPlayerOption);
restart.addEventListener("click", restartGame);
