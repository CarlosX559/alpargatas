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

function animation_scroll() {
  var area_1 = document.querySelector(".marca").getBoundingClientRect().top;
  //var area_2 =
  //document.querySelector(".area_esquerda_alpha").getBoundingClientRect().top;
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

  var area_window = window.innerHeight;

  document.querySelectorAll(".anim").forEach((key) => {
    let position_atual = document
      .querySelector(".anim")
      .getBoundingClientRect().top;
    if (position_atual < area_window) {
      $("#" + key.id).css("animation", "animation_text 1s ease");
      $("#" + key.id).css("display", "flex");
    } else {
      $("#" + key.id).css("animation", "");
      $("#" + key.id).css("display", "none");
    }
  });
  /*if (area_1 < area_window) {
    anim.css("animation", "animation_text 1s ease");
    anim.css("display", "flex");
  } else {
    anim.css("animation", "");
    anim.css("display", "none");
  }*/

  let anim_3 = $(".area_direita_alpha");

  if (area_3 < area_window) {
    anim_3.css("animation", "  animation_right 1s ease");
    anim_3.css("display", "flex");
  } else {
    anim_3.css("animation", "");
    anim_3.css("display", "none");
  }

  let anim_2 = $(".area_esquerda_alpha");

  /*if (area_2 < area_window) {
    anim_2.css("animation", "  animation_text_2 1s ease");
    anim_2.css("display", "flex");
  } else {
    anim_2.css("animation", "");
    anim_2.css("display", "none");
  }*/

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
  document.querySelectorAll(".animation").forEach((key) => {
    let position_atual = document
      .querySelector("#" + key.id)
      .getBoundingClientRect().top;
    if (position_atual < area_window) {
      $("#" + key.id).css("animation", "animation_right 1s ease");
      $("#" + key.id).css("display", "flex");
    } else {
      $("#" + key.id).css("animation", "");
      $("#" + key.id).css("display", "none");
    }
  });

  document.querySelectorAll(".animation_left").forEach((key) => {
    let position_atual = document
      .querySelector("#" + key.id)
      .getBoundingClientRect().top;
    if (position_atual < area_window) {
      $("#" + key.id).css("animation", "animation_left 1s ease");
      $("#" + key.id).css("display", "flex");
    } else {
      $("#" + key.id).css("animation", "");
      $("#" + key.id).css("display", "none");
    }
  });
}
window.addEventListener("scroll", animation_scroll);
