/*
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
pares situados na faixa numérica de 50 a 70. 
*/

let soma = 0
let c = 0
let media = 0 
let inicial = 50

while (inicial < 70) {
  if (inicial % 2 === 0) {
    soma = soma + inicial
    c = c + 1
  }
  inicial = inicial + 1
}

document.write(soma/c)

