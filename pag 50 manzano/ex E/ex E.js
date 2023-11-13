/*
Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
total do somatório da fatorial de cada valor lido.
*/


let acumuladora = 0
let soma = 0

do {
  let valorP = 0
  let fatorial = 1
  let valor = parseInt(prompt('Digite um numero inteiro: '))
  valorP = valor
  do {
    fatorial = fatorial * valor
    valor = valor - 1
  } while (valor >= 1)

  document.write('o fatorial de ' + valorP + ' = ' + fatorial + '<br>')
  document.write('<br>' + '-------------------------------------' + '<br>')

  soma = soma + fatorial
  acumuladora = acumuladora + 1
} while (acumuladora < 14)

document.write("a somatoria dos fatoriais é: " + soma)
