let currentSlide = 0;
const slides = document.querySelectorAll('.project');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop back to the last slide
    }

    // Move the carousel by adjusting the transform property
    const carousel = document.querySelector('.carousel');
    const offset = -100 * currentSlide;  // Move by full width of the div
    carousel.style.transform = `translateX(${offset}%)`;
}