var valorMensal = document.querySelector("#ganho-mes");
var horas = document.querySelector("#horas-dia");
var diasMes = document.querySelector("#dias-mes");
var resposta = document.querySelector("#resposta");

function calcularValorHora() {
    var aux = valorMensal.valueAsNumber/diasMes.valueAsNumber;
    var valor = aux/horas.valueAsNumber;

    resposta.innerHTML = valor.toFixed(2);
}