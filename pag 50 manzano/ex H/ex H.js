/*
Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
total acumulado da área residencial. 
*/

let comodo = "" ;
let comprimento 
let largura
let area = 0
let resp = prompt("Deseja calcular a area da sua casa?")

do {
  
  if (resp != "nao") {
    comodo = prompt("qual o nome do comodo? ")
    largura = parseInt(prompt("Digite a largura do comodo? "))
    comprimento = parseInt(prompt("Digite a comprimento do comodo? "))

    area = largura * comprimento
    alert("a area " + comodo + " é " + area)
  }
  resp = prompt("Deseja calcular a area da sua casa?")

} while (resp === "sim");