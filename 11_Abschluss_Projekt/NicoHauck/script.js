// Startfarbe
let color = { c: 0, m: 0, y: 0 };

// Elemente
const colorDisplay = document.getElementById("color-display");
const blaubeereButton = document.getElementById("blaubeere-button");
const bananeButton = document.getElementById("banane-button");
const erdbeereButton = document.getElementById("erdbeere-button"); 
const resetButton = document.getElementById("reset-button");
const becherImage = document.getElementById("becher");

// Funktion zur Umrechnung von CMY zu RGB mit Hilfe von Chat GPT
function cmyToRgb(c, m, y) {
    const r = Math.round((1 - c) * 255); // Rot
    const g = Math.round((1 - m) * 255); // Grün
    const b = Math.round((1 - y) * 255); // Blau
    return `rgb(${r}, ${g}, ${b})`;
}


// Farbe updaten
function updateColor() {
    const rgbColor = cmyToRgb(color.c, color.m, color.y);
    colorDisplay.style.backgroundColor = rgbColor;
}

// Button Funktionen
blaubeereButton.addEventListener("click", () => {
    color.c = Math.min(color.c + 0.1, 1);
    updateColor();
});

bananeButton.addEventListener("click", () => {
    color.y = Math.min(color.y + 0.1, 1);
    updateColor();
});

erdbeereButton.addEventListener("click", () => {
    color.m = Math.min(color.m + 0.1, 1);
    updateColor();
});

resetButton.addEventListener("click", () => {
    color = { c: 0, m: 0, y: 0 };
    updateColor();
});

// Becher wechseln
becherImage.addEventListener("click", () => {
    if (becherImage.src.includes("Becher.png")) {
        becherImage.src = "Becher2.png";
    } else {
        becherImage.src = "Becher.png";
    }
});

