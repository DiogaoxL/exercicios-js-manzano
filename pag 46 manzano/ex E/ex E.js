/*
Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 
 */

let contadora = 0
let acumuladora = 0

while (contadora <= 15){
  if (contadora === 0) {
    acumuladora = 1
  } else {
    if (contadora === 1) {
      acumuladora = 3
    } else {
      acumuladora = acumuladora * 3
    }
  }

  contadora = contadora + 1
  document.write(acumuladora + "<br/>")
}
