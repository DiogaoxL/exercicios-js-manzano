// Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de 
// forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
// variável A. Apresentar os valores trocados

var valorA = prompt("digite um valor: ")
var valorB = prompt("digite um valor: ")
var valorC

valorC = valorA
valorA = valorB
valorB = valorC

alert("valores invertidos ficam: " + valorA + " " + valorB) 