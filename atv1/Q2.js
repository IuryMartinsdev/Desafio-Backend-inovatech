function fibonacci() {
    numeros = [0, 1]
  
    for (i = 2; i < 10; i++) {
      sequencia = numeros[i - 1] + numeros[i - 2]
      numeros.push(sequencia)
    }
  
    console.log(numeros)
}
  
fibonacci()
  