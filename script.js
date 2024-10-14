const carouselSlide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let currentIndex = 0;
const size = images[0].clientWidth;

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex >= images.length - 1) return; // Detener en la última imagen
    carouselSlide.style.transform = `translateX(${-size * (currentIndex + 1)}px)`;
    currentIndex++;
});

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex <= 0) return; // Detener en la primera imagen
    carouselSlide.style.transform = `translateX(${-size * (currentIndex - 1)}px)`;
    currentIndex--;
});
