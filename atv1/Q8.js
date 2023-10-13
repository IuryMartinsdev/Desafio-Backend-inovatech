function somarPares(numero) {
    soma = 0;
    for (i = 0; i <= numero; i += 2) {
      soma += i
    }

    console.log(soma)
}
numero = 10
somarPares(numero)