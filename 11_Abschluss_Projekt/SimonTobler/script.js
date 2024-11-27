
function titlestyling () {
    document.getElementById("Title").style.fontStyle = "italic"; };
      
function moreInfos () {
    document.getElementById("more_infos").innerHTML = "K-OS basiert auf Ubuntu 24.24 LTS und setzt auf den Cinnamon Desktop. So bietet es moderne Software und ein modernes, vertrautes Interface. Dank der Ubuntu Quellen ist fast alle Software, die für Linux entwickelt wurde verfügbar. Durch Flatpak wird die App Auswahl nochmals drastisch erhöht."
};


function images () {
    const img = document.createElement('img');
    img.src = 'kos_1.png';
    document.body.appendChild(img);
    img.width = '750';
      }
function secret() {
  // Hole alle Elemente mit der Klasse "ALL"
  const elements = document.getElementsByClassName("ALL");

  // Iteriere über alle Elemente
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontStyle = "oblique";
  }
}

document.getElementById("Title").onmouseover = titlestyling;

document.getElementById("more_infos").onclick  = moreInfos;

document.getElementById("images").onclick = images;

document.getElementById("secret").onmouseover = secret;