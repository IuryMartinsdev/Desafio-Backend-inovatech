function somarArray(){

    soma = 0

    for(i = 0; i < numeros.length; i++){
    soma+= numeros[i]
    }

    console.log(soma)
}

numeros = [1,2,3,4,5]
somarArray(numeros)