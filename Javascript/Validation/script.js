const form = document.querySelector('#regs');

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isUsernameValid = checkUsername();
    let isMobileValid = checkMobile();

    let isFormValid = isUsernameValid && isMobileValid;

    // submit to the server if the form is valid
    if (isFormValid) {  
       // success logic
       alert("Valid form");
    }
});

            //var re = /^[a-zA-Z]{3,7}$/
         //var re = /^\S+@\S+\.\S+$/;
          //var re = /^\d{3}[-]\d{3}[-]\d{4}$/;

function checkMobile(){
    let valid = false;

    let mobile = document.getElementById("mobile").value.trim();
    let mobileError = document.getElementById("mobileError");

    if(mobile == ""){
        mobileError.innerText = '*Mobile No cannot be blank.'
        mobileError.style.color="red";
        valid=false;
    }
    else if(!mobile.match(/^\d{3}[-]\d{3}[-]\d{4}$/)){
        mobileError.innerText = '*Must be in 111-111-1111 pattern'
        mobileError.style.color="red";
        valid=false; 
    }
    else{
        mobileError.innerText = ''
        valid=true;
    }

    return valid
}

function checkUsername(){
    let valid = false;
    const min = 3,max = 20;

    let username = document.getElementById("username").value.trim();
    let usernameError = document.getElementById("usernameError");
    
    if(username == ""){
        usernameError.innerText = '*Username cannot be blank.'
        usernameError.style.color="red";
        valid=false;
    }
    else if(username.length <=2 || username.length >20){
            usernameError.innerText = `Username must be between ${min} and ${max} characters.`
            usernameError.style.color="red";
            valid=false; 
    }
    else if(!isNaN(username)){
        usernameError.innerText = '*Must be character'
        usernameError.style.color="red";
        valid=false; 
    }
    else if(!username.match(/^[a-zA-Z\-_.,\s]+$/)){
        usernameError.innerText = '*Must not have symbols or number'
        usernameError.style.color="red";
        valid=false; 
    }
    else{
        usernameError.innerText = ''
        valid=true;
    }

    return valid;
};




}
