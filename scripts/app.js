const form = document.getElementById("form");
form.addEventListener('submit', function(event) {
    if(!validatePassword()) {
        event.preventDefault();
    };

    if(!validatePhoneNumber()) {
        event.preventDefault();
    }
    
})

var getPhoneNumber = function() {
    return document.querySelector('#phone-number').value;
}



const validatePhoneNumber = function() {

}


const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const passConditions = "Password must contain at least: 8 characters long, 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol, and no spaces.";
const passMatch = document.querySelector('#pass-match');

pass.addEventListener('keyup', function() {
    run();
});

confirmPass.addEventListener('keyup', function() {
    run();
});
   
const run = function() {
    document.querySelector('#pass-match').style.visibility = 'hidden';
    validatePassword();
};

const validatePassword = function() {

    // if the password does not meet the requirements
    if(!checkPassRequirements(pass.value)) {
        passMatch.innerText = passConditions;
        passMatch.style.visibility = 'visible';
        return false;
    }
    else {
        passMatch.style.visibility = 'hidden';
    }

    // if the passwords are not equal
    if(pass.value != confirmPass.value) {

        fixPass();
        passMatch.innerText = "*Passwords do not match!"
        passMatch.style.visibility = 'visible';

        return false;

    }

    // if password is valid, set the pass fields to valid in css
    pass.setCustomValidity("");
    confirmPass.setCustomValidity("");

    return true;
}

const fixPass = function() {
    pass.setCustomValidity('Invalid password.');
    confirmPass.setCustomValidity('Invalid password.');
}

const checkPassRequirements = function(pass) {
    //for length
    if(pass.length<8) {
        return false;
    }

    // for uppercase letter
    if(!pass.match(/[A-Z]/)) {
        return false;
    }

    // for lowercase letter
    if(!pass.match(/[a-z]/)) {
        return false;
    } 
    
    // for number
    if(!pass.match(/[0-9]/i)) {
        return false;
    }
    
    // for symbol
    if(!pass.match(/[^A-Za-z0-9-' ']/i)) {
        return false;
    }
    
    // for space
    if(pass.match(' ')) {
        return false;
    }

    return true;
}