// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

let contadora = 1
let soma = 0  

do {
  if (contadora % 2 === 0) {
    document.write('Esse numero é par: ' + contadora + "<br/>")
    soma = soma + contadora
  }
  contadora = contadora + 1
} while (contadora <= 500)

document.write('A soma dos numeros pares é: ' + soma )
