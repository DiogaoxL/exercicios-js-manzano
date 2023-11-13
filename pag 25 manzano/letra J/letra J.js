// Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em 
// dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares 
// disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

var real = parseFloat(prompt("digite o valor em dolar para ser convertido em real: "))
var dolarhoje = parseFloat(prompt("qual o valor do dolar hoje? "))

var conversao =  real * dolarhoje 

alert("apresentando o valor em moeda brasileira é: " + conversao)
