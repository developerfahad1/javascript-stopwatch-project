let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let hour = 0;
let display = document.getElementById('display');

function start() {
  clearInterval(timer);
  timer = setInterval(runStopwatch, 10);
}

function runStopwatch() {
  milliseconds++;
  if (milliseconds / 100 === 1) {
    milliseconds = 0;
    seconds++;
    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;
      if (minutes / 60 === 1){
        minutes = 0;
        hour++;
      }
    }
  }
  display.innerHTML = formatTime(hour) + ":" + formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

function formatTime(time) {
  return (time < 10 ? '0' : '') + time;
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  hour = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  display.innerHTML = '00:00:00:00';
}