/// <reference path="jQuery.js" />

$(readyNow);

// handle click events as needed.
function readyNow () {
    $('#submitBtn').on('click', getInputs);
    $('#employeeInfo').on('click','.employeeRow',deleteEmployee);
}

// declare an empty array to store employee objects.
let employees = [];

// function to create an employee object, push it into the array of employees, 
// and return the employee object.
function createEmployee (firstName, lastName, idNumber, jobTitle, annualSalary) {
    const employee = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        annualSalary: annualSalary};
    employees.push(employee);
    return employee;
}

// function to get the values from the input tags, store them in employees, 
// and empty the values.
function getInputs () {
    // declare variables and store the value of the inputs in them respectively.
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = Number($('#idIn').val());
    let jobTitle = $('#titleIn').val();
    let annualSalary = Number($('#salaryIn').val());

    // call the createEmployee function using the input values.
    createEmployee(firstName,lastName,idNumber,jobTitle,annualSalary);
    console.log(employees);

    // empty out the values in the input fields.
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');

    // call appendEmployees()
    appendEmployees();
}

// function to append the employee objects into the table element on the DOM.
function appendEmployees () {
    // declare a variable el (element) to the element of id employeeInfo.
    let el = $('#employeeInfo');

    // call clearEmployeeList to clear the list before appending the 
    // updated list of employee objects.
    clearEmployeeList();

    // loop through the employees array and add employee object to the DOM.
    for (const employee of employees) {
        el.append(`
        <tr class="employeeRow">
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td><button class="delBtn">Delete</button></td>
        </tr>`);
    }
}

// function to remove the list of employees on the DOM.
function clearEmployeeList () {
    // declare a variable el (element) to the element of id employeeInfo.
    let el = $('#employeeInfo');
    // remove the children elements of the table.
    el.children().remove();
}

// create a function to delete the row containing the employee with the
// delete button that was clicked.
function deleteEmployee (event) {
    // set variable to reference to the closest parent <tr> of the button 
    // that was clicked.
    let el = $(event.target).closest('tr');
    // remove parent row.
    el.remove();
}


// function to add employee objects to employees array for testing other 
// functions without always using the input fields.
function testEmployees () {
    createEmployee('David','Lindberg','1109','Dev','50000');
    createEmployee('Banana','Fish','1234','Food','25800');
    createEmployee('Flex','Box','55623','CSS Style','100000');
    createEmployee('Java','Script','87239','Language','75000');
    console.log(employees);
    appendEmployees();
}