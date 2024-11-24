// Startfarbe
let color = { c: 0, m: 0, y: 0 };

// Adjektive
const words = [
    "Frischer", "Fruchtiger", "Leckerer"
];

// Elemente
const colorDisplay = document.getElementById("color-display");
const blaubeereButton = document.getElementById("blaubeere-button");
const bananeButton = document.getElementById("banane-button");
const erdbeereButton = document.getElementById("erdbeere-button"); 
const resetButton = document.getElementById("reset-button");
const becherImage = document.getElementById("becher");
const shakeTitle = document.getElementById("shake-title");

// Funktion zur Umrechnung von CMY zu RGB mit Hilfe von Chat GPT
function cmyToRgb(c, m, y) {
    const r = Math.round((1 - c) * 255); // Rot
    const g = Math.round((1 - m) * 255); // Grün
    const b = Math.round((1 - y) * 255); // Blau
    return `rgb(${r}, ${g}, ${b})`;
}

// Funktion um Prozentzahlen anzupassen
function updateColorInfo() {
    document.getElementById("blaubeere-percentage").textContent = Math.round(color.c * 100) + "%";
    document.getElementById("erdbeere-percentage").textContent = Math.round(color.m * 100) + "%";
    document.getElementById("banane-percentage").textContent = Math.round(color.y * 100) + "%";
}

// Farbe updaten
function updateColor() {
    const rgbColor = cmyToRgb(color.c, color.m, color.y);
    colorDisplay.style.backgroundColor = rgbColor;
    updateColorInfo();
}

// Button Listeners
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

// Becher wechseln mit Listener
becherImage.addEventListener("click", () => {
    if (becherImage.src.includes("Becher.png")) {
        becherImage.src = "Becher2.png";
    } else {
        becherImage.src = "Becher.png";
    }
});


// untertitel ändern funktion
function changeTitle() {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    shakeTitle.textContent = `${randomWord}-Shake`;
}

// Shake Listener
shakeTitle.addEventListener("click", changeTitle);
