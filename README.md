# Avaliação de Backend

Essa é uma avaliação para a equipe de backend, onde será testada a lógica de programação utilizando `javascript`, a avaliação é feita utilizando testes automatizados feitos com o `jest`.

## Como Rodar os Testes
*Antes de testar, certifique-se de ter executado o comando* `npm install`.

Para rodar os testes use o seguinte comando `npm run test`.

## O que tem que desenvolver

### 1. deve ser desenvolvido a função `getEmployeeByName`, no arquivo `src/getEmployeeByName.js` para que a função:
  * Retorne um `objeto` vazio caso seja chamada sem um parâmetro.
  * Retorne o `objeto` referênte ao colaborador caso seja chamada com o `name` dele.

### 2. deve ser desenvolvido a função `getAllManagers`, no arquivo `src/getAllManagers.js` para que a função:
  * Retorne um `array` com os `names` de todos os gerentes.
  * O array não pode conter `names` repetidos

### 3. deve ser desenvolvido a função `getEmployeeBySex`, no arquivo `src/getEmployeeBySex.js` para que a função:
  * Retorne um `array` com todos os colaboradores do sexo especifícado.
  * Retorne um `array` vazio caso não haja nenhum colaborador desse sexo.
  * Retorne um `array` com todos os colaboradores se não passar nenhum parâmetro.

### 4. deve ser desenvolvido a função `getEmployeeByRole`, no arquivo `src/getEmployeeByRole.js` para que a função:
  * Retorne um `array` com todos os colaboradores da função especifícada.
  * Retorne um `array` vazio caso não haja nenhum colaborador dessa função.
  * Retorne um `array` com todos os colaboradores se não passar nenhum parâmetro.