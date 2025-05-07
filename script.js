// This script toggles the mobile menu visibility and updates the button icon accordingly
const menuButton = document.querySelector(
  'button[aria-controls="mobile-menu"]'
);
const mobileMenu = document.getElementById("mobile-menu");
const [openIcon, closeIcon] = menuButton.querySelectorAll("svg");

let isOpen = false;

menuButton.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-screen");
  } else {
    mobileMenu.classList.remove("max-h-screen");
    mobileMenu.classList.add("max-h-0");
  }

  openIcon.classList.toggle("hidden", isOpen);
  closeIcon.classList.toggle("hidden", !isOpen);
  menuButton.setAttribute("aria-expanded", isOpen);
});
