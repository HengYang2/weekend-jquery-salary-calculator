$(document).ready(onReady);

function onReady() {
    console.log("jquery working");
    //Create an event listener for submit button
    $('#submitButton').on('click', submitHandler);

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
    //Create a tr element filled out with the input values and place it into the table:
    $('tbody').append(`<tr>
        <th>${firstNameInput}</th>
        <th>${lastNameInput}</th>
        <th>${idInput}</th>
        <th>${titleInput}</th>
        <th>${anualSalaryInput}</th>  
        <th><button id="deleteButton"> Delete </th>
    </tr>`);
}

