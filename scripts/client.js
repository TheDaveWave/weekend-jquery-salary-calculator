/// <reference path="jQuery.js" />

$(readyNow);

function readyNow () {

}

let employees = [];

// function to create an employee object, push it into the array of employees, 
// and return the employee object.
function createEmployee (firstName, lastName, idNumber, jobTitle, annualSalary) {
    const employee = {firstName,lastName,idNumber,jobTitle, annualSalary};
    employees.push(employee);
    return employee;
}