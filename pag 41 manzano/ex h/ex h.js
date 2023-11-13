//Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores

let n1, n2, n3, n4, n5
let maior, menor

n1 = parseInt(prompt('Digite o valor 1: '))
n2 = parseInt(prompt('Digite o valor 2: '))
n3 = parseInt(prompt('Digite o valor 3: '))
n4 = parseInt(prompt('Digite o valor 4: '))
n5 = parseInt(prompt('Digite o valor 5: '))

if (n1 > n2) {
  maior = n1
  menor = n2
} else {
  maior = n2
  menor = n1
}

if (maior < n3) {
  maior = n3
} else {
  if (menor > n3) {
    menor = n3
  }
}

if (maior < n4) {
  maior = n4
} else {
  if (menor > n4) {
    menor = n4
  }
}

if (maior < n5) {
  maior = n5
} else {
  if (menor > n5) {
    menor = n5
  }
}

//mostrando valores

document.write('o maior valor é ' + maior + '<br/>')
document.write('o menor valor é ' + menor)
