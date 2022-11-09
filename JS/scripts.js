// Seleção de Elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");


// Funções

// Eventos
[menuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    menu.classList.toggle("menu-active");
  })
})