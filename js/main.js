function openMenu() {
  const menu = document.getElementById("menu");
  menu.classList.add("header__menu-isActive");
}

function closeMenu() {
  const menu = document.getElementById("menu");
  menu.classList.remove("header__menu-isActive");
}

const elementosAbrirMenu = document.getElementsByClassName("open-menu");
if (elementosAbrirMenu) {
  for (let i = 0; i < elementosAbrirMenu.length; i++) {
    elementosAbrirMenu[i].addEventListener("click", openMenu);
  }
}

const elementosCerrarMenu = document.getElementsByClassName("close-menu");
if (elementosCerrarMenu) {
  for (let j = 0; j < elementosCerrarMenu.length; j++) {
    elementosCerrarMenu[j].addEventListener("click", closeMenu);
  }
}
