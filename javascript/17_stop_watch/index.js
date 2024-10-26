/*
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
console.log(isRunning);
console.log(!isRunning);

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        console.log(isRunning);
        console.log(!isRunning);
        timer = setInterval(update, 10);
        console.log(isRunning);
        console.log(!isRunning);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00:00";
}

function update(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
//    console.log(startTime, currentTime);
//    console.log(isRunning);

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
*/

/*
i=false;
function test(){
    if(!i){
        console.log(!i)
        timertest = setInterval(() => console.log(i), 10);  
        console.log(i);
        i=true;
    }
}

test();
*/

let timer;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

function start() {
    if (!isRunning) {
        console.log('Starting interval...');
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    } else {
        console.log('Interval already running.');
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
    console.log('Interval stopped.');
}

function update() {
    elapsedTime = Date.now() - startTime;
    console.log('Elapsed Time:', elapsedTime);  // Logs every 10ms
}

// Test the code
start(); // Starts the interval
setTimeout(() => {
    stop(); // Stops the interval after 2 seconds
}, 1000);