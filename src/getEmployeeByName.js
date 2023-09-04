const data = require('./data');


function getEmployeeByName(name) {
    const encontrar = data.employees.find(mapear => mapear.name === name);
    return encontrar || {};
};

module.exports = getEmployeeByName;
