/*
Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
total acumulado da área residencial. 
*/

let resp = prompt("Deseja calcular a area total da sua casa? ")
let altura = 0 
let comprimento = 0
let area = 0
let comodo = "" 

while (resp === "sim" || resp === "SIM") {
  comodo = prompt("informe o comodo: ")
  altura = parseFloat(prompt("informe a altura: "))
  comprimento = parseFloat(prompt("informe o comprimento: "))

  area = altura * comprimento

  alert("A area " +  comodo + " é igual a " + area )

  resp = prompt("Deseja calcular a area total da sua casa? ")
}
