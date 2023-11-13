// laborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
// real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
// com o usuário, para que seja apresentado o valor em moeda americana.

var real = parseFloat(
  prompt('digite o valor em real para ser convertido em dolar: ')
)
var dolarhoje = parseFloat(prompt('qual o valor do dolar hoje? '))

var conversao = real / dolarhoje

alert('apresentando o valor em moeda americana é: ' + conversao)
