const slides = document.getElementsByClassName("slide");

let currentIndex = 0;
let currentSlide = slides[currentIndex];

currentSlide.classList.add("current-slide");

function nextSlide() {
  currentSlide.classList.remove("current-slide");
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
    currentSlide = slides[currentIndex];
    currentSlide.classList.add("current-slide");
    return;
  }
  currentIndex += 1;
  currentSlide = slides[currentIndex];
  currentSlide.classList.add("current-slide");
}

function PreviousSlide() {
  currentSlide.classList.remove("current-slide");
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
    currentSlide = slides[currentIndex];
    currentSlide.classList.add("current-slide");
    return;
  }
  currentIndex -= 1;
  currentSlide = slides[currentIndex];
  currentSlide.classList.add("current-slide");
}
