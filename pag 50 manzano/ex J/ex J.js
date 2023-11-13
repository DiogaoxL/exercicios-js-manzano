/*
Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo. 
*/

let dividendo = parseInt(prompt('Digite o dividendo: '))
let divisor = parseInt(prompt('Digite o divisor: '))
let quociente = 0

do {
  if (dividendo >= divisor) {
    dividendo = dividendo - divisor
    quociente = quociente + 1
  }
} while (dividendo >= divisor)

alert('O quociente da divisão é: ' + quociente)
