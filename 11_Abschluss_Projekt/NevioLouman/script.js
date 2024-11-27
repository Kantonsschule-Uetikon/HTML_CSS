let selected = []
firewater = [fire, water]
function mouseOver(id)
{
    document.getElementById(id).style.opacity = 0.8;
    
}
function mouseAway(id)
{
    document.getElementById(id).style.opacity = 0.3;
}
function clicked(id)
{
    if (selected.length < 2) {
        document.getElementById(id).style.backgroundColor = "rgb(130, 130, 130)";
        selected.push(id)
    }
}

function buttonClicked()
{   selected.sort();
    if (selected.length == 2) {
        if ((selected.toString()) == (fire,water)){
            document.getElementById("result").textContent = "fick dich";
        }
    }
}