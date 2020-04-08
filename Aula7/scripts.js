function executarSorteio(){
    aleatorio = Math.random()
    numeroCerto = aleatorio<0.3
    console.log(aleatorio)
    if (numeroCerto) {
        paragrafoResultado.innerHTML = 'Você ganhou o sorteio!!! <br> :)'
    } else {
        paragrafoResultado.innerHTML = ':( <br> Tente outra vez'
    }
    
}