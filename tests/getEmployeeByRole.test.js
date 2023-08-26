const getEmployeeByRole = require('../src/getEmployeeByRole');
const { employees } = require('../src/data')

describe('testes da função getEmployeeByRole', () => {
  it('getEmployeeByRole é uma função', () => {
    expect(typeof getEmployeeByRole).toBe('function');
  });

  it('sem parâmetros, retorna todos os colaboradores', () => {
    const actual = getEmployeeByRole();

    expect(actual).toEqual(employees);
  });

  it('quando provido a role Tech Lead, retorna um array com todos os colaboradores nessa função', () => {
    const actual = getEmployeeByRole('Tech Lead');

    expect(actual).toEqual([employees[1], employees[2]]);
  });

  it('quando provido a role Dev, retorna um array com todos os colaboradores nessa função', () => {
    const actual = getEmployeeByRole('Dev');

    expect(actual).toEqual(employees.filter(({ role }) => role.includes('Dev')));
  });

  it('quando provido uma role inexistente, retorna um array vazio', () => {
    const actual = getEmployeeByRole('Diretor de ux/ui');

    expect(actual).toEqual([]);
  });
})