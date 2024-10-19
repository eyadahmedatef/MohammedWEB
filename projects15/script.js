const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notesDiv");
const zeroNotes = document.getElementById("zeroNotes");
const loginDiv = document.getElementById("loginDiv");
const optionsDiv = document.getElementById("optionsDiv");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginError = document.getElementById("loginError");
const detailsDiv = document.getElementById("detailsDiv");
const greetingText = document.getElementById("greetingText");
const signupDiv = document.getElementById("signupDiv");
const signupPassword = document.getElementById("signupPassword");
const signupEmail = document.getElementById("signupEmail");
const signupFaild = document.getElementById("signupFaild");
const signupName = document.getElementById("signupName");




var notesArray = [];

function showOptions() {

    const userId = localStorage.getItem("userid");

    if(userId == null){
        optionsDiv.style.display = "flex";
    } else {
        const userName = localStorage.getItem("username");
        greetingText.innerText = `Welcome ${userName}`;
        detailsDiv.style.display = "flex";
    }

    notesDiv.style.display = "none";
    zeroNotes.style.display = "none";
}



function showSignup() {
    optionsDiv.style.display = "none";
    signupDiv.style.display = "flex";
}

function showHome() {
    optionsDiv.style.display = "none";
    loginDiv.style.display = "none";
    detailsDiv.style.display = "none";
    notesDiv.style.display = "block";
    getNotes();
}

function showLogin() {
    optionsDiv.style.display = "none";
    loginDiv.style.display = "flex";
}

function checkInput() {
    if(noteInput.value == ""){
        alert("Please enter your note");
    } else {
        addNote();
    }
}

function addNote() {
    const newNote = noteInput.value;
    notesArray.push(newNote);
    noteInput.value = "";
    saveNotes();
}

function saveNotes() {
    const notesString = JSON.stringify(notesArray);
    localStorage.setItem("notes", notesString);
    getNotes();
}

function getNotes() {
    const notesString = localStorage.getItem("notes");
    if(notesString == null){
        console.log("No notes found");
        zeroNotes.style.display = "block";
        notesDiv.style.display = "none";
    } else {
        notesArray = JSON.parse(notesString);
        if (notesArray.length > 0) {
            zeroNotes.style.display = "none";
            notesDiv.style.display = "block";
            showNotes();
        } else {
            zeroNotes.style.display = "block";
            notesDiv.style.display = "none";
        }
    }
}

function showNotes() {

    notesDiv.innerHTML = "";

    for (let index = 0; index < notesArray.length; index++) {
        const element = notesArray[index];
        
        const newDiv = document.createElement("div");

        const newP = document.createElement("p");
        newP.innerText = element;
        newDiv.appendChild(newP);

        const deleteButton = document.createElement("i");
        deleteButton.className = "bi bi-trash";
        deleteButton.onclick = function () {

            if (confirm("are you sure to delete note?") == true) {
                notesArray.splice(index, 1);
                saveNotes();
            }
            
        }
        newDiv.appendChild(deleteButton);

        notesDiv.appendChild(newDiv);
    }
}

getNotes();

async function signupUser() {
    
    signupFaild.style.display = "none";

    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/easynotes/signup?email=${signupEmail.value}&password=${signupPassword.value}&name=${signupName.value}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    const status = data.status;

    if (status == true) {


        alert("signup sucssesfuly")
                signupDivDiv.style.display = "none";
        detailsDiv.style.display = "flex";

    } else {
        signupEmail.style.display = "block";
    }
}

async function loginUser() {

    loginError.style.display = "none";

    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/easynotes/login?email=${loginEmail.value}&password=${loginPassword.value}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    const status = data.status;

    if (status == true) {

        const userName = data.name;
        const userId = data.id;

        localStorage.setItem("username", userName);
        localStorage.setItem("userid", userId);

        greetingText.innerText = `Welcome ${userName}`;

        loginDiv.style.display = "none";
        detailsDiv.style.display = "flex";
        
    } else {
        loginError.style.display = "block";
    }
    
}

function logoutUser() {
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    showHome();
}

async function uploadNotes() {
    
    const userId = localStorage.getItem("userid");
    const notesString = JSON.stringify(notesArray);

    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/easynotes/addnote?id=${userId}&notes=${notesString}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    const status = data.status;

    if(status == true){
        alert("Notes uploaded successfully");
    } else {
        alert("Notes upload failed!");
    }
}

async function downloadNotes() {
    
    const userId = localStorage.getItem("userid");

    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/easynotes/getnotes?id=${userId}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    const status = data.status;    

    if(status == true){
        const notesString = data.notes;
        notesArray = JSON.parse(notesString);
        detailsDiv.style.display = "none";
        saveNotes();
        alert("Notes downloaded successfully");
    } else {
        alert("Notes download failed");
    }
    
}