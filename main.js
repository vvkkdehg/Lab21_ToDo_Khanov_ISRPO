const hoursCh = document.getElementById("hours");
const minutesMin = document.getElementById("minutes");
const secondsSec = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval = null;
let isRunning = false;

function updateDisplay() {
    hoursCh.textContent = hours.toString().padStart(2, "0");
    minutesMin.textContent = minutes.toString().padStart(2, "0");
    secondsSec.textContent = seconds.toString().padStart(2, "0");
}

function incrementTime() {
    seconds++;
    
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    
    updateDisplay();
}

function startTimer() {
    if (isRunning) return;
    
    isRunning = true;
    timerInterval = setInterval(incrementTime, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    
    isRunning = false;
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    
    hours = 0;
    minutes = 0;
    seconds = 0;
    
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();