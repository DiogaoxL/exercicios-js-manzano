/*
Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE
, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^).
*/


let base = parseInt(prompt("Digite a base "))
let expoente =parseInt(prompt("Digite o expoente "))
let resultado = 0

for (let i = 0; i <= expoente; i++) {
  if (i === 0 ) {
    resultado = 1
  }else{
    resultado = resultado * base 
  }
  alert(`o resultado do numero ${base} elevado a ${expoente} = ${resultado} ` )
}



