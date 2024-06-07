document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slides-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-arrow-prev');
    const nextButton = document.querySelector('.slider-arrow-next');

    let currentIndex = 0;

    function updateSliderPosition() {
        const offset = -currentIndex * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = sliderItems.length - 1;
        }
        updateSliderPosition();
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < sliderItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
    });
});