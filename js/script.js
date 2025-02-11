let images = document.querySelectorAll('.main__img');
let infoElement = document.getElementById('info');

images.forEach(image => {
    image.addEventListener('click', () => {
        // Muestra el src de la imagen clicada en el span con id "info"
        infoElement.textContent = image.src.slice(image.src.lastIndexOf("/") + 1);
        const random = Math.floor(Math.random() * 8);  // Números entre 0 y 7

        image.src = "imagenes/" + imagenes[random];

    });
});
