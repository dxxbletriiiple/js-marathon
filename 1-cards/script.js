const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', function() {
        clearActiveClasses();
        slide.classList.add('active');
        const header = document.querySelector('.header');
        const city = document.querySelector('.active h3').textContent;

        header.innerHTML = `Your favorite city is ${city}`;
    });
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
}