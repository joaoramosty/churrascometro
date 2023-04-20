// Sitema para calcular a quantidade de comida e bebida necessária para um churrasco,
// com base nas informações seguintes:
// // Carne - 400gr por pessoa + de 6horas - 650gr
// // Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// // Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// // Crianças valem por 0,5.

let inputAdultos = document.getElementById("adultos");
let inputQtdNoDrink = document.getElementById("qtdNoDrink");
let inputTimerRelative = document.getElementById("duracao");
let result = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let qtdNoDrink = inputQtdNoDrink.value;
    let timerRelative = inputTimerRelative.value;

    let qtdTotalCarne = carnePP(timerRelative) * adultos + (carnePP(timerRelative)/2 * qtdNoDrink);
    let qtdTotalAlcool = alcoolPP(timerRelative) * adultos;
    let qtdTotalBebidas = bebidasPP(timerRelative) * adultos + (carnePP(timerRelative)/2 * qtdNoDrink);

}

function carnePP(timerRelative) {
    if (timerRelative >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function alcoolPP(timerRelative) {
    if (timerRelative >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(timerRelative) {
    if (timerRelative >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}