// laborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o
// quadrado da soma dos três valores lidos.

var a = parseInt(prompt('digite um numero: '))
var b = parseInt(prompt('digite outro numero: '))
var c = parseInt(prompt('digite ultimo numero: '))

var soma = a + b + c
var resultado = soma*soma

alert("A soma de " + a + " + "+ b + " + "+ c + " resulta em: "+ soma )
alert ("O quadrado do resultado é " + resultado)
