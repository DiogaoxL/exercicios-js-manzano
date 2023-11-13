// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). 

  let soma= 0 
  let n = 0

  for (let c = 1; c <= 100; c++) {
    soma = soma + c
    document.write(c + "<br>")
  }

  document.write("a soma dos valores " + soma)