const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const resetButton = document.getElementById("reset");
const result = document.getElementById("ergebnis");

let playerScore = 0;
let computerScore = 0;

const choices = [
  { name: "Schere", img: "Schere.png" },
  { name: "Stein", img: "Stein.png" },
  { name: "Papier", img: "Papier.png" }
];


// Zufallswahl für den Computer
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Gewinnerlogik
function getResult(player, computer) {
  if (player === computer) {
    result.textContent = "Unentschieden!";
  }
  else if (
    (player === "Schere" && computer === "Papier") ||
    (player === "Stein" && computer === "Schere") ||
    (player === "Papier" && computer === "Stein")
  ) {
    playerScore++;  
    result.textContent = "Du Gewinnst!";
  } else {
    computerScore++;
    result.textContent = "Computer Gewinnt!";
  }
  
}
function playGame(playerChoice){
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice.name, computerChoice.name);

  playerImage.src = playerChoice.img;
  playerImage.style.display = "block";
  computerImage.src = computerChoice.img;
  computerImage.style.display = "block";

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}
// Event Listener für die Bilder
document.getElementById("schere").addEventListener("click", () => playGame(choices[0]));
document.getElementById("stein").addEventListener("click", () => playGame(choices[1]));
document.getElementById("papier").addEventListener("click", () => playGame(choices[2]));

resetButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  playerImage.style.display = "none";
  computerImage.style.display = "none";
  result.textContent = "";
});
