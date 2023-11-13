/*
Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
*/

var n1 = parseInt(prompt("digite um numero a ser subtraído: "))
var n2 = parseInt(prompt("digite outro numero a ser subtraído: "))

if (n1 > n2) {
  var resul = n1 - n2
  alert("o resultado da subtração " + n1 + " - " + n2 + " = " + resul )
} else{
  var resul = n2 - n1
  alert("o resultado da subtração " + n2 + " - " + n1 + " = " + resul )
}