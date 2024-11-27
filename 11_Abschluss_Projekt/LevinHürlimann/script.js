function generateColor() {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}

function changeColor(){
    const newColor = generateColor();


    document.body.style.backgroundColor = newColor;

    document.getElementById('color_code').textContent = newColor;

    document.getElementById('ueberschrift_1').textContent = "Hier deine neue Farbe!";

    document.getElementById('message').textContent = "Erneut klicken für eine neue Farbe :)"
}   

document.getElementById('color_button').onclick = changeColor;