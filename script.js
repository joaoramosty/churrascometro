// Sitema para calcular a quantidade de comida e bebida necessária para um churrasco,
// com base nas informações seguintes:
// // Carne - 400gr por pessoa + de 6horas - 650gr
// // Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// // Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// // Crianças valem por 0,5.

const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado");

function carnePP(duracao){
    if(duracao < 6){
        return 300;
    } else {
        return 450;
    }
}

function cervejaPP(duracao){
    if(duracao < 6){
        return 800;
    } else {
        return 1000;
    }
}

function bebidasPP(duracao){
    if(duracao < 6){
        return 700;
    } else {
        return 1100;
    }
}

function calcular() {
    console.log("calculando...");
    
    const adultos = inputAdultos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;
    
    const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    const qdtTotalCerveja = cervejaPP(duracao) * adultos;
    const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    
    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
  resultado.innerHTML += `
    <div class="result-block">
      <p>${qdtTotalCarne/1000} Kg de Carne para um excelente churrasco</p>
    </div>
  `
  resultado.innerHTML += `
    <div class="result-block">
      <p>${Math.ceil(qdtTotalCerveja/355)} latas de 350 ml de Cerveja para fazer a alegria da galera</p>
    </div>
  `
  resultado.innerHTML += `
    <div class="result-block">
      <p>${Math.ceil(qdtTotalBebidas/2000)} garrafas de 1L de Refrigerante e/ou suco para refrescar o calor da brasa </p>
    </div>
    </br>
    </br>
    </br>
    </br>
    </br>
  `
}


