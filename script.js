// time
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;
let intervalId = null;


// time desplay
const display = document.getElementById('display');


// start/stop/reset
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn'); // New button element

function updateTime() {
  ms++;

  if (ms === 1000) {
    ms = 0;
    secs++;
  }

  if (secs === 60) {
    secs = 0;
    mins++;
  }

  if (mins === 60) {
    mins = 0;
    hrs++;
  }

  const formattedTime = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
  display.textContent = formattedTime;
}

// start button functionality
startBtn.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(updateTime, 1);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
});

// stop button functionality
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

// reset button functionality
resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  hrs = 0;
  mins = 0;
  secs = 0;
  ms = 0;
  display.textContent = '00:00:000';
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

