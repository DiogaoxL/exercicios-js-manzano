/*
Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do
percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).
*/

var sm = parseFloat(prompt("Qual seu salario atual? "))
var pr = parseFloat(prompt("digite o porcentual de reajuste: "))

var ns = sm * pr / 100

alert("O novo salario é " + (sm+ns))