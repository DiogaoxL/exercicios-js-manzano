// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500

let contadora = 2
let resul = 0

while (contadora<=500) {
  if (contadora % 2 === 0) {
    resul = resul + contadora
    document.write(resul + "<br/>")
  }
  contadora += 1
}

