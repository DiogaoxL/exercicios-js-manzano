/*
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
programa deve apresentar os valores das duas temperaturas.
*/

let temperaturaF = 0
let temperaturaC = 0

while (temperaturaC <= 100) {
  temperaturaF = (9 * temperaturaC + 160)/5
  document.write(temperaturaF + "<br/>")
  temperaturaC = temperaturaC + 10
}
