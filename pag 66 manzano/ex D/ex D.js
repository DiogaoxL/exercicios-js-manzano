// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
// 1 até 500.

let soma = 0

for (let c = 1; c <= 500; c++) {
  if (c % 2 === 0) {
    document.write('Esse numero é par: ' + c + "<br>")
    soma = soma + c
  }
}
document.write("A soma dos numeros pares é: "+ soma)