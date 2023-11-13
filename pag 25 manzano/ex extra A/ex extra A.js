/* Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e
D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro
valor, e o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma
(variável S) do segundo com o quarto valor. */

var a = parseInt(prompt('1 - Digite 4 valores: '))
var b = parseInt(prompt('2 - Digite 4 valores: '))
var c = parseInt(prompt('3 - Digite 4 valores: '))
var d = parseInt(prompt('4 - Digite 4 valores: '))

var produto = a * c
alert('o produto do primeiro com o terceiro: ' + produto)

var soma = b + d
alert('a soma do segundo com o quarto: ' + soma)
