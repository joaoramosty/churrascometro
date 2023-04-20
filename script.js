// Sitema para calcular a quantidade de comida e bebida necessária para um churrasco,
// com base nas informações seguintes:
// // Carne - 400gr por pessoa + de 6horas - 650gr
// // Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// // Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// // Crianças valem por 0,5.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    
    let qdtTotalCarne = 400 * adultos + (400/2 * criancas);
    console.log(qdtTotalCarne);
}