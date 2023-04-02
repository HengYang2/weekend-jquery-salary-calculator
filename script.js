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
    let idIsNumber = true;
    let titleInput = $('#titleInput').val();
    let anualSalaryInput = $('#anualSalaryInput').val();
    let isAnualSalaryInputNumber = true;

    if (isNaN(idInput)) {
        idIsNumber = false;
    }
    if (isNaN(anualSalaryInput)) {
        isAnualSalaryInputNumber = false;
    }

    //If all input boxes aren't given a value, a new row wont be added:
    if (firstNameInput != ''  && lastNameInput != '' && idInput != '' && 
        titleInput != '' && anualSalaryInput != '' && idIsNumber && 
        isAnualSalaryInputNumber) {
        //Erase input values:
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#idInput').val('');
        $('#titleInput').val('');
        $('#anualSalaryInput').val('');

        //Create a tr element filled out with the input values:
        let content = `<tr>
        <td>${firstNameInput}</td>
        <td>${lastNameInput}</td>
        <td>${idInput}</td>
        <td>${titleInput}</td>
        <td id="anualSalaryInput">${anualSalaryInput}</td>  
        <td><button id="deleteButton"> Delete </td>
        </tr>`;
        //Place this tr element before the #endOfTableRow element:
        $(content).insertBefore('#endOfTableRow');


        //Increase the value of totalMonthlyCost.
        totalAnualSalary += Number(anualSalaryInput);
        totalMonthly = Math.round(totalAnualSalary/12);
        $('#totalMonthlyValue').empty();
        $('#totalMonthlyValue').append(totalMonthly);

        //If totalMonthly exceeds 20,000 then turn its element's background color 
        //to red.
        if (totalMonthly > 20000) {
            document.querySelector('#totalMonthly').style.backgroundColor="red";
        }

    } else {
        console.log('Not a number');
    }
}

//Delete employee function:
function deleteEmployee() {

    //Removes corresponding td element from the table.
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

    //If totalMonthly doesn't exceed 20,000 then reset its element's background color
    //to white.
    if (totalMonthly < 20000) {
        document.querySelector('#totalMonthly').style.backgroundColor="white";
    }

}

//Round to neareast 2 decimals