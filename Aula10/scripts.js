function gerar() {
    
    cont = 0
    nome = document.getElementById('inputNome').value
    listaLink = ["https://codepen.io/uspinhal/pen/MWagyZd","https://codepen.io/uspinhal/pen/yLYLqBG"]
    listaHTML=""

    while (cont<1000000) {
        certificado = emitirCertificado(inputNome.value)
        cont=cont+1
    }

    for (link of listaLink){
        listaHTML = `<li>${link}</li>` + listaHTML
    }

    document.body.innerHTML = `${certificado}
                                <ol>
                                    ${listaHTML}
                                </ol>`
}