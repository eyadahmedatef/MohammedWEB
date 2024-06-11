var time = 0;
var start = false;
const watchDiv = document.getElementById("watchDiv");
const startButton = document.getElementById("startButton");


async function startTimer() {
    
    if (start == false) {

        start = true;

        startButton.style.cursor = "not-allowed";

        while (start == true) {
            time++;
            watchDiv.innerText = formatHours(time);
            watchDiv.style.animation = "timerAnimation 0.5s ease 0s infinite alternate forwards";
            await new Promise(r => setTimeout(r, 1000));
        }
    }
}

function pauseTimer() {
    start = false;   
    startButton.style.cursor = "pointer";
    watchDiv.style.animation = "";
}

function stopTimer() {
    pauseTimer();
    time = 0;
    startButton.style.cursor = "pointer";
    watchDiv.style.animation = "";
}

function restartTimer() {
    time = 0;
}

function formatTime(time) {
    if(time < 60) {
        return `00:${time}`;
    } else {
        const seconds = time%60;
        const minutes = Math.floor(time / 60);

        return `${minutes}:${seconds}`;
    }
}

function formatHours(seconds) {
    // Get the number of hours.
    const hours = Math.floor(seconds / 3600);

    // Get the number of remaining seconds.
    const remainingSeconds = seconds % 3600;

    const timeSeconds = seconds % 60;

    // Get the number of minutes.
    const minutes = Math.floor(remainingSeconds / 60);

    // Return the time in hours and minutes format.
    return `${hours}:${minutes}:${timeSeconds}`;
}