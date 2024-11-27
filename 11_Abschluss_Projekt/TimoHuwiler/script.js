const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

let timerInterval;
let remainingTime = 1500;

startButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      alert("Zeit abgelaufen!");
    }
  }, 1000);
});

pauseButton.addEventListener("click", () => {
  clearInterval(timerInterval);
});

resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  remainingTime = 1500;
  updateTimerDisplay();
});

function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  document.getElementById("timerDisplay").textContent = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

const backgrounds = [
    'Hintergrundbild.png',
    'Hintergrundbild_2.png',
    'Hintergrundbild_3.png',
    'Hintergrundbild_4.png'
];

let currentIndex = 0;

document.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
});