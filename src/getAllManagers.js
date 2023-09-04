const data = require('./data');

function getAllManagers() {
    const buscargerentes = data.employees.filter(employee =>{return employee.managerId === null || employee.managerId === '00000'}).map(manager => manager.name)
    return buscargerentes
}

module.exports = getAllManagers;
