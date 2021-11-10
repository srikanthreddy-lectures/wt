function validation(){
    let username = document.getElementById("username").value
    let usernameError = document.getElementById("usernameError")
    
    if(username == ""){
        usernameError.innerText = '*Please fill the Username'
        usernameError.style.color="red";
        return false;
    }
    else if(username.length <=2 || username.length >20){
            usernameError.innerText = '*Must be between 3 to 19'
            usernameError.style.color="red";
            return false; 
    }
    else if(!isNaN(username)){
        usernameError.innerText = '*Must be character'
        usernameError.style.color="red";
        return false; 
    }
    else if(username.match(/^[a-zA-Z\d\-_.,\s]+$/)){
        usernameError.innerText = '*Must not have symbols'
        usernameError.style.color="red";
        return false; 
    }
    else{
        usernameError.innerText = ''
        return true;
    }

}