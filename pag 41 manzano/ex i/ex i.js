//Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem
//informando se o número é par ou ímpar.

let n = parseInt(prompt("Digite um valor para verificar se impar ou par: "))

if (n % 2 === 0) {
  alert("par")
} else {
  alert("impar")
}