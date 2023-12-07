const stopwatchTab = document.querySelector('.tab[data-tab="stopwatch"]');
const countdownTab = document.querySelector('.tab[data-tab="countdown"]');

const stopwatchContent = document.querySelector('.tab-content[data-tab="stopwatch"]');
const countdownContent = document.querySelector('.tab-content[data-tab="countdown"]');

const stopwatchTimeDisplay = document.getElementById('stopwatch-time');
const countdownTimeDisplay = document.getElementById('countdown-time');

const startStopwatchBtn = document.getElementById('start-stopwatch');
const stopStopwatchBtn = document.getElementById('stop-stopwatch');
const resetStopwatchBtn = document.getElementById('reset-stopwatch');

const startCountdownBtn = document.getElementById('start-countdown');
const stopCountdownBtn = document.getElementById('stop-countdown');
const setCountdownBtn = document.getElementById('set-countdown');

let stopwatchInterval;
let countdownInterval;

let stopwatchTime = 0;
let countdownTime = 0;

stopwatchTab.addEventListener('click', () => {
  stopwatchContent.style.display = 'block';
  countdownContent.style.display = 'none';

  stopwatchTab.classList.add('active');
  countdownTab.classList.remove('active');
});

countdownTab.addEventListener('click', () => {
  stopwatchContent.style.display = 'none';
  countdownContent.style.display = 'block';

  stopwatchTab.classList.remove('active');
  countdownTab.classList.add('active');
});

startStopwatchBtn.addEventListener('click', startStopwatch);
stopStopwatchBtn.addEventListener('click', stopStopwatch);
resetStopwatchBtn.addEventListener('click', resetStopwatch);

startCountdownBtn.addEventListener('click', startCountdown);
stopCountdownBtn.addEventListener('click', stopCountdown);




function startStopwatch() {
  stopStopwatch();
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    renderStopwatchTime();
  }, 1000);
  startStopwatchBtn.classList.add('active');
  stopStopwatchBtn.classList.remove('active');
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopStopwatchBtn.classList.add('active');
  startStopwatchBtn.classList.remove('active');
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchTime = 0;
  renderStopwatchTime();
}

function renderStopwatchTime() {
  const seconds = stopwatchTime % 60;
  const minutes = Math.floor(stopwatchTime / 60) % 60;
  const hours = Math.floor(stopwatchTime / 3600);

  stopwatchTimeDisplay.textContent = `${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  document.title = stopwatchTimeDisplay.textContent || countdownTimeDisplay.textContent;
}

function startCountdown() {
  setCountdown();
  stopCountdown();
  countdownInterval = setInterval(() => {
    countdownTime--;
    renderCountdownTime();
  }, 1000);
  startCountdownBtn.classList.add('active');
  stopCountdownBtn.classList.remove('active');
}

function stopCountdown() {
  clearInterval(countdownInterval);
  stopCountdownBtn.classList.add('active');
  startCountdownBtn.classList.remove('active');
}

function resetCountdown() {
  stopCountdown();
  countdownTime = 0;
  renderCountdownTime();
}

function setCountdown() {
    const countdownInput = countdownTimeDisplay.textContent.split(':');
    const hours = parseInt(countdownInput[0]) || 0;
    const minutes = parseInt(countdownInput[1]) || 0;
    const seconds = parseInt(countdownInput[2]) || 0;
  
    countdownTime = hours * 3600 + minutes * 60 + seconds;
    renderCountdownTime();
  }
  
  function renderCountdownTime() {
    const seconds = countdownTime % 60;
    const minutes = Math.floor(countdownTime / 60) % 60;
    const hours = Math.floor(countdownTime / 3600);
  
    countdownTimeDisplay.textContent = `${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  
    if (countdownTime <= 0) {
      resetCountdown();
      alert('Time is up!');
    }
    document.title = stopwatchTimeDisplay.textContent || countdownTimeDisplay.textContent;
  }