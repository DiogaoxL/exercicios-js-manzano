// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

let contadora = 1
let resul = 0

while (contadora <= 100) {
  resul = resul + contadora
  document.write(resul + " <br/>")
  contadora = contadora + 1
}