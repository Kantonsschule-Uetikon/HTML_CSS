const dice = document.getElementById('dice');
const result = document.getElementById('result');

dice.addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 20) + 1;
  result.textContent = `You rolled a ${roll}`;
  dice.style.transform = "scale(1.1)";
  setTimeout(() => dice.style.transform = "scale(1)", 200);});

