/* Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de
segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o
referido cálculo. Lembre-se de que a variável A deve ser diferente de zero */

let valorA = parseInt(prompt('digite o valor A: '))
let valorB = parseInt(prompt('digite o valor B: '))
let valorC = parseInt(prompt('digite o valor C: '))
let delta , x1 , x2

if (valorA === 0) {
  alert('Equação do primeiro grau')
} else {
  delta = valorB * valorB - 4 * valorA * valorC

  alert('A raiz é de ' + delta + ' é ' + Math.sqrt(delta))

  if (delta > 0) {
    x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA)
    alert('valor x1 : ' + x1)

    x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA)
    alert('valor x2 : ' + x2)
  }
}
