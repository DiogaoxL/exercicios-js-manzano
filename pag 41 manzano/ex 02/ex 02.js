/*
Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se
de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.
*/ 

var n1 = parseFloat(prompt("digite um numero qualquer: "))

 if (n1 < 0) {
  var inverso = n1 * (-1)
  alert("o numero " + n1 + " positivo é " + inverso)
}
else{
 var inverso = n1 * (-1)
   alert("o numero " + n1 + " negativo é " + inverso)
 }