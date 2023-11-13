/*
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário. 
*/
let maior = 0
let menor = 0
let n

do {
  n = parseInt(prompt('Digite um numero: '))

  if (n > 0) {
    if (n > maior) {
      maior = n
    } else if (menor === 0 || n < menor) {
      menor = n
    }
  }
} while (n > -1)

alert('o maior numero: ' + maior)
alert('o menor numero: ' + menor)
