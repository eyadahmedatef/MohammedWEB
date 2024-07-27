const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const mainDiv = document.getElementById("mainDiv");
const errorText = document.getElementById("errorText");
const spinnerDiv = document.getElementById("spinnerDiv");



async function loginUser() {
    mainDiv.style.display = "none";
    spinnerDiv.style.display = "inline-block";
    const apiUrl= `https//tatbeqak.site/apps/tatbeqey/apps/projects/test_api/login.php?email=${userEmail.value}&password=${userPassword.value}`;
    const response = await fetch(`apiUrl`);
    const data = await response.json();
    const result = data.status;
    if(result == true){
        location.href = "index2.html";
    } else {
        errorText.style.display = "block";
    }
    spinnerDiv.style.display = "none";
    mainDiv.style.display = "block";
}

function checkLogin() {
    if(userEmail.value == ""){
        alert("Please enter valid email");
    } else if(userPassword.value == ""){
        alert("Plesse enter valid password");
    } else {
        loginUser();
    }
}