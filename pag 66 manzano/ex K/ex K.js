/*
Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.
*/

let n = 0
let fat = 0

document.write('o fatorial dos valores ímpares na faixa numérica de 1 a 10 é: ')

for (let cont = 1; cont < 10; cont++) {
  if (cont % 2 === 1) {
    fat = 1
    n = cont

    do {
      fat = fat * n
      n = n - 1
    } while (n > 1)

    document.write("<br>" + "o fatorial de " + cont + " é "+ fat)
  }
}
