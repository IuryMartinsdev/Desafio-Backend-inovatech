function maiorPalavra() {
    const palavras = frase.split(' ')
    maiorPalavra = palavras.reduce((maior, palavra) => palavra.length > maior.length ? palavra : maior, '')
  
    console.log(maiorPalavra)
}

frase = "adoro estudar javascript"
maiorPalavra(frase)
  