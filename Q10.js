function media() {
    soma = 0
    for (let nota of notas) {
      soma += nota
    }
    media = soma / notas.length
    console.log(media)
}

notas = [8, 6, 9, 10]
media(notas)
  