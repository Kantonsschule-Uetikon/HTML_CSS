function showImage(cuisine) {
    const image = document.getElementById('cuisine-image');
  
    // Map für Bilder der verschiedenen Küchen
    const images = {
      italian: 'italian.jpg',
      mexican: 'mexican.jpg',
      indian: 'indian.jpg',
      spanish: 'spanish.avif'
    };
    // Setze das Bild und zeige es an
    image.src = images[cuisine];
    image.style.display = 'block';
  }

function changeBgColor(cuisine) {
    const body = document.getElementById('body');

    const bgcolor = {
        italian: 'rgb(255, 230, 0)',
        mexican: 'rgb(255, 130, 88',
        indian: 'rgb(255, 145, 0)',
        spanish: 'rgb(255, 38, 38)'
    }
    
    body.style.backgroundColor = bgcolor[cuisine]
}

function mouseOut(cuisine) {
    const body = document.getElementById('body')
    body.style.backgroundColor = "white"
}


  