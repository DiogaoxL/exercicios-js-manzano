/* Elaborar um programa que efetue a leitura de um valor que esteja entre a faixa de 1 a 9. Após aleitura do valor fornecido pelo usuário, o programa deverá indicar uma de duas mensagens: "O valor está na faixa permitida", caso o usuário forneça o valor nesta faixa, ou a mensagem "O valor está fora da faixa permitida", caso o usuário forneça valores menores que 1 ou maiores que 9.  */


let n = parseInt(prompt("Digite um numero entre 1 a 9: "))

if (n >= 1 && n <= 9) {
  alert("O valor está na faixa permitida")
} else {
  alert("O valor está fora da faixa permitida")
}