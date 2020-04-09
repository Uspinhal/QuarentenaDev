function formataMoeda(valor, moeda){
   return moeda + " " + valor.toFixed(2).replace(".",",")
}

function calcular() {
    distancia = inputDistance.value
    tempo = inputTime.value
    valorFixo = 2
    valorCorrida = valorFixo + 1.4*distancia + 0.26*tempo
    botaoCalcular.innerHTML = `total: ${formataMoeda(valorCorrida, "R$")}`
}