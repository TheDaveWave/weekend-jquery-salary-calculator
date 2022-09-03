/// <reference path="jQuery.js" />

$(readyNow);

function readyNow () {

}

// declare an empty array to store employee objects.
let employees = [];

// create a test employee object.
const testEmployee = {
    firstName: 'Dude',
    lastName: 'Slice',
    idNumber: 666,
    jobTitle: 'Surfer',
    annualSalary: 5000
};

// push the testEmployee into the employees array.
employees.push(testEmployee);
console.log(employees);

// function to create an employee object, push it into the array of employees, 
// and return the employee object.
function createEmployee (firstName, lastName, idNumber, jobTitle, annualSalary) {
    const employee = {firstName,lastName,idNumber,jobTitle, annualSalary};
    employees.push(employee);
    return employee;
}