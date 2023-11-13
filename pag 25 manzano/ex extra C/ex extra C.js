// Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a
// apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para
// cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de
// votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e
// votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos
// válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de
// eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de
// eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de
// eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de
// eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último
// o percentual correspondente de votos em branco em relação à quantidade de eleitores

var candidatoB = parseInt(prompt('Qtd de Votos Validos Para Candidato B '))
var candidatoC = parseInt(prompt('Qtd de Votos Validos Para Candidato C '))
var candidatoA = parseInt(prompt('Qtd de Votos Validos Para Candidato A '))
var votos_nulos = parseInt(prompt('Qtd de Votos nulos '))
var votos_brancos = parseInt(prompt('Qtd de Votos brancos '))

var votos_validos = candidatoA + candidatoB + candidatoC
var total_eleitores = votos_validos + votos_brancos + votos_nulos


var porc_tot_validos = (votos_validos * 100) / total_eleitores
var porc_tot_A = (candidatoA * 100) / total_eleitores
var porc_tot_B = (candidatoB * 100) / total_eleitores
var porc_tot_C = (candidatoC * 100) / total_eleitores
var porc_tot_nulos = (votos_nulos * 100) / total_eleitores
var brancos = (votos_brancos * 100) / total_eleitores

alert("o número total de eleitores " + total_eleitores )
alert("o percentual correspondente de votos válidos em relação à quantidade de eleitores " + porc_tot_validos)
alert("o percentual correspondente de votos válidos do candidato A " + porc_tot_A)
alert("o percentual correspondente de votos válidos do candidato B " + porc_tot_B)
alert("o percentual correspondente de votos válidos do candidato C " + porc_tot_C)
alert("o percentual correspondente de votos nulos " + porc_tot_nulos)
alert("o percentual correspondente de votos em branco "+ brancos)

