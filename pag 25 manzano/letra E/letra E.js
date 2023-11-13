// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula 
// PRESTACAO = VALOR + (VALOR * TAXA/100) * TEMPO).

var valor = parseFloat(prompt("Qual o valor da prestação? "))
var tempo = parseFloat(prompt("Quantos dias de atraso: "))
var taxa = parseFloat(prompt("Qual a taxa por cada dia de atraso: "))

var prestacao = valor + (valor * taxa/100) * tempo 

alert("o total mais a taxa de atraso foi de :" + prestacao + " reais")