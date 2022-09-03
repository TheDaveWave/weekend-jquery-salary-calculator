/// <reference path="jQuery.js" />

$(readyNow);

// handle click events as needed.
function readyNow () {
    $('#submitBtn').on('click', getInputs);
}

// declare an empty array to store employee objects.
let employees = [];

// create a test employee object.
// const testEmployee = {
//     firstName: 'Dude',
//     lastName: 'Slice',
//     idNumber: 666,
//     jobTitle: 'Surfer',
//     annualSalary: 5000
// };

// // push the testEmployee into the employees array.
// employees.push(testEmployee);
// console.log(employees);

// function to create an employee object, push it into the array of employees, 
// and return the employee object.
function createEmployee (firstName, lastName, idNumber, jobTitle, annualSalary) {
    const employee = {firstName,lastName,idNumber,jobTitle, annualSalary};
    employees.push(employee);
    return employee;
}

// function to get the values from the input tags.
function getInputs () {
    // declare variables and store the value of the inputs in them respectively.
    let firstName = $('firstNameIn').val();
    let lastName = $('lastNameIn').val();
    let idNumber = $('idIn').val(); // make a number later maybe?
    let jobTitle = $('titleIn').val();
    let annualSalary = $('salaryIn').val(); // make a number later maybe?

    // calle the createEmployee function using the input values.
    createEmployee(firstName,lastName,idNumber,jobTitle,annualSalary);
    console.log(employees);

    // empty out the values in the input fields.
    $('firstNameIn').val('');
    $('lastNameIn').val('');
    $('idIn').val('');
    $('titleIn').val('');
    $('salaryIn').val('');
}