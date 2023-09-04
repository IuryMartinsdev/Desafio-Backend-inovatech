const data = require('./data');

function getEmployeeBySex(sex) {

    if (!sex) {
        return data.employees
    }
    
    const filteredEmployees = data.employees.filter(employee => employee.sex === sex)
    return filteredEmployees

}

module.exports = getEmployeeBySex;
