function menu() {
  let menuOpen = document.querySelector(".menu_int");
  menuOpen.style.display = "flex";
  menuOpen.style.left = "0";
  menuOpen.style.animation = "menu 1s ease";
}
function menu_close() {
  let menuClose = document.querySelector(".menu_int");

  menuClose.style.left = "-400";
  menuClose.style.animation = "menu_close 1s ease";

  setTimeout(() => {
    if ((menuClose.style.left = "-400")) {
      menuClose.style.display = "none";
    }
  }, 600);
}
function close_menu_a() {
  document.querySelectorAll("nav a").forEach((key) => {
    key.addEventListener("click", menu_close);
  });
}
window.addEventListener("load", close_menu_a);

const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
  const area_window = window.innerHeight * 0.21 * 3.8;

  animations.forEach((element) => {
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}
