function register() {
    var elementInput = document.getElementById('username');
    var passwordElement = document.getElementById("psw");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    var symbols = document.getElementById("symbols");

   // When the user clicks on the password field, show the message box
    passwordElement.onfocus = function() {
        document.getElementById("message").style.display = "block";
    }
  
  // When the user clicks outside of the password field, hide the message box
    passwordElement.onblur = function() {
        document.getElementById("message").style.display = "none";
    }
  // When the user starts to type something inside the password field
    passwordElement.onkeyup = function() {
        
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if(passwordElement.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } 
        else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }
    
        // Validate numbers
        var numbers = /[0-9]/g;
        if(passwordElement.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        }
        else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }
    
        // Validate length
        if(passwordElement.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } 
        else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }

        // For symbols (non-word characters)

        var symbols = /[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]/;   
        if(passwordElement.value.match(symbols)) {
            symbols.classList.remove("invalid");
            symbols.classList.add("valid");
        }
        else {
            symbols.classList.remove("valid");
            symbols.classList.add("invalid");
            }    
    }

}    