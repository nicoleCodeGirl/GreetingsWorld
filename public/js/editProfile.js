let bioP = document.getElementById("bioP");
let bioInput = document.getElementById("bioInput");
let editPswdP = document.getElementById("editPswdP");
let editPswdInput = document.getElementById("editPswdInput");
let confirmPswd = document.getElementById("confirmPswd");
let cancel = document.getElementById("cancel");

bioInput.value=bioP.innerHTML;
editPswdInput.value = editPswdP.innerHTML;
confirmPswd.value = editPswdP.innerHTML;

cancel.addEventListener("click", function(e){
    e.preventDefault();
    location.href = "http://localhost:3000/members"
})

