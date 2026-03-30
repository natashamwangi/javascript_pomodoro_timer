let time = 1500; // 25 minutes
let interval = null;

const display = document.getElementById("timer");

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = `${minutes}:${seconds}`;
}

// TRIGGERED UPON CLICKING THE START BUTTON
document.getElementById("start").addEventListener("click", () => {
    if (interval) return;

// changes the background color to green
    document.body.style.backgroundColor = "green"; 

    interval = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        }
    }, 1000);
});

// TRIGGERED UPON CLICKING THE STOP BUTTON
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;

// changes the background color to red
    document.body.style.backgroundColor = "red"; // 
});


// TRIGGERED UPON CLICKING THE RESET BUTTON
document.getElementById("reset").addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    time = 1500;
    updateDisplay();

// changes the background color to orange
    document.body.style.backgroundColor = "orange"; 
});

updateDisplay();