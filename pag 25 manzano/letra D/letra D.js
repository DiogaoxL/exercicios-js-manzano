// Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um 
// automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto 
// (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a 
// distância percorrida com a fórmula DISTANCIA = TEMPO * VELOCIDADE. Possuindo o valor da 
// distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula 
// LITROS_USADOS = DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade 
// média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a 
// quantidade de litros (LITROS_USADOS) utilizada na viagem.

var tempo = prompt("Digite o tempo ate o destino: ");
var velocidade = prompt("Diigite a velocidade no trajeto: ");

var distancia = tempo * velocidade ;

var litros_usados = distancia / 12 ;

alert("o tempo foi de: " + tempo)
alert(" A velocidade foi de: "+ velocidade)
alert(" A distancia foi: "+ distancia )
alert(" Foram usados " + litros_usados + " litros")