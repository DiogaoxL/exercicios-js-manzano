/*
Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc. 
*/

let penultimo = 0
let termo = 0
let ultimo = 1

for (let c = 0; c < 16; c++) {
  termo = ultimo + penultimo
  penultimo = ultimo
  ultimo = termo
  document.write(termo + '<br>')
}
