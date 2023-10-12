// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

// funções
function handleTryClick(event) {
  event.preventDefault(); // nao faca o padrao

  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value == "" || inputNumber.value < 0) {
    alert("Digite um número maior que zero(0) para continuar com o jogo");
    return handleResetClick;
  } else if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;
  }
  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
