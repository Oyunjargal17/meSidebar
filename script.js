const btn = document.querySelector(".btn");
const menus = document.querySelector(".menus");
const btnX = document.querySelector(".btnX");

btn.addEventListener("click", () => {
  menus.classList.toggle("active");
  btn.classList.toggle("rotate");
  btnX.classList.toggle("rotateX");
});
btnX.addEventListener("click", () => {
  menus.classList.toggle("active");
});
