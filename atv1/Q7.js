function contarVogal() {
    contador = 0
  
    for (char of nome) {
      if (char === vogal) {
        contador++
      }
    }
  
    return contador
}
  
nome = "iury martins"
vogal = 'i'
console.log(`O número de '${vogal}' em ${nome} é: ${contarVogal(nome, vogal)}`)
  