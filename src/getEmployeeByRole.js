const data = require('./data');

function getEmployeeByRole(role) {
    if (role) {
        const colaboradores = data.employees.filter(colaborador => colaborador.role.includes(role));
        return colaboradores
      } else {
        return data.employees
      }
}

module.exports = getEmployeeByRole;
