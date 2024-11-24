// Startfarbe
let color = { c: 0, m: 0, y: 0 };

// Elemente
const colorDisplay = document.getElementById("farb-display");
const blaubeereButton = document.getElementById("blaubeere-button");
const bananeButton = document.getElementById("banane-button");
const erdbeereButton = document.getElementById("erdbeere-button"); 
const resetButton = document.getElementById("reset-button");
const becherImage = document.getElementById("becher");

function updateColor() {
    const rgbColor = `rgb(${m}, ${y}, ${c})`
    colorDisplay.style.backgroundColor = rgbColor;
}

// Button Funktionen
blaubeereButton.addEventListener("click", () => {
    color.c = Math.min(color.c + 0.25, 1);
    updateColor();
});

bananeButton.addEventListener("click", () => {
    color.y = Math.min(color.y + 0.25, 1);
    updateColor();
});

erdbeereButton.addEventListener("click", () => {
    color.m = Math.min(color.m + 0.25, 1);
    updateColor();
});

resetButton.addEventListener("click", () => {
    color = { c: 0, m: 0, y: 0 };
    updateColor();
});