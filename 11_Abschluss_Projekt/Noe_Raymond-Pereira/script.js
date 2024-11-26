function HintergrundText_Sommer() {
    document.getElementById("textbody").style.backgroundImage = "URL('Waves.jpg')"
    document.getElementById("textbody").style.backgroundSize = "contain"
    document.getElementById("Sommer_Text").innerHTML = "Der Sommer ist die wärmste der vier Jahreszeiten in den subtropischen, gemäßigten, kalten und arktischen Klimazonen. Je nachdem, ob er gerade auf der Nord- oder Südhalbkugel herrscht, spricht man vom Nord- oder Südsommer. Der Nordsommer findet gleichzeitig mit dem Südwinter statt. Er folgt auf den Frühling und liegt zeitlich vor dem Herbst."
    document.getElementById("TitelHerbst").innerHTML = "Nicht Sommer"
    document.getElementById("TitelWinter").innerHTML = "Nicht Sommer"
    document.getElementById("TitelFrühling").innerHTML = "Nicht Sommer"
}

function HintergrundText_Herbst() {
    document.getElementById("textbody").style.backgroundImage = "URL('Leaves.png')"
    document.getElementById("textbody").style.backgroundSize = "contain"
    document.getElementById("Herbst_Text").innerHTML = "Der Herbst ist eine der vier meteorologischen und astronomischen Jahreszeiten. Herbst ist die Jahreszeit zwischen dem Sommer und Winter. In den gemäßigten Zonen ist er die Zeit der Ernte und des Blätterfalls. Im Herbst der Nordhalbkugel bewegt sich die Sonne scheinbar vom Himmelsäquator zum südlichen Wendekreis. Astronomisch beginnt der Herbst hier mit der Tag-und-Nacht-Gleiche am 22. oder 23. September, meteoro- und biologisch wird er meist Anfang September angesetzt. Für die Südhalbkugel ist der astronomische Beginn am 20./21. März. Der Herbst endet astronomisch am 21. oder 22. Dezember auf der Nordhalbkugel und am 21. Juni auf der Südhalbkugel (Wintersonnenwende)."
    document.getElementById("TitelSommer").innerHTML = "Nicht Herbst"
    document.getElementById("TitelWinter").innerHTML = "Nicht Herbst"
    document.getElementById("TitelFrühling").innerHTML = "Nicht Herbst"
}

function HintergrundText_Winter() {
    document.getElementById("textbody").style.backgroundImage = "URL('Snowflake.jpg')"
    document.getElementById("textbody").style.backgroundSize = "contain"
    document.getElementById("Winter_Text").innerHTML = "Der Winter (von althochdeutsch wintar, zurückführbar wie gotisch wintrus auf eine germanische Wurzel; etymologisch unklar (s. u.), vermutet wurden früher unter anderem eine Herkunft von indogermanisch ṷi- „glänzen“, ṷed- „befeuchten, fließen“ und Verwandtschaft mit „Wasser“ als „das Fließende“ sowie ein Zusammenhang mit einer Wurzel mit der Bedeutung „weiß“) ist die kälteste der vier Jahreszeiten in den subtropischen, gemäßigten und polaren Klimazonen der Erde. Je nachdem, ob er gerade auf der Nord- oder der Südhalbkugel herrscht, spricht man vom Nordwinter oder Südwinter. Der Nordwinter findet gleichzeitig mit dem Südsommer statt."
    document.getElementById("TitelSommer").innerHTML = "Nicht Winter"
    document.getElementById("TitelHerbst").innerHTML = "Nicht Winter"
    document.getElementById("TitelFrühling").innerHTML = "Nicht Winter"
}

function HintergrundText_Frühling() {
    document.getElementById("textbody").style.backgroundImage = "URL('Flower.jpg')"
    document.getElementById("textbody").style.backgroundSize = "contain"
    document.getElementById("Frühling_Text").innerHTML = "Der Frühling oder Lenz, auch das Frühjahr genannt, ist eine der vier Jahreszeiten und folgt auf den Winter. Die astronomisch bestimmte Jahreszeit Frühling beginnt mit einer Tag-und-Nacht-Gleiche und endet mit einer Sonnenwende. Im Laufe eines Jahres ändern sich Tageslänge (als Dauer des lichten Tages) und Tagbogen der Sonne (mit höchstem mittäglichem Sonnenstand) abhängig von der geographischen Breite eines Ortes verschieden stark. Dies führt in mittleren Breiten zu deutlich ausgeprägten Jahreszeiten, die sich auf beiden Hemisphären der Erde in jährlichem Turnus wiederholen. Während auf der einen Hemisphäre Herbst ist, ist auf der anderen Frühling; vom Südfrühling der Südhalbkugel wird daher der Nordfrühling der Nordhalbkugel unterschieden. In den gemäßigten Zonen ist es die Zeit der erwachenden und sprießenden Natur."
    document.getElementById("TitelSommer").innerHTML = "Nicht Frühling"
    document.getElementById("TitelHerbst").innerHTML = "Nicht Frühling"
    document.getElementById("TitelWinter").innerHTML = "Nicht Frühling"
}

function resetbackground() {
    document.getElementById("textbody").style.background = "wheat"
    document.getElementById("textbody").style.color = "black"

    document.getElementById("Sommer_Text").innerHTML = "..."
    document.getElementById("Herbst_Text").innerHTML = "..."
    document.getElementById("Winter_Text").innerHTML = "..."
    document.getElementById("Frühling_Text").innerHTML = "..."

    document.getElementById("TitelSommer").innerHTML = "Sommer"
    document.getElementById("TitelHerbst").innerHTML = "Herbst"
    document.getElementById("TitelWinter").innerHTML = "Winter"
    document.getElementById("TitelFrühling").innerHTML = "Frühling"
}