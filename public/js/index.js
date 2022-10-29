let signUpBtn = document.getElementById("signUpBtn");
let LogInWrapper = document.getElementById("LogInWrapper");
let createProfileWrapper = document.getElementById("createProfileWrapper");

if (signUpBtn) {
    signUpBtn.addEventListener('click', function () {
        LogInWrapper.style.display = "none";
        createProfileWrapper.style.display = "block";
    });
}


let cancel = document.getElementById("cancel");

cancel.addEventListener('click', function () {

    LogInWrapper.style.display = "block";
    createProfileWrapper.style.display = "none";
});


let mustMatch = document.getElementById("mustMatch");
let alreadyExists = document.getElementById("alreadyExists");

if((mustMatch.innerHTML == "Passwords must match!") || (alreadyExists.innerHTML == "User name already exists!")){
    createProfileWrapper.style.display = "block";
    LogInWrapper.style.display = "none";
}else{
    createProfileWrapper.style.display = "none";
    if(LogInWrapper){
       LogInWrapper.style.display = "block"; 
    }
    
}

let loggedInAs = document.getElementById('loggedInAs');
let contentWrapper = document.getElementById('contentWrapper');

if(loggedInAs != null){

    contentWrapper.style.float = "none";
}

