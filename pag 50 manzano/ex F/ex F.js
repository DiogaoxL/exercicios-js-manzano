/*
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
média.
*/

let total = 0
let qnt_numeros = 0
let n;

do {
  n = parseInt(prompt('Digite um valor positivo para continuar? '))

  alert('o numero digitado foi: ' + n)

  if (n > 0) {
    total = total + n
    qnt_numeros = qnt_numeros + 1
  }

  alert('a soma deu ' + total)
  
} while (n > 0)

let media = total / qnt_numeros
alert ("a media das somas " + media)
