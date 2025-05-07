// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIconClosed = document.getElementById("menu-icon-closed");
  const menuIconOpen = document.getElementById("menu-icon-open");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    menuIconClosed.classList.toggle("hidden");
    menuIconClosed.classList.toggle("block");
    menuIconOpen.classList.toggle("hidden");
    menuIconOpen.classList.toggle("block");
  });
});
