/*
Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da
média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média.
Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi
aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta
condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.
*/

let nota01 = parseInt(prompt('escreva sua nota 1: '))
let nota02 = parseInt(prompt('escreva sua nota 2: '))
let nota03 = parseInt(prompt('escreva sua nota 3: '))
let nota04 = parseInt(prompt('escreva sua nota 4: '))

let media = (nota01 + nota02 + nota03 + nota04) / 4

if (media >= 7) {
  document.write('parabens vc foi aprovado! sua media foi ', media)
}

if (media < 7) {
  document.write('parabens vc foi reprovado! sua media foi ', media , '<br>')

  let nota05 = parseInt(prompt('Digite a nota da rec: '))

  let novamedia = (nota01 + nota02 + nota03 + nota04 + nota05) / 5

  if (novamedia >= 5) {
    document.write('voce foi aprovado na rec! sua nova media foi ', novamedia)
  } else {
    document.write('voce foi reprovado na rec! sua nova media foi ', novamedia)
  }
}
