let primeiroValor = Number(prompt("Digite o primeiro número:"));
let segundoValor = Number(prompt("Digite o segundo número:"));

function soma() {
  let resultado = primeiroValor + segundoValor;
  alert(`A soma dos dois números é: ${resultado}`);
  return resultado;
}
function subtração() {
  let resultado = primeiroValor - segundoValor;
  alert(`A subtração dos dois números é: ${resultado}`);
}
function multiplicacao() {
  let resultado = primeiroValor * segundoValor;
  alert(`A multiplicação dos dois números é: ${resultado}`);
}
function divisao() {
  let resultado = primeiroValor / segundoValor;
  alert(`A divisão dos dois números é: ${resultado}`);
}
function resto() {
  let resultado = primeiroValor % segundoValor;
  alert(`O resto dos dois números é: ${resultado}`);
}
function parOuImpar() {
  let somaDosValores = primeiroValor + primeiroValor;
  if (somaDosValores % 2 == 0) {
    alert(`A soma dos dois valores é par`);
  } else {
    alert("A soma dos dois valores é impar");
  }
}
function saoIguais() {
  if (primeiroValor === segundoValor) {
    alert("Os dois valores são iguais");
  } else {
    alert("Os dois valores são diferentes");
  }
}
soma();
subtração();
multiplicacao();
divisao();
resto();
parOuImpar();
saoIguais();
