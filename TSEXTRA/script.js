"use strict";
let seconds = 0;
let tens = 0;
let appendTens = document.getElementById("tens");
let appentSeconds = document.getElementById("seconds");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let interval;
function startTimer() {
    tens++;
    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        appentSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
        appentSeconds.innerHTML = seconds;
    }
}
function buttonstart() {
    interval = setInterval(startTimer, 10);
}
function buttonstop() {
    clearInterval(interval);
}
function buttonreset() {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    appentSeconds.innerHTML = tens;
    appendTens.innerHTML = tens;
}
buttonStart.addEventListener("click", buttonstart);
buttonStop.addEventListener("click", buttonstop);
buttonReset.addEventListener("click", buttonreset);
//# sourceMappingURL=script.js.map