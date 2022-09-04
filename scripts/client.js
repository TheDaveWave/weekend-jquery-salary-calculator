/// <reference path="jQuery.js" />

$(readyNow);

// handle click events as needed.
function readyNow () {
    $('#submitBtn').on('click', getInputs);
    $('#clearBtn').on('click',clearEmployees);
    $('#employeeInfo').on('click','.delBtn',deleteEmployee);
}

// declare an empty array to store employee objects.
let employees = [];

// setup format for currency.
const formatCur = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});


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

    // create an if statement to check if inputs are empty and if true alert.
    if (firstName === '' || lastName === '' || idNumber === '' || jobTitle === '' || annualSalary === '') {
        alert('Please fill in all inputs.');
    } else {
           // call the createEmployee function using the input values.
    createEmployee(firstName,lastName,idNumber,jobTitle,annualSalary);
    // console.log(employees);
    }
 
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

    // clear the list from the DOM.
    el.empty();

    // loop through the employees array and add employee object to the DOM.
    // add data-index attr to <tr> to access data later.
    for (let i = 0; i < employees.length; i++) {
        el.append(`
        <tr data-index="${i}">
            <td>${employees[i].firstName}</td>
            <td>${employees[i].lastName}</td>
            <td>${employees[i].idNumber}</td>
            <td>${employees[i].jobTitle}</td>
            <td>${formatCur.format(employees[i].annualSalary)}</td>
            <td><button class="delBtn">Delete</button></td>
        </tr>`);
    }
    // call monthlyCost()
    monthlyCost();
}

// create a function to delete the row containing the employee with the
// delete button that was clicked. Remove that employee from the employees list.
function deleteEmployee (event) {
    // set variable to reference to the closest parent <tr> of the button 
    // that was clicked.
    let el = $(event.target).closest('tr');
    // get the row number of the row to be removed.
    let rowNum = el.data('index');

    // remove the employee object from the employees array.
    employees.splice(rowNum, 1);
    // console.log(employees);

    // re-append the data to the DOM.
    appendEmployees();
}

// clear all employees off the DOM and remove them from the employees array.
function clearEmployees () {
    let el = $('#employeeInfo');
    el.empty()
    employees = [];
    appendEmployees();
}

// get the total monthly cost of the employees on the list.
// if the monthly cost exceeds 20,000 add a red background to cost.
function monthlyCost () {
    let el = $('#monthlyCost');
    let cost = 0;
    // loop through the employees array and add up the total annual salary.
    for (const employee of employees) {
        cost += employee.annualSalary;
    }
    // console.log('Combined salary',cost);

    // divide the sum of the annual salary's by 12 to get cost per month.
    cost /= 12;
    cost = Math.round(cost);
    // console.log('Total cost',cost);

    // display cost on the DOM.
    el.text(`${formatCur.format(cost)}`);

    // check to see if the cost is greater than 20,000
    // if true make background of cost red.
    if(cost > 20000) {
        el.css('animation', 'highCost 2s linear alternate infinite');
    } else if (cost <= 20000) {
        el.css('animation', '');
    }
    
    return cost;
}

// maybe make it so you can edit the annual salary without deleting an employee.


// function to add employee objects to employees array for testing other 
// functions without always using the input fields.
function testEmployees () {
    createEmployee('David','Lindberg','1109','Dev',Number('50000'));
    createEmployee('Banana','Fish','1234','Food',Number('25800'));
    createEmployee('Flex','Box','55623','CSS Style',Number('100000'));
    createEmployee('Java','Script','87239','Language',Number('75000'));
    console.log(employees);
    appendEmployees();
}