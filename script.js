function menu_close() {
	var menu_close = document.querySelector(".menu_int")
	menu_close.style.animation = ""

	setTimeout(() => {
		menu_close.style.display = "none"

		//menu.style.animation = "";
		menu_close.style.left = -400
		menu_close.style.animation = "menu_close 1s ease"
	}, 100)
}
function menu() {
	var menu = document.querySelector(".menu_int")

	menu.style.animation = ""
	setTimeout(() => {
		menu.style.display = "flex"
		menu.style.left = 0
		//menu_close.style.animation = "";
		menu.style.animation = "menu 1s ease"
	}, 100)
}
function close_menu_a() {
	document.querySelectorAll("nav a").forEach((key) => {
		key.addEventListener("click", menu_close)
	})
}
window.addEventListener("load", close_menu_a)
