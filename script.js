// // SHOW MENU BAR

function togglemenu() {
  let NavBar = document.querySelector(".navbar-collapse");

  NavBar.classList.toggle("open");
}
// ADD DARK BACKGROUND ON NAVBAR
const header = document.querySelector(".navbar");
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 600) {
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
