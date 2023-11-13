/* Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE
, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^).  */

let base = parseInt(prompt('Escreva uma base: '))
let expoente = parseInt(prompt('Escreva um expoente: '))
let c = 0
let resul = 0


while (c <= expoente) {
  if (resul === 0) {
    resul = 1
  } else {
    if (resul === 1) {
      resul = base
    } else {
      resul = resul * base
    }
  }
  c += 1
}

alert(base + " ^ " + expoente + " = " + resul)