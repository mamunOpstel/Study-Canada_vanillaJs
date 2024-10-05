// Script for SIDE-MENUBAR section starts here
const sideMmenu = document.getElementById("side-menu");
const sideMenuToggler = document.getElementById("side-menu-toggler");
const sideMenuCloseBtn = document.getElementById("side-menu-close-btn");

function toggleSideMenu() {
  sideMmenu.classList.toggle("side-menu-hidden");
}
sideMenuToggler.addEventListener("click", toggleSideMenu);
sideMenuCloseBtn.addEventListener("click", toggleSideMenu);

const navUl = document.getElementById("nav-ul");
navUl.querySelector("a").addEventListener("click", toggleSideMenu);

// Script for SIDE-MENUBAR section ends here

// For Common component Hero Slides
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
// For Common component Hero Slides
