// Apresentar os quadrados dos números inteiros de 15 a 200.

let contadora = 15
let n = 15

do {
  let quadrado = n * n
  document.write('o quadrado de ' + n + ' é igual ' + quadrado + "<br/>")
  n = n + 1
  contadora = contadora + 1
} while (contadora <= 200)
