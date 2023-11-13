/* Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com
saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a
mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da
mensagem de saudação o nome previamente informado. */

let r = parseInt(prompt("Qual seu sexo masculino [1] ou feminino [2]: "))

if (r === 1 ) {
  alert("Bem vindo senhor")
} else {
  if (r === 2) {
    alert("Bem vinda senhora")
  } else {
    alert("Essa opção nao existe")
  }
}
