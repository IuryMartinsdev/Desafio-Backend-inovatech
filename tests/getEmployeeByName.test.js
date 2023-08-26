const getEmployeeByName = require('../src/getEmployeeByName');
const { employees } = require('../src/data')

describe('testes da função getEmployeeByName', () => {
  it('getEmployeeByName é uma função', () => {
    expect(typeof getEmployeeByName).toBe('function');
  });

  it('sem parâmetros, retorna um objeto vazio', () => {
    const actual = getEmployeeByName();

    expect(actual).toEqual({});
  });

  it('quando provido nome da pessoa colaboradora, retorna o objeto da pessoa colaboradora', () => {
    const actual = getEmployeeByName('Icaro Joel');

    expect(actual).toEqual(employees[1]);
  });
})