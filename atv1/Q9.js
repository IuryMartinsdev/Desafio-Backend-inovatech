function ordernar() {
    do {
      ordem = false
      for (i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
          temp = numeros[i]
          numeros[i] = numeros[i + 1]
          numeros[i + 1] = temp
          ordem = true
        }
      }
    } while (ordem)
  
    console.log(numeros)
}

numeros = [5, 2, 8, 1, 4]
ordernar(numeros)

  