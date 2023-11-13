/*
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 
*/

let potencia = 1

for (let c = 0; c <= 15; c++) {
 if (c === 0 ) {
  potencia = 1
 } else {
  if (c > 0) {
    potencia = 3 * potencia
  }
 }
 document.write("3 elevado a " + c + " é " + potencia + "<br>")
  
}