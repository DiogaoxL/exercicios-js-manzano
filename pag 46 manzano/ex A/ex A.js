/*  Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.  */

let numero = parseInt(
  prompt('Olá, digite um número para realizar sua tabuada: ')
)
let contadora = 1
let resultado

document.write('Tabuada do ' + numero + '<br/>')

while (contadora <= 10) {
  resultado = numero * contadora
  document.write(numero + ' X ' + contadora + ' = ' + resultado + '<br/>')
  contadora += 1
}
