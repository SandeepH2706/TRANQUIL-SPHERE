let index = 0;

function slideShow() {
    const slides = document.querySelector(".slides");
    index++;
    if (index > 3) { index = 0; }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideShow, 3000);
