function menu() {
  $(".menu_int")
    .css("display", "flex")
    .css("left", "0")
    .css("animation", "menu 1s ease");
}
function menu_close() {
  $(".menu_int").css("left", "-400").css("animation", "menu_close 1s ease");

  setTimeout(() => {
    if ($(".menu_int").css("left", "-400")) {
      $(".menu_int").css("display", "none");
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
    //console.log(element.offsetTop);
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
