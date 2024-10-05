// Script for QNA section starts here
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
// Script for QNA section ends here
