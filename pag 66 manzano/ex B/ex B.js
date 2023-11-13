// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

let resp = parseInt(prompt("Digite um numero para ser multiplicado: "))
let conta

for (let c = 1; c <= 10; c++) {
 conta = resp * c

 document.write(resp +" x " + c + " = " + conta + "<br>")
  
}


