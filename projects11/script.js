const ramadanSong = new Audio("https://naghma.naghma.mobi/uploads/songs/Ramadan/Wa7wy_Ya_Wa7wy.mp3");
const playBtn = document.getElementById("playBtn");
var playing = false;

const myName = document.getElementById("myName");
const friendName = document.getElementById("friendName");

const nameDiv = document.getElementById("nameDiv");
const cardDiv = document.getElementById("cardDiv");

const myNameSpan = document.getElementById("myNameSpan");
const friendSpan = document.getElementById("friendSpan");

function playSong() {
    if(playing == false){
        switchIcon();
        playing = true;
        ramadanSong.play();
    } else {
        switchIcon();
        playing = false;
        ramadanSong.pause();
    }
}

function switchIcon() {
    playBtn.classList.toggle("bi-play-circle-fill");
    playBtn.classList.toggle("bi-pause-circle-fill");
}

function showCard() {
    if(friendName.value == "") {
        alert("Please enter friend name");
    } else if(myName.value == "") {
        alert("Please enter your name");
    } else {
        myNameSpan.innerText = myName.value;
        friendSpan.innerText = friendName.value;
        nameDiv.style.display = "none";
        cardDiv.style.display = "block";
    }
}