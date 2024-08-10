const mainDiv = document.getElementById("mainDiv");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const userName = document.getElementById("userName");
const userAddress = document.getElementById("userAddress");
const userPhone = document.getElementById("userPhone");
const userAge = document.getElementById("userAge");

async function  signUp () {
    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/signup?email=${userEmail.value}&password=${userPassword.value}&name=${userName.value}&address=${userAddress.value}&phone=${userPhone.value}&age=${userAge.value}`;

    const response = await fetch(apiUrl);
    const data = await response.json(); 
    const status = data.status;
    if (status == true) {
        alert("success");
        userEmail.value = "";
        userPassword.value = "";
        userName.value = "";
        userAddress.value = "";
        userPhone.value = "";
        userAge.value = "";
    } else {
        alert("Failed");
    }
}

function checkInput() {
    if (userEmail.value == "") {
        alert("Please enter valid Email");
    } else if(userPassword.value == "") {
        alert("Please enter valid Password");
    }else if (userName.value == "") {
        alert("Please enter valid name");
    }else if (userAddress.value == "") {
        alert("Please enter valid Address");
    }else if (userPhone.value == "") {
        alert("Please enter valid Phone");
    }else if (userAge.value == "") {
        alert("Please enter valid Age");
    }else{
        signUp();
    }
}