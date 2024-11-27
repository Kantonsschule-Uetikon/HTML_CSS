const recipes = [
    "Spaghetti Aglio e Olio",
    "Pizza",
    "Älplermagronen",
    "Baked Potatoes",
    "Chana Masala",
    "Fajita",
    "Kaiserschmarrn",
    "Sushi",
    "Quesadilla",
    "Ratatouille",
    "Riz Casimir",
    "Frittata",
    "Chili sin Carne",
    "Omelette",
    "Rösti",
    "Raclette",
    "Fondue",
    "Shakshouka",
    "Moussaka",
    "Palak Paneer",
    "Risotto",
];

document.getElementById("generatorBtn").addEventListener("click", () => {
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    document.getElementById("recipe").innerHTML = randomRecipe;
    document.getElementById("pressAgain").innerHTML = "new ";
})

document.getElementById("clickToViewRamsay").addEventListener("click", () => {
    document.getElementById("gordonRamsayImage").style.display = "block";
    document.getElementById("ramsayIsWatchingYou").innerHTML = "Gordon Ramsay is watching you.";
})
