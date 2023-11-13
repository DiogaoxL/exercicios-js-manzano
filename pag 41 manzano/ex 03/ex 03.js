/* Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem
dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não
foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o
valor da média do aluno para qualquer condição.  */

// Seção de Declarações das variáveis
let nota1 = parseInt(prompt('Digite a nota 1 : '))
let nota2 = parseInt(prompt('Digite a nota 2 : '))
let nota3 = parseInt(prompt('Digite a nota 3 : '))
let nota4 = parseInt(prompt('Digite a nota 4 : '))

//calculando a media
let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media < 5) {
  //mostrando na tela
  document.write('deu ruim, vai fica de castigo, sua media foi ', media)
}

if (media >= 5) {
  //mostrando na tela
  document.write('deu boa, sem castigo sua media foi ', media)
}
