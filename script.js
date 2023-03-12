// SHOW MENU BAR
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("navbar-toggle");

// REMOVE MENU IN MOBILE
// const navLink = document.querySelectorAll(".nav-link");
// function linkAction() {
//   const navMenu = document.getElementById("nav-menu");
//   navMenu.classList.remove("show-menu");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));

// const sections = document.querySelectorAll("section[id]");
// function scrollActive() {}

// ADD DARK BACKGROUND ON NAVBAR
const header = document.querySelector(".navbar");
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 800) {
    header.classList.add("navbar-dark", "bg-dark");
  } else {
    header.classList.remove("navbar-dark", "bg-dark");
  }
};
const phone = document.querySelector(".show-modal");
const btnphone = document.querySelector(".phone-number");
const toggle = function () {
  btnphone.classList.toggle("hidden");
};
phone.addEventListener("click", toggle);

// const navLinks = document.querySelectorAll("nav-item");
// const menuToggle = document.getElementById("navbarSupportedContent");
// navLinks.forEach((e) => {
//   e.addEventListener("click", () => {
//     new bootstrap.Collapse(menuToggle).toggle();
//   });
// });
