//Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente

let a = parseInt(prompt('Escreva um valor '))
let b = parseInt(prompt('Escreva outro valor '))
let c = parseInt(prompt('Escreva o ultimo valor '))

if (a < b) {
  if (b < c) {
    console.log(a)
    console.log(b)
    console.log(c)
  } else {
    console.log(a)
    console.log(c)
    console.log(b)
  }
} else {
  if (b < c) {
    if (c < a) {
      console.log(b)
      console.log(c)
      console.log(a)
    } else {
      console.log(b)
      console.log(a)
      console.log(c)
    }
  } else {
    if (b < a) {
      console.log(c)
      console.log(b)
      console.log(a)
    } else {
      console.log(c)
      console.log(b)
      console.log(a)
    }
  }
}
