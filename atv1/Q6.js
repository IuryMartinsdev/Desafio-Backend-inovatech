function contarVogais() {
    vogais = ['a', 'e', 'i', 'o', 'u']
    contador = 0
  
    for (char of nome) {
      if (vogais.includes(char)) {
        contador++
      }
    }
  
    return contador
}
nome = "iury martins"
console.log("Quantidade de vogais no nome Iury Martins:  ", contarVogais(nome))
