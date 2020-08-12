/*
Nesse caso soma de 1 em 1

contador ++ = (contador = contador + 1)

Nesse caso diminui de 1 em 1

contador -- = (contador = contador - 1)
*/


function acaoBotao() {
    var numero, fatorial
    numero = prompt("Digite um número para calcular o fatorial.")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++){
        fatorial = fatorial * contador
    }

    

    document.getElementById("paragrafo").innerText = "O fatorial de " + numero +  "é: " + fatorial

}
