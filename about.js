const tombol = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav");

tombol.onclick = function () {
  menu.classList.toggle("tampil-menu"); //nambahin clas class-menu
};
