// start media
let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".nav");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    nav.classList.remove("open");
};