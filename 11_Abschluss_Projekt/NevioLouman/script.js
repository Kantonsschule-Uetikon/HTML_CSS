let selected = []
let pairs = ["fire,water","fire,stone","air,fire","air,stone","air,water","stone,water"]
let symbolnames = ["Wasserdampf","Vulkan","Rauch","Sand","Welle","Fluss"]
let symbols = ["💨","🌋","🚭","🏖️","🌊","🚣‍♀️"]

activenumber = getRandomInt(0,5)
document.getElementById("task").innerHTML = symbolnames[activenumber];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
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
{   
    selected.sort();
    if (selected.length == 2) {
        for (let i = 0; i < symbols.length; i++){
            if (selected.join() === pairs[i])  {
                document.getElementById("result").textContent = symbols[i];
            }
        }
    }        
}
