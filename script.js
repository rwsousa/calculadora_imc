const peso = document.getElementById("peso")
const altura = document.getElementById("altura")    
const botao = document.getElementById("botao")      //preciso monitorar o botao quando for clicado, realizar o cálculo/funcao

function calcularIMC() {
    console.log (peso.value, altura.value)

}

botao.addEventListener("click", calcularIMC)

