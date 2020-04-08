qtdLikes = 0
function adicionaLike() {
    qtdLikes++
    if (qtdLikes==1) {
        botao.innerHTML = "1 Like"
    } else {
        botao.innerHTML = qtdLikes + " Likes"    
    }
    if (qtdLikes==20) {
        alert("Você gostou mesmo disso...")
    }
}