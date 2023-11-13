/*
Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
somatório e a média aritmética dos valores lidos.  
 */

let c = 0
let valorAtual
let soma = 0
let media = 0

while (c < 2) {
  valorAtual = parseInt(prompt('Digite 10 valores: '))
  soma = soma + valorAtual
  c = c + 1
}

media = soma / 10

alert('o resultado das somas: ' + soma)
alert('a média dos numeros digitados: ' + media)
