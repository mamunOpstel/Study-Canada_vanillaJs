// Script for SIDE-MENUBAR section starts here
const sideMmenu = document.getElementById("side-menu");
const sideMenuToggler = document.getElementById("side-menu-toggler");
const sideMenuCloseBtn = document.getElementById("side-menu-close-btn");

function toggleSideMenu() {
  sideMmenu.classList.toggle("side-menu-hidden");
}
sideMenuToggler.addEventListener("click", toggleSideMenu);
sideMenuCloseBtn.addEventListener("click", toggleSideMenu);


const navUl = document.getElementById("nav-ul")
navUl.querySelector("a").addEventListener("click", toggleSideMenu);

// Script for SIDE-MENUBAR section ends here
