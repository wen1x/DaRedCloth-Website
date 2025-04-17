function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  menu.style.left = menu.style.left === "0px" ? "-200px" : "0px";
}

function showAbout() {
  const textBox = document.getElementById("aboutText");
  textBox.style.display = textBox.style.display === "block" ? "none" : "block";
  toggleMenu(); // Fecha menu após clicar
}
// Ação do botão hamburger
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
