const { send } = require("express/lib/response");

function SubmitClicked() { // Otan pataw to submit sto login 

    // pare apo to to documment thn timi apo to elemenent me id=ExampleUsername
    let username = document.getElementById('ExampleUsername').value;
    let password = document.getElementById('ExamplePassword').value;

    send(server, username, password)



}