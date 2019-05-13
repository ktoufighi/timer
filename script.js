// we are going to create variables to query DOM for our hours, 
// mints, seconds and miliseconds.
var hours = document.getElementById('hours'),
    mints = document.getElementById('mints'),
    seconds = document.getElementById('seconds'),
    miliseconds = document.getElementById('miliseconds'),

// similarly we need query the DOM for buttons
    startBtn = document.getElementById('startBtn'),
    pauseBtn = document.getElementById('pauseBtn'),
    stopBtn = document.getElementById('stopBtn'),
    resetBtn = document.getElementById('resetBtn'),
    setTime;


var start = function(){
    setTime = Date.now();
};

if(startBtn) {
    startBtn.addEventListener('click', start)
};

