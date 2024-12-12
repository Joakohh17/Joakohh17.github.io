// Array de imágenes para la galería
const path = 'resources/photos/';
const numberImages= 3;
let currentIndex = 1; // Índice de la imagen actual

// Referencias a los elementos
const currentImage = document.getElementById('currentImage');
const prevButton = document.getElementById('buttonPrevious');
const nextButton = document.getElementById('buttonNext');
const containergallery= document.getElementById('containerGallery');

// Función para mostrar la imagen según el índice
function showImage(index) {
    currentImage.classList.add("fade-out");

    setTimeout(() => {
    if (index < 1) {
        index = numberImages; // Si estamos en la primera, va a la última imagen
    } else if (index > numberImages) {
        index = 1; // Si estamos en la última, va a la primera imagen
    }
    currentImage.src = path + 'photo' + index + '.jpg';
    currentIndex = index;
    currentImage.classList.remove("fade-out");
    currentImage.classList.add("fade-in");

    setTimeout(() => currentImage.classList.remove("fade-in"), 500);
    }, 500);
}

// Manejo del botón de "Anterior"
prevButton.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

// Manejo del botón de "Siguiente"
nextButton.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

let startX;
let endX;

containerPhoto.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Detectamos la posición inicial
});

containerPhoto.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX; // Detectamos la posición final
});

containerPhoto.addEventListener('touchend', () => {
    if (startX - endX > 50) { // Si el movimiento fue hacia la izquierda
        showImage(currentIndex - 1);
    } else if (endX - startX > 50) { // Si el movimiento fue hacia la derecha
        showImage(currentIndex + 1);
    }
});

// Mostrar la imagen inicial
showImage(currentIndex);
