// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
// utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
// devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
// C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
// multiplicação e apresentar doze resultados de saída.

var a = parseInt(
  prompt('digite o primeiro numero para ser multiplicado e somado: ')
)
var b = parseInt(
  prompt('digite o segundo numero para ser multiplicado e somado: ')
)
var c = parseInt(
  prompt('digite o terceiro numero para ser multiplicado e somado: ')
)
var d = parseInt(prompt('digite o ultimo para ser multiplicado e somado: '))

//multiplicação
alert('a multiplicação de A * B ' + a * b)
alert('a multiplicação de A * C ' + a * c)
alert('a multiplicação de A * D ' + a * d)
alert('a multiplicação de B * C ' + b * c)
alert('a multiplicação de B * D ' + b * d)
alert('a multiplicação de C * D ' + c * d)

//soma
alert('a soma de A + B ' + (a + b))
alert('a soma de A + C ' + (a + c))
alert('a soma de A + D ' + (a + d))
alert('a soma de B + C ' + (b + c))
alert('a soma de B + D ' + (b + d))
alert('a soma de C + D ' + (c + d))
