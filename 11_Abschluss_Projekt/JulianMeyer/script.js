// Elemente referenzieren
const gewonnenBox = document.querySelector(".box-gewonnen");
const otherBoxes = document.querySelectorAll(".box-1, .box-2, .Titel");

// Gewinnmeldung erstellen
function showWinMessage() {
    clearInterval(intervalId); // Bewegung stoppen

    // Gewinnmeldung erstellen und anzeigen
    const winMessage = document.createElement("div");
    winMessage.innerText = "Herzlichen Glückwunsch, du hast gewonnen!";
    winMessage.style.position = "fixed";
    winMessage.style.top = "50%";
    winMessage.style.left = "50%";
    winMessage.style.transform = "translate(-50%, -50%)";
    winMessage.style.padding = "20px";
    winMessage.style.backgroundColor = "lightgreen";
    winMessage.style.color = "darkgreen";
    winMessage.style.fontSize = "1.5rem";
    winMessage.style.textAlign = "center";
    winMessage.style.border = "2px solid darkgreen";
    winMessage.style.borderRadius = "10px";
    winMessage.style.zIndex = "1000";
    document.body.appendChild(winMessage);

      // Automatische Ausblendung nach 3 Sekunden
      setTimeout(() => {
        winMessage.remove();
        gewonnenBox.style.pointerEvents = "auto"; // Box wieder aktivieren
    }, 3000);
}




// Hilfsfunktion: Kollision überprüfen
function isColliding(boxRect, otherRects) {
    return otherRects.some(otherRect =>
        !(boxRect.right < otherRect.left || 
          boxRect.left > otherRect.right || 
          boxRect.bottom < otherRect.top || 
          boxRect.top > otherRect.bottom)
    );
}

// Box an eine zufällige Position bewegen
function moveBox() {
    const bodyRect = document.body.getBoundingClientRect();
    const otherRects = Array.from(otherBoxes).map(box => box.getBoundingClientRect());
    const boxWidth = gewonnenBox.offsetWidth;
    const boxHeight = gewonnenBox.offsetHeight;

    let newLeft, newTop, boxRect;

    do {
        // Zufällige Koordinaten berechnen
        newLeft = Math.random() * (bodyRect.width - boxWidth);
        newTop = Math.random() * (bodyRect.height - boxHeight);

        // Neues Rechteck für die "GEWONNEN"-Box
        boxRect = {
            left: newLeft,
            top: newTop,
            right: newLeft + boxWidth,
            bottom: newTop + boxHeight,
        };

    } while (isColliding(boxRect, otherRects)); // Wiederholen, falls eine Kollision erkannt wird

    // Neue Position setzen
    
    gewonnenBox.style.left = `${newLeft}px`;
    gewonnenBox.style.top = `${newTop}px`;
}

// Box alle 5 Sekunden bewegen
setInterval(moveBox, 5000);

// Event: Box bewegt sich, wenn die Maus zu nahe kommt
document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const boxRect = gewonnenBox.getBoundingClientRect();

    // Abstand berechnen (z. B. 100px als Schwelle)
    const threshold = 50; // Nähe-Schwelle
    const isNear = (
        mouseX > boxRect.left - threshold &&
        mouseX < boxRect.right + threshold &&
        mouseY > boxRect.top - threshold &&
        mouseY < boxRect.bottom + threshold
    );

    if (isNear) {
        moveBox(); // Box bewegen
    }
});


// Nachricht nach 3 Minuten anzeigen
function showMessageAfter3Minutes() {
    const message = document.createElement("div");
    message.innerText = "Gib auf du wirst es nie schaffen";
    message.style.position = "fixed";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    message.style.padding = "20px";
    message.style.backgroundColor = "lightblue";
    message.style.color = "darkblue";
    message.style.fontSize = "1.5rem";
    message.style.textAlign = "center";
    message.style.border = "2px solid darkblue";
    message.style.borderRadius = "10px";
    message.style.zIndex = "1000";
    document.body.appendChild(message);

    // Nachricht nach 5 Sekunden entfernen
    setTimeout(() => {
        message.remove();
    }, 5000);
}
    // Nachricht nach 3 Minuten anzeigen
setTimeout(showMessageAfter3Minutes, 180000);  // 180000ms = 3 Minuten