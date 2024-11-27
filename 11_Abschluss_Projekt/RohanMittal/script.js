function showImage(cuisine) {
    const image = document.getElementById('cuisine-image')
    const heading = document.getElementById('heading')
    const description = document.getElementById('description')
    // Map für Bilder der verschiedenen Küchen
    const images = {
      italian: {
        src: 'italian.jpg',
        heading: 'Entdecke die italienische Küche!',
        fontfam: 'Florence,cursive',
        description: 'Italienische Küche ist berühmt für Pizza, Pasta und Tiramisu.'
      },
      mexican: {
        src: 'mexican.jpg',
        heading: 'Erlebe die mexikanische Küche!',
        fontfam: 'Copperplate',
        description: 'Mexikanische Gerichte wie Tacos und Enchiladas sind weltweit beliebt.'
      },
      indian: {
        src: 'indian.jpg',
        heading: 'Genieße die indische Küche!',
        fontfam: 'Papyrus',
        description: 'Indische Küche bietet eine Vielfalt an Currys und Gewürzen.'
      },
      spanish: {
        src: 'spanish.avif',
        heading: 'Tauche ein in die spanische Küche!',
        fontfam: 'Times New Roman',
        description: 'Spanische Küche ist bekannt für Paella und Tapas.'
      }
    };
    // Setze das Bild und zeige es an
    image.src = images[cuisine].src;
    image.style.display = 'block';
    heading.textContent = images[cuisine].heading
    heading.style.fontFamily = images[cuisine].fontfam
    description.textContent = images[cuisine].description
    description.style.fontFamily = images[cuisine].fontfam
  }

function changeBgColor(cuisine) {
    const body = document.getElementById('body')

    const bgcolor = {
        italian: 'rgb(255, 221, 0)',
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


  