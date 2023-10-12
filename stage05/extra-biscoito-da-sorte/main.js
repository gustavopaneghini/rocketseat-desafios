const openCoockie = document.querySelector(".open ");
const closeCoockie = document.querySelector(".close");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

closeCoockie.addEventListener("click", trade);
openCoockie.addEventListener("click", trade);

function trade(e) {
  e.preventDefault();

  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
