class User {
    constructor(name, mobileNumber, address, birthdate){
        this.name = name;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.age = getAge(birthdate);
    }
}



//global variables
const nameInput = document.getElementById("nameInput");
const mobileInput = document.getElementById("mobileInput");
const addressInput = document.getElementById("addressInput");
const dateInput = document.getElementById("dateInput");
const mainDiv = document.getElementById("mainDiv");
const resultDiv = document.getElementById("resultDiv");
const resultH3 = document.getElementById("resultH3");


function getAge(dateString) {
    var today = new Date();
    var DOB = new Date(dateString);
    var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
    totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
    var years = today.getFullYear() - DOB.getFullYear();
    if (DOB.getMonth() > today.getMonth())
        years = years - 1;
    else if (DOB.getMonth() === today.getMonth())
        if (DOB.getDate() > today.getDate())
            years = years - 1;

    var days;
    var months;

    if (DOB.getDate() > today.getDate()) {
        months = (totalMonths % 12);
        if (months == 0)
            months = 11;
        var x = today.getMonth();
        switch (x) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                var a = DOB.getDate() - today.getDate();
                days = 31 - a;
                break;
            }
            default: {
                var a = DOB.getDate() - today.getDate();
                days = 30 - a;
                break;
            }
        }

    }
    else {
        days = today.getDate() - DOB.getDate();
        if (DOB.getMonth() === today.getMonth())
            months = (totalMonths % 12);
        else
            months = (totalMonths % 12) + 1;
    }

    const age = {
        "years": years,
        "months": months,
        "days": days,
    };

    return age;
}

function validateEnteries() {
    if(nameInput.value == ""){
        alert("Please Enter valid Name");
        return false;
    } else if(mobileInput.value == "") {
        alert("Please enter valid mobile number");
        return false;
    } else if(addressInput.value == ""){
        alert("Please enter valid address");
        return false;
    } else if(dateInput.value == "") {
        alert("Please enter valid date");
        return false;
    } else {
        return true;
    }
}


function calculateAge() {
    if(validateEnteries()){
        const newUser = new User(nameInput.value, mobileInput.value, addressInput.value, dateInput.value);
        mainDiv.style.display = "none";
        resultDiv.style.display = "block";
        resultH3.innerText = `
            Name: ${newUser.name}\n
            Address: ${newUser.address}\n
            Mobile Number: ${newUser.mobileNumber}\n
            Age in Years: ${newUser.age.years}\n
            Age in Months: ${newUser.age.months}\n
            Age in Days: ${newUser.age.days}
        `;
    }
}

function reset() {
    nameInput.value = "";
    mobileInput.value = "";
    addressInput.value = "";
    dateInput.value = "";
    mainDiv.style.display = "block";
    resultDiv.style.display = "none";
}