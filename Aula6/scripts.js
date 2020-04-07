nome = prompt("Nome Completo:")
tagh1.innerHTML = "Nome: " + nome
nascimento = "03/03/2000"
temCondicao = confirm("Necesita de acompanhamento médico?")

if (temCondicao) {estadoSaude = "Sim"} 
if (!temCondicao) {estadoSaude = "Não"}

lista.innerHTML = ` <li>Data de Nascimento: ${nascimento}</li>
                    <li>Idade=20 anos</li>
                    <li>Tem condição pré-existente: ${estadoSaude}</li>
                    <li>Precisa de acompanhamento médico: </li>`
