const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const errorText = document.getElementById("errorText");

emailInput.addEventListener("input", function () {
    if (emailInput.value == "") {
        errorText.style.display = "none";
    }
});

passwordInput.addEventListener("input", function () {
    if (passwordInput.value == "") {
        errorText.style.display = "none";
    }
});

async function loginUser() {

    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/login.php?email=${emailInput.value}&password=${passwordInput.value}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    const status = data.status;

    if (status == true) {
        alert("true");
    } else {
        errorText.style.display = "block";
    }
}