const getAllManagers = require('../src/getAllManagers');
const { employees } = require('../src/data')

describe('testes da função getAllManagers', () => {
  it('getAllManagers é uma função', () => {
    expect(typeof getAllManagers).toBe('function');
  });

  it('retorna o nome de todos os gerentes', () => {
    const actual = getAllManagers();

    expect(actual).toEqual(['Elielson', 'Icaro Joel', 'Augusto']);
    expect(actual).toHaveLength(3);
    expect(actual.includes('Elielson')).toEqual(true);
    expect(actual.includes('Icaro Joel')).toEqual(true);
    expect(actual.includes('Augusto')).toEqual(true);
  });
})