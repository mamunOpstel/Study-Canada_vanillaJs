// Script for SIDE-MENUBAR section starts here
{
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
}
// Script for SIDE-MENUBAR section ends here

// For Common component Hero Slides
{
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
}

// For Common component Hero Slides

// Script for QNA section starts here
{
  let tabBtns = document.querySelectorAll(".tab-btns");
  let tabs = document.querySelectorAll(".tabs");

  let currentIndex = 0;

  function changeTab(id) {
    tabBtns[currentIndex].classList.remove("tab-btn-active");
    tabs[currentIndex].classList.remove("tab-active");

    tabBtns[id].classList.add("tab-btn-active");
    tabs[id].classList.add("tab-active");

    currentIndex = id;
  }

  document.querySelectorAll(".question").forEach(function (question) {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".toggle-icon");

      // Toggle the open class for sliding animation
      if (answer.classList.contains("open")) {
        answer.classList.remove("open");
        icon.textContent = "+";
      } else {
        answer.classList.add("open");
        icon.textContent = "-";
      }
    });
  });
}

// Script for QNA section ends here

// toggling drop menu
document.getElementById("services-li").addEventListener("click", function () {
  var dropdown = document.getElementById("services-dropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});
