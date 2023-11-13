//Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
//situados na faixa numérica de 1 a 10.

let contadora = 0
let valor
let fatorial

do {
  valor = 1
  fatorial = 1

  if (contadora % 2 === 1) {
    do {
      fatorial = fatorial * valor
      valor = valor + 1
    } while (valor < contadora)
    alert("o fatorial de " + contadora + " = " + fatorial)
  }
  contadora = contadora + 1
} while (contadora <= 10)
