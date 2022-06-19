function menu_close() {
  var menu_close = document.querySelector(".menu_int");
  menu_close.style.animation = "";

  setTimeout(() => {
    menu_close.style.display = "none";

    //menu.style.animation = "";
    menu_close.style.left = -400;
    menu_close.style.animation = "menu_close 1s ease";
  }, 100);
}
function menu() {
  var menu = document.querySelector(".menu_int");

  menu.style.animation = "";
  setTimeout(() => {
    menu.style.display = "flex";
    menu.style.left = 0;
    //menu_close.style.animation = "";
    menu.style.animation = "menu 1s ease";
  }, 100);
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
  const area_window = window.innerHeight * 0.21 * 4;

  animations.forEach((element) => {
    //console.log(element.offsetTop);
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });

  //teste
  /*
  document.querySelectorAll(".pilar").forEach((key) => {
    console.log(key.id);
    let position_atual_1 = document
      .querySelector("#" + key.id)
      .getBoundingClientRect().top;

    if (position_atual_1 < window.innerHeight - 120) {
      $("#" + key.id).css("animation", "animation_pilar 1s ease-out"); //animation entrada
      $("#" + key.id).css("opacity", "1");
    } else {
      $("#" + key.id).css("animation", "animation_pilar_out 1s ease-out"); //Animation saida
      $("#" + key.id).css("opacity", "0");
    }
  });*/
  /*
  document.querySelectorAll(".animation").forEach((key) => {
    let position_atual_2 = document
      .querySelector("#" + key.id)
      .getBoundingClientRect().top;
    if (position_atual_2 < window.innerHeight - 200) {
      $("#" + key.id).css("animation", "animation_right 300ms ease-out");
      $("#" + key.id).css("opacity", "1");
    } else {
      $("#" + key.id).css("animation", "animation_out_right 300ms ease-out");
      $("#" + key.id).css("opacity", "0");
    }
  });

  document.querySelectorAll(".animation_left").forEach((key) => {
    let position_atual_3 = document
      .querySelector("#" + key.id)
      .getBoundingClientRect().top;

    if (position_atual_3 < window.innerHeight - 200) {
      $("#" + key.id).css("animation", "animation_left 300ms ease-out");
      $("#" + key.id).css("opacity", "1");
    } else {
      $("#" + key.id).css("animation", "animation_out_left 300ms ease-out");
      $("#" + key.id).css("opacity", "0");
    }
  });*/
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}
/*
teste
function animation_scrolls() {
  var area_1 = document.querySelector(".marca").getBoundingClientRect().top;

  var area_3 = document
    .querySelector(".area_int_localizacao")
    .getBoundingClientRect().top;
  var area_4 = document
    .querySelector(".area_pilares_total")
    .getBoundingClientRect().top;
  var area_5 = document
    .querySelector(".area_title_geracao")
    .getBoundingClientRect().top;
  var area_6 = document
    .querySelector(".area_subtitle_geracao")
    .getBoundingClientRect().top;

  let anim_3 = $(".area_direita_alpha");

  if (area_3 < area_window) {
    anim_3.css("animation", "  animation_right 1s ease");
    anim_3.css("display", "flex");
  } else {
    anim_3.css("animation", "");
    anim_3.css("display", "none");
  }

  let anim_2 = $(".area_esquerda_alpha");

  if (area_2 < area_window) {
    anim_2.css("animation", "  animation_text_2 1s ease");
    anim_2.css("display", "flex");
  } else {
    anim_2.css("animation", "");
    anim_2.css("display", "none");
  }

  document.querySelectorAll(".pilar").forEach((key) => {
    let position_atual = document
      .querySelector(".pilar")
      .getBoundingClientRect().top;

    if (position_atual < area_window) {
      $("#" + key.id).css("animation", "animation_text 1.6s ease");
      setTimeout(() => {
        $("#" + key.id).css("opacity", "1");
      }, 1600);
    } else {
      $("#" + key.id).css("animation", "");
      setTimeout(() => {
        $("#" + key.id).css("opacity", "0");
      }, 10);
    }
  });

  let anim_4 = $(".pilar");
  if (area_4 < area_window) {
    anim_4.css("animation", "animation_text 1s ease");
    anim_4.css("display", "flex");
  } else {
    anim_4.css("animation", "");
    anim_4.css("display", "none");
  }

  let anim_5 = $(".title_geracao");
  if (area_5 < area_window) {
    anim_5.css("animation", "animation_left 1s ease");
    anim_5.css("display", "flex");
  } else {
    anim_5.css("animation", "");
    anim_5.css("display", "none");
  }

  let anim_6 = $(".subtitle_geracao");
  if (area_6 < area_window) {
    anim_6.css("animation", "animation_right 1s ease");
    anim_6.css("display", "flex");
  } else {
    anim_6.css("animation", "");
    anim_6.css("display", "none");
  }
}*/
//window.addEventListener("scroll", animation_scrolls);
