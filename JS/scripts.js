// Seleção de Elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

// Funções

// Eventos
menuBtn.addEventListener("click", (e) => {
  menu.classList.add("menu-active");
})

closeMenuBtn.addEventListener("click", (e) => {
  menu.classList.remove("menu-active");
})