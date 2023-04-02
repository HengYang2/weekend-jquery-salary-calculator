$(document).ready(onReady);

//Global variables
let totalAnualSalary = 0;
let totalMonthly = 0;

function onReady() {
    console.log("jquery working");
    //Create an event listener for submit button
    $('#submitButton').on('click', submitHandler);
    $('tbody').on('click', '#deleteButton', deleteEmployee);
    $('#totalMonthlyValue').append(totalMonthly);
}

//Callback Functions:
function submitHandler(event) {
    //Stop default functionalities such as refreshing the page when the submit button is pressed.
    event.preventDefault();

    //Create variables to hold input values:
    let firstNameInput = $('#firstNameInput').val();
    let lastNameInput = $('#lastNameInput').val();
    let idInput = $('#idInput').val();
    let titleInput = $('#titleInput').val();
    let anualSalaryInput = $('#anualSalaryInput').val();

    //If all input boxes aren't given a value, a new row wont be added:
    if (firstNameInput != '' && lastNameInput != '' && idInput != '' && titleInput != '' && anualSalaryInput != '') {
        //Erase input values:
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#anualSalaryInput').val('');

        //Create a tr element filled out with the input values and place it into the table:
        $('tbody').append(`<tr>
            <th>${firstNameInput}</th>
            <th>${lastNameInput}</th>
            <th>${idInput}</th>
            <th>${titleInput}</th>
            <th id="anualSalaryInput">${anualSalaryInput}</th>  
            <th><button id="deleteButton"> Delete </th>
        </tr>`);

        //Increase the value of totalMonthlyCost.
        totalAnualSalary += Number(anualSalaryInput);
        totalMonthly = Math.round(totalAnualSalary/12);
        $('#totalMonthlyValue').empty();
        $('#totalMonthlyValue').append(totalMonthly);

        //If totalMonthly exceeds 20,000 then turn its element's background color to red.
        if (totalMonthly > 20000) {
            document.querySelector('#totalMonthly').style.backgroundColor="red";
        }

    } else {
        console.log('Required fields missing!');
    }
}

//Delete employee function:
function deleteEmployee() {

    //Removes corresponding tr element from the table.
    $(this).parent().parent().remove();

    //Get totalAnualSalary value
    //Subtract deleted employee's total anual salary
    let deletedEmployeeTotalAnualSalary = Number($(this).parent().parent().find('#anualSalaryInput').text());
    totalAnualSalary -= deletedEmployeeTotalAnualSalary;
        //Recalculate the total monthly
    totalMonthly = Math.round(totalAnualSalary/12);
    //Display the change on the DOM
        //Locate and empty out the totalMonthlyValue on the DOM
        //Append new totalMonthly value into it.
    $('#totalMonthlyValue').empty();
    $('#totalMonthlyValue').append(totalMonthly);

}

//Round to neareast 2 decimals