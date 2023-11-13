/*
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário. 
*/

let numero = parseInt(prompt("Digite um valor positivo para continuar: "))
let maior = 0
let menor = numero

while (numero > 0) {
  if (numero < menor) {
    menor = numero
  } else if (numero > maior){
    maior = numero
  }
  numero = parseInt(prompt("Digite um valor positivo para continuar: "))
}

alert("O maoir numero digitado foi: " + maior)
alert("O menor numero digitado foi: " + menor)
