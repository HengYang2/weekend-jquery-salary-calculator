$(document).ready(onReady);

//Global variables
let totalAnualSalary = 0;
let totalMonthly = 0;

function onReady() {
    console.log("jquery working");
    //Create an event listener for submit button
    $('#submitButton').on('click', submitHandler);
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
            <th>${anualSalaryInput}</th>  
            <th><button id="deleteButton"> Delete </th>
        </tr>`);

        //Increase the value of totalMonthlyCost
        totalAnualSalary += Number(anualSalaryInput);
        totalMonthly = Math.round(totalAnualSalary/12);
        $('#totalMonthlyValue').empty();
        $('#totalMonthlyValue').append(totalMonthly);

        //Does
        if (totalMonthly > 20000) {
            document.querySelector('#totalMonthly').style.backgroundColor="red";
        }

    } else {
        console.log('Required fields missing!');
    }
}

