const getEmployeeBySex = require('../src/getEmployeeBySex');
const { employees } = require('../src/data')

describe('testes da função getEmployeeBySex', () => {
  it('getEmployeeBySex é uma função', () => {
    expect(typeof getEmployeeBySex).toBe('function');
  });

  it('sem parâmetros, retorna todos os colaboradores', () => {
    const actual = getEmployeeBySex();

    expect(actual).toEqual(employees);
  });

  it('quando provido o sexo M, retorna um array com todos os colaboradores Homens', () => {
    const actual = getEmployeeBySex('M');

    expect(actual).toEqual(employees.filter(({ sex }) => sex === 'M'));
  });

  it('quando provido o sexo F, retorna um array com todas as colaboradoras Mulheres', () => {
    const actual = getEmployeeBySex('F');

    expect(actual).toEqual(employees.filter(({ sex }) => sex === 'F'));
  });

  it('quando provido um sexo inexistente, retorna um array vazio', () => {
    const actual = getEmployeeBySex('Helicopero apache sexual');

    expect(actual).toEqual([]);
  });
})