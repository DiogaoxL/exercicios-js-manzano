//Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.

let a, b, c, d

a = parseInt(prompt('Digite o valor 1: '))
b = parseInt(prompt('Digite o valor 2: '))
c = parseInt(prompt('Digite o valor 3: '))
d = parseInt(prompt('Digite o valor 4: '))

//divisiveis por 2

if (a % 2 === 0) {
  alert(a + ' divisivel por 2')
}

if (b % 2 === 0) {
  alert(b + ' divisivel por 2')
}

if (c % 2 === 0) {
  alert(c + ' divisivel por 2')
}

if (d % 2 === 0) {
  alert(d + ' divisivel por 2')
}


//divisiveis por 3

if (a % 3 === 0) {
  alert(a + ' divisivel por 3')
}

if (b % 3 === 0) {
  alert(b + ' divisivel por 3')
}

if (c % 3 === 0) {
  alert(c + ' divisivel por 3')
}

if (d % 3 === 0) {
  alert(d + ' divisivel por 3')
}