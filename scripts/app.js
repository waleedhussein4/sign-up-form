const form = document.getElementById("form");
form.addEventListener('submit', function(event) {
    if(!validatePassword()) {
        event.preventDefault();
    };
});

const phone = document.querySelector('#phone-number');

phone.addEventListener('keydown', function() {
    phoneNumberFormatter();
})

const phoneNumberFormatter = function() {
    const formattedInputValue = formatPhoneNumber(phone.value);
    phone.value = formattedInputValue;
}

const formatPhoneNumber = function(value) {
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4) return phoneNumber;
    if(phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6,)}-${phoneNumber.slice(6,9)}`;
}

const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const passConditions = "*Password must contain at least: 8 characters long, 1 uppercase letter, 1 lowercase letter, 1 number, 1 symbol, and no spaces.";
const passMatch = document.querySelector('#pass-match');

pass.addEventListener('keyup', function() {
    run();
});

confirmPass.addEventListener('keyup', function() {
    // if the passwords are not equal
    if(pass.value != confirmPass.value) {

        fixPass();
        passMatch.innerText = "*Passwords do not match!"
        passMatch.style.visibility = 'visible';

        return false;
    }
    // if passwords are equal, check main password field for requirements
    else {
        run();
    }
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