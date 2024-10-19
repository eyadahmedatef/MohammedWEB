const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userSubject = document.getElementById("userSubject");
const userMessage = document.getElementById("userMessage");


async function sendEmail() {
    if (userName.value == "") {
        alert("please enter your name")
    } else if (userEmail.value == "") {
        alert("please enter your Email")
    } else if (userSubject.value == "") {
        alert("please enter your subject")
    } else if (userMessage.value == "") {
        alert("please enter your Massege")
    } else {
        
        const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/mail?mail=${userEmail.value}&message=${userMessage.value}&name=${userName.value}&subject=${userSubject.value}`;
        console.log(apiUrl);
        
        
    const response = await fetch(apiUrl);

    const data = await response.json();

    const status = data.status;

    console.log(data);
    

    if (status == true) {
        alert("Message sent successfully");
        userName.value = "";
        userEmail.value = "";
        userSubject.value = "";
        userMessage.value = "";
    } else {
                alert("Message sent Faild");

        }
        

    }
}